const LoggedReducer = (state = false, action) => {
  switch (action.type) {
    case "SignIn":
      return !state;
    default:
      return state;
  }
};
export default LoggedReducer;
