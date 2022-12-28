import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
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

        <TableBody>
          {userData.map((row) => (
            <TableRow key={row.id} className="tableRow">
              <StyledCell>X</StyledCell>
              <StyledCell>{row.name}</StyledCell>
              <StyledCell>{row.email}</StyledCell>
              <StyledCell>{row.role}</StyledCell>
              <StyledCell>
                <IconButton aria-label="edit user" component="label" size="small">
                  <ModeEditIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="edit user" component="label" size="small">
                  <DeleteForeverIcon fontSize="small" />
                </IconButton>
              </StyledCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
