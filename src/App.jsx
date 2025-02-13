import "./App.css";
import { useState } from "react";

const [statement, setStatemnt] = useState("")
const [amount, setAmount] = useState("")
const [statmentType, setStatementType] = useState("income")

function App() {
  return (
    <main>
      <div>
        <h1 className="total-text">0</h1>
        <div className="input-container">
          <input type="text" placeholder="Income or expense" 
          onChange={(e) => {setStatemnt(e.target.value);
          }}/>
          
          <input type="number" />
          <select>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button>+</button>
        </div>
        <div>
          <div className="card">
            <div className="card-info">
              <h4>Salary</h4>
              <p>July 27th, 2024</p>
            </div>
            <p className="amount-text success">+$5000</p>
          </div>
        </div>
      </div>
    </main>
  );
}
export default App;