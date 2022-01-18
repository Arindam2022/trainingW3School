import { useState } from "react/cjs/react.development";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredtitle, setenteredTitle] = useState("");
  const [enteredamount, setenteredAmount] = useState("");
  const [entereddate, setentereddate] = useState("");

  const titleChanger = (event) => {
    setenteredTitle(event.target.value);
  };
  const amountChanger = (event) => {
    setenteredAmount(event.target.value);
  };
  const dateChanger = (event) => {
    setentereddate(event.target.value);
  };
  const submitter = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredtitle,
      amount: +enteredamount,
      date: new Date(entereddate),
    };
    props.onSaveData(expenseData);
    setenteredTitle('');
    setenteredAmount('');
    setentereddate('');

  };
  return (
    <form onSubmit={submitter}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredtitle} onChange={titleChanger} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="1" step="1" value={enteredamount} onChange={amountChanger} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2000-01-01" value={entereddate} onChange={dateChanger} />
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add expenses</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
