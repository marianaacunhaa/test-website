// reducer -> function that returns a state
// 2 arguments -> initialState and action
const reducer = (state = 0, action) => {
  // we want to read the action and return the appropriate state (switch is typically used)
  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case "withdraw":
      state - action.payload;
    default:
      return state;
  }
};

export default reducer;
