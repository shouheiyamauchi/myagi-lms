import React from 'react';
import PropTypes from 'prop-types';

const Text = props => {
  const {
    materialData
  } = props;

  return (
    <div>
      <h1>{materialData.title}</h1>
      <p>{materialData.description}</p>
    </div>
  );
}

Text.propTypes = {
  materialData: PropTypes.object.isRequired
}

export default Text;
