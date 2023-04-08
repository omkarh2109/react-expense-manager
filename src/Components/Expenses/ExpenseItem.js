import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <Card className="expense__item">
      <ExpenseDate date={new Date(props.date)} />
      <div className="expense__item__description">
        <h2>{props.title}</h2>
        <div className="expense__item__amount">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
