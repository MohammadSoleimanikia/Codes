## Using Variables in Sass

Variables in Sass allow you to store values that you can reuse throughout your stylesheet. This makes it easier to manage and update your styles. Here's how you can use variables in Sass:

1. **Define a Variable**: Use the `$` symbol followed by the variable name and a value.
  ```scss
  $primary-color: #3498db;
  $font-stack: Helvetica, sans-serif;
  ```

2. **Use the Variable**: Reference the variable in your styles.
  ```scss
  body {
    font-family: $font-stack;
    color: $primary-color;
  }
  ```
  ## Nesting in Sass

  Nesting in Sass allows you to nest your CSS selectors in a way that follows the same visual hierarchy of your HTML. This makes your stylesheet more readable and easier to maintain. Here's how you can use nesting in Sass:

  1. **Basic Nesting**: Nest your CSS selectors inside one another.
    ```scss
    nav {
      ul {
        list-style: none;
      }

      li {
        display: inline;
      }

      a {
        text-decoration: none;
      }
    }
    ```

  2. **Nesting with Pseudo-classes**: You can also nest pseudo-classes and pseudo-elements.
    ```scss
    a {
      color: blue;

      &:hover {
        color: darkblue;
      }
    }
    ```