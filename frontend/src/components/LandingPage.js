import Search from './Search';
import { config } from '../utils/Config';
import DataTable from './DataTable';
import Footer from './Footer';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [userData, updateUsers] = useState([]);
  const [userCopyData, updateCopyUsers] = useState([]);

  useEffect(() => {
    const performAPICall = async () => {
      try {
        const response = await axios(`${config.endpoint}`);
        updateUsers(response.data);
        updateCopyUsers(response.data);
        return response.data;
      } catch (error) {
        console.log('error', error.message);
        return null;
      }
    };
    const onPageLoad = async () => {
      const data = await performAPICall();
    };
    onPageLoad();
  }, []);

  const performSearchCall = async (searchKeyword) => {
    const filteredUsers = userCopyData.filter((user) => {
      const name = user.name;
      const email = user.email;
      const role = user.role;
      return name.toLowerCase().includes(searchKeyword) || email.toLowerCase().includes(searchKeyword) || role.toLowerCase().includes(searchKeyword);
    });
    updateUsers(filteredUsers);
  };

  return (
    <Box>
      {userData.length ? (
        <Box>
          <Search performSearch={performSearchCall}></Search>
          <DataTable userData={userData}></DataTable>
          <Footer></Footer>
        </Box>
      ) : (
        <Box>
          <Search performSearch={performSearchCall}></Search>
          <Typography variant="h6" component="div" className="nousersfound">
            No Users Found!
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default LandingPage;
