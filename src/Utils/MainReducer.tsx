import { Reducer } from "react";
import { ReducerActionType } from "../Components/Form/Form.types";
import { GlobalStateType } from "../App.types";

export const UPDATE_ORIGINAL_INVESTMENT = "UPDATE_ORIGINAL_INVESTMENT";
export const UPDATE_RECURRING_INVESTMENT = "UPDATE_RECURRING_INVESTMENT";
export const UPDATE_RECURRING_INVESTMENT_FREQUENCY =
  "UPDATE_RECURRING_INVESTMENT_FREQUENCY";
export const UPDATE_INTEREST_RATE = "UPDATE_INTEREST_RATE";
export const UPDATE_COMPOUNDING_FREQUENCY = "UPDATE_COMPOUNDING_FREQUENCY";
export const UPDATE_COMPOUNDING_DURATION = "UPDATE_COMPOUNDING_DURATION";
export const UPDATE_TOTAL_AMOUNT = "UPDATE_TOTAL_AMOUNT";

const MainReducer: Reducer<GlobalStateType, ReducerActionType> = (
  state: GlobalStateType,
  action: ReducerActionType
): GlobalStateType => {
  switch (action.type) {
    case UPDATE_TOTAL_AMOUNT:
      return {
        ...state,
        totalAmount: action.payload,
      };
    case UPDATE_COMPOUNDING_DURATION:
      return {
        ...state,
        compoundingDuration: action.payload,
      };

    case UPDATE_COMPOUNDING_FREQUENCY:
      return {
        ...state,
        compoundingFrequency: action.payload,
      };
    case UPDATE_INTEREST_RATE:
      return {
        ...state,
        annualInterest: action.payload,
      };
    case UPDATE_ORIGINAL_INVESTMENT:
      return {
        ...state,
        originalInvestment: action.payload,
      };
    case UPDATE_RECURRING_INVESTMENT:
      return {
        ...state,
        recurringInvestment: action.payload,
      };
    case UPDATE_RECURRING_INVESTMENT_FREQUENCY:
      return {
        ...state,
        recurringInvestmentFrequency: action.payload,
      };
    default:
      return state;
  }
};

export default MainReducer;
