import { RECEIPTS_SUCCESS } from '../actions/types';

export default function receipts(state={receipts:[]}, action) {
  
  switch(action.type) {

    case RECEIPTS_SUCCESS:
      return {
      	receipts: action.receipts
      }

    default:
      return state;
  }
}