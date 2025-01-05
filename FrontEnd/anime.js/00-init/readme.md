# Anime.js Project Setup

## 1. Initialize a new npm project
```bash
npm init -y
```

## 2. Install Anime.js
Install Anime.js via npm:
```bash
npm install animejs
```

## 3. Set Up Basic Project Files

Create the following file structure:

```
animejs-project/
│
├── index.html
├── style.css
├── script.js
└── package.json
```

### index.html

Include Anime.js via CDN:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anime.js Project</title>
    <link rel="stylesheet" href="style.css">
    
</head>
<body>
    <div id="box"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
```
### style.css

Add some styles:

```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f3f4f6;
}

#box {
    width: 100px;
    height: 100px;
    background-color: #3498db;
    border-radius: 10px;
}
```

### script.js

Use Anime.js to animate the box:
```javascript
anime({
    targets: '#box',
    translateX: 250,
    rotate: '1turn',
    backgroundColor: '#e74c3c',
    duration: 2000
});
```

## 4. Run Your Project
Use a simple development server to preview your project. If you don't have one, you can install Live Server globally:
```bash
npm install -g live-server
```

Run the server:

```bash
live-server
```
This will automatically open the project in your browser.