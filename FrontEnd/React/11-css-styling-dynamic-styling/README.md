# CSS styling 

## add CSS to react items
* use 'className' instead of 'class' to add class to react items for styling for adding id its the same as HTML
```js
export default function TabButton({children,onSelect}){
    return <li><button className="active" onClick={onSelect}>{children}</button></li>;
}
```
## add style dynamically 
1. send state that we want to style based on to component as props . ex:isSelected

```js
<TabButton isSelected={selectedTopic === 'jsx'} onSelect={()=>{handleSelect('jsx')}}>JSX</TabButton>
```

2. style based on this prop in component 
```js
export default function TabButton({children,onSelect,isSelected}){
    return <li><button className={isSelected?'active':''} onClick={onSelect}>{children}</button></li>;
}
```