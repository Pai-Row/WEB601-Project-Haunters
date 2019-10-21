const express = require('express');
const app = express()
const router = express.Router()
const cors = require('cors')

const config = require('./config')
const data = require('./data')

const middlewares = require('./middlewares')
const bodyParser = require('body-parser')


/*Now we can make our payload as json format so it can be understood*/
const jsonParser = bodyParser.json() /*We only going to use the jasonParser as middleware */

/* 
We are going to require knex and then immediately going to pass in a configuration object,
first of all we need to specify the client and then connection
 */
const knex = require('knex')({
    client: 'mysql',
    connection: config.database
})

/*
Then we will take app.locals again and add the knex object 
 */
app.locals.knex = knex

/*  We are going to require routes */
const routes = require('./routes')

// router.get('/attraction', routes.haunterList.listAllAttraction); // This line is for mysql native package
router.get('/attraction', routes.haunterList.listAllAttractionKnex);

router.get('/booking/last', routes.haunterList.getLastBooking);

/* Now we are going to POST to the booking list but we need to make sure to create a need record in db*/
router.post('/booking', jsonParser, routes.haunterList.postBooking);

/* Now we are going to use DELETE to remove an Booking from the table */
router.delete('/booking/:id', middlewares.checkID, routes.haunterList.deleteBooking)

app.use('/api', cors(), router);


app.listen(config.APIServerPort, () => {
    console.log(`Server started on port ${config.APIServerPort}`);
});