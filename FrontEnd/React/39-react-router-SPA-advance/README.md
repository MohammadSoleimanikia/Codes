# React Router Advanced Guide

## Challenge / Exercise

### Tasks:

1. **Create Five New Page Components**:

    - `HomePage`: Displays a simple `<h1>` element.
    - `EventsPage`: Displays a list of dummy events.
    - `EventDetailPage`: Displays the ID of the selected event.
    - `NewEventPage`: Displays a form or placeholder for creating a new event.
    - `EditEventPage`: Displays a form or placeholder for editing an event.

2. **Set Up Routing and Route Definitions**:

    - `/` → `HomePage`
    - `/events` → `EventsPage`
    - `/events/<some-id>` → `EventDetailPage`
    - `/events/new` → `NewEventPage`
    - `/events/<some-id>/edit` → `EditEventPage`

3. **Implement a Root Layout**:

    - Add a `<MainNavigation>` component that appears above all page components.

4. **Add Navigation Links**:

    - Ensure the links in `<MainNavigation>` navigate to the correct routes.

5. **Highlight Active Links**:

    - Add an "active" class to links in `<MainNavigation>` when they are active.

6. **Display Dummy Events**:

    - On the `EventsPage`, render a list of dummy events.
    - Each event should include a link to its respective `EventDetailPage`.

7. **Show Event ID**:
    - On the `EventDetailPage`, display the ID of the selected event.

### Bonus:

-   **Nested Layout Route**:
    -   Add an `<EventNavigation>` component above all `/events...` page components.

---

## Data Fetching with `loader()`

The `loader` prop in a route definition acts as a "data fetcher" that runs before the component renders. It allows React Router (v6.4+) or Remix to:

1. Fetch or prepare data for the page.
2. Block navigation until the data is ready, preventing a half-baked UI.
3. Pass the fetched data to the component via the `useLoaderData` hook.

### Usage

1. **Define a Loader Function**:
   Add a `loader` property to the route definition.

    ```jsx
    {
        index: true,
        element: <EventsPage />,
        loader: async () => {
            const response = await fetch("http://localhost:8080/events");

            if (!response.ok) {
                throw new Error("Failed to fetch events.");
            }

            const resData = await response.json();
            return resData.events;
        },
    }
    ```

2. **Access Data in the Component**:
   Use the `useLoaderData` hook to access the fetched data.

    ```jsx
    import { useLoaderData } from "react-router-dom";

    function EventsPage() {
        const events = useLoaderData();
        return <EventsList events={events} />;
    }
    ```

    The `useLoaderData` hook can be used in the route component or any child components.

---

### Where to Store `loader()` Code

You can define the `loader` function in the same file as the component it supports to keep your `app.jsx` clean.

```jsx
// EventsPage.jsx
import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
    const events = useLoaderData();
    return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {
        throw new Error("Failed to fetch events.");
    }

    const resData = await response.json();
    return resData.events;
}
```

Then, import the loader in `app.jsx`:

```jsx
import { loader as eventsLoader } from "./pages/EventsPage";

{
    index: true,
    element: <EventsPage />,
    loader: eventsLoader,
}
```

---

### When Are `loader()` Functions Executed?

The `loader` function is executed as soon as navigation begins. React Router waits for the data to be fetched before rendering the component.

To handle the loading state, React provides the `useNavigation` hook.

### Using `useNavigation`

The `useNavigation` hook helps track the navigation state, such as when a route is waiting for data to load.

```jsx
import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function RootLayout() {
    const navigation = useNavigation();

    return (
        <>
            <MainNavigation />
            <main>
                {navigation.state === "loading" && <p>Loading...</p>}
                <Outlet />
            </main>
        </>
    );
}
```

---

### Returning a Response Object in `loader()`

Instead of returning raw data, you can return a `Response` object. React Router will handle parsing the response automatically.

```jsx
// EventsPage.jsx
import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
    const data = useLoaderData();
    const events = data.events;

    return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {
        throw new Error("Failed to fetch events.");
    }

    return response; // React Router will handle response.json()
}
```

---

**important** we can add anything in loader function but we can not add `react hooks` in loader function.

### Error handling with custom errors

#### return an object with error

send an object with an error to the component

```jsx
import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

function EventsPage() {
    const data = useLoaderData();
    const events = data.events;
    if (data.isError) {
        // if we have error prop in our response object
        return <h1>{data.message}</h1>;
    }
    return (
        <>
            <EventsList events={events} />
        </>
    );
}

export default EventsPage;
export async function loader() {
    const response = await fetch("http://localhost:8080/events");
    // handle Error
    if (!response.ok) {
        return { isError: true, message: "Could not fetch event" };
    } else {
        return response;
    }
}
```

#### throw an error (better way)

if we throw an error react render the closest error element

1. make an error page

```jsx
export default function ErrorPage() {
    return <h1>An error occurred</h1>;
}
```

2. include it in route Definition.

```jsx
{
            path: "/",
            element: <RootLayout />,
            // error element
            errorElement:<ErrorPage/>,
            children: [/*child routes*/],
}
```

this error element displayed when:

-   a none existed route used
-   a error thrown in loader function

3. throw error in loader

```jsx
if (!response.ok) {
    throw { message: "Could not fetch the events." };
}
```

##### extracting Error data & throwing responses

1. change the error page:

```jsx
export default function ErrorPage() {
    return (
        <PageContent title="An error occurred!">
            <p>Something went wrong!</p>
        </PageContent>
    );
}
```

2. differentiate between 404 Error and other errors
   instead of throwing object we create a new Response

```jsx
if (!response.ok) {
    // constructing the error response manually
    throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
        status: 500,
    });
}
```

3. import `useRouteError` in error component

```jsx
import { useRouteError } from "react-router-dom";
import PageContent from "./PageContent";
import MainNavigation from "../components/MainNavigation";
export default function ErrorPage() {
    // using this hook to extract the error message and status
    const error = useRouteError();
    // we should use Response for throwing error because that gets us status property.
    // set default error message
    let title = "An error occurred!";
    let message = "Something went wrong!";
    // use status code to change the message
    if (error.status === 500) {
        message = JSON.parse(error.data).message;
    }
    if (error.status === 404) {
        title = "Not found";
        message = "Could not find resource or page";
    }
    return (
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    );
}
```

### dynamic Routes and loader();

1. use dynamic link
   in eventItem

```jsx
<Link to={event.id}>
```

2. create loader in the eventDetail page

```jsx
// loader function takes two argument
export async function loader({ request, params }) {
    // we can use params without using the useParams
    // use the param that used in the route definition
    const id = params.id;
    const response = await fetch(`http://localhost:8080/events/${id}`);
    if (!response.ok) {
        // throw error
    } else {
        return response;
    }
}
```

3. register the loader to the route

```jsx
import { loader as eventDetailLoader } from "./pages/EventDetailPage";
{ path: ":id", element: <EventDetailPage /> ,loader:eventDetailLoader },
```

4. use data in detail page with `useLoaderData`

```jsx
import { useLoaderData } from "react-router-dom";
const data = useLoaderData();
return <EventItem event={data.event} />;
```

### The useRouteLoaderData() Hook and accessing Data From Other Routes

for example when we are in detail page if we click on edit button it takes us to the edit page

1. use link in eventItem

```jsx
<Link to="edit">Edit</Link>
```

-   now we need to fetch the event not only on the event detail page but also in the edit event page

2. give data to two element by creating a route parent
   before

```jsx
{
            path: "/",
            element: <RootLayout />,
            errorElement:<ErrorPage/>,
            children: [
                { index: true, element: <HomePage /> },
                {
                    path: "events",
                    element: <EventsRootLayout />,
                    children: [
                        {
                            index: true,
                            element: <EventsPage />,
                            loader:eventLoader
                        },
                        // add these routes to on parent route
                        { path: ":id", element: <EventDetailPage /> ,loader:eventDetailLoader },
                        { path: "new", element: <NewEventPage /> },
                        { path: ":id/edit", element: <EditEventPage /> },
                    ],
                },
            ],
        },
```

after

```jsx
{path:':id',loader:eventDetailLoader,children:[
    { index:true, element: <EventDetailPage />  },
    { path: ":id/edit", element: <EditEventPage /> },
]},
```

**note**: we have access to the loader data in current component or any children of that 3. use data in the edit page

```jsx
import { useLoaderData } from "react-router-dom";
export default function EditEventPage() {
    const data = useLoaderData();
    const event = data.event;
    return <EventForm event={event} />;
}
```

**Error**: with this way get error in both edit and detail page

-   the reason is that by default when we using `useLoaderData` is searches for the closest available loader data that is the detail page and the edit page we want to use parent loader

4. using parent loader in components

    1. add id to parent route definition

    ```jsx
    {
        path: ":id",
        id:'event-detail',
        loader: eventDetailLoader,
        children: [
            { index: true, element: <EventDetailPage /> },
            {
                <!-- path is relative to parent -->
                path: "edit",
                element: <EditEventPage />,
            },
        ],
    },
    ```

    2. instead of `useLoaderData` we use `useRouteLoaderData`.it takes a route id as argument

    ```jsx
    import { useRouteLoaderData } from "react-router-dom";
    const data = useRouteLoaderData("event-detail");
    ```

### data submitting with action()

just like the loader function we can add actions to send data

**Usage**

1. like loader add action prop to route
   add the action definition where we inside of the component `newEvent`
   to access data in action we use destructing in action arguments({request,params})

```jsx
import { redirect } from "react-router-dom";

import EventForm from "../components/EventForm";
export default function NewEventPage() {
    return <EventForm />;
}

export async function action({ request, params }) {
    // get data from request argument
    const data = await request.formData();
    const eventData = {
        title: data.get("title"),
        image: data.get("image"),
        date: data.get("date"),
        description: data.get("description"),
    };
    const response = await fetch("http://localhost:8080/events", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
    });
    if (!response.ok) {
        // handle Error
    }
    // use redirect that after submission react redirects us to event page.
    return redirect("/events");
}
```

2. change form element with Form component that provided by react-router-dom
   this form omit the browser request to backend and give the request to the action \* add method:'post' to the form
   before

```jsx
import { Form } from "react-router-dom";

