# Step 1: Install Node.js

1. Go to [nodejs.org](https://nodejs.org/).
2. Download and run the installer.
3. Verify with `node -v`.

# Step 2: Create a Vite App

1. Open your terminal.
2. Run the following command:
    ```sh
    npm create vite@latest react-project
    ```
3. for current directory
    ```sh
    npm create vite@latest .
    ```
4. Follow the prompts to complete the setup.
# Step 3: Change Directory

1. Navigate to the new app directory:
    ```sh
    cd my-react-app
    ```

# Step 4: Install Dependencies

1. Install the necessary packages:
    ```sh
    npm install
    ```
    # Step 5: Start the Development Server

    1. Start the development server:
        ```sh
        npm run dev
        ```

        # Step 6: Remove Unnecessary Files

        1. Delete any unnecessary files from the project directory. For example:
            1. In your `src` directory, delete the following files:
                - `App.css`
                - `App.jsx` or `App.tsx`
                - `main.jsx` or `main.tsx`
                - `logo.svg` (or any example assets)
        2. Update `src/App.jsx` and `src/main.jsx` to reflect these changes.

        # Step 7: Customize Your App

        1. Start building your React application by modifying the files in the `src` directory.
