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
    - `/events/:id` → `EventDetailPage`
    - `/events/new` → `NewEventPage`
    - `/events/:id/edit` → `EditEventPage`

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

- **Nested Layout Route**:
    - Add an `<EventNavigation>` component above all `/events...` page components.

---

## Data Fetching with `loader()`

The `loader` prop in a route definition acts as a "data fetcher" that runs before the component renders. It allows React Router (v6.4+) to:

1. Fetch or prepare data for the page.
2. Block navigation until the data is ready, preventing a half-baked UI.
3. Pass the fetched data to the component via the `useLoaderData` hook.

### Usage

1. **Define a Loader Function**:

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

    ```jsx
    import { useLoaderData } from "react-router-dom";

    function EventsPage() {
        const events = useLoaderData();
        return <EventsList events={events} />;
    }
    ```

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

### Error Handling with Custom Errors

#### Returning an Error Object

```jsx
export async function loader() {
    const response = await fetch("http://localhost:8080/events");
    if (!response.ok) {
        return { isError: true, message: "Could not fetch events." };
    }
    return response;
}
```

#### Throwing an Error (Recommended)

1. Create an error page:

    ```jsx
    export default function ErrorPage() {
        return <h1>An error occurred</h1>;
    }
    ```

2. Add it to the route definition:

    ```jsx
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [/* child routes */],
    }
    ```

3. Throw an error in the loader:

    ```jsx
    if (!response.ok) {
        throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
            status: 500,
        });
    }
    ```

4. Extract error data in the error page:

    ```jsx
    import { useRouteError } from "react-router-dom";

    export default function ErrorPage() {
        const error = useRouteError();
        let title = "An error occurred!";
        let message = "Something went wrong!";

        if (error.status === 500) {
            message = JSON.parse(error.data).message;
        } else if (error.status === 404) {
            title = "Not Found";
            message = "Could not find the resource or page.";
        }

        return (
            <div>
                <h1>{title}</h1>
                <p>{message}</p>
            </div>
        );
    }
    ```

---

### Dynamic Routes and `loader()`

1. Use dynamic links:

    ```jsx
    <Link to={event.id}>View Details</Link>
    ```

2. Create a loader for the `EventDetailPage`:

    ```jsx
    export async function loader({ params }) {
        const response = await fetch(`http://localhost:8080/events/${params.id}`);
        if (!response.ok) {
            throw new Response("Could not fetch event.", { status: 500 });
        }
        return response;
    }
    ```

3. Register the loader in the route:

    ```jsx
    {
        path: ":id",
        element: <EventDetailPage />,
        loader: eventDetailLoader,
    }
    ```

4. Use the data in the component:

    ```jsx
    import { useLoaderData } from "react-router-dom";

    function EventDetailPage() {
        const event = useLoaderData();
        return <EventItem event={event} />;
    }
    ```

---

### Submitting Data with `action()`

1. Define an action:

    ```jsx
    import { redirect } from "react-router-dom";

    export async function action({ request }) {
        const data = await request.formData();
        const eventData = {
            title: data.get("title"),
            image: data.get("image"),
            date: data.get("date"),
            description: data.get("description"),
        };

        const response = await fetch("http://localhost:8080/events", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(eventData),
        });

        if (!response.ok) {
            throw new Error("Failed to save event.");
        }

        return redirect("/events");
    }
    ```

2. Use the `Form` component:

    ```jsx
    import { Form } from "react-router-dom";

    <Form method="post">
        <input type="text" name="title" required />
        <button type="submit">Save</button>
    </Form>
    ```

3. Add the action to the route:

    ```jsx
    {
        path: "new",
        element: <NewEventPage />,
        action: newEventAction,
    }
    ```

---

### Programmatic Submissions with `useSubmit`

1. Import `useSubmit`:

    ```jsx
    import { useSubmit } from "react-router-dom";
    ```

2. Use it in a handler:

    ```jsx
    function EventItem({ event }) {
        const submit = useSubmit();

        function deleteHandler() {
            const confirmDelete = window.confirm("Are you sure?");
            if (confirmDelete) {
                submit(null, { method: "delete" });
            }
        }

        return <button onClick={deleteHandler}>Delete</button>;
    }
    ```

---

### Validating User Input

1. Return validation errors from the action:

    ```jsx
    if (response.status === 422) {
        return response;
    }
    ```

2. Use `useActionData` to display errors:

    ```jsx
    import { useActionData } from "react-router-dom";

    const errors = useActionData();

    {errors && (
        <ul>
            {Object.values(errors).map((err) => (
                <li key={err}>{err}</li>
            ))}
        </ul>
    )}
    ```

---

### Reusing Actions for Multiple Routes

1. Define a reusable action:

    ```jsx
    export async function action({ request, params }) {
        const method = request.method;
        const data = await request.formData();
        const eventData = {
            title: data.get("title"),
            image: data.get("image"),
            date: data.get("date"),
            description: data.get("description"),
        };

        const url = method === "PATCH"
            ? `http://localhost:8080/events/${params.id}`
            : "http://localhost:8080/events";

        const response = await fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(eventData),
        });

        if (!response.ok) {
            throw new Error("Failed to save event.");
        }

        return redirect("/events");
    }
    ```

2. Use the action in multiple routes:

    ```jsx
    {
        path: "new",
        element: <NewEventPage />,
        action: manipulateEventAction,
    },
    {
        path: ":id/edit",
        element: <EditEventPage />,
        action: manipulateEventAction,
    }
    ```

---

### Using `useFetcher`

1. Import `useFetcher`:

    ```jsx
    import { useFetcher } from "react-router-dom";
    ```

2. Use it in a component:

    ```jsx
    function NewsletterSignup() {
        const fetcher = useFetcher();

        return (
            <fetcher.Form action="/newsletter" method="post">
                <input type="email" name="email" required />
                <button type="submit">Subscribe</button>
            </fetcher.Form>
        );
    }
    ```

---

### Deferring Data Fetching with `defer()`

Use `defer()` to load parts of the page while fetching data in the background.

```jsx
import { defer } from "react-router-dom";

export async function loader() {
    const eventsPromise = fetch("http://localhost:8080/events").then((res) =>
        res.json()
    );

    return defer({
        events: eventsPromise,
    });
}
```

In the component:

```jsx
import { useLoaderData, Await } from "react-router-dom";

function EventsPage() {
    const { events } = useLoaderData();

    return (
        <Suspense fallback={<p>Loading events...</p>}>
            <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents} />}
            </Await>
        </Suspense>
    );
}
```

