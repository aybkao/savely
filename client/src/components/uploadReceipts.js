import React from 'react';
import Dropzone from 'react-dropzone';
import {Button} from 'semantic-ui-react';
import axios from 'axios';
import Promise from 'bluebird';
import keys from '../../../apiKeys.js';

class UploadReceipts extends React.Component {
  constructor(props) {
    super(props);
    this.onImageDrop = this.onImageDrop.bind(this);
    this.onUploadClick = this.onUploadClick.bind(this);
    //this.ocr = this.ocr.bind(this);
  }

  onUploadClick() {
    console.log('upload button clicked');
  }

  onImageDrop(acceptedFiles) {
    // localStorage.setItem("imgData", imgData);
    // var dataImage = localStorage.getItem('imgData');
    // console.log(dataImage);
    acceptedFiles.forEach((file)=> {
      var fr = new FileReader();
      fr.onload = function(e) {
        var base64String = e.target.result.slice(23, e.target.result.length);
        var apiKey = process.env.GOOGLE_CLOUD_VISION_API_KEY || keys.GOOGLE_CLOUD_VISION_API_KEY;
        var googleUrl = 'https://vision.googleapis.com/v1/images:annotate?key=' + apiKey;
        axios({
          method: 'post',
          url: googleUrl,
          data: {
            "requests": [
              {
                "image": {
                  "content": base64String
                },
                "features": [
                  {
                    "type": "TEXT_DETECTION"
                  }
                ]
              }
            ]
          }
        })
          .then(function(response) {
            var parsedText = response.data.responses[0].textAnnotations;
            parsedText.forEach((line) => {
              console.log(line.description);
            });
          });
      };
      fr.readAsDataURL(file);
    });
  }


  render() {
    return (
      <div>
        <div id="receipt-dropzone">
          <Dropzone
            onDragEnter={this.dragEnter}
            onDragLeave={this.dragLeave}
            onDrop={this.onImageDrop}
            name='file' id="dropped" ref="dropped">
            <div>Drag and Drop a Receipt Image</div>
          </Dropzone>
        </div>
        <Button fluid onClick={this.onUploadClick}>Upload Receipt</Button>
      </div>
    );
  }
}


export default UploadReceipts;
