# HTTP Testing
This folder is for development puporses. No need for postman, this folder takes care of those tasks. any file with an extention of ```.http``` will be converted into a http playground. Try it out! 

## Note: 
You must have [RestClient](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) installed in VS Code.

```js
### Test the home page endpoint
GET http://localhost:3001

### Test a 404
GET http://localhost:3001/testing-404
```