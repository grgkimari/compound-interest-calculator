import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { GrowthChartDataType } from "../../App.types";
import CalculateFutureValue from "../../Utils/FutureValueCalculator";
import {
  UPDATE_COMPOUNDING_DURATION,
  UPDATE_COMPOUNDING_FREQUENCY,
  UPDATE_INTEREST_RATE,
  UPDATE_ORIGINAL_INVESTMENT,
  UPDATE_RECURRING_INVESTMENT,
  UPDATE_RECURRING_INVESTMENT_FREQUENCY,
  UPDATE_TOTAL_AMOUNT,
} from "../../Utils/MainReducer";
import { FormContainer } from "./Form.styles";
import { FormStateType, ReducerActionType } from "./Form.types";

const Form = ({
  formState,
  dispatch,
  setChartDataState,
  chartDataState
}: {
  formState: FormStateType;
  dispatch: Dispatch<ReducerActionType>;
  setChartDataState : Dispatch<SetStateAction<GrowthChartDataType[]>>;
  chartDataState  : GrowthChartDataType[]
}) => {
  const calculate = () => {
    
    let result = CalculateFutureValue(setChartDataState, chartDataState, formState.originalInvestment, (formState.recurringInvestment * formState.recurringInvestmentFrequency), formState.annualInterest, formState.compoundingDuration)
    dispatch({
      type : UPDATE_TOTAL_AMOUNT,
      payload : result
    })
    window.scrollTo({
      top : 520,
      left :0,
      behavior : "smooth"
    })
  }
  console.log(`FormState : ${JSON.stringify(formState)}`);
  return (
    <FormContainer>
      <Typography variant="h6" color="primary">
        Enter details below.
      </Typography>
      <InputLabel id="Original Investment Label">
        Original Investment Amount
      </InputLabel>
      <TextField
        type="number"
        size="small"
        label="Original Investment"
        value={formState.originalInvestment}
        onChange={(event) =>
          dispatch({
            type: UPDATE_ORIGINAL_INVESTMENT,
            payload: parseInt(event.target.value),
          })
        }
      />
    
      <InputLabel id="Recurring investment label">
        Recurring Investment Amount
      </InputLabel>
      <TextField
        type="number"
        label="Recurring investment"
        value={formState.recurringInvestment}
        onChange={(event) => {
          dispatch({
            type: UPDATE_RECURRING_INVESTMENT,
            payload: parseInt(event.target.value),
          });
        }}
      />
      <InputLabel id="Recurring Investment Frequency Label">
        Recurring Investment Frequency{" "}
      </InputLabel>
      <Select
        label="Recurring Investment Frequency"
        value={formState.recurringInvestmentFrequency}
        labelId="Recurring Investment Frequency Label"
        onChange={(event) => dispatch({
          type : UPDATE_RECURRING_INVESTMENT_FREQUENCY,
          payload :  event.target.value as number
        })}
      >
        <MenuItem value={12}>Monthly</MenuItem>
        <MenuItem value={4}>Quarterly</MenuItem>
        <MenuItem value={2}>Bi-Annually</MenuItem>
        <MenuItem value={1}>Annually</MenuItem>
      </Select>
      <InputLabel id="Interest Rate Label">Annual Interest Rate</InputLabel>
      <TextField
        type="number"
        label="Interest Rate"
        value={formState.annualInterest}
        onChange={(event) =>
          dispatch({
            type: UPDATE_INTEREST_RATE,
            payload: parseInt(event.target.value),
          })
        }
      />
      <InputLabel id="Compounding frequency Label">
        Compunding Frequency
      </InputLabel>
      <Select
        labelId="Compounding frequency Label"
        label="Compounding frequency"
        value={formState.compoundingFrequency}
        onChange={(event) =>
          dispatch({
            type: UPDATE_COMPOUNDING_FREQUENCY,
            payload: event.target.value as number,
          })
        }
      >
        <MenuItem value={1}>Annual</MenuItem>
        <MenuItem value={2}>Bi-Annual</MenuItem>
        <MenuItem value={4}>Quarterly</MenuItem>
        <MenuItem value={12}>Monthly</MenuItem>
      </Select>
      <InputLabel id="Compounding Duration Label">
        Investment Duration
      </InputLabel>
      <TextField
        type="number"
        value={formState.compoundingDuration}
        onChange={(event) =>
          dispatch({
            type: UPDATE_COMPOUNDING_DURATION,
            payload: parseInt(event.target.value),
          })
        }
        label="Compounding Duration in Years"
      />
      <Button variant="contained"
      onClick={() => calculate()}>Calculate</Button>
    </FormContainer>
  );
};

export default Form;
