# Material UI

## download and install

in site we go to getting started tab and installation

1. install packages

```bash
npm install @mui/material @emotion/react @emotion/styled
```

2. install ROBOTO font
   ROBOTO font is also used in MUI so we have to install that too

```bash
npm install @fontsource/roboto
```

3. use ROBOTO font

```jsx
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
```

4. install MUI icons

```bash
npm install @mui/icons-material
```

## example adding paper component

1. see source code in doc and import into our app

```jsx
import Paper from "@mui/material/Paper";
```

-   elevation prop: if we want more shadow we use elevation prop in this
-   square Prop : makes the edges more square
-   variant:'outlined' to remove box shadow

```js
<Paper elevation={10}> hi</Paper>
```

## using layout in MUI

-   complete infos in layout category

### container:

it centers every thing horizontally

```js
import Container from "@mui/material/Container";

<Container>
    <h1>Hello World</h1>
    <TourCard />
</Container>;
```

### Grid

its like grid in CSS

1. wrap all grid items inside of the grid container
   we specify grid container with `container` prop

```jsx
<Container>
    <Grid container spacing={5}>
        <h1>Hello World</h1>
    </Grid>
</Container>
```

2. wrap out item in grid item

```jsx
import  Paper  from "@mui/material/Paper"
import Grid  from "@mui/material/Grid"

export default function TourCard(){
    // each grid by default is item
    // size=3 =>3/12
    return <Grid  size={}>
    <Paper elevation={3} square> Hello</Paper>
    </Grid>

}
```

### box

simply act as a div and act as a wrapper for all elements we wants

```js
<Box>
    <Typography variant="subtitle1" component="h2">
        Immerse into the fall
    </Typography>
</Box>
```

#### apply styling

Use the `sx` prop to quickly customize any Box instance using a superset of CSS that has access to all the style functions and theme-aware properties exposed in the MUI System package

```jsx
<Box sx={{padding:"10px"}}>
```

## Data Display

### typography

used to handle the text
this use two props

1. variant : used for size of the text (h1 to h2 and subtitle)
2. component : what HTML element is going to be (div or h1)

```js
<Typography variant="subtitle1" component="h2">
```

this will be an h2 element with the size of subtitle

## Inputs

### Rating

props :

1. defaultValue: the value of the stars
2. readOnly: won't change
3. precision: if we want to use the floating value we have to use precision
4. size : small , large or medium

```js
<Rating readOnly defaultValue={2.5} precision={0.5} size="small" />
```

## icons

```js
import { AccessTime } from "@mui/icons-material";
<AccessTime sx={{ width: 12.5 }} />;
```

## Theme:
theme is a giant object with different prop and value that specify things like colors of the primary or secondary or sizes 
-   for example if we want to change the body typography smaller from default
-   making a new typography variant

### create a theme :

1. import createTheme from MUI/material

```js
import { createTheme } from "@mui/material";
```

2. make a theme object
* see default theme in MUI website then recreate the path

```js
const theme = createTheme({});
```

3. we have to specify what component we want to customize

```jsx
const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    // update body2
                    props: {
                        variant: "body2",
                    },
                    style: {
                        fontSize: 11,
                    },
                },
                {
                    // create body 3
                    props: {
                        variant: "body3",
                    },
                    style: {
                        fontSize: 9,
                    },
                },
            ],
        },
    },
});
```

4. use this theme

```jsx
// import theme provider
import { createTheme, ThemeProvider } from "@mui/material";
// wrap all components with themeProvider
// add theme prop to this component
<ThemeProvider theme={theme}>
    <Paper elevation={3} square>
        // codes
    </Paper>
</ThemeProvider>;
```

## APPbar 
its like header and `bottom navigation` used for the footer 

## listImage 
used for making image collage 
