import './style.css';

interface IAmountProps {
  value: number;
  onAmountChange: (newCount:number) => void;
}

const Amount = ({ value, onAmountChange }: IAmountProps) => {

 const handelIncrement = () => {
    onAmountChange(value + 1);
  }

  const handelDecrement = () => {
    if (value > 0) {
      onAmountChange(value - 1);
    }
  }

  return (
    <div className="amount">
      <button className="amount__btn" onClick={handelDecrement}>–</button>
      <div className="amount__count">{value}</div>
      <button className="amount__btn" onClick={handelIncrement}>+</button>
    </div>
  );
};

export default Amount;
