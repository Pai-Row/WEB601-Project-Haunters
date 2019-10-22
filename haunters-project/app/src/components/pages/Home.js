import React from 'react'
import ReactDOM from 'react-dom';


const Home = () => {
    return <div>
        <div className="myheader"><center><h1>Haunters</h1></center>
        </div>
        <center>Welcome to Haunters!</center>
        <center>A frightenly wonderful way to spend your evening...</center>
        <br></br>
        <div className="content-image" >
         <center><img className="image-medium" src=".\images\House.jpg" alt="Haunters House" /></center>
          </div>
        <center>Haunters is a newly opened horror theme attraction park filled to the brim with frights and fun... <br/>If you love to be scared or are just looking for something different and unqiue then come on in and give us a visit<br/> the temperature is chilling...</center>

        
        </div>
}

ReactDOM.render(<Home />,document.querySelector('#root'));
export default Home