# Forwarding Props (Proxy Props) in React

## Introduction

Forwarding props, also known as proxy props, is a pattern in React where a component passes all of its received props to a child component. This is useful for creating higher-order components (HOCs) or when you want to wrap a component without altering its behavior.

## Why We Need Forwarding Props

1. **Reusability**: By forwarding props, you can create reusable components that can be easily wrapped and extended without modifying the original component.
2. **Abstraction**: It allows you to abstract away certain functionalities into higher-order components, making your codebase cleaner and more maintainable.
3. **Composition**: Forwarding props enables better composition of components, allowing you to build complex UIs from simple, smaller components.

## Example

Here is a simple example of forwarding props in a React component:
:both examples and core concepts components are have same structure (section and h2)
```jsx
<section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        //some codes
      </ul>
</section>

//examples
<section id="examples">
    <h2>examples</h2>
    <menu> 
        //some codes
    </menu>
    {tabContent}
</section>
```
* if we want to make another component with this behavior we should make the HOC with this section (wrapper component) like this 
1. Section component 
```JS
export default function Section ({title , children}){
    return (
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    )
}
```
2. usage 
```JS
import Section from './Section.jsx';
export default function CoreConcepts() {
  return (
    <Section title={'Core Concepts'}>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
}
```
3. the problem is when we want to add default properties of section like id and className we should add them manually as props into component for fixing this so we don't have to add these props manually to component we use proxy props or forwarding props 

## forwarding props usage 

1. usage : using rest operator 
```JS
export default function Section ({title , children,...props}){
    return (
        // with rest operator all of the properties assigned to the section(id,class, ...)
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}
```

### another example 

1. before 
```js
//component 
export default function TabButton({children,onSelect,isSelected}){
    return <li><button className={isSelected?'active':''} onClick={onSelect}>{children}</button></li>;
}   
// component usage
<TabButton isSelected={selectedTopic === 'jsx'} onSelect={()=>{handleSelect('jsx')}}>JSX</TabButton>
```

2. after
```js
//component 
export default function TabButton({children,isSelected,...props}){
    return <li><button className={isSelected?'active':''} {...props}>{children}</button></li>;
}     
// component usage
<TabButton isSelected={selectedTopic === 'jsx'} onClick={()=>{handleSelect('jsx')}}>JSX</TabButton>
```