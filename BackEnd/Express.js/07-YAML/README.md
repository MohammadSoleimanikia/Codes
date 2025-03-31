# YAML
## what is YAML
YAML is a human-readable data format used for configuration files, data storage, and APIs (like OpenAPI). It’s similar to JSON but easier to read and write because it uses indentation instead of brackets {} and commas ,.

YAML vs JSON
JSON
```json
{
  "name": "Mohammad",
  "age": 25,
  "languages": ["JavaScript", "TypeScript"]
}
```
YAML
```yaml
name: Mohammad
age: 25
languages:
  - JavaScript
  - TypeScript
```

## object and key value 
JSON
```JSON
{
  "name": "Mohammad",
  "age": 25
}
```
YAML
```yaml
name: Mohammad
age: 25
```
### nested objects 
JSON
```JSon
{
  "user": {
    "name": "Mohammad",
    "age": 25,
    "address": {
      "city": "Tehran",
      "country": "Iran"
    }
  }
}
```
YAML uses indentation no {}
```yaml
user:
  name: Mohammad
  age: 25
  address:
    city: Tehran
    country: Iran
```
## Lists (array)
JSON
```json
{
  "languages": ["JavaScript", "TypeScript", "React"]
}
```
YAML uses - and indent for items list
```YAML
languages:
  - JavaScript
  - TypeScript
  - React
```
## multi line text
JSON
```json
{
  "bio": "I love coding.\nI enjoy learning new things."
}
```
YAML
```yaml
bio: |
  I love coding.
  I enjoy learning new things.
```
## when to use 
* YAML is better for human
* JSON is better for machines 
