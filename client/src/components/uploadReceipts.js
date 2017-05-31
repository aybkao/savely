// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Button} from 'semantic-ui-react';
// import DropzoneComponent from 'react-dropzone-component';
// var componentConfig = {
//     iconFiletypes: ['.jpg', '.png', '.gif'],
//     showFiletypeIcon: true,
//     postUrl: '/uploadHandler'
// };

// class UploadReceipts extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div id="receipt_dropzone">
//         <h3>Receipt Upload Area</h3>
//         <Button fluid>Upload Receipt</Button>
//       </div>
//     )
//   }
// };






import React from 'react';
import Dropzone from 'react-dropzone';
import {Button} from 'semantic-ui-react';
import axios from 'axios';
//import fs from 'fs;'




class UploadReceipts extends React.Component {
  constructor(props) {
    super(props);
    this.onImageDrop = this.onImageDrop.bind(this);
    //this.ocr = this.ocr.bind(this);
  }
  
  
  onImageDrop(files) {
    console.log('FILES', files);
    //var imageFile = fs.readFileSync('')
    let uploaded = new FormData();
    uploaded.append('file', files[0]);
    console.log(uploaded);
    // request.post('/asdf')
    //   .send(uploadedPdf)
    //   .end((err, resp) => {
    //     if (err) {
    //       console.log('error in onImageDrop Post to /upload: ', err);
    //     } else {
    //     this.setState({
    //       loading: true
    //     });
    //     setTimeout(() => {
    //       this.setState({
    //         loading: false,
    //         redirect: true
    //       });
    //     }, 2500)
    //       return resp;
    //     }
    //   });
    // this.setState({
    //   uploadedFile: files[0]
    // });
    // this.uploadToCloudinary(files[0]);
  }
  
   


  render() {
    return (
      <div id="receipt_dropzone">
        <h3>Receipt Upload Area</h3>
        <Button fluid>Upload Receipt</Button>

        <div className="dropzone">
          <Dropzone
            className="dropzone dz-clickable"
            onDragEnter={this.dragEnter}
            onDragLeave={this.dragLeave} 
            onDrop={this.onImageDrop} 
            multiple={false} 
            name='file'>
            <div className="dz-message"> Drop an image or pdf or click </div>
          </Dropzone>
        </div>
      </div>
    );
  }
}


export default UploadReceipts;
