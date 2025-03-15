# Custom Hooks 

Custom Hooks in React allow you to encapsulate reusable logic, making your components cleaner and more maintainable. They are a powerful feature that can help you manage state, side effects, and other behaviors in a modular way.

---

## Rules of Hooks 

When working with Hooks, it's important to follow these rules to ensure proper functionality:

1. **Only call Hooks inside React functions**: Hooks should only be used inside functional components or other custom Hooks. Avoid using them in regular JavaScript functions.
2. **Call Hooks at the top level**: Do not call Hooks inside loops, conditions, or nested functions. This ensures that the order of Hooks remains consistent across renders.

---

## Why Use Custom Hooks? 

Custom Hooks provide several benefits:

- **Reusability**: Extract common logic into reusable functions.
- **Cleaner Code**: Reduce code duplication and improve readability.
- **Modularity**: Separate concerns by encapsulating logic in Hooks.
- **Easier Maintenance**: Update logic in one place without affecting multiple components.

---

## Custom Hooks vs Regular Functions 

| **Custom Hooks**                     | **Regular Functions**                  |
|--------------------------------------|----------------------------------------|
| Can use other Hooks (e.g., `useState`, `useEffect`). | Cannot use Hooks.                     |
| Encapsulate stateful logic.          | Used for stateless utility functions.  |
| Begin with the prefix `use`.         | No naming convention required.         |

Use custom Hooks when you need to manage state or side effects. Use regular functions for simple, stateless operations.

---

## Creating a Custom Hook 

Follow these steps to create a custom Hook:

### 1. Create a `hooks` Folder
Organize your custom Hooks by creating a `hooks` folder in the `src` directory (this is a common convention).

### 2. Create a Hook File
Create a JavaScript file named `useSomething.js`. The name should start with `use` to indicate that it is a Hook.

### 3. Define the Hook
Write a function that encapsulates your logic. Here's an example of a custom Hook for fetching data:

#### Example: Basic Fetch Hook
```jsx
import { useEffect } from "react";

export function useFetch() {
    useEffect(() => {
        async function fetchPlaces() {
            setIsFetching(true);
            try {
                const places = await fetchUserPlaces();
                setUserPlaces(places);
            } catch (error) {
                setError({ message: error.message || 'Failed to fetch user places.' });
            }
            setIsFetching(false);
        }
        fetchPlaces();
    }, []);
}
```

### 4. Manage State and Return Values
Enhance the Hook to manage state and return useful values:

#### Example: Advanced Fetch Hook
```jsx
import { useEffect, useState } from 'react';

// Custom Hook to fetch data
export function useFetch(fetchFn, initialValue) {
    const [isFetching, setIsFetching] = useState(false); // Fetching status
    const [error, setError] = useState(null); // Error state
    const [fetchedData, setFetchedData] = useState(initialValue); // Fetched data

    useEffect(() => {
        async function fetchData() {
            setIsFetching(true);
            try {
                const data = await fetchFn(); // Fetch data using the provided function
                setFetchedData(data);
            } catch (error) {
                setError({ message: error.message || 'Failed to fetch data.' });
            }
            setIsFetching(false);
        }

        fetchData();
    }, [fetchFn]);

    return {
        isFetching,
        fetchedData,
        setFetchedData, // Expose setter for fetched data
        error
    };
}
```

### 5. Import the Custom Hook
Import the Hook into your component:

```jsx
import { useFetch } from './hooks/useFetch.js';
```

### 6. Use the Custom Hook
Use the Hook in your component to manage state and side effects:

```jsx
const {
    isFetching,
    error,
    fetchedData: userPlaces,
    setFetchedData: setUserPlaces // Alias for setter
} = useFetch(fetchUserPlaces, []);
```

---

## Exposing Nested Functions from Custom Hooks

Custom Hooks are not limited to exposing state values. You can also expose state-updating functions or other utility functions. For example:

```jsx
setFetchedData: setUserPlaces
```

Each component using the Hook will have its own independent state. This ensures that the state in one component does not affect the state in another.

---

## Using a Custom Hook in Multiple Components

Custom Hooks can be reused across multiple components. Here's an example:

### `availablePlaces.jsx`
```jsx
// useFetch takes two arguments: 1. Fetch function, 2. Initial value
const {
    isFetching,
    error,
    fetchedData: availablePlaces,
} = useFetch(fetchSortedPlaces, []);
```

---

## Key Takeaways

- Custom Hooks allow you to encapsulate and reuse logic.
- Follow the rules of Hooks to avoid unexpected behavior.
- Use custom Hooks to manage state, side effects, and other behaviors in a modular way.
- Each component using a custom Hook has its own independent state.

By leveraging custom Hooks, you can write cleaner, more maintainable React code. Happy coding!
