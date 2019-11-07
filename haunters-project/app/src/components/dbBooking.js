import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class dbBooking extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = ({
            submitted: false,
            deleted: false
        })
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
        var form = document.getElementById("booking");
        form.reset();
        this.setState({
            submitted: true
        })
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
        this.setState({
            deleted: true
        })	
    }

    render() {
        const hasBeenSubmitted = this.state.submitted;
        const hasBeenDeleted = this.state.deleted;
        return(
        <div id="form_container">

    <div className="myheader"><center><h1>Booking</h1></center></div>
        <br></br>
        <br></br>
		
        <form id="booking" onSubmit={this.handleSubmit}>			
            Date
            <label>
                <input ref={(ref) => {this.date = ref}} type="date" name="date"/>
            </label><br/>

            Ticket Type
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
            <br/>
            Quantity
            <label>
                <input name="quantity" type="number" required="true" ref={(ref) => {this.quantity = ref}}/>
            </label>
			
            First name
			<label>
                <input name="firstName" type="text" required="true" ref={(ref) => {this.firstname = ref}}/>
            </label>
			
            Last name
			<label>
                <input name="lastName" type="text" required="true" ref={(ref) => {this.lastname = ref}}/>
            </label>

            Email
            <label>
                <input name="email" type="email" required="true" maxlength="255" ref={(ref) => {this.email = ref}}/>
            </label>
            
            Phone Number
            <label>
                <input name="phone" type="text" ref={(ref) => {this.phone = ref}}/> 
            </label>

           Country     
            <label>
                <input name="country" type="text" required="true" ref={(ref) => {this.country = ref}}/> 
                <br></br>
            </label>

            {hasBeenSubmitted === true &&
            <h2>
            Booking Submitted
            </h2>
            }

            {hasBeenDeleted === true &&
            <h2>
            Booking Deleted
            </h2>
            }
            <ToastContainer />
            <div className="buttons">
            <input className="submitButton" type="submit" name="submit" value="Submit"/> 
            <button className="deleteButton" onClick={this.handleDelete}>
                Delete Booking
            </button>
            </div>
        </form>	
	</div>
        )
    }
}