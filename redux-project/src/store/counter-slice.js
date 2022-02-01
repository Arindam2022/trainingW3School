import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCount: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increase(state) {
      state.counter++;
    },
    decrease(state) {
      state.counter--;
    },
    increment(state, action) {
      state.counter = state.counter + action.payload.amount;
    },
    toggle(state) {
      state.showCount = !state.showCount;
    },
  },
});

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increase") {
//     return { counter: state.counter + 1, showCount: state.showCount };
//   }
//   if (action.type === "decrease") {
//     return { counter: state.counter - 1, showCount: state.showCount };
//   }
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + action.amount,
//       showCount: state.showCount,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCount: !state.showCount,
//     };
//   }
//   return state;
// };
