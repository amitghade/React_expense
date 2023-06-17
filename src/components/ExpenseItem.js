import "./ExpenseItem.css";

function ExpenseItem(props /* we can also write {date,title,amount} instead of props. This is known as object destructuring */) {
  return (
    <div className="expense-item">
      <div>{props.date.toString()/* is using object destructuring syntax we can write the code as date.toString()*/}</div>
      <div className="expense-item__description">
        <h2>{props.title /* is using object destructuring syntax we can write the code as title only*/}</h2>
        <div className="expense-item__price">${props.amount /* is using object destructuring syntax we can write the code as amount only*/}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
