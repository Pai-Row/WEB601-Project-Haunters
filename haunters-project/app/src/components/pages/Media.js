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