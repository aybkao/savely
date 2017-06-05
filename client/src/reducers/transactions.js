import { TRANSACTIONS_REQUEST, TRANSACTIONS_SUCCESS ,TRANSACTIONS_FAILURE } from '../actions/types';

export default function transactions(state={isFetching: false, transactions:[], err:''}, action) {
  
  switch(action.type) {
    // case ADD_TRANSACTION:
    //   const i = action.index;
    //   console.log('transaction added');
    //   return state;
    case TRANSACTIONS_REQUEST:
      return {
      	...state,
      	isFetching: true
      }

    case TRANSACTIONS_SUCCESS:
      return {
      	...state, 
      	transactions: action.transactions,
      	isFetching: false
      }
    
    case TRANSACTIONS_FAILURE:
      return {
        ...state, 
        err: action.err,
        isFetching: false
      }

    default:
      return state;
  }
}

//export default transactions;
