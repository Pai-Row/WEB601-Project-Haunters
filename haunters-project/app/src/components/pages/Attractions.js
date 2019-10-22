import React from 'react'
import ReactDOM from 'react-dom';
import DBAttractionTile from '../dbAttractionTile'

export default class Attractions extends React.Component {

  constructor(props) {
		super(props);
		   this.state = ({
		      isFetching: false,
              Attractions: []
		   })
  }
  
  // Retrieves all the attractions from the database and saves them in the array attractions
  GetAttractions() {
    fetch('http://localhost:4200/api/attraction')
.then(res => res.json())
.then(data => {
  if(data.code === '404') {
    this.setState({
      isFetching: false,
    })
  } else {
            this.setState({
            isFetching: true,
            Attractions: data, 
        });
        }
})
.catch(err => {
   console.log(err);
    })	
    console.log(Attractions);
}


// When the component has mounted, the Attractions will be retrieved
componentDidMount() {
  this.GetAttractions();
}

    render() {
      return (
        <div>
           <div className="myheader"><center><h1> Attractions</h1></center></div>
          <DBAttractionTile Attractions={this.state.Attractions}/>

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

