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
        src={materialData.video_url}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      />
    </div>
  );
}

Youtube.propTypes = {
  materialData: PropTypes.object.isRequired
}

export default Youtube;
