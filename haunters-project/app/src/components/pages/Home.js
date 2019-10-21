import React from 'react'
import ReactDOM from 'react-dom';


const Home = () => {
    return <div>
        <center><h1>Haunters</h1></center>
        <center><p>Welcome to Haunters!</p></center>
        <center><p>A frightenly wonderful way to spend your evening...</p></center>
        <br></br>
        <div className="content-image" >
         <center><img className="image-medium" src=".\images\House.jpg" alt="Haunters House" /></center>
          </div>
        <center><p>Haunters is a newly opened horror theme attraction park filled to the brim with frights and fun... <br></br>If you love to be scared or are just looking for something different and unqiue then come on in and give us a visit<br></br> the temperature is chilling...</p></center>

        
        </div>
}

ReactDOM.render(<Home />,document.querySelector('#root'));
export default Home