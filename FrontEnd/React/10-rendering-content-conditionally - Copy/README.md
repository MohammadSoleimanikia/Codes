# Rendering Content Conditionally in React

In this guide, we will explore different methods to render content conditionally in React.

## Method 1: Using Ternary Expression

Example: Display content if some data is available, otherwise display something else.

```js
// Set initial value to undefined
const [selectedTopic, setSelectedTopic] = useState();

// Based on the value, content is shown
{
  !selectedTopic ? <p>Please select a button</p> : null;
}
{
  selectedTopic ? (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  ) : null;
}
```

## Method 2: Using Logical AND (&&)

In this case, we can remove the `?` and `:` symbols to make it shorter.

```js
{
  !selectedTopic && <p>Please select a button</p>;
}
{
  selectedTopic && (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  );
}
```

## Method 3: Using `if` Statement

```js
// Default value
let tabContent = <p>Please select a button</p>;

// Change if value changed
if (selectedTopic) {
  tabContent = (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  );
}

// Then use this value
<section id="examples">
  {tabContent}
</section>;
``` 