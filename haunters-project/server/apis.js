/* We going to build REST API without using any dependencies, 
    and we are going to add some endpoints as well as applying
    some basic principles.
 */

// We are going to use two node modules http and url, also we going to use the dummy data.
const http = require('http')
const url = require('url')

const data = require('./data')

function employeesList(req, res) {
    // The handler we be used or called when we call the HTTP method of GET  /api/employees
    // two things we are going to do :
    res.statusCode = 200;
    res.end(JSON.stringify(data));
    // the end on the res method will end the res after sending the data.
}

function addEmployee(req, res) {
    // POST handler we need addition code, we need create an empty var called body
    let body = '';
    // when you do an HTTP post the req object will call it's own event listener. 
    // There 3 type of  events you can listen which are data, end and error. 
    // We need to capture the chunk and keep adding to the var body so we can build on the post data. chunk is a buffer. 
    req.on('data', chunk => body += chunk.toString())
    req.on('end', () => {
        // we going to push the parsed body to data array. 
        data.push(JSON.parse(body))
        res.statusCode = 201;
        // The n we going to end res with a message.
        return res.end(`Added  ${JSON.parse(body).name}`)
    })
    req.on('error', error => {
        res.statusCode = 400;
        return res.end(error);
    })
}

function errorRequest(req, res) {
    res.statusCode = 404;
    res.end('Please enter the correct endpoint')
}
/*We going to create a serve by accessing the http module and use creatServer method*/
const server = http.createServer((req, res) => {
    // We are going to access the url, so we are going to create an endpoint for /api/employees
    //the req object only contain the url as a property but also has a req method property
    const urlEmployees = url.parse(req.url)
    // console.log(urlEmployees)
    // if our var is equal to the api then we are certain that someone is making an api call 
    if (urlEmployees.pathname === '/api/employees') {
        switch (req.method) {
            case 'GET':
                // ... How we can specify code for the GET statement so we can get a res from the api?
                // ans: we need to create some handlers 
                employeesList(req, res)
                break;
            case 'POST':
                // ... we can also use http post method 
                addEmployee(req, res)
                break;
            default:
                //... 
                errorRequest(req, res)
                break;
        }
    } else {
        // ... if some one makes an error we can put an error message. 
        errorRequest(req, res)
    }
})

/* For an http server which we need to start by listening to a port*/

server.listen(8080, () => console.info(`Server is up on port 8080`));