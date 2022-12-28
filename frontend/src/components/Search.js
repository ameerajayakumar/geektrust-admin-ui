import { TextField, Box } from '@mui/material';
import React, { useState } from 'react';
import './Search.css';

const Search = ({ performSearch }) => {
  const [debounceTimer, updateDebounceTimer] = useState(0);

  const handleSearch = (event, debounceTimeOut) => {
    const searchText = event.target.value;
    if (debounceTimeOut);
    clearTimeout(debounceTimeOut);
    const setTimer = setTimeout(() => {
      performSearch(searchText);
    }, 500);
    updateDebounceTimer(setTimer);
  };

  return (
    <Box className="searchBox">
      <TextField
        placeholder="Search by name, email or role"
        name="search"
        variant="standard"
        className="searchTextField"
        onChange={(e) => handleSearch(e, debounceTimer)}
        size="small"
        InputProps={{
          sx: { color: '#ffffff', fontSize: '16px', bgcolor: '#121212' },
          className: 'searchInner',
          disableUnderline: true,
        }}
      />
    </Box>
  );
};

export default Search;
