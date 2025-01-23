## save components in a separate file 
* we can add all component in app.jsx but the best practice is to save each component in a separate file

## how to
1. make folder named components in src folder (src -> components)
2. make file that have the same name as the component name Header() -> Header.jsx
3. add component and related codes to it into the component file
4. export component 
```JS
export default function Header() {
  //header codes
}
```
5. import in app.jsx file 
```JS
import Header from './components/Header.jsx';
```