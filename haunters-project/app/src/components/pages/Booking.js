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
          <div className="banner-ui" >
            <img className="banner-image" src=".\images\Haunters.png" alt="Haunters Banner" />
          </div>
          <DBBooking />

          {/*<h2>Haunted House</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies metus urna, vitae interdum sapien blandit tincidunt. Donec tincidunt condimentum purus, ac hendrerit nisi venenatis eget. Aliquam nec justo in tellus aliquam pretium sit amet eget dui. In blandit mauris eget ligula tempor, eu volutpat dolor consectetur. Donec tempus urna quis sem pulvinar, et posuere sem volutpat. Vivamus id pharetra sem, a molestie libero. Suspendisse potenti. Praesent et orci ut felis cursus lobortis. Curabitur ut dapibus lorem. Quisque dapibus, sapien id tincidunt aliquam, tellus lorem iaculis ante, in vestibulum felis turpis a nisi.</p>
          <h2>Haunted Forest</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies metus urna, vitae interdum sapien blandit tincidunt. Donec tincidunt condimentum purus, ac hendrerit nisi venenatis eget. Aliquam nec justo in tellus aliquam pretium sit amet eget dui. In blandit mauris eget ligula tempor, eu volutpat dolor consectetur. Donec tempus urna quis sem pulvinar, et posuere sem volutpat. Vivamus id pharetra sem, a molestie libero. Suspendisse potenti. Praesent et orci ut felis cursus lobortis. Curabitur ut dapibus lorem. Quisque dapibus, sapien id tincidunt aliquam, tellus lorem iaculis ante, in vestibulum felis turpis a nisi.</p>
          <h2>Cabin in the Woods</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies metus urna, vitae interdum sapien blandit tincidunt. Donec tincidunt condimentum purus, ac hendrerit nisi venenatis eget. Aliquam nec justo in tellus aliquam pretium sit amet eget dui. In blandit mauris eget ligula tempor, eu volutpat dolor consectetur. Donec tempus urna quis sem pulvinar, et posuere sem volutpat. Vivamus id pharetra sem, a molestie libero. Suspendisse potenti. Praesent et orci ut felis cursus lobortis. Curabitur ut dapibus lorem. Quisque dapibus, sapien id tincidunt aliquam, tellus lorem iaculis ante, in vestibulum felis turpis a nisi.</p>
          */}
          </div>
      )}        
}


