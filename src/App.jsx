import { useState } from "react";
export default App;

function App() {
  const [Amountt, setAmount] = useState(0);
  const [selfAmt, setSelf] = useState(0);
  const [frndAmt, setFrndAmt] = useState(0);
  // const [tip, setTip] = useState(0);

  let tip = (selfAmt + frndAmt) / 2;
  let total = Amountt + tip;
  console.log("---", Amountt, selfAmt, frndAmt, total, tip);
  function handleAmount(amount) {
    setAmount(Number(amount));
  }
  function handleSelfService(percent) {
    setSelf((Amountt / 100) * Number(percent));
  }
  function handleFrndService(fpercent) {
    setFrndAmt((Amountt / 100) * Number(fpercent));
    console.log("frndAmt");
  }

  return (
    <>
      <Billamount billamt={Amountt} onAddAmount={handleAmount} />
      <Selfservice onSelectPercent={handleSelfService} />
      <Frndservice onSelectFrndPercent={handleFrndService} />
      <h3>
        You pay ${total} (${Amountt} + ${tip})
      </h3>
    </>
  );
}

function Billamount({ billamt, onAddAmount }) {
  return (
    <div>
      <form>
        How much was the bill?
        <input
          type="text"
          placeholder={billamt}
          // value={billamt}
          onChange={(e) => onAddAmount(e.target.value)}
        ></input>
      </form>
    </div>
  );
}

function Selfservice({ onSelectPercent }) {
  return (
    <form>
      How did you like the service?
      <span>
        <select onChange={(e) => onSelectPercent(e.target.value)}>
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutly amazing! (20%)</option>
        </select>
      </span>
    </form>
  );
}
function Frndservice({ onSelectFrndPercent }) {
  return (
    <form>
      How did your friend like the service?
      <span>
        <select onChange={(e) => onSelectFrndPercent(e.target.value)}>
          <option value="0">Dissatisfied (0%)</option>

          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutly amazing! (20%)</option>
        </select>
      </span>
    </form>
  );
}
