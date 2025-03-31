## handling form submission

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
  function upVoteAction (){
    console.log('up vote')
  }
  function downVoteAction(){
    console.log('down vote')
  }
  return (
      <form className="votes">
      // use form action for each button
        <button formAction={upVoteAction}>
          up vote
        </button>
        <button formAction={downVoteAction}>
          down vote
        </button>
      </form>
  );
}
```

#### sending HTTP request via formAction
