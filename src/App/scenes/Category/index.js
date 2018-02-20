import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link, Redirect } from "react-router-dom";
import Navigation from './components/Navigation';
import CategoryList from './scenes/CategoryList';

const Category = props => {
  const {
    match,
    parentCategoryData
  } = props;

  const currentCategoryData = parentCategoryData.categories.find(category => category.id == match.params.id);

  if (currentCategoryData) {
    return (
      <div>
        <Navigation match={match} currentCategoryData={currentCategoryData} />
        <Route path={`${props.match.url}/:id`} render={(urlParams) => <Category {...urlParams} parentCategoryData={currentCategoryData} />} />

        {props.match.isExact && <CategoryList match={match} currentCategoryData={currentCategoryData} />}
      </div>
    );
  } else {
    return <Redirect push to="/404/" />;
  };
}

Category.propTypes = {
  match: PropTypes.object.isRequired,
  parentCategoryData: PropTypes.object.isRequired
}

export default Category;
