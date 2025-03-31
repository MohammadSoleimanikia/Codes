# swagger - openAPI specification

## what is swagger

Swagger is a tool for API documentation and testing. It helps developers design, build, document, and test REST APIs easily. The modern version of Swagger is OpenAPI Specification (OAS), but people still refer to it as "Swagger."

## the openAPI specification

defines how to describe a REST API interface.

### open API definition :

its technically YAML or JSON that describe what API or service can do

### what is the benefits of openAPI

1. standard format that readable for human or machine :describe a few things
   1. REST API resources (properties and data types)
   2. describe endpoints
   3. operations
   4. parameters
   5. REST API authentication or authorization
2. Guidance - understand/use the service or API
3. extend REST API with tooling
   1. API validator
   2. API doc generator
   3. SDK generator

## open API JSON specification example

1. openAPI → Defines the OpenAPI version.
2. info → General details about the API.
3. servers → Specifies the API’s server URLs.
4. paths → Defines available API endpoints.
5. components → Defines reusable schemas (models), security, etc.
6. security → Defines authentication/authorization requirements.
7. tags → Groups related endpoints for better organization.
8. externalDocs → Links to additional documentation.

