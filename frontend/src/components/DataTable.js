import { IconButton, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SaveIcon from '@mui/icons-material/Save';
import './DataTable.css';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';

const DataTable = ({ userData }) => {
  const [rowData, setRows] = useState(userData);
  const [editRow, setEditRow] = useState('');

  useEffect(() => {
    setRows(userData);
  }, [userData]);

  const handleRowDelete = (id) => {
    setRows(rowData.filter((row) => row.id !== id));
  };

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
          {rowData.map((row) => (
            <TableRow key={row.id} className={editRow === row.id ? 'editRow' : 'noneditRow'}>
              <StyledCell>X</StyledCell>
              <StyledCell>
                <TextField
                  disabled={editRow === row.id ? false : true}
                  className="nameCell"
                  size="small"
                  placeholder="user name"
                  name="name"
                  value={row.name}
                  variant="standard"
                  InputProps={{
                    sx: { color: '#ffffff', fontSize: '16px' },
                    className: 'inputName',
                    disableUnderline: true,
                  }}
                />
              </StyledCell>
              <StyledCell>
                <TextField
                  disabled={editRow === row.id ? false : true}
                  className="emailCell"
                  size="small"
                  placeholder="user email"
                  name="email"
                  value={row.email}
                  variant="standard"
                  InputProps={{
                    sx: { color: '#ffffff', fontSize: '16px' },
                    className: 'inputEmail',
                    disableUnderline: true,
                  }}
                />
              </StyledCell>
              <StyledCell>
                <TextField
                  disabled={editRow === row.id ? false : true}
                  className="roleCell"
                  size="small"
                  placeholder="role"
                  name="role"
                  value={row.role}
                  variant="standard"
                  InputProps={{
                    sx: { color: '#ffffff', fontSize: '16px' },
                    className: 'inputRole',
                    disableUnderline: true,
                  }}
                />
              </StyledCell>
              <StyledCell>
                {}

                <IconButton
                  aria-label="edit or save user"
                  component="label"
                  size="small"
                  onClick={() => {
                    const currRowId = row.id;
                    if (editRow !== currRowId) setEditRow(row.id);
                    else setEditRow('');
                  }}
                >
                  {editRow === row.id ? <SaveIcon fontSize="inherit" /> : <ModeEditIcon fontSize="inherit" />}
                </IconButton>
                <IconButton aria-label="edit user" component="label" size="small" onClick={() => handleRowDelete(row.id)}>
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
