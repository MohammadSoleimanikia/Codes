this is wrong and didn't works when we deploy the project
``` html
<img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
```
To ensure that the image is correctly displayed when deploying your app, you should import the image 
```markdown
import React from 'react';
import atomImage from './src/assets/react-core-concepts.png';

function App() {
  return (
    <div>
      <img src={atomImage} alt="Stylized atom" />
    </div>
  );
}
```
