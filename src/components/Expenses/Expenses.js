import React from "react";
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from "../UI/Card";
const Expenses = (props) => {
    return(
        <Card className='expenses'>
            {
                props.item.map(
                    expense => (
                    <ExpenseItem 
                    key = { expense.id }
                    Date={expense.date} 
                    Title={expense.title} 
                    Amount={expense.amount} />
                    )
                )
            }
   </Card> 
);}

export default Expenses;