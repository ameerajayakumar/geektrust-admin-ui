import { IconButton, TextField, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SaveIcon from '@mui/icons-material/Save';
import TableFooter from './TableFooter';
import './DataTable.css';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';

const StyledCell = styled(TableCell)(() => ({
  color: '#ffffff',
  letterSpacing: '1px',
  // fontSize: '0.85rem',
}));

const DataTable = ({ userData }) => {
  const [rowData, setRows] = useState(userData);
  const [editRow, setEditRow] = useState('');
  const [ischeckAll, setCheckAll] = useState(false);
  const [ischecked, setSelectedRow] = useState([]);

  useEffect(() => {
    setRows(userData);
  }, [userData]);

  const handleRowDelete = (id) => {
    setRows(rowData.filter((row) => row.id !== id));
  };

  const handleEditUser = (id, event) => {
    let usersAfterEdition = rowData.map((user) => {
      if (user.id === id && event.target.name === 'name') {
        user.name = event.target.value;
        return user;
      } else if (user.id === id && event.target.name === 'email') {
        user.email = event.target.value;
        return user;
      } else if (user.id === id && event.target.name === 'role') {
        user.role = event.target.value;
        return user;
      } else return user;
    });
    setRows(usersAfterEdition);
  };

  const handleCheckAll = (event) => {
    setCheckAll(!ischeckAll);
    setSelectedRow(rowData.map((row) => row.id));
    if (ischeckAll) {
      setSelectedRow([]);
    }
  };

  const handleCheckedRow = (event) => {
    setSelectedRow([...ischecked, event.target.id]);
    if (!event.target.checked) {
      setSelectedRow(ischecked.filter((rowId) => rowId !== event.target.id));
    }
  };

  return (
    <TableContainer className="tableContainer">
      <Table>
        <TableHead>
          <TableRow key="tableHeadingsID">
            <StyledCell className="tableHeader">
              <Checkbox
                checked={ischeckAll}
                onChange={handleCheckAll}
                size="small"
                sx={{
                  color: '#ffffff',
                  '&.Mui-checked': {
                    color: '#ffffff',
                  },
                }}
              />
            </StyledCell>
            <StyledCell className="tableHeader header">NAME</StyledCell>
            <StyledCell className="tableHeader header">EMAIL</StyledCell>
            <StyledCell className="tableHeader header">ROLE</StyledCell>
            <StyledCell className="tableHeader ">ACTIONS</StyledCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rowData.map((row) => (
            <TableRow key={row.id} className={editRow === row.id ? 'editRow' : 'noneditRow'}>
              <StyledCell>
                <Checkbox
                  checked={ischecked.includes(row.id)}
                  onChange={handleCheckedRow}
                  key={row.id}
                  id={row.id}
                  size="small"
                  sx={{
                    color: '#ffffff',
                    '&.Mui-checked': {
                      color: '#ffffff',
                    },
                  }}
                />
              </StyledCell>
              <StyledCell>
                <TextField
                  key={row.id}
                  disabled={editRow === row.id ? false : true}
                  className="nameCell userCell"
                  size="small"
                  placeholder="user name"
                  name="name"
                  value={row.name}
                  variant="standard"
                  InputProps={{
                    sx: { color: '#ffffff', fontSize: '16px' },
                    className: 'inputName innerCell',
                    disableUnderline: true,
                  }}
                  onChange={(event) => handleEditUser(row.id, event)}
                />
              </StyledCell>
              <StyledCell>
                <TextField
                  disabled={editRow === row.id ? false : true}
                  className="emailCell userCell"
                  size="small"
                  placeholder="user email"
                  name="email"
                  value={row.email}
                  variant="standard"
                  InputProps={{
                    sx: { color: '#ffffff', fontSize: '16px' },
                    className: 'inputEmail innerCell',
                    disableUnderline: true,
                  }}
                  onChange={(event) => handleEditUser(row.id, event)}
                />
              </StyledCell>
              <StyledCell>
                <TextField
                  disabled={editRow === row.id ? false : true}
                  className="roleCell userCell"
                  size="small"
                  placeholder="role"
                  name="role"
                  value={row.role}
                  variant="standard"
                  InputProps={{
                    sx: { color: '#ffffff', fontSize: '16px' },
                    className: 'inputRole innerCell',
                    disableUnderline: true,
                  }}
                  onChange={(event) => handleEditUser(row.id, event)}
                />
              </StyledCell>
              <StyledCell>
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
      <TableFooter selectedRows={ischecked}></TableFooter>
    </TableContainer>
  );
};

export default DataTable;
