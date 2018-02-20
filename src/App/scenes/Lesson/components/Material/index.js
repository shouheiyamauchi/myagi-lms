import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import MultipleChoiceQuestion from './components/MultipleChoiceQuestion';
import Text from './components/Text';
import Youtube from './components/Youtube';

const Material = props => {
  const {
    materialData
  } = props;

  const MaterialDisplay = {
    MaterialMultipleChoiceQuestion: <MultipleChoiceQuestion materialData={materialData} />,
    MaterialText: <Text materialData={materialData} />,
    MaterialYoutube: <Youtube materialData={materialData} />
  }[materialData.materialType];

  return (
    <Card>{MaterialDisplay}</Card>
  );
}

Material.propTypes = {
  materialData: PropTypes.object.isRequired
}

export default Material;
