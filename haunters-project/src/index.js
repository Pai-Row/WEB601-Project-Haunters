import React from 'react';
import ReactDOM from 'react-dom';
import Student from './Student';
//const divStyle = {
 //   color: 'red'
//}
const App = () => {
    return (
        <div className= "container">
           <Student />
           <Student />
           <Student />
           <Student />
        </div>
    );
    
}


ReactDOM.render(<App />, document.querySelector('#root'));