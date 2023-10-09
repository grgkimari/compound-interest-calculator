import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import Form from "./Components/Form/Form";
import ResultPane from "./Components/ResultPane/ResultPane";
import { GlobalStateType, GrowthChartDataType } from "./App.types";
import MainReducer from "./Utils/MainReducer";
import { useReducer, useState } from "react";
import BarChart from "./Components/BarChart/BarChart";

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
  const [ChartDataState, setChartDataState] = useState<GrowthChartDataType[]>(
    []
  );
  const [state, dispatch] = useReducer(MainReducer, InitialState);
  return (
    <div className="App">
      <span className="TopSection">
        <Form
          setChartDataState={setChartDataState}
          chartDataState={ChartDataState}
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
        <ResultPane
          amountInvested={
            state.originalInvestment +
            state.recurringInvestment *
              state.compoundingDuration *
              state.recurringInvestmentFrequency
          }
          totalAmount={state.totalAmount}
        />
      </span>
      <BarChart chartDataState={ChartDataState} />
    </div>
  );
}

export default App;
