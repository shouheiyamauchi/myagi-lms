import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Navigation = props => {
  const {
    match,
    currentCategoryData
  } = props;

  return (
    <div style={{ float: 'left' }}>
      {match.params.id === '1' ? (
        <Link to={match.url}>Top</Link>
      ) : (
        <span>&nbsp;/&nbsp;<Link to={`${match.url}`}>{currentCategoryData.name}</Link></span>
      )}
    </div>
  );
}

Navigation.propTypes = {
  match: PropTypes.object.isRequired,
  currentCategoryData: PropTypes.object.isRequired
}

export default Navigation;
