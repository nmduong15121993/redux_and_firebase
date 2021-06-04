import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import Storage from '../../local-storage';

function HomePage() {
  const history = useHistory();
  function Logout() {
    Storage.removeUser();
    history.push('/login');
  }

  return(
    <div>
      <h1>Home Page</h1>
        <Button 
          type="primary"
          onClick={Logout}
        >
          Logout
        </Button>
    </div>


  );
};

export { HomePage };