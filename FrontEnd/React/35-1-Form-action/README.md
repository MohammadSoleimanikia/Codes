# Form action in react

this feature build into react 19 and is a alternative to handling form submission manually

## what are Form actions

- available in react 19+

## usage :

1. define the function

```jsx
// no need to pass event instead pass formData
// preventDefault is called by react no need to use it
function signupAction(formData) {
  // the argument should be equal to input name
  const enteredEmail = formData.get("email");
  console.log(enteredEmail);
}
```

2. use action prop in form element

```jsx
<form action={signupAction}>
  <div className="control">
    <label htmlFor="email">Email</label>
    <input id="email" type="email" name="email" />
  </div>
</form>
```

## adding validation checks

```jsx
function signupAction(formData) {
  const email = formData.get("email");
  // for multiple checkbox use getAll
  const acquisitionChannel = formData.getAll("acquisition");
  // other inputs ...

  let error = [];
  if (!isEmail(email)) {
    error.push("Invalid email address");
  }
  if (acquisitionChannel.length === 0) {
    error.push("please select at least one acquisition channel.");
  }
  // if we have error pass error
  if (error.length > 0) {
    return { errors };
  }
  // // form reset after submission 
  return { errors: null };
}
```

## useActionState : managing form-dependent state

in the previous section we produce error by return it as object but to use it we need to this hook
react 19+

### usage

1. import

```jsx
import { useActionState } from "react";
```

2. call after the action function

- first argument is action function
- second argument should be the initial value because until the form did not submitted we don't have the value
  it return three element
- current form state in our example first time is null then maybe errors added to this
- updated form action : its our form action with extra features and this is should added as value to form `action` prop
- pending element: which is true or false depending on whether the form is currently submitted or not (optional)

```jsx
// if we use form action in react we have to add prevFormState as first argument and formData as second argument
function signupAction(prevFormState, formData) {}

const [formState, formAction] = useActionState(signupAction, { errors: null });

<form action={formAction}></form>;
```

### improvement

now all of the values after submission are removed its better that if we have error the previous values stay in input fields

we add enteredValue property to the returned state object

```jsx
return {
  errors,
  enteredValues: {
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
    role,
    acquisitionChannel,
    terms,
  },
};
```

use this object into input section in `defaultValue` props

```jsx
// use question mark to ignore when entered value is undefined
<input id="email" type="email" name="email" defaultValue={formState.enteredValues?.email} />
// for select we add defaultValue to select not the options
<select id="role" name="role" defaultValue={formState.enteredValues?.role}>
    <option value="student">Student</option>
    <option value="teacher">Teacher</option>
</select>

// for the checkbox with equal name we use defaultCheck instead of default 
<div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
            defaultChecked={formState.enteredValues?.acquisitionChannel}
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
            defaultChecked={formState.enteredValues?.acquisitionChannel}
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>
```

## moving action function out of the component 
* if in the action function we not using any component specific data we can move the function out of the component 
```jsx
import { useActionState } from "react";
// action function out of the component
function signupAction(prevFormState, formData) {
//   codes for form action
}

export default function Signup() {
  
  const [formState, formAction] = useActionState(signupAction, {
    errors: null,
  });
  return (
    <form action={formAction}>
    // form codes
    </form>
  );
}

```