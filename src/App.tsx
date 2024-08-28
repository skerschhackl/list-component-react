import React, { useEffect, useState } from 'react';
import { IListItem } from './types/listItem';
import { Container, Typography } from '@mui/material';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import ListView from './components/ListView';
import './styles/base.css';


function App() {
  
  /** 
   * @todo
   * data fetch should ideally be moved into an API helper / utility file
   * - ensures re-usability for other components throughout the app
   * - ensures decoupling from component logic
   * **/
  const [items, setItems] = useState<IListItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('./data.json');
      const data = await response.json();
      setItems(data);
      setIsLoading(false);
    } catch (error) {
      /** 
       * @todo add error handling
      */
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="wrapper">
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1">
          Cats of 2022
        </Typography>
      </Container>

      {/* Consideration: using Skeleton instead of loading spinner */}
      {isLoading && <div className='loading-container'>
        <SyncOutlinedIcon data-testid="loading-spinner"
          sx={{
            animation: 
              "spin 2s linear infinite", 
              "@keyframes spin": {
                "0%": { transform: "rotate(360deg)" },
                "100%": { transform: "rotate(0deg)" }
              }
            }
          }/>
      </div>}
      {!isLoading && <ListView items={items}></ListView>}
      
      <Container maxWidth="sm" className="footer">
        <Typography variant="body2" color="text.secondary" align="center">
          Copyright © Stefanie {new Date().getFullYear()}
        </Typography>
      </Container>
    </div>
  );
}

export default App;
