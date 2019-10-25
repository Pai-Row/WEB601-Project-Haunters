// import React from 'react'
import ReactDOM from 'react-dom';
import Lightbox from 'react-images';

import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

function App() {
// if toggler is updated when lightbox is closed it will open it
// if toggler is updated when lightbox is opened it will close it
const [toggler, setToggler] = useState(false);

return (
<>
<div className="myheader"><center><h1>Media</h1></center>
</div>

<center>
  <button className="GalleryButton" onClick={ () => setToggler(!toggler) }>Gallery</button>
</center>
<FsLightbox
toggler={ toggler }
sources={ [
'https://images.unsplash.com/photo-1511406361295-0a1ff814c0ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80',
'https://images.unsplash.com/photo-1481018085669-2bc6e4f00eed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
'https://images.unsplash.com/photo-1484319047745-8312fb87003c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1014&q=80',
'https://images.unsplash.com/photo-1484608577325-c7540cc6794d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
'https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
'https://images.unsplash.com/photo-1509248961158-e54f6934749c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1022&q=80',
'https://images.unsplash.com/photo-1537281000-028bad8dc58d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
'https://images.unsplash.com/photo-1509558567730-6c838437b06b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
'https://images.unsplash.com/photo-1546319370-27404df3348a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
'https://images.unsplash.com/photo-1571790983670-676099a58f2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
'https://images.unsplash.com/photo-1509558273944-9ea880029528?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
'https://images.unsplash.com/photo-1509558741973-0cd2f6a12a4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1231&q=80',
'https://images.unsplash.com/photo-1520996729250-7d888a835cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
'https://images.unsplash.com/photo-1453967854176-7e6e8270b0b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
'https://images.unsplash.com/photo-1476284338814-fc236162eae7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
'https://images.unsplash.com/photo-1551977662-e83912ec3dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80',
'https://images.unsplash.com/photo-1494376877685-d3d2559d4f82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
] }
/>
</>
);
}

export default App;

/*const Media = () => {
    return <div>
        
         <div className="myheader"><center><h1>Media</h1></center></div>
        
        </div>

}*/

/*export default class Media extends React.Component {

    constructor() {
        super();
        this.state = ({
            isOpen: false,
            onClose: false,
            onClickNext: null,
            onClickPrev: null
        })
    }

    render() {
      return (
        <Lightbox
          images={[{ src: 'http://example.com/img1.jpg' }, { src: 'http://example.com/img2.jpg' }]}
          isOpen={this.state.lightboxIsOpen}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClose={this.closeLightbox}
        />
      );
    }
  }*/

          
          


//export default Media