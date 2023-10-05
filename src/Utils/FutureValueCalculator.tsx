import { GrowthChartDataType } from "../App.types";

const CalculateFutureValue = (initialInvestment :number, annualContribution : number, annualInterestRate : number, years : number) => {
  //Keep track of values for visualization
  const data : GrowthChartDataType[] = []
    // Convert the annual interest rate to a decimal
  const r = annualInterestRate / 100;
  
  // Calculate the future value
  let FV = initialInvestment;
  
  for (let year = 1; year <= years; year++) {
    
    FV += annualContribution; 
    data.push({
      label : `Year ${year}`,
      value : FV
    })
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