// import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { withdraw, despoit } from "./RTK/slices/counter-slice";

import Products from "./components/Products";

function App() {
  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(state);
  return (
    <div className="App">
      bank account is :{state}
      <button
        onClick={() => {
          dispatch(withdraw(100));
        }}
      >
        withdraw
      </button>
      <button
        onClick={() => {
          dispatch(despoit(200));
        }}
      >
        despoit
      </button>
      <Products />
    </div>
  );
}

export default App;
