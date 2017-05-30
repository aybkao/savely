import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'semantic-ui-react';
import DropzoneComponent from 'react-dropzone-component';
var componentConfig = {
    iconFiletypes: ['.jpg', '.png', '.gif'],
    showFiletypeIcon: true,
    postUrl: '/uploadHandler'
};

class UploadReceipts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="receipt_dropzone">
        <h3>Receipt Upload Area</h3>
        <DropzoneComponent config={componentConfig}
                       eventHandlers={eventHandlers}
                       djsConfig={djsConfig} />
        <Button fluid>Upload Receipt</Button>
      </div>
    )
  }
};

export default UploadReceipts;
