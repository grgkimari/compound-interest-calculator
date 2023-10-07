export interface GlobalStateType {
  originalInvestment: number;
  recurringInvestment: number;
  recurringInvestmentFrequency: number;
  annualInterest: number;
  compoundingFrequency: number;
  compoundingDuration: number;
  totalAmount: number;
}

export interface GrowthChartDataType {
  label: string;
  value: number;
}
