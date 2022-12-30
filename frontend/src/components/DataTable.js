import { IconButton, TextField, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SaveIcon from '@mui/icons-material/Save';
import TableFooter from './TableFooter';
import './DataTable.css';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import useDataTable from '../hooks/useDataTable';

const StyledCell = styled(TableCell)(() => ({
  color: '#ffffff',
  letterSpacing: '1px',
}));

const DataTable = ({ userData }) => {
  const [editRow, setEditRow] = useState('');
  const [ischeckAll, setCheckAll] = useState(false);
  const [ischecked, setSelectedRow] = useState([]);
  const [page, setPage] = useState(1);
  const { pageRange, pageData } = useDataTable(userData, page, 10);
  const [rowData, setRows] = useState(pageData);

  useEffect(() => {
    setRows(pageData);
  }, [userData, pageData]);

  const handleRowDelete = (id) => {
    const afterDeletionUsers = rowData.filter((row) => row.id !== id);
    //if only one user & its deleted, move to prev page
    if (afterDeletionUsers.length < 1 && page !== 1) setPage(page - 1);
    else setRows(afterDeletionUsers);
  };

  const handleBulkDelete = () => {
    console.log('Selected', ischecked);
    console.log('pageData', pageData);
    const bulkSelection = pageData.filter((row) => !ischecked.includes(row.id));
    if (bulkSelection.length < 1 && page === 1) setPage(page + 1);
    else setPage(page - 1);
    console.log('bulkd', bulkSelection);
    // setRows(bulkSelection);
    setSelectedRow([]);
    if (ischeckAll) setCheckAll(false);
  };
  console.log('rowdatss', rowData);

  const handleEditUser = (id, event) => {
    let usersAfterEdition = pageData.map((user) => {
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

  const handleCheckAll = () => {
    setCheckAll(!ischeckAll);
    setSelectedRow(pageData.map((row) => row.id));
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
            <TableRow key={row.id} className={editRow === row.id || ischecked.includes(row.id) ? 'editRow' : 'noneditRow'}>
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
                  {editRow === row.id ? (
                    <SaveIcon className="saveicon" fontSize="inherit" />
                  ) : (
                    <ModeEditIcon fontSize="inherit" className="editicon" />
                  )}
                </IconButton>
                <IconButton className="deleteicon" aria-label="delete user" component="label" size="small" onClick={() => handleRowDelete(row.id)}>
                  <DeleteForeverIcon fontSize="small" />
                </IconButton>
              </StyledCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TableFooter
        selectedRows={ischecked}
        deleteSeleted={handleBulkDelete}
        users={rowData}
        totalPages={pageRange}
        setPage={setPage}
        page={page}
      ></TableFooter>
    </TableContainer>
  );
};

export default DataTable;
