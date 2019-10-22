import React from 'react'
import { Link } from 'react-router-dom'

export default class dbBooking extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

      // Handles the submission of booking details and put it in the database
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
            }).catch(function (err){
                console.log(err)
            });
        console.log("Booking added");
    }

    handleDelete () {
        fetch('http://localhost:4200/api/booking/last')
        .then(res => res.json())
        .then(data => {
            console.log(data[0].ID)
            var latestBookingID = data[0].ID

            fetch(`http://localhost:4200/api/booking/${latestBookingID}`, {
            method: 'delete',
            headers: {'Content-Type':'application/json'},
            }).then(function (response) {
                console.log(response);
            }).catch(function (err){
                console.log(err)
            });
            console.log("Sometihng was deleted");
        })
        .catch(err => {
            console.log(err)
        })	
    }

    render() {
        return(
        <div id="form_container">
	
    <div className="myheader"><center><h1><a>Booking</a></h1></center></div>
        <br></br>
        <br></br>
		<form id="booking" onSubmit={this.handleSubmit}>
            <div class="form_description">
		    </div>						

            <label>
                <p>Date</p>
                <input ref={(ref) => {this.date = ref}} type="date" name="date"/>
            </label>

            <label>
                <br></br>
                <p>Ticket Type</p>
                <input name="attraction" checked="true" class="element radio" type="radio" required="true" ref={(ref) => {this.attraction = ref}} value="Double Haunt"/>
                 Double Haunt $20 - Entry into two attractions of your choice
            </label>

            <label>
            <br></br>
                <input name="attraction" class="element radio" type="radio" required="true" ref={(ref) => {this.attraction = ref}} value="Haunters Hearty Haunt"/>
                 Haunters Hearty Haunt $40 - All attractions and a group photo
            </label>
            
            <label>
            <br></br>
                <input name="attraction" class="element radio" type="radio" required="true" ref={(ref) => {this.attraction = ref}} value="Haunters Sinister Haunt"/>
                 Haunters Sinister Haunt $60 - Includes all attractions, a group photo and an exlusive Haunters Halloween outfit
            </label>

            <label>
                 <p>Quantity</p>
                <input name="quantity" type="number" required="true" ref={(ref) => {this.quantity = ref}}/>
            </label>
			
			<label>
                <p>First name</p>
                <input name="firstName" type="text" required="true" ref={(ref) => {this.firstname = ref}}/>
            </label>
			
			<label>
                <p>Last name</p>
                <input name="lastName" type="text" required="true" ref={(ref) => {this.lastname = ref}}/>
            </label>

            <label>
                <p>Email</p>
                <input name="email" type="email" required="true" maxlength="255" ref={(ref) => {this.email = ref}}/>
            </label>
                
            <label>
                <p>Phone Number</p>
                <input name="phone" type="text" ref={(ref) => {this.phone = ref}}/> 
            </label>
                
            <label>
                <p>Country</p>
                <input name="country" type="text" required="true" ref={(ref) => {this.country = ref}}/> 
                <br></br>
            </label>
		
            <input className="submitButton" type="submit" name="submit" value="Submit"/> 
		
        <button onClick={this.handleDelete}>
            Delete Booking
        </button>
        </form>	
	</div>
    
        )
    }
}