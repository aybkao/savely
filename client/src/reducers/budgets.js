// function budgets(state=[], action) {
//   switch(action.type) {
//     case 'ADD_BUDGET':
//       const i = action.index;
//       console.log('budget added');
//       return state;
//     default:
//       return state;
//   }
// }
// export default budgets;


import { BUDGETS_REQUEST, BUDGETS_SUCCESS ,BUDGETS_FAILURE } from '../actions/types';

export default function budgets(state={isFetching: false, budgets:[], err:''}, action) {
  
  switch(action.type) {

    case BUDGETS_REQUEST:
      return {
      	...state,
      	isFetching: true
      }

    case BUDGETS_SUCCESS:
      return {
      	...state, 
      	budgets: action.budgets,
      	isFetching: false
      }
    
    case BUDGETS_FAILURE:
      return {
        ...state, 
        err: action.err,
        isFetching: false
      }

    default:
      return state;
  }
}


