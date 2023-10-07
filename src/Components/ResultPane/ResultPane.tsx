import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { ResultPaneContainer } from "./ResultPane.styles";

const ResultPane = ({
  totalAmount,
  amountInvested,
}: {
  totalAmount: number;
  amountInvested: number;
}) => {
  return (
    <ResultPaneContainer>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Total Amount Invested</TableCell>
            <TableCell>{amountInvested.toFixed(2).toString()}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total Interest Earned</TableCell>
            <TableCell>
              {(totalAmount - amountInvested).toFixed(2).toString()}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Future Value</TableCell>
            <TableCell>
              <Typography variant="h6">
                {totalAmount.toFixed(2).toString()}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </ResultPaneContainer>
  );
};

export default ResultPane;
