import { BUDGETS_REQUEST, BUDGETS_SUCCESS, BUDGETS_FAILURE } from './types';
import axios from 'axios';

export default function getBudgets() {
  return dispatch => {
    dispatch(budgetRequest());

    axios.get('/budget')
      .then(res => {
        axios.get('/');
        dispatch(budgetSuccess(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        dispatch(budgetFailure(err));
      });
  };
}

const budgetSuccess = (budgets) => {
  return {
    type: BUDGETS_SUCCESS,
    budgets
  };
};

const budgetFailure = (err) => {
  return {
    type: BUDGETS_FAILURE,
    err
  };
};

const budgetRequest = () => {
  return {
    type: BUDGETS_REQUEST
  };
};
