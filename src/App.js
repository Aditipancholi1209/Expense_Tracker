import React, { useState, useEffect } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
let DUMMY_EXPENSE = [];
const App = () => {

    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);


//     useEffect(() => {
//         fetch('https://api.sampleapis.com/beers/ale')
//         .then(
//             response => {
//                 return response.json();
//             }
//         ).then(
//             data => {
//                 //console.log(data);
//                 setExpenses(data);
//             }
//         );
// } 
//     , []);



const addExpenseHandler = (expense) => {
        const updatedExpense = [expense, ...expenses]

        setExpenses(updatedExpense);
    // fetch('https://api.sampleapis.com/beers/ale', {
    //     method: 'POST',
    //     body: JSON.stringify(expense),
    //     headers: {
    //         'content-Type': 'application/json'
    //     }
    // }).then(
    //     response=>{

    //     }
    // );
    // };

}


    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item={expenses} />
        </div>
    );
    }

export default App; 