import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Youtube = props => {
  const {
    materialData
  } = props;

  return (
    <div className={styles.videoContainer}>
      <iframe
        width="100%"
        title={materialData.video_url}
        src={materialData.video_url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
}

Youtube.propTypes = {
  materialData: PropTypes.object.isRequired
}

export default Youtube;
