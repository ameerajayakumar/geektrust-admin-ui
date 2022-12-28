import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, gridPageCountSelector, gridPageSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import Pagination from '@mui/material/Pagination';

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  console.log('apiref', apiRef);
  console.log(page);
  console.log('c', pageCount);

  return <Pagination color="primary" count={pageCount} page={page + 1} onChange={(event, value) => apiRef.current.setPage(value - 1)} />;
}

export default function CustomPaginationGrid() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  });
  console.log({ ...data });

  return (
    <Box sx={{ height: 700, width: '100%' }}>
      <DataGrid
        pagination
        pageSize={10}
        rowsPerPageOptions={[7]}
        components={{
          Pagination: CustomPagination,
        }}
        {...data}
      />
    </Box>
  );
}
