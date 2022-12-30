import { Box, Button } from '@mui/material';
import TablePagination from './TablePagination';
import './TableFooter.css';

const TableFooter = ({ selectedRows, deleteSeleted, users, totalPages, setPage, page }) => {
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
      <TablePagination pageRange={totalPages} userData={users} setPage={setPage} page={page} />
    </Box>
  );
};

export default TableFooter;
//table
