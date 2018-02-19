import React from 'react';
import { Icon } from 'antd';

const NotFound = props => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1><Icon type="frown" /></h1>
      <h1>404 Error</h1>
      The requested page could not be found.
    </div>
  );
}

export default NotFound;
