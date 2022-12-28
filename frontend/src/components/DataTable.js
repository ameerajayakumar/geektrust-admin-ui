import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import './DataTable.css';
import { styled } from '@mui/material/styles';

const DataTable = ({ userData }) => {
  const StyledCell = styled(TableCell)(() => ({
    color: '#ffffff',
  }));

  return (
    <TableContainer className="tableContainer">
      <Table>
        <TableHead>
          <TableRow className="tableRow">
            <StyledCell>X</StyledCell>
            <StyledCell>NAME</StyledCell>
            <StyledCell>EMAIL</StyledCell>
            <StyledCell>ROLE</StyledCell>
            <StyledCell>ACTIONS</StyledCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((row) => (
            <TableRow key={row.id}>
              <StyledCell>X</StyledCell>
              <StyledCell>{row.name}</StyledCell>
              <StyledCell>{row.email}</StyledCell>
              <StyledCell>{row.role}</StyledCell>
              <StyledCell> EDIT DELETE</StyledCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
