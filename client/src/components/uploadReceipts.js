import React from 'react';
import ReactDOM from 'react-dom';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import Promise from 'bluebird';
import matchItemToCategory from './ocrPostProcessing.js';
import store from '../store';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getReceipts from '../actions/getReceipts.js';
import AddTransactionsForm2 from './addTransactionsForm2.js';
import { Button } from 'semantic-ui-react';
import ReactSpinner from 'react-spinjs';


class UploadReceipts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hide: true,
      parsedTransaction: {
        vendor: '',
        description: '',
        amount: -1,
        date: '',
        category: '',
        profile_id: -1,
        loading: false
      }
    };
    this.onImageDrop = this.onImageDrop.bind(this);
    this.onUploadClick = this.onUploadClick.bind(this);
    this.onFinishSaveStore = this.onFinishSaveStore.bind(this);
  }

  onUploadClick() {
    console.log('upload button clicked');
  }

  onFinishSaveStore() {
    this.setState({hide: false});
  }

  onImageDrop(acceptedFiles) {
    var self = this;
    self.setState({loading: true});
    acceptedFiles.forEach((file)=> {
      var fr = new FileReader();
      fr.onload = function(e) {
        var base64String = e.target.result.slice(23, e.target.result.length);
        axios({
          method: 'get',
          url: '/ocr'
        })
          .then(function(response) {
            var googleUrl = 'https://vision.googleapis.com/v1/images:annotate?key=' + response.data; 
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
                console.log('full text', parsedText[0].description);
                var outputObj = matchItemToCategory(parsedText[0].description);
                self.onFinishSaveStore();
                self.setState({parsedTransaction: outputObj, loading:false});
              });
          });
      };
      fr.readAsDataURL(file);
    });
  }


  render() {
    return (
      <div>
        {this.state.loading ? 
          <div>
            <ReactSpinner />
            <br>
            </br>
              <h3>PARSING RECEIPT... PLEASE WAIT...</h3>
            <br>
            </br>
          </div> :
          <div id="receipt-dropzone">
            <Dropzone
              onDrop={this.onImageDrop}
              name='file' id="dropped" ref="dropped">
              <div>Drag and Drop a Receipt Image</div>
            </Dropzone>
            <br/>
          </div>
        }
        {
          this.state.hide ? null : 
          <div>
            <h3>RECEIPT TEXT PARSED</h3>
            <br/>
            <AddTransactionsForm2 parsed={this.state.parsedTransaction} />    
          </div>
        }
      </div>
    );
  }
}


//connects root reducer to props
const mapStateToProps = (state) => {
  return {
    receipts: state.receipts.receipts
  };
};

//connects redux actions to props
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getReceipts: getReceipts
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadReceipts);

//export default UploadReceipts;
