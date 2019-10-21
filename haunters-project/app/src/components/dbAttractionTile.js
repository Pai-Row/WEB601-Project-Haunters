import React from 'react'
import { Link } from 'react-router-dom'


// This component displays a tile for each attraction in the database on the Attractions page
// Uses map to map each item from the attraction array to a "tile" and displays the corresponding information in each tile
// Gets passed the attraction array from the DBAttractionTile component as a prop

export default class DBAttractionTile extends React.Component {

    // Maps out each attraction in the array attractions and displays a tile for it
    render() {
        return(
            <div className="AttractionTile">
              {this.props.Attractions.map((AttractionsRide) => (
                <div key={AttractionsRide.ID} className="module">
                    <h3>{AttractionsRide.title}</h3>
                    <h3>{AttractionsRide.desc}</h3>
                
                </div>
            ))}
            </div>
        )
    }
}