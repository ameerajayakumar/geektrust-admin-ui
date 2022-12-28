import { useSnackbar } from 'notistack';
import Search from './Search';
import { config } from '../utils/Config';
import DataTable from './DataTable';
import Footer from './Footer';
import { Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [userData, updateUsers] = useState([]);
  const [loading, showLoading] = useState(false);

  useEffect(() => {
    const onPageLoad = async () => {
      const data = await performAPICall();
      console.log('1st', data);
    };
    onPageLoad();
  }, []);

  const performAPICall = async () => {
    try {
      showLoading(true);
      const response = await axios.get(`${config.endpoint}`);
      updateUsers(response.data);
      showLoading(false);
      return response.data;
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
      showLoading(false);
      return null;
    }
  };

  const performSearchCall = async (searchKeyword) => {
    console.log('SearchKeyword', searchKeyword);
  };

  return (
    <Box>
      <Search></Search>
      {loading ? <Box></Box> : <DataTable userData={userData}></DataTable>}

      <Footer></Footer>
    </Box>
  );
};

export default LandingPage;
