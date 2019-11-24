import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import Attractions from './pages/Attractions'
import Booking from './pages/Booking'
import Media from './pages/Media'
import AboutUs from './pages/AboutUs'

import store  from './store/store'
import NavBar  from './NavBar'
import Footer from './footer/footer'



const App = () => {
    return (
        <Provider store={store}>
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
        </Provider>
    )
}

export default App;