
export interface ReducerActionType{
    type : String
    payload :  Number 
}

export interface FormStateType{
    
    originalInvestment : Number
    recurringInvestment : Number,
    recurringInvestmentFrequency : Number,
    annualInterest : Number
    compoundingFrequency : Number
    compoundingDuration : Number

}