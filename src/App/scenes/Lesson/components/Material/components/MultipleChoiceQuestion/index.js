import React from 'react';
import PropTypes from 'prop-types';

const MultipleChoiceQuestion = props => {
  const {
    materialData
  } = props;

  return (
    <div>{materialData.materialType}</div>
  );
}

MultipleChoiceQuestion.propTypes = {
  materialData: PropTypes.object.isRequired
}

export default MultipleChoiceQuestion;
