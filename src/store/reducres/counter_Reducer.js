import { ACTION_ONE, ACTION_TWO } from "../actions/counter_actions";

export const counterReducer = (state = 1000, action) => {
  switch (action.type) {
    case ACTION_ONE:
      return state - action.Payload;
    case ACTION_TWO:
      return state + action.Payload;
    default:
      return state;
  }
};
