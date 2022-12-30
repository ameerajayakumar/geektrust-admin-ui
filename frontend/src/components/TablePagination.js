import { Box, IconButton, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import './TablePagination.css';

const TablePagination = ({ pageRange, userData, setPage, page }) => {
  const [lastDisable, setLastDisable] = useState(false);
  const [firstDisable, setFirstDisable] = useState(false);

  useEffect(() => {
    if (page === pageRange[pageRange.length - 1]) {
      setLastDisable(true);
      setFirstDisable(false);
    } else if (page === 1) {
      setFirstDisable(true);
      setLastDisable(false);
    }
  }, [page, pageRange]);

  const handleNextPage = () => {
    if (pageRange.includes(page + 1)) setPage(page + 1);
  };
  const handleLastPage = () => {
    setPage(pageRange[pageRange.length - 1]);
  };
  const handleFirstPage = () => {
    setPage(1);
  };
  const handlePrevPage = () => {
    if (pageRange.includes(page - 1)) setPage(page - 1);
  };

  return (
    <Box>
      <IconButton key="firstPage" className="firstPageBtn pageBtn" onClick={handleFirstPage} disabled={firstDisable}>
        <KeyboardDoubleArrowLeftIcon />
      </IconButton>
      <IconButton key="prevPage" className="prevBtn pageBtn" onClick={handlePrevPage} disabled={firstDisable}>
        <KeyboardArrowLeftIcon />
      </IconButton>
      {pageRange.map((pageNum) => (
        <Button key={pageNum} onClick={() => setPage(pageNum)} className={page === pageNum ? 'activeBtn pageBtn' : 'inactiveBtn pageBtn'}>
          {pageNum}
        </Button>
      ))}
      <IconButton key="nextPage" className="nextBtn pageBtn" onClick={handleNextPage} disabled={lastDisable}>
        <KeyboardArrowRightIcon />
      </IconButton>
      <IconButton key="lastPage" className="lastPageBtn pageBtn" onClick={handleLastPage} disabled={lastDisable}>
        <KeyboardDoubleArrowRightIcon />
      </IconButton>
    </Box>
  );
};

export default TablePagination;
//footer
