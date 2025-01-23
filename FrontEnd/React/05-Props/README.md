## Props in React

Props (short for properties) are a way to pass data from parent to child components in React. They make components reusable by allowing different values to be passed in, enabling the same component to be used in various contexts with different data.

### define props in component

1. add one argument to component function
2. use that argument like object in component

```Js
function CoreConcept(props){
  return (
    <li>
      <img src={props.img} alt="..." />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
```
### using Destructuring  in component definition:
we can use destructuring to ignore props 
```JS
function CoreConcept({img,title,description}){
  return (
    <li>
      <img src={img} alt="..." />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
```

### use component with props :

data

```JS
export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    image: jsxImg,
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: propsImg,
    title: 'Props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    image: stateImg,
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];
```

usage

```JS
<CoreConcept
    title={CORE_CONCEPTS[0].title}
    description={CORE_CONCEPTS[0].description}
    img={CORE_CONCEPTS[0].image}
  />
  <CoreConcept
    title={CORE_CONCEPTS[1].title}
    description={CORE_CONCEPTS[1].description}
    img={CORE_CONCEPTS[1].image}
  />
  <CoreConcept
    title={CORE_CONCEPTS[2].title}
    description={CORE_CONCEPTS[2].description}
    img={CORE_CONCEPTS[2].image}
  />
```
## using spread operator in component usage 
if our props and key in the data has the same value we can use spread operator
```JS
<CoreConcept {...CORE_CONCEPTS[0]}/>
<CoreConcept {...CORE_CONCEPTS[1]}/>
<CoreConcept {...CORE_CONCEPTS[3]}/>
<CoreConcept {...CORE_CONCEPTS[2]}/>
```

## default props value
we can use default value using object destructuring:
```JS
function Button({ caption, type = "submit" }) { 
  // caption has no default value, type has a default value of "submit"
}
```