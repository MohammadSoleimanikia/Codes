# Handling Form Submission

## Form Submission Function

The `shareOpinionAction` function handles form submission, including validation and error handling.

```jsx
function shareOpinionAction(prevFormState, formData) {
  const username = formData.get("userName");
  const title = formData.get("title");
  const body = formData.get("body");

  // Validate input
  let errors = [];
  if (title.trim().length < 5) {
    errors.push("Title should be at least 5 characters long");
  }

  // Return errors if validation fails
  if (errors.length > 0) {
    return {
      errors,
      enteredValues: { title, body, username },
    };
  }

  // Proceed with submission if no errors
  return { errors: null };
}
```

### Pre-Fill Inputs with Form Data

Use `defaultValue` to populate input fields with previously entered values.

```jsx
<input
  type="text"
  id="userName"
  name="userName"
  defaultValue={formState.enteredValues?.username}
/>
```

### Display Errors

Render errors as a list if they exist.

```jsx
{
  formState.errors && (
    <ul className="errors">
      {formState.errors.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  );
}
```

---

## Working with Asynchronous Form Actions

### Submitting Data to the Backend

Use asynchronous functions to handle form submission and update the backend.

```jsx
import { OpinionsContext } from "../store/opinions-context";
import { use } from "react";

const { addOpinion } = use(OpinionsContext);

async function shareOpinionAction(prevFormState, formData) {
  const userName = formData.get("userName");
  const title = formData.get("title");
  const body = formData.get("body");

  await addOpinion({ title, body, userName });
  return { errors: null };
}
```

---

## Updating the UI with `useFormStatus()`

### Disabling Buttons During Submission

Use `useFormStatus` to manage loading states and disable buttons while the form is submitting.

```jsx
import { useFormStatus } from "react-dom";

export default function Submit() {
  const { pending } = useFormStatus();
  return (
    <p className="actions">
      <button type="submit" disabled={pending}>
        {pending ? "Submitting" : "Submit"}
      </button>
    </p>
  );
}
```

Example usage:

```jsx
<form>
  <Submit />
</form>
```

---

## Registering Multiple Form Actions

### Handling Multiple Actions in a Single Form

Assign different `formAction` handlers to buttons within the same form.

```jsx
export function Opinion() {
  function upVoteAction() {
    console.log("Upvote");
  }
  function downVoteAction() {
    console.log("Downvote");
  }

  return (
    <form className="votes">
      <button formAction={upVoteAction}>Upvote</button>
      <button formAction={downVoteAction}>Downvote</button>
    </form>
  );
}
```

---

## Sending HTTP Requests via `formAction`

### Example: Upvoting an Opinion

#### `opinion.jsx`

```jsx
async function upvoteAction() {
  await upvoteOpinion(id);
}

<button
  formAction={upvoteAction}
  disabled={upvotePending || downvotePending}
>
  Upvote
</button>
```

#### `opinionContext.jsx`

```jsx
async function upvoteOpinion(id) {
  const response = await fetch(`http://localhost:3000/opinions/${id}/upvote`, {
    method: "POST",
  });

  if (!response.ok) return;

  setOpinions((prevOpinions) =>
    prevOpinions.map((opinion) =>
      opinion.id === id ? { ...opinion, votes: opinion.votes + 1 } : opinion
    )
  );
}
```

---

## Optimistic Updates with `useOptimistic`

### Temporarily Update UI During Submission

Use `useOptimistic` to provide a temporary value while waiting for the backend response.

#### Import and Setup

```jsx
import { useOptimistic } from "react";

const [optimisticVotes, setVotesOptimistically] = useOptimistic(
  votes,
  (prevVotes) => (mode === "up" ? prevVotes + 1 : prevVotes - 1)
);
```

#### Example Usage in Form Action

```jsx
async function upvoteAction() {
  setVotesOptimistically("up");
  await upvoteOpinion(id);
}

<span>{optimisticVotes}</span>
```

If an error occurs, the UI will revert to the previous value after submission.
# handling form submission

form submission function

```jsx
function shareOpinionAction(prevFormState, formData) {
  //get user data from
  const username = formData.get("userName");
  // handle errors
  let errors = [];
  if (title.trim().length < 5) {
    errors.push("title should be at least 5 character long");
  }
  // return error if we have error
  if (errors.length > 0) {
    return {
      errors,
      // send data to re entered in Input field
      enteredValues: {
        title,
        body,
        username,
      },
    };
  }
  // submit to backend if we don't have error
  return { errors: null };
}
```

use form data to fill inputs

```jsx
<input
  type="text"
  id="userName"
  name="userName"
  //   if existed enteredValues use username in it
  defaultValue={formState.enteredValues?.username}
/>
```

use errors

```jsx
{
  // if we have error show them as list
  formState.errors && (
    <ul className="errors">
      {formState.errors.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  );
}
```

## working with asynchronous Form Actions

- submit data to backend if validation is ok

### adding opinion with HTTP req post

```jsx
// import context
import { OpinionsContext } from "../store/opinions-context";
// use context
import { use } from "react";
const { addOpinion } = use(OpinionsContext);
// submit opinion
async function shareOpinionAction(prevFormState, formData) {
  const userName = formData.get("userName");
  const title = formData.get("title");
  const body = formData.get("body");

  // submit to backend
  await addOpinion({ title, body, userName });
  return { errors: null };
}
```

### updating the UI with useFormStatus()

Helps in disabling buttons or showing loading states while the form is submitting.

- in this example we want to when waiting to submit the form the `submit` button disabled

#### method #1 using pending (third in returning array of useActionState)

if the form is currently being submitted pending will be true and else will be false

```jsx
const [formState, formAction, pending] = useActionState(shareOpinionAction, {
  errors: null,
});
```

#### method #2 useFormStatus

- import from react-dom
- useFormStatus must be used inside a component that is within a <form> element.
- this hook give us the object that have this keys : pending , data , method ,action

```jsx
import { useFormStatus } from "react-dom";
export default function Submit() {
  const { pending } = useFormStatus();
  return (
    <p className="actions">
      // disable if pending is true
      <button type="submit" disabled={pending}>
        {pending ? "Submitting" : "Submit"}
      </button>
    </p>
  );
}
```

now we have a reusable submit button that we use in the new opinion for submission

```jsx
<form>
  <Submit />
</form>
```

### register multiple form action

in opinion component we have a form with two button one for upVoting and one for downVoting
so we should use two form action for one form
the form action function can actually not just be set as values for the action prompt of the form.
we can add `formAction` props to the buttons inside of the form

```jsx
export function Opinion(/*props*/) {
  function upVoteAction() {
    console.log("up vote");
  }
  function downVoteAction() {
    console.log("down vote");
  }
  return (
    <form className="votes">
      // use form action for each button
      <button formAction={upVoteAction}>up vote</button>
      <button formAction={downVoteAction}>down vote</button>
    </form>
  );
}
```

#### sending HTTP request via formAction

opinion.jsx

```jsx
 async function upvoteAction() {
    await upvoteOpinion(id);
  }

<button
formAction={upvoteFormAction}
disabled={upvotePending || downvotePending} >

```

opinionContext.jsx

```jsx
async function upvoteOpinion(id) {
  const response = await fetch(
    "http://localhost:3000/opinions/" + id + "/upvote",
    {
      method: "POST",
    }
  );
  if (!response.ok) {
    return;
  }
  setOpinions((prevOpinions) => {
    return prevOpinions.map((opinion) => {
      if (opinion.id === id) {
        return { ...opinion, votes: opinion.votes + 1 };
      }
      return opinion;
    });
  });
}
```

#### disable vote btn in pending state with useActionState

```jsx
const [downvoteFormState, downvoteFormAction, downvotePending] =
  useActionState(downvoteAction);
  <button
          formAction={downvoteFormAction}
          disabled={upvotePending || downvotePending}
        >
```

#### adding optimistic updating for vote btn with useOptimistic hook 
when we press on vote we have to wait to vote number goes up 
the idea:gave a temporary value whilst the form is being submitted 
1. import 
```jsx
import {useOptimistic}from "react"
```
2. call the hook: 
  1. the first input value is a value that should eventually updated (votes)
  2. second input is a function that invoced by the react 
    1. first input is the previous value of first argument (previous vote)
    2. the second input is mode that choose by us 
```jsx
useOptimistic(votes,(prevVotes)=>mode ==='up'? prevVotes+1 :prevVotes-1)
```
return values are array like useState  the first value is the optimistic votes 
```jsx
const [optimisticVotes,setVotesOptimistically]=  useOptimistic(votes,(prevVotes)=>mode ==='up'? prevVotes+1 :prevVotes-1)
```

this setVoteOptimistically can be called in nay form action of your choice (it should be called inside of a form action)
because use optimistic meant to be used in conjunction with form action 

3. used the function in form action 
```jsx
  async function upvoteAction() {
    setVotesOptimistically('up')
    await upvoteOpinion(id);
  }
  <span>{optimisticVotes}</span>
```

if we encounter an error we still get the higher or lower vote but after form submission the previous value is showed .

