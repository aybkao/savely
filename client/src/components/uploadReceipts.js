import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'semantic-ui-react';
import Dropzone from 'react-dropzone';

class UploadReceipts extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="receipt_dropzone">
        <h3>Receipt Upload Area</h3>
        <Button fluid>Upload Receipt</Button>
      </div>
    )
  }
};

export default UploadReceipts;
