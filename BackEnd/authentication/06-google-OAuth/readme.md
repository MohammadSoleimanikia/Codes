# Setting up Google OAuth

This guide will help you set up Google OAuth for your project, allowing users to log into your website using their Google account.

## Prerequisites

- A Google/ Gmail account

## Steps

### 1. Sign in to your Google Cloud Console

Navigate to [Google Cloud Console](https://console.cloud.google.com/) and sign in with your Google/Gmail account.

### 2. Create a New Project

- Click on the project drop-down on the top left.
- Select "New Project".
- Name your project "Secrets".
- Leave the location as "No organization".

### 3. Access "Credentials" under APIs & Services

- Click on the hamburger menu.
- Navigate to "APIs & Services" > "Credentials".

### 4. Configure Consent Screen

- Click on "Create Credentials" > "OAuth Client ID".
- click on OAuth consent screen.
- Select "External" for the application type.
- Fill in the required information (app name, support email, developer email addresses).

### 5. Configure Your Scope

- Click on "Add Or Remove Scopes".
- Add a checkmark for the email scope.

### 6. Create Your Client ID

- Navigate back to "Credentials".
- Click "Create Credentials" > "OAuth Client ID".
- Choose "Web Application".

### 7. Add Authorized JavaScript Origins

- Add `http://localhost:3000` to your JavaScript origins.

### 8. Add Authorized Redirect URIs

- Add `http://localhost:3000/auth/google/secrets` to your redirect URIs.

### 9. Create and Save Your Client ID and Client Secret

- Click "Create" to create your client ID.
- Copy your Client ID and Client Secret. You will need these in your project.

## Next Steps

Use the Client ID and Client Secret in your project to enable Google OAuth.

