import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (porps) => {
  return (
    <Card className="expenses">
      {
        porps.item.map(
          ex => (
            <ExpenseItem
              key={ex.id}
              date={ex.date}
              title={ex.title}
              amount={ex.amount}
            />
          )
        )
      }
    </Card>
  );
};

export default Expenses;
