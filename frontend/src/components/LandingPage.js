import Search from './Search';
import { config } from '../utils/Config';
import DataTable from './DataTable';
import { Box, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [userData, updateUsers] = useState([]);
  const [userCopyData, updateCopyUsers] = useState([]);
  const [loading, showLoader] = useState(false);

  useEffect(() => {
    const performAPICall = async () => {
      try {
        showLoader(true);
        const response = await axios(`${config.endpoint}`);
        updateUsers(response.data);
        updateCopyUsers(response.data);
        showLoader(false);
        return response.data;
      } catch (error) {
        //can use enqueueSnackbar instead of console.log
        console.log('error', error.message);
        showLoader(false);
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
      <Search performSearch={performSearchCall}></Search>
      {loading ? (
        <Box className="loading">
          <CircularProgress />
          <Typography variant="h4" component="div">
            Loading Users...
          </Typography>
        </Box>
      ) : (
        <Box>
          {userData.length ? (
            <Box>
              <DataTable userData={userData}></DataTable>
            </Box>
          ) : (
            <Box>
              {/* <Search performSearch={performSearchCall}></Search> */}
              <Typography variant="h6" component="div" className="nousersfound">
                No Users Found!
              </Typography>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default LandingPage;
