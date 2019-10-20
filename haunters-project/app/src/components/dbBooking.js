import React from 'react'
import { Link } from 'react-router-dom'


// This component displays a tile for each attraction in the database on the Attractions page
// Uses map to map each item from the attraction array to a "tile" and displays the corresponding information in each tile
// Gets passed the attraction array from the DBReadBooks component as a prop

export default class dbBooking extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = ({
            // submitted: false
         })
    }

      // Handles the submission of the add book form and adds it to the database
    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:4200/api/booking', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
             "date": this.date.value,
             "ticket": this.attraction.value,
             "quantity": this.quantity.value,
             "firstname": this.firstname.value,
             "lastname": this.lastname.value,
             "email": this.email.value,
             "phone": this.phone.value,
             "country": this.country.value
            })}).then(function (response) {
                console.log(response);
                // this.state.submitted = true;
            }).catch(function (err){
                console.log(err)
            });
        console.log("Booking added");
    }

    handleDelete () {
        fetch('http://localhost:4200/api/booking/1', {
            method: 'delete',
            headers: {'Content-Type':'application/json'},
            }).then(function (response) {
                console.log(response);
                // this.state.submitted = true;
            }).catch(function (err){
                console.log(err)
            });
        console.log("Sometihng was deleted");
    }

    // Maps out each attraction in the array attractions and displays a tile for it
    render() {
        return(
        <div id="form_container">
	
		<h1><a>Booking</a></h1>
		<form id="booking" onSubmit={this.handleSubmit}>
            <div class="form_description">
                <h2>Booking</h2>
                <p>Booking for customers</p>
		    </div>						

            <label>
                <input ref={(ref) => {this.date = ref}} type="date" name="date"/>
            </label>

            <label>
                <input name="attraction" checked="true" class="element radio" type="radio" required="true" ref={(ref) => {this.attraction = ref}} value="Double Haunt"/>
                 Double Haunt $20 - Entry into two attractions of your choice
            </label>

            <label>
                <input name="attraction" class="element radio" type="radio" required="true" ref={(ref) => {this.attraction = ref}} value="Haunters Hearty Haunt"/>
                 Haunters Hearty Haunt $40 - All attractions and a group photo
            </label>
            
            <label>
                <input name="attraction" class="element radio" type="radio" required="true" ref={(ref) => {this.attraction = ref}} value="Haunters Sinister Haunt"/>
                 Haunters Sinister Haunt $60 - Includes all attractions, a group photo and an exlusive Haunters Halloween outfit
            </label>

            <label>
                <input name="quantity" type="number" required="true" ref={(ref) => {this.quantity = ref}}/>
                 Quantity
            </label>
			
			<label>
                <input name="firstName" type="text" required="true" ref={(ref) => {this.firstname = ref}}/>
                First
            </label>
			
			<label>
                <input name="lastName" type="text" required="true" ref={(ref) => {this.lastname = ref}}/>
                Last
            </label>
            <label>
                <input name="email" type="email" required="true" maxlength="255" ref={(ref) => {this.email = ref}}/>
                Email
            </label>
                
            <label>
                <input name="phone" type="text" ref={(ref) => {this.phone = ref}}/> 
                Phone Number
            </label>
                
            <label>
                <input name="country" type="text" required="true" ref={(ref) => {this.country = ref}}/> 
                Country
            </label>
			
            <input type="submit" name="submit" value="Submit" />
		</form>	
        <button onClick={this.handleDelete}>
            Delete Booking
        </button>
	</div>
        )
    }
}