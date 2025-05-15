# ZUSTAND

Zustand is a small, fast, and scalable state management library for React. It provides a simple API to manage global and local state without the need for boilerplate code, making it an alternative to libraries like Redux.

## Zustand vs Redux

| Feature            | Zustand                              | Redux                                                                     |
| ------------------ | ------------------------------------ | ------------------------------------------------------------------------- |
| **Ease of Use**    | Minimal boilerplate, simple API      | Requires more boilerplate (e.g., actions, reducers)                       |
| **Performance**    | Optimized for minimal re-renders     | Can be optimized but may require additional effort                        |
| **Size**           | Lightweight and small bundle size    | Larger bundle size compared to Zustand                                    |
| **Learning Curve** | Easy to learn and implement          | Steeper learning curve due to complexity                                  |
| **Use Case**       | Ideal for small to medium-sized apps | Suitable for large-scale applications with complex state management needs |

## How to use

### install zustand

```jsx
npm i zustand
```

### Create a store file

```jsx
import { create } from "zustand";
const useStore = create((set) => ({
    // init state
    count: 0,

    // actions
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
}));
export default useStore;
```

### use the store in your component

```jsx
import useStore from './store/store'
const {count,increase,decrease} = useStore()
<h2>{count}</h2>
<button onClick={increase}>Increase</button>
<button onClick={decrease}>Decrease</button>
```

### use selective state usage 
instead of pulling every thing from store we can choose what we want from store
```jsx
const count = useStore((state) => state.count)
const increase = useStore((state) => state.increase)
```

## Slice pattern in zustand 
we should add each slice in another file and export them 
