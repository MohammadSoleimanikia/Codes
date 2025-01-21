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
## Using Modules with `@use`

The `@use` rule in Sass is used to load Sass modules. It helps in encapsulating styles and avoiding naming conflicts by creating a namespace.

### Creating a Module

To create a module, you can use the same partial file. For example:

```scss
// _colors.scss
$primary-color: #333;
```

### Using a Module

To use a module in another Sass file, use the `@use` rule followed by the path to the module. The module's namespace will be the same as its filename by default.

```scss
// styles.scss
@use 'colors';

body {
    color: colors.$primary-color;
}
```

### Customizing the Namespace

You can customize the namespace by using the `as` keyword:

```scss
// styles.scss
@use 'colors' as c;

body {
    color: c.$primary-color;
}
```

### Benefits of Using `@use`

- **Encapsulation**: Keeps variables, mixins, and functions within a namespace.
- **Avoids Conflicts**: Prevents naming conflicts by using namespaces.
- **Clarity**: Makes it clear where variables and mixins are coming from.

Using the `@use` rule helps in writing more maintainable and scalable Sass code by providing better modularity and encapsulation.