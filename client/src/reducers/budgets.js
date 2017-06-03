function budgets(state=[], action) {
  switch(action.type) {
    case 'ADD_BUDGET':
      const i = action.index;
      console.log('budget added');
      return state;
    default:
      return state;
  }
}

export default budgets;
