import "./ExpenseItem.css";

function ExpenseItem(props /* we can also write {date,title,amount} instead of props. This is known as object destructuring */) {
  const month = props.date.toLocaleString('en-US', {month:'long'});
  const day = props.date.toLocaleString('en-US', {day:'2-digit'});
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
        </div>  {/*if using object destructuring syntax we can write the code as date.toString()} */}
      <div className="expense-item__description">
        <h2>{props.title} </h2> {/* is using object destructuring syntax we can write the code as title only */}
        <div className="expense-item__price">${props.amount }</div> {/* is using object destructuring syntax we can write the code as amount only*/}
      </div>
    </div>
  );
}

export default ExpenseItem;
