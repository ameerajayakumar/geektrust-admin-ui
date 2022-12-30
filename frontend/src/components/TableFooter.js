import { Box, Button } from '@mui/material';
import TablePagination from './TablePagination';
import './TableFooter.css';

const TableFooter = ({ selectedRows }) => {
  return (
    <Box class="tableFooter">
      <Button disabled={selectedRows.length ? false : true} variant="contained" name="deleteChecked" className="deleteSelectedBtn">
        Delete Selected
      </Button>
      <TablePagination />
    </Box>
  );
};

export default TableFooter;
