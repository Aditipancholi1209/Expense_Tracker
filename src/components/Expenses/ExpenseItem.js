import './ExpenseItem.css';
import React ,{ useState } from "react";
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";

const ExpenseItem = (props) => {

return (
<Card className="expense-item">
    <ExpenseDate date={new Date (props.Date)} />
    <div className="expense-item__description">
        <h2>{props.Title}</h2>
        <div className="expense-item__price">${props.Amount}</div>
    </div>
    </Card>
    );  
}
export default ExpenseItem;