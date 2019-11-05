import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <div className="banner-ui" >
                <img className="banner-image" src=".\images\Haunters.png" alt="Haunters Banner" />
            </div>
            <div className="navbar">
                <div className="right menu" style={{backgroundColor: 'Dark'}}>
                    <Link to="/" className="item"  style={{backgroundColor: 'Dark'}}>
                        Home
                    </Link>
                </div>
                <div className="right menu">
                    <Link to="/attractions" className="item" style={{backgroundColor: 'Dark'}}>
                        Attractions
                    </Link>
                </div>
                <div className="right menu">
                    <Link to="/booking" className="item" style={{backgroundColor: 'Dark'}}>
                        Booking
                    </Link>
                </div>
                <div className="right menu">
                    <Link to="/media" className="item" style={{backgroundColor: 'Dark'}}>
                        Media
                    </Link>
                </div>
                <div className="right menu">
                    <Link to="/aboutus" className="item" style={{backgroundColor: 'Dark'}}>
                        About Us
                    </Link>
                </div>
            </div>
            
        </div>
        
    )
}



export default NavBar; 