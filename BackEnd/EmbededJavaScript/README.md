## EJS : Embedded java script
- using js codes into html codes

### 00-init-files
- contain initialized base of project

### 01-example
- render an EJS file that based on type of the day (week day or weekend) show some advice 

### 02-EJS tags 
- use all of the ejs tags

### 03-passing data 
- in this example we use both server to ejs and ejs to server passing data methods 
- in server to ejs we give and array of number and a name from server and displayed 
- in ejs to server we use a form to submit a name and fName to server to calculate number of characters 

### 04-static files  
- using static files (styles, images, fonts)
- public folder
- express.static

### 05-ejs templating (partials)  
-  partials, are reusable template components that can be included in multiple pages. This feature is particularly useful for maintaining consistent elements such as headers and footers across different web pages
- like this : <%- include("partials-name")%>
- in this example we use header and footer in all pages (partials)

### 06-band-generator
- using all of previous concepts
- 1-handle requests 
- 2-use static files 
- 3-send data to ejs from server
- 4-using partials (header and footer)

### 06-Json
- using JSON as data in our example