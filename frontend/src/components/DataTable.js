import { Table, TableBody, TableCell, TableContainer, Box, TableRowColumn, TableHead, TableRow } from '@mui/material';
import './DataTable.css';
import { styled } from '@mui/material/styles';

const DataTable = ({ userData }) => {
  const StyledCell = styled(TableCell)(() => ({
    color: '#ffffff',
    letterSpacing: '1px',
    // fontSize: '0.85rem',
  }));

  return (
    <TableContainer className="tableContainer">
      <Table>
        <TableHead>
          <TableRow key="tableHeadingsID">
            <StyledCell className="tableHeader">X</StyledCell>
            <StyledCell className="tableHeader">NAME</StyledCell>
            <StyledCell className="tableHeader">EMAIL</StyledCell>
            <StyledCell className="tableHeader">ROLE</StyledCell>
            <StyledCell className="tableHeader">ACTIONS</StyledCell>
          </TableRow>
        </TableHead>
        {userData.length ? (
          <TableBody>
            {userData.map((row) => (
              <TableRow key={row.id} className="tableRow">
                <StyledCell>X</StyledCell>
                <StyledCell>{row.name}</StyledCell>
                <StyledCell>{row.email}</StyledCell>
                <StyledCell>{row.role}</StyledCell>
                <StyledCell> EDIT DELETE</StyledCell>
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <TableBody>
            <TableRow>
              <StyledCell colSpan={5} className="nousersfound">
                No Users Found!
              </StyledCell>
            </TableRow>
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
};

export default DataTable;
