/* In the file we are going to use knex with attraction controller */


function listAllAttractionKnex(req, res) {
    /*We are going to use the latest Object destructuring of JS and this means 
        that knex is going to be extracted from locals object forming
    */
    const {
        knex
    } = req.app.locals
    knex
        .select('title', 'desc', 'image')
        .from('attraction')
        /*We going to use a promise based lib */
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
}

function getLastBooking(req, res) {
    const {
        knex
    } = req.app.locals
    knex.select('ID').orderBy('ID', 'desc').from('booking').limit(1)
        /*We going to use a promise based lib */
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
}


//This will be the booking details posting the information back to the datebase
function postBooking(req, res) {
    const {
        knex
    } = req.app.locals
    /* Now we are going to work with Booking table and we can insert and then if we call
    a response for that. 
    */
    // console.log(req.body)
    const payload = req.body
    /* When you do a POST method you also send a payload with your POST req, express access the payload.
       We need to parse payload because Express does not see payload as part of the req body */
    const mandatoryColumns = ['date', 'ticket', 'quantity', 'firstname', 'lastname', 'email', 'phone', 'country']
    const payloadKeys = Object.keys(payload)
    const mandatoryColumnsExists = mandatoryColumns.every(mc => payloadKeys.includes(mc))
    if (mandatoryColumnsExists) {
        knex('booking')
            .insert(payload)
            .then(response => res.status(201).json('Booking record created'))
            .catch(error => res.status(500).json(error))

    } else {
        return res.status(400).json(`Mandatory Columns are required ${mandatoryColumns}`);
    }
}
//This will delete the customers details of the booking
function deleteBooking(req, res) {
    const {
        knex
    } = req.app.locals
    const {
        id
    } = req.params
    knex('booking')
        .where('id', id)
        .del()
        .then(response => {
            if (response) {
                res.status(200).json(`Booking with id ${id} is removed.`)
            } else {
                res.status(404).json(`Booking with id ${id} is not found.`)
            }
        })
        .catch(error => res.status(500).json(error))
}

module.exports = {
    listAllAttractionKnex,
    postBooking,
    deleteBooking,
    getLastBooking
    //updateBooking
}