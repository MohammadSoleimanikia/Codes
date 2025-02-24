## prop drilling :
Prop drilling is the process of passing data from a parent component to a deeply nested child component through intermediary components. This can make the code harder to maintain and understand.

### Example:

```jsx
function ParentComponent() {
    const data = "Hello from Parent";

    return <ChildComponent data={data} />;
}

function ChildComponent({ data }) {
    return <GrandChildComponent data={data} />;
}

function GrandChildComponent({ data }) {
    return <div>{data}</div>;
}
```
In this example, the `data` prop is passed from `ParentComponent` to `GrandChildComponent` through `ChildComponent`.

In our project we pass tasks data like this (prop drilling):
NewTask ->task -> SelectedProject 
1. ```jsx 
<SelectedProject onAddTask={handleAddTask} onDeleteTask={handleDeleteTask}/>;
```
2.```jsx 
<Task onAdd={onAddTask} onDelete={onDeleteTask}/>
```
3.```jsx 
<Task onAdd={onAddTask} onDelete={onDeleteTask}/>
```