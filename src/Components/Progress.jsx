// import donations from "./App.jsx";

export default function Progress({targetAmount, donations}) {
  const total = donations.reduce((accu, obj) => accu+=obj.amount,0);
  return (
    <>
      
      <h1>Raised <span className="total-amount">${total}</span> of <span className="total-amount">${targetAmount}</span></h1>
    </>
  );
}
