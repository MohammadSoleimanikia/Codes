# Project: Hide Secrets with Environment Variables

In this project, we use environment variables to keep our private information safe. By storing sensitive data such as API keys, passwords, and other credentials in environment variables, we ensure that these details are not hard-coded into our source code.

Additionally, we use a `.gitignore` file to prevent these environment variable files from being pushed to GitHub. This way, we can keep our private data secure and out of our version control system.

## Steps to Follow

1. **Create an Environment Variable File**: Typically, this file is named `.env` and contains key-value pairs of your sensitive information.
```plaintext
API_KEY=your_api_key_here
```
2. **Use the Environment Variables in Your Code**: Access these variables in your code using the appropriate method for your programming language.
3. **Install the `dotenv` Library**: To manage environment variables in your project, you can use the `dotenv` library. Install it using the package manager for your programming language. For example, in Node.js, you can install it using npm:
```sh
npm install dotenv
```
4. **Configure `dotenv` in Your Project**: Require and configure `dotenv` at the beginning of your main file to load the environment variables from your `.env` file:
```javascript
import env from 'dotenv';
env.config();
```
5. **Access Environment Variables in Your Code**: Use the environment variables in your code. For example, to use a secret stored in an environment variable, you can access it using `process.env`:
```javascript
const sessionSecret = process.env.SESSION_SECRET;
```
3. **Add `.env` to `.gitignore`**: Ensure that your `.env` file is listed in your `.gitignore` file so that it is not tracked by Git.

By following these steps, you can keep your private information safe and secure.