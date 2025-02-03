# Lifting State Up

## What is Lifting State Up?

Lifting state up is a concept in React where you move the state from a child component to a common parent component. This allows multiple child components to share and synchronize the state.

## Why Use Lifting State Up?

We use lifting state up to:
- Share state between multiple components.
- Keep the state in a single place for easier management.
- Avoid duplication of state and ensure consistency.

## Simple Example

Consider two components, `TemperatureInput` and `BoilingVerdict`. We want to share the temperature state between them.

### Before Lifting State Up

```jsx
function TemperatureInput() {
    const [temperature, setTemperature] = useState('');
    return (
        <input 
            value={temperature} 
            onChange={(e) => setTemperature(e.target.value)} 
        />
    );
}

function BoilingVerdict({ temperature }) {
    if (temperature >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}
```

### After Lifting State Up

```jsx
function Calculator() {
    const [temperature, setTemperature] = useState('');

    return (
        <div>
            <TemperatureInput 
                temperature={temperature} 
                onTemperatureChange={setTemperature} 
            />
            <BoilingVerdict temperature={temperature} />
        </div>
    );
}

function TemperatureInput({ temperature, onTemperatureChange }) {
    return (
        <input 
            value={temperature} 
            onChange={(e) => onTemperatureChange(e.target.value)} 
        />
    );
}

function BoilingVerdict({ temperature }) {
    if (temperature >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}
```

In this example, the `temperature` state is lifted up to the `Calculator` component, allowing both `TemperatureInput` and `BoilingVerdict` to share the same state.