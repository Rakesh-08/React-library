export const increment = (num) => {
  return {
    type: "Increment",
    payload: num
  };
};

export const decrement = () => {
  return {
    type: "Decrement"
  };
};

export const signIn = () => {
  return {
    type: "SignIn"
  };
};
