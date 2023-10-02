import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import Form from "./Components/Form/Form";
import ResultPane from "./Components/ResultPane/ResultPane";
import { GlobalStateType } from "./App.types";
import MainReducer from "./Utils/MainReducer";
import { useReducer } from "react";

const InitialState: GlobalStateType = {
  originalInvestment: 0,
  recurringInvestment: 0,
  recurringInvestmentFrequency: 1,
  annualInterest: 0,
  compoundingFrequency: 1,
  compoundingDuration: 0,
  totalAmount: 0,
};

function App() {
  const [state, dispatch] = useReducer(MainReducer, InitialState);
  return (
    <div className="App">
      <Form
        dispatch={dispatch}
        formState={{
          originalInvestment: state.originalInvestment,
          recurringInvestment: state.recurringInvestment,
          recurringInvestmentFrequency: state.recurringInvestmentFrequency,
          annualInterest: state.annualInterest,
          compoundingFrequency: state.compoundingFrequency,
          compoundingDuration: state.compoundingDuration,
        }}
      />
      <ResultPane totalAmount={state.totalAmount} />
    </div>
  );
}

export default App;
