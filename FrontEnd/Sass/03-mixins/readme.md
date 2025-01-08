# Using Mixins in Sass

Mixins in Sass allow you to create reusable chunks of code. They help keep your styles DRY (Don't Repeat Yourself) by encapsulating styles that can be reused throughout your stylesheet.

## Creating a Mixin

To create a mixin, use the `@mixin` directive followed by the mixin name and a block of styles:

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}
```

## Using a Mixin

To use a mixin, use the `@include` directive followed by the mixin name:

```scss
.button {
  @include border-radius(10px);
  background-color: blue;
  color: white;
}
```

## Parameters

Mixins can take parameters, allowing you to pass in values when you include the mixin:

```scss
@mixin box-shadow($x, $y, $blur, $color) {
  -webkit-box-shadow: $x $y $blur $color;
     -moz-box-shadow: $x $y $blur $color;
          box-shadow: $x $y $blur $color;
}

.card {
  @include box-shadow(0px, 4px, 10px, rgba(0, 0, 0, 0.5));
}
```

## Default Values

You can also set default values for mixin parameters:

```scss
@mixin transition($property, $duration: 0.3s, $ease: ease-in-out) {
  transition: $property $duration $ease;
}

.element {
  @include transition(all);
}
```

## Conclusion

Mixins are a powerful feature in Sass that help you write cleaner and more maintainable code. By using mixins, you can ensure that your styles are consistent and easy to update.
