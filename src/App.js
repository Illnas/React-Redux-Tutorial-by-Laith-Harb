
import './App.css';
import {  useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from './Store/index';


function App() {
  // this hook is used in any componenet no matter how deep nested to access state!!!
  const account = useSelector((state)=> state.account);
  const dispatch = useDispatch();

  const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch)
 

  return (
    <div className="App">
    <h1>{account}</h1>
    <button onClick={()=> depositMoney(1000)}>Deposit</button>
    <button onClick={()=> withdrawMoney(500)}>Withdraw</button>
    </div>
  );
}

export default App;
