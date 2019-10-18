import React from 'react'
import { Link } from 'react-router-dom'


// This component displays a tile for each book in the database on the DBReadBooks page
// Uses map to map each item from the books array to a "tile" and displays the corresponding information in each tile
// Gets passed the book array from the DBReadBooks component as a prop

export default class DBAttractionTile extends React.Component {

    // Maps out each book in the array books and displays a tile for it
    render() {
        return(
            <div className="AttractionTile">
              {this.props.Attractions.map((AttractionsRide) => (
                <div key={AttractionsRide.ID} className="module">
                    <h2><u>Title</u></h2>
                    <h3>{AttractionsRide.Title}</h3>
                    <h2><u>Decription</u></h2>
                    <h3>{AttractionsRide.Desc}</h3>
                </div>
            ))}
            </div>
        )
    }
}