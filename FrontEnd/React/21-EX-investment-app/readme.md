# investment app (educational)

## Input component

### two way binding for inputs to save values in state and update the inputs based on that

1. define userInput state :

```js
const [userInput, setUserInput] = useState({
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
});
```

2. handler to update userInput object

- React does not detect mutations to objects or arrays directly.
- when we create a new object, its reference is different, so React knows to re-render.
- so each time we have array or object state we should make a new object or array to update state

```js
function handleChange(inputIdentifier, newValue) {
  setUserInput((prevUserInput) => {
    // return a new object with updated identifier
    return {
      ...prevUserInput,
      // We use [] to dynamically set object keys based on a variable's value instead of treating it as a literal string.
      [inputIdentifier]: newValue,
    };
  });
}
```

3. input with two way binding :

- way 1 : from input to state = use onChange
- way 2 :from state to input = use value

```js
<input
  type="number"
  required
  value={userInput.annualInvestment}
  onChange={(event) => handleChange("annualInvestment", event.target.value)}
/>
```

### lifting state up

- we need input data in Results component to use and calculate the results so we need to lift input data state to app component.

1. move state to app component

```js
const [userInput, setUserInput] = useState({
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
});
```

2. move state handler to app

```js
function handleChange(inputIdentifier, newValue) {
  setUserInput((prevUserInput) => {
    return {
      ...prevUserInput,
      [inputIdentifier]: newValue,
    };
  });
}
```

3. give state handler and userInput as props to input component

```jsx
<UserInput onChange={handleChange} userInput={userInput} />
```

### display result data into list

```jsx
{
  resultsData.map((yearData) => {
    const totalInterest =
      yearData.valueEndOfYear -
      yearData.annualInvestment * yearData.year -
      initialInvestment;
    const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

    return (
      <tr key={yearData.year}>
        <td>{yearData.year}</td>
        <td>{formatter.format(yearData.valueEndOfYear)}</td>
        <td>{formatter.format(yearData.interest)}</td>
        <td>{formatter.format(totalInterest)}</td>
        <td>{formatter.format(totalAmountInvested)}</td>
      </tr>
    );
  });
}
```
