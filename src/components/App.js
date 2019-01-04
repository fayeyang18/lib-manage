import React from 'react';
import Toubu from './Toubu';
import Sider from './Sider';

const App = ({children}) => {
  return (
    <div>
        <Toubu />
        <Sider />
        <div>{children}</div>
    </div>
  );
};
export default App;
