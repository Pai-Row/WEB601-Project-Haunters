/*  We going to create a function for handling a res to list all employees */
// const data = require('./data')

// function listAllEmployees(req, res) {
    /* We are going to return an HTTP 200 with a json object of the data we have */
    // return res.status(200).json(data);
    /* instead of returning a static data we are going to return the result of the database query */
    // const connection = req.app.locals.connection;
//     connection.query('SELECT e.id, e.name, e.email, e.salary, d.name as "Department", d.location FROM employees e JOIN departments d ON e.department = d.id',
//         (error, results) => {
//             if (error) {
//                 return res.status(500).json(error)
//             }
//             return res.status(200).json(results)
//         })
// }

/*  Now we use a module export syntax to send list of employees using JS object property shorthand syntax */

// module.exports = {
//     listAllEmployees
// }

/*  After using mysql native package we are going to use the library knex and that has it's own benefits over mysql driver and they are:
 in mysql we need to make sure to pass all the parameters.  */