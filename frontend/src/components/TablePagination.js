import { Box, Button } from '@mui/material';

const TablePagination = ({ userData, usersPerPage }) => {
  const calcPageRange = (data, perPageCount) => {
    const pageRange = [];
    console.log('UDATA', data);
    const pageCount = Math.ceil(data.length / perPageCount);
    for (let i = 1; i <= pageCount; i++) pageRange.push(i);
    console.log('page range', pageRange);
    return pageRange;
  };

  const dataPerPage = (data, page, perPageCount) => {};
  const pageCount = calcPageRange(userData, usersPerPage);
  const userRows = dataPerPage(userData, usersPerPage);
  return <Box>pagination</Box>;
};

export default TablePagination;
