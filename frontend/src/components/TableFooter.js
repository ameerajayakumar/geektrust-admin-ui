import { Box, Button } from '@mui/material';
import TablePagination from './TablePagination';
import './TableFooter.css';

const TableFooter = ({ selectedRows, deleteSeleted, users, usersPerPage }) => {
  return (
    <Box className="tableFooter">
      <Button
        disabled={selectedRows.length ? false : true}
        variant="contained"
        name="deleteChecked"
        className="deleteSelectedBtn"
        onClick={deleteSeleted}
      >
        Delete Selected
      </Button>
      <TablePagination userData={users} usersPerPage={usersPerPage} />
    </Box>
  );
};

export default TableFooter;
