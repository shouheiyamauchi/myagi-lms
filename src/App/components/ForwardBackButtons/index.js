import React from 'react';
import { Button, Icon } from 'antd';
import styles from './styles.module.scss';

const ForwardBackButtons = props => {
  return (
    <div className={styles.buttonContainer}>
      <Button.Group size="small">
        <Button type="primary" onClick={() => window.history.back()}>
          <Icon type="left" />Backward
        </Button>
        <Button type="primary" onClick={() => window.history.forward()}>
          Forward<Icon type="right" />
        </Button>
      </Button.Group>
      <br /><br />
    </div>
  );
}

export default ForwardBackButtons;
