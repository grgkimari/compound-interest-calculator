
export interface ReducerActionType{
    type : String
    payload :  number 
}

export interface FormStateType{
    
    originalInvestment : number
    recurringInvestment : number,
    recurringInvestmentFrequency : number,
    annualInterest : number
    compoundingFrequency : number
    compoundingDuration : number

}