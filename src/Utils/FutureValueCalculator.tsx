import { Dispatch, SetStateAction } from "react";
import { GrowthChartDataType } from "../App.types";
import { flushSync } from "react-dom";

const CalculateFutureValue = (
  setChartDataState: Dispatch<SetStateAction<GrowthChartDataType[]>>,
  chartDataState: GrowthChartDataType[],
  initialInvestment: number,
  annualContribution: number,
  annualInterestRate: number,
  years: number
) => {
  //Clear the current data points
  flushSync(() =>
    setChartDataState((prevState) => {
      prevState.splice(0);
      return [...prevState];
    })
  );

  // Convert the annual interest rate to a decimal
  const r = annualInterestRate / 100;

  // Calculate the future value
  let FV = initialInvestment;

  for (let year = 1; year <= years; year++) {
    FV += annualContribution;
    let currentState = chartDataState;
    
    currentState.push({
      label: `Year ${year}`,
      value: FV,
    });
    
    setChartDataState(currentState);
    if (year === years) {
      return FV;
    }
    console.log(
      `Amount at the end of year ${year}:\nBefore applying interest : ${FV}`
    );
    FV *= 1 + r;
    
  }
  return parseFloat(FV.toFixed(2));
};

export default CalculateFutureValue;
