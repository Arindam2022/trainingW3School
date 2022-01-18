import React, { useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
  const[isEditing, setIsEditing]=useState(false);


  const SaveDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const editingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };



  return (
    <div className="new-expense">
      {!isEditing &&<button onClick={editingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveData={SaveDataHandler} onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;
