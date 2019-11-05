import React from 'react'
import ReactDOM from 'react-dom';
const AboutUs = () => {
    return <div>
        <div className="myheader"><center><h1>About Us</h1></center></div>
        <p></p>
        <h2>Contact the Otherside</h2>
        <p>Haunters</p>
        <div className = "Map"><h2>Directions</h2>
        <p>Address: 300 Montobello, Stoke, Nelson 7011, NZ<br/>Phone: +64 36265696</p>
        <div class="mapouter"><div class="gmap_canvas"><iframe width="604" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=300%20Montobello%20Avenue&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
        </div>
        <h2>F.A.Q</h2>
        <p>Faint of Heart<br/>If you get too scared during your advnetures with us you will not recieve a refund however we can escort you through safely to end your experience if deemed appropriate.</p>
        <p></p>
        </div>
}

export default AboutUs