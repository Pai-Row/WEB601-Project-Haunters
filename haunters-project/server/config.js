// We are going to create a config file for our database connection
// We are going to call that object database. 
// We are going to specify a host port 
// And since an config file we can create an API server port var and export as well

const APIServerPort = 4200

const database = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'sideduckmaster6',
    database: 'projecthaunters',
    insecureAuth: true
}

// Then we export it
module.exports = {
    database,
    APIServerPort
}