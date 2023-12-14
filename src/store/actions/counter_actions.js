 export const ACTION_ONE = "Action_ONE";
 export const ACTION_TWO = "Action_TWO";


//const ACtions
export const withdraw = (amount) => {
  return {
    type: ACTION_ONE,
    Payload: amount,
  };
};
export const despoit = (amount) => {
  return {
    type: ACTION_TWO,
    Payload: amount,
  };
};
