# tailwind 
## installation:
* for installing version 4 :
1. install tailwind css
```bash
npm install tailwindcss @tailwindcss/vite
```
2. configure the vite plugin by changing vite config file 
```js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```
3. import tailwind CSS to index.css (our style file)
```css
@import "tailwindcss";
```
4. run the app 
```bash
npm run dev
```
5- add tailwind.connfig.js for auto correction
## media query in tailwind 
* add prefix before class name 
* sm ,md ,lg ,...

## hover 
```js
// when hover add padding to left and right 
className='hover:px-4'
```
## dynamic and conditional styling
1. add base styling that dont change based on condition 
```js
let labelClasses = 'block mb-2 text-xs font-bold tracking-wide uppercase';
```
2. add style conditionally to the base style 
```js
    if (invalid) {
    labelClasses += ' text-red-400';
    inputClasses += ' text-red-500 bg-red-100 border-red-300';
  } else {
    labelClasses += ' text-stone-300';
    inputClasses += ' text-gray-700 bg-stone-300';
  }
```
3. add style to component 
```jsx
<label className={labelClasses}>{label}</label>
```
