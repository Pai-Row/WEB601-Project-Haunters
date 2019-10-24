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
           <div className="myheader"><center><h1>Attractions</h1></center></div>
          <DBAttractionTile Attractions={this.state.Attractions}/>
          <div className="Haunted-House">
          <img className="Haunted-House" src=".\images\Haunted House.jpg" alt="Haunted House"/></div>
          <div className="Haunted-Forest">
          <img className="Haunted-Forest" src=".\images\Haunted Forest.jpg" alt="Haunted Forest"/></div>
          <div className="MirrorRoom">
          <img className="MirrorRoom" src=".\images\MirrorRoom.jpg" alt="MirrorRoom"/></div>
        </div>
      )}        
}


