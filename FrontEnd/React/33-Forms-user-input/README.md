# Working with Forms & User Input

## Challenges with Forms

### 1. Form Submission (Easy Part)
- Entered values can be managed via **state** (two-way binding).
- Alternatively, values can be extracted via **refs**.
- Or use `FormData` and native browser features.

### 2. Input Validation (Tricky Part)
- **Validate on every keystroke** → Errors may show too early.
- **Validate on lost focus** → Errors may persist too long.
- **Validate on form submission** → Errors may show too late.

---

## Form Submission Methods

### 1. Submit Form via Button Click Handler
1. Create an `onClick` event handler function:
  ```jsx
  function handleSubmit() {
     console.log('Form submitted');
  }
  ```
2. Add the event handler to the button:
  ```jsx
  <button className="button" onClick={handleSubmit}>Login</button>
  ```
  **Important**: By default, buttons inside a `<form>` submit the form and refresh the page. To prevent this, set `type="button"`:
  ```jsx
  <button type="button" className="button" onClick={handleSubmit}>Login</button>
  ```

### 2. Submit Form via `onSubmit` Event
1. Add an event handler that prevents the default form submission:
  ```jsx
  function handleSubmit(event) {
     event.preventDefault();
     console.log('Form submitted');
  }
  ```
2. Attach the handler to the `<form>` element:
  ```jsx
  <form onSubmit={handleSubmit}>
     {/* Input elements */}
     <button className="button">Login</button>
  </form>
  ```

---

## Managing & Retrieving User Input

### 1. Using State

#### a. One State Per Input
1. Define state variables:
  ```jsx
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  ```
2. Create a change handler:
  ```jsx
  function handleEmailChange(event) {
     setEnteredEmail(event.target.value);
  }
  ```
3. Bind the handler to the input field:
  ```jsx
  <input
     id="email"
     type="email"
     value={enteredEmail}
     onChange={handleEmailChange}
  />
  ```

#### b. One State for All Inputs (Generic Handler)
1. Define a single state object:
  ```jsx
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  ```
2. Create a generic change handler:
  ```jsx
  function handleInputChange(event) {
     const { name, value } = event.target;
     setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
     }));
  }
  ```
3. Use the handler in input fields:
  ```jsx
  <input
     name="email"
     type="email"
     value={formValues.email}
     onChange={handleInputChange}
  />
  ```

---

### 2. Using Refs
1. Create refs:
  ```jsx
  const emailRef = useRef();
  const passwordRef = useRef();
  ```
2. Attach refs to input fields:
  ```jsx
  <input ref={emailRef} id="email" type="email" />
  ```
3. Access values in the submit handler:
  ```jsx
  function handleSubmit(event) {
     event.preventDefault();
     const enteredEmail = emailRef.current.value;
     const enteredPassword = passwordRef.current.value;
     console.log(enteredEmail, enteredPassword);
  }
  ```
  **Cons**:
  - Resetting values is less intuitive: `emailRef.current.value = ""`.
  - Complex forms may require many refs.

---

### 3. Using `FormData` & Native Browser APIs
- `FormData` is a built-in JavaScript object for working with form data.
- It simplifies collecting inputs and sending them via `fetch()`.

#### Steps:
1. Create a `FormData` object:
  ```jsx
  const formData = new FormData(event.target);
  ```
  **Note**: Ensure all input elements have a `name` attribute.

2. Extract values:
  ```jsx
  const enteredEmail = formData.get('email');
  const enteredPassword = formData.get('password');
  ```

3. Alternative: Use `Object.fromEntries` to extract all values:
  ```jsx
  function handleSubmit(event) {
     event.preventDefault();
     const formData = new FormData(event.target);
     const data = Object.fromEntries(formData.entries());
     console.log(data);
  }
  ```

4. Handle multiple inputs with the same name (e.g., checkboxes):
  ```jsx
  function handleSubmit(event) {
     event.preventDefault();
     const formData = new FormData(event.target);
     const acquisitionChannels = formData.getAll('acquisition');
     const data = Object.fromEntries(formData.entries());
     data.acquisition = acquisitionChannels;
     console.log(data);
  }
  ```

---

## Resetting Forms

### 1. Reset with a Reset Button
Use a button with `type="reset"`:
```jsx
<button type="reset" className="button">Reset</button>
```

### 2. Reset Programmatically
#### a. If Using State:
```jsx
function handleSubmit(event) {
   event.preventDefault();
   console.log(formValues);
   setFormValues({ email: '', password: '' });
}
```

#### b. If Using Refs:
```jsx
function handleSubmit(event) {
   event.preventDefault();
   emailRef.current.value = '';
   passwordRef.current.value = '';
}
```

#### c. If Using `FormData` or `event.target`:
```jsx
function handleSubmit(event) {
   event.preventDefault();
   const formData = new FormData(event.target);
   const data = Object.fromEntries(formData.entries());
   console.log(data);
   event.target.reset();
}
```

---

This guide provides a comprehensive overview of handling forms in React, including submission, validation, and resetting techniques. Choose the approach that best fits your use case!
