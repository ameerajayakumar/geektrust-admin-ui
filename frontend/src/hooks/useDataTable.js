import { useState, useEffect } from 'react';

const calcPageRange = (data, perPageCount) => {
  const pageRange = [];
  const pageCount = Math.ceil(data.length / perPageCount);
  for (let i = 1; i <= pageCount; i++) pageRange.push(i);
  return pageRange;
};
const dataPerPage = (data, page, perPageCount) => {
  return data.slice((page - 1) * perPageCount, page * perPageCount);
};

const useDataTable = (data, page, usersPerPage) => {
  const [pageRange, setPageRange] = useState([]);
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    const totalPageCount = calcPageRange(data, usersPerPage);
    setPageRange([...totalPageCount]);
    const usersCount = dataPerPage(data, page, usersPerPage);
    setPageData([...usersCount]);
  }, [data, setPageRange, page, setPageData, usersPerPage]);

  return { pageRange, pageData };
};

export default useDataTable;
