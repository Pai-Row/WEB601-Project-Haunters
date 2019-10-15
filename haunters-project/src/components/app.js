import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom"
//Need to change node module directory
import Home from './pages/Home'
import Attractions from './pages/Attractions'
import Booking from './pages/Booking'
import Media from './pages/Media'
import AboutUs from './pages/AboutUs'

import NavBar  from './NavBar'
import Footer from './footer/footer';



const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                <NavBar />
                    <Route path="/" exact component={Home} />
                    <Route path="/attractions" exact component={Attractions} />
                    <Route path="/booking" exact component={Booking} />
                    <Route path="/media" exact component={Media} />
                    <Route path="/aboutus" exact component={AboutUs} />
                    
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;