## storing component style next to components

1. add styles in separate file in component folder Header.css for Header.jsx
2. import style in component
```JS
import './Header.css'
```
* optional: for structuring the project we can add component file and style file in a sub folder named Header

## important note: style will not scoped to the component only 
* if we add this style to Header.jsx it applied to all of the header tags in the app.jsx too.