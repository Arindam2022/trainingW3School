import { createStore } from "redux";

const initialState = { counter: 0, showCount: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === "increase") {
    return { counter: state.counter + 1, showCount: state.showCount };
  }
  if (action.type === "decrease") {
    return { counter: state.counter - 1, showCount: state.showCount };
  }
  if (action.type === "increment") {
    return {
      counter: state.counter + action.amount,
      showCount: state.showCount,
    };
  }
  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCount: !state.showCount,
    };
  }
  return state;
};
const store = createStore(counterReducer);

export default store;
