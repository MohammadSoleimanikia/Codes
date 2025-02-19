# Debugging React Apps

## Using the Debugger in Chrome DevTools

To debug your React app using Chrome DevTools, follow these steps:

1. **Open DevTools**: Right-click on your React app in Chrome and select `Inspect` or press `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Opt+I` (Mac).
2. **Navigate to the Sources Panel**: Click on the `Sources` tab in DevTools.
3. **Set Breakpoints**: Find your source files in the left sidebar, open the desired file, and click on the line number where you want to set a breakpoint.
4. **Refresh Your App**: Reload your React app to hit the breakpoint.
5. **Debug**: Use the debugging controls (step over, step into, step out) to navigate through your code and inspect variables.

This will help you identify and fix issues in your React application efficiently.

## React strict mode 
React Strict Mode is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants. Strict Mode checks are run in development mode only; they do not impact the production build.

### Enabling Strict Mode

To enable Strict Mode, wrap your application or part of your application with the `StrictMode` component:

```jsx
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
```

## React Dev Tool :
* install from chrome web store
* in inspect section of chrome two tab added components and profiler

1. profiler: this is about finding and fixing performance issues 
2. component tab :
* it shows the component hierarchy 
* if click on each component we see info about that component events and props