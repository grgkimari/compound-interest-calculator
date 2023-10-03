import { Typography } from '@mui/material'
import { ResultPaneContainer } from './ResultPane.styles'

const ResultPane = ({totalAmount} : {totalAmount : number}) => {
  return (
    <ResultPaneContainer>
        <Typography variant='h4' color="success" id="Total Amount">{totalAmount.toString()}</Typography>
        <Typography variant='h4' color="success" id="Invested Amount">1,000</Typography>
        <Typography variant='h4' color="success" id="Compounded Amount">1,000</Typography>
    </ResultPaneContainer>
  )
}

export default ResultPane