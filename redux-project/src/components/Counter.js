import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector(state => state.showCount);
 

  const inchandler = () => {
    dispatch({ type: "increase" });
  };

  const increasehandler = () => {
    dispatch({ type: "increment", amount: 5 });
  };

  const decHandler = () => {
    dispatch({ type: "decrease" });
  };
   
  const toggleCounterHandler = () => {
    dispatch({type:'toggle'});
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={inchandler}>Increase</button>
        <button onClick={increasehandler}>Increase by 5</button>
        <button onClick={decHandler}>Decrease</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
