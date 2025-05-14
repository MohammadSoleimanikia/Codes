# Authentication 
user give server credentials and server authenticate user.

## Server-side sessions
* Store unique identifier on server and sent same identifier to client 
* client sends identifier along the request to protected resources 
* server can check if the identifier is valid or not 
* if backends are decoupled backend doesn't care about the client ,it also doesn't store any client related data(session) so this method is not optimal

## Authentication tokens 
* server create but not store permission token on server & send it to the client 
* client attaches token to future requests

## 