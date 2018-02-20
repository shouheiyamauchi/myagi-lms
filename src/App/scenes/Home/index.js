import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import styles from './styles.module.scss';

const Home = props => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Icon type="form" style={{ fontSize: '100px' }} />
        <br /><br />
        <h1>Welcome to Myagi LMS</h1>
        Click <Link to="/categories">here</Link> to browse contents.
      </div>
    </div>
  );
}

export default Home;