<Form method="post" className={classes.form}>
    <p>
        <label htmlFor="title">Title</label>
        <input
            id="title"
            type="text"
            // we access the data by the name so make sure you add rhe name property
            name="title"
            required
            defaultValue={event ? event.title : ""}
        />
    </p>
    </div>
</Form>;
```

4. add actions into route

```jsx
{ path: "new", element: <NewEventPage />,action:newEventAction },
```

### submitting data programmatically with useSubmit hook (deleting the event)

if we want to change the action function from current route to another route we set the action prop in Form to that route

```jsx
<Form method="post" action='/another-route-path' className={classes.form}>
```

ex: we add a delete button in eventItem and add an action to eventDetailPage so how we trigger this action when we click on this button

#### method #1

we could wrap this button with a Form component but in this case we cant use delete handler in the eventItem

#### method #2 trigger the action programmatically

1. import useSubmit from react-router-dom

```jsx
import { useSubmit } from "react-router-dom";
```

2. using `useSubmit`

```jsx
function EventItem({ event }) {
    const submit = useSubmit();
    function startDeleteHandler() {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            //takes two arguments
            // #1 : the data we want to submit that later automatically wrapped into a formData object
            // #2 : add same value we could set on form like method,action and etc
            submit(null, { method: "delete" });
        }
    }

    return; //some jsx
}
```

### updating UI state based on the submission status (useNavigation)

use this hook in eventForm

```jsx
import { useNavigation } from "react-router-dom";
const navigation=useNavigation();
// with this we can findOut what the current state of the currently active transition
const isSubmitting=navigation.state==='submitting'
// using the submitting state in UI
<button disabled={isSubmitting}>{isSubmitting ?'Submitting':'Save'}</button>
```

### Validating User input & Outputting validation error.

we should always have server side validation because client side validation can disabled with dev tools

#### Show validation error from backend into the front end.

-   in backend we sending back an error respond with status code 422 if we found some validation error.

1. in newEvent page in action function we check if we have error from backend

```jsx
if (response.status === 422) {
    return response;
}
```

we return this response in action: 2. go into eventForm and use the action data with `useActionData`

```jsx
const data = useActionData();
{
    data && data.errors && (
        <ul>
            {Object.values(data.errors).map((err) => (
                <li key={err}>{err}</li>
            ))}
        </ul>
    );
}
```

### reusing Actions via Request Methods

for adding new event and editing an event we use almost same kind of request. now we want to reuse the request for both of these routes

1. cut the code from newEvent and paste it into EventForm component (we can add it any where we want)
2. update the action function so we can add a new event also update existing event
    - also change the Form component to get method dynamically.

```jsx
// set this from new and edit event
<Form method={method} className={classes.form}>
```

```jsx
// use the method in action
const method = request.method;

export async function action({ request, params }) {
    // get method
    const method = request.method;
    const data = await request.formData();

    const eventData = {
        // get data
    };
    // set url dynamically
    let url = "http://localhost:8080/events";
    if (method === "patch") {
        const id = params.id;
        url = "http://localhost:8080/events/" + id;
    }
    const response = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
    });
    if (!response.ok) {
        //  handle error
    }
}
```

3. use action in routes

```jsx
import { action as manipulateEventAction } from "./components/EventForm";
{
    path: "edit",
    element: <EditEventPage />,
    action: manipulateEventAction,
},

{
    path: "new",
    element: <NewEventPage />,
    action: manipulateEventAction,
},
```

### useFetcher()

in some cases we use one component in multiple pages like `newsletter subscription` when we submit something in this component we use the action of the current route this is ok until we submit the information in the relative route (newsletter page)
if we do this in another page it uses the current action.
for ex we add subscription to header and it displayed in all pages
now the problem is that when we are in another page how to use the relative action for that component.

one solution is that we set action on Form component to use another action but it changes the route from the current route to another we have to stop this that can be done by useFetcher

```jsx
// wrong way with using Form and action
<Form action="/newsletter" method="post" className={classes.newsletter}>
    <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
    />
    <button>Sign up</button>
</Form>
```

#### use `useFetcher` hook to solve this issue

we use useFetcher to use action or loader without transition

1. import the hook into the `newsletterSignup`

```jsx
import { useFetcher } from "react-router-dom";
```

2. use Form component in useFetcher that doesn't change the route;

```jsx
function NewsletterSignup() {
    const fetcher = useFetcher();
    return (
        <fetcher.Form
            action="/newsletter"
            method="post"
            className={classes.newsletter}
        >
            // Form data
        </fetcher.Form>
    );
}
```

this form submitted but stayed in the current route
we can also use loader component

#### we can use fetcher to update UI based on form state

```jsx
const fetcher = useFetcher();
const { data, state } = fetcher;
useEffect(() => {
    if (state === "idle" && data && data.message) {
        window.alert(data.message);
    }
}, [state, data]);
```

## deferring Data fetching with defer()
when the data takes some time to load it better to load some parts of the page 
some time we may show loader indicator with use navigate but here we want to show some parts of the page .
for example we want to show the event navigation
