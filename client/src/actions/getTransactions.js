import { TRANSACTIONS_REQUEST, TRANSACTIONS_SUCCESS, TRANSACTIONS_FAILURE } from './types';
import axios from 'axios';

export default function getTransactions() {
  return dispatch => {
    dispatch(transactionRequest());
    
    axios.get('/transaction')
      .then(res => {
        console.log('all the transactions::', res.data); 
        dispatch(transactionSuccess(res.data));
      })
      .catch((err) => {
        dispatch(transactionFailure(err));
      });
  };
}

const transactionSuccess = (transactions) => {
  return {
    type: TRANSACTIONS_SUCCESS,
    transactions
  };
};

const transactionFailure = (err) => {
  return {
    type: TRANSACTIONS_FAILURE,
    err
  };
};

const transactionRequest = () => {
  return {
    type: TRANSACTIONS_REQUEST
  };
};