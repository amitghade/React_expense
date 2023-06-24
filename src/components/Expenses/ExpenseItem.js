import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useEffect, useState } from "react";

function ExpenseItem(props) {
  // let arr = useState('');
  // console.log(arr);

  const [name, setName] = useState(props.title);

  const clickMe = () => {
    setName("Updated!");
  };

  useEffect(() => {
    //console.log("Name Changed:::", name);
  }, [name]);
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>
          {name}
        </h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickMe}>Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
