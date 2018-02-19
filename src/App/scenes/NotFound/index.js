import React from 'react';
import { Icon } from 'antd';
import styles from './styles.module.scss';

const NotFound = props => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Icon type="frown" style={{ fontSize: '100px' }} />
        <br /><br />
        <h1>404 Error</h1>
        The requested page could not be found.
      </div>
    </div>
  );
}

export default NotFound;
