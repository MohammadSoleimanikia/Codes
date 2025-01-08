## Getting Started with Sass

Starting with Sass is straightforward! Here's a step-by-step guide to get you up and running:

1. **Understand What Sass Is**
    Sass (Syntactically Awesome Stylesheets) is a preprocessor for CSS. It adds features like variables, nesting, mixins, and functions to make CSS more powerful and maintainable.

2. **Install Sass**
    - **Install Globally with npm (Recommended)**
      If you have Node.js installed, use the following command to install Sass globally:
      ```sh
      npm install -g sass
      ```
      Now you can use the `sass` command in your terminal.

    - **Install Locally in a Project**
      For project-specific installation:
      ```sh
      npm install sass --save-dev
      ```

    - **Alternative: Use a GUI Tool**
      If you’re not comfortable with the terminal, use a GUI like Koala or Prepros for compiling Sass files.


    4. **Write Your First Sass File**
        - **Create a `.scss` File**
          Write your styles in a file called `main.scss`. Example content:
    5. **Compile Sass to CSS**
        - **Command Line Compilation**
          Run this in the terminal to compile your Sass:
          ```sh
          sass styles/main.scss styles/styles.css
          ```

        - **Automatic Watching**
          To auto-compile whenever you save changes:
          ```sh
          sass --watch src/styles/main.scss:dist/main.css
          ```