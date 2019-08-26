import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="ui  pointing right menu" style={{backgroundColor: 'lightBlue'}}>
            <Link to="/" className="item"  style={{backgroundColor: 'lightGrey'}}>
                Home
            </Link>
            <div className="right menu">
                <Link to="/attractions" className="item" style={{backgroundColor: 'lightGrey'}}>
                    Attractions
                </Link>
                <div className="right menu">
                <Link to="/booking" className="item" style={{backgroundColor: 'lightGrey'}}>
                    Booking
                </Link>
                <div className="right menu">
                <Link to="/media" className="item" style={{backgroundColor: 'lightGrey'}}>
                    Media
                </Link>
                    
                    <div className="right menu">
                <Link to="/aboutus" className="item" style={{backgroundColor: 'lightGrey'}}>
                    About Us
                </Link>
                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar; 