function transactions(state=[], action) {
  switch(action.type) {
    case 'ADD_TRANSACTION':
      const i = action.index;
      console.log('transaction added');
      return state;
    default:
      return state;
  }
}

export default transactions;
