import { Dispatch, SetStateAction } from "react";
import { GrowthChartDataType } from "../App.types";

const CalculateFutureValue = (setChartDataState : Dispatch<SetStateAction<GrowthChartDataType[]>>,chartDataState : GrowthChartDataType[],initialInvestment :number, annualContribution : number, annualInterestRate : number, years : number) => {
  //Clear the current data points
  setChartDataState([])
  console.log("Cleared state.")
    // Convert the annual interest rate to a decimal
  const r = annualInterestRate / 100;
  
  // Calculate the future value
  let FV = initialInvestment;
  
  for (let year = 1; year <= years; year++) {
    
    FV += annualContribution; 
    let currentState = chartDataState
    console.log(`Current State before push : ${JSON.stringify(currentState)}`)
    currentState.push({
      label : `Year ${year}`,
      value : FV
    })
    console.log(`Current State after push : ${JSON.stringify(currentState)}`)
    setChartDataState(currentState)
    if(year === years){
      return FV
    }
    console.log(`Amount at the end of year ${year}:\nBefore applying interest : ${FV}`)                                                                                                                                             
    FV *= (1 + r);
    console.log(`After applying interest : ${FV}`)
  }
  return parseFloat(FV.toFixed(2))
}

export default CalculateFutureValue 