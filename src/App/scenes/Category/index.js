import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation';
import CategoryList from './scenes/CategoryList';
import LessonList from './scenes/LessonList';
import styles from './styles.module.scss';

const Category = props => {
  const {
    match,
    parentCategoryData
  } = props;

  if (parentCategoryData === null) return <div>Loading...</div>;

  const currentCategoryData = parentCategoryData.categories.find(category => category.id === parseInt(match.params.id, 10));

   if (currentCategoryData) {
    return (
      <div>
        <Navigation match={match} currentCategoryData={currentCategoryData} />
        <Route path={`${props.match.url}/:id`} render={(urlParams) => <Category {...urlParams} parentCategoryData={currentCategoryData} />} />

        {props.match.isExact && (
          <div className={styles.categoryContainer}>
            <br />
            <h1>{currentCategoryData.name}</h1>
            <p>{currentCategoryData.description}</p>
            <CategoryList match={match} currentCategoryData={currentCategoryData} />
            <LessonList match={match} currentCategoryData={currentCategoryData} />
          </div>
        )}
      </div>
    );
  } else {
    return <Redirect push to="/404" />;
  };
}

Category.propTypes = {
  match: PropTypes.object.isRequired,
  parentCategoryData: PropTypes.object
}

export default Category;
