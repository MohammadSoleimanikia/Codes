# Using Partials and modules in Sass

Partials in Sass allow you to break your CSS into smaller, reusable pieces. This helps in organizing and maintaining your stylesheets.

## Creating a Partial

To create a partial, simply create a Sass file and prefix its name with an underscore (`_`). For example:

```scss
// _variables.scss
$primary-color: #333;
```

## Importing a Partial

You can import a partial into another Sass file using the `@import` directive. When importing, you do not need to include the underscore or the file extension.

```scss
// styles.scss
@import 'variables';

body {
    color: $primary-color;
}
```

## Benefits of Using Partials

- **Modularity**: Break down your styles into smaller, manageable files.
- **Reusability**: Share variables, mixins, and styles across different files.
- **Maintainability**: Easier to update and maintain your codebase.

By using partials, you can keep your Sass code clean and organized, making it easier to work with and scale.
