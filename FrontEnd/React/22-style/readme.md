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