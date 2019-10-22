import React from 'react'
import ReactDOM from 'react-dom';
import DBBooking from '../dbBooking'

export default class Booking extends React.Component {

  constructor(props) {
		super(props);
		   this.state = ({
		      // isFetching: false
          // Booking: []
		   })
  }

    render() {
      return (
        <div>
          <DBBooking />
          {

          }
          </div>
      )}        
}


