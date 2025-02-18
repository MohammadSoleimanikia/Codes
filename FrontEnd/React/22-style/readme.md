# Styling in react 

## import style sheets 
* import stylesheets into JSX files and Vite inject them in rendered html page 
```js
import './header.css'
```
## Vanilla CSS disadvantages 
* CSS code is not scoped to component: CSS rules may clash across components (same CSS class name ...)

## inline styling :
* in Html we add style property and add styles like string to it but in react it different 

1. add dynamic value to style props {} 
2. inside of that we add an object {{}}
3. add styles as key value to this object 
4. for styles that contains two or more word we cant use dash(-) we write them in this way:
    1. use quotation mark: "background-color"
    2. use camel casing: backgroundColor

```jsx
<p style={{
    color:'red'
}}>
</p>
```

## dynamic & conditional styles 
* we can add style on certain condition 
1. add condition 
2. 

```js
const emailNotValid = submitted && !enteredEmail.includes('@');//condition
<input
    type="email"
    style={{
        backgroundColor : emailNotValid ? "red" : "white"
    }}
    onChange={(event) => handleInputChange('email', event.target.value)}
/>
```

* we can also add class name conditionally to element for styling :
```js
<input
    type="password"
    className={passwordNotValid ? 'invalid' : undefined}
/>
```
* if we want to always add a class to element but one class added dynamically we use this way :
```js
// label class is hardcoded but invalid class is added dynamically 
<label className={`label ${emailNotValid ? 'invalid' :''}`}>Email</label>
```

## CSS modules :
* allow us to write vanilla CSS code that are scoped
* CSS Modules allow you to write CSS that is scoped locally to the component, avoiding conflicts with other styles in the application.
 
* Usage:
 1. Create a CSS file with the `.module.css` extension. header.css --> header.module.css
 2. Import the CSS module in your React component. import  './header.css' --> import classes from './header.module.css'
 3. Apply the styles using the imported CSS module object. classes.paragraph
* we should use class selectors for most cases, but you can also use id selectors or other CSS selectors if needed. However, class selectors are generally preferred for their reusability and flexibility.
 
 Example:
 ```jsx
 import classes from './MyComponent.module.css';
 
 const header = () => {
   return (
      <p className={classes.paragraph}>A community of artists and art-lovers.</p>
   );
 };
 ```
 * after we the build process this p tag get a unique class name like this _paragraph_zc83l_55

## styled components
* Styled-components is a library for React and React Native that allows you to use component-level styles in your application.
* It uses tagged template literals to style your components.

### usage 
1. install package : npm install styled-components 
2. import in project : ```js import {styled} from 'styled-components' ```
3. use for element that we want .for div :styled.div

```js
// don't need to write css code with camel case we can write standard css codes
// it give us a styled component that we can use it 
// ps: name of variable should start with uppercase letter
const ControlContainer= styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`
```
4. we can also wrap it around other codes 

```js
<ControlContainer>
    <p>something</p>
</ControlContainer>
```

### styled components conditionally 
* we can receive props in styled components 
1. add props to component for styling conditionally . naming convention is that name is better to start with $ sign 
```js
<Label $invalid={emailNotValid}>Email</Label>
```
2. use props to style conditionally 
```js
const Label =styled.label`
  color:${(props)=>props.$invalid? '#f87171':'#6b7280'}
`
```
### using pseudo selector nested rules and media queries with styled components 

* nested rules: if we have an img tag inside Header we add that with & sign 
* for media query we also add & sign instead of our element
```js
const StyledHeader=styled.header`
    display: flex;
    // header img {} convert to bellow syntax
   & img {
   width:100%;
   }

   //media query
   @media (min-width: 768px) {
    & {
      margin-bottom: 4rem;
    }
  
    & h1 {
      font-size: 2.25rem;
    }
  }
`
```
* for pseudo selector we also add & sign instead of our element
```js 
const Button = styled.button`
  &:hover {
  background-color: #f0920e;
}
`
```