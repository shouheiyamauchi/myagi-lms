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
    parentCategoryData,
    displaySubCategoryLessonsToggle,
    displaySubCategoryLessons
  } = props;

  if (parentCategoryData === null) return <div>Loading...</div>;

  const currentCategoryData = parentCategoryData.categories.find(category => category.id === parseInt(match.params.id, 10));

  const categoryParams = {
    displaySubCategoryLessonsToggle,
    displaySubCategoryLessons,
    parentCategoryData: currentCategoryData
  };

  const categoryListParams = {
    match,
    currentCategoryData
  };

  const lessonListParams = {
    displaySubCategoryLessonsToggle,
    displaySubCategoryLessons,
    currentCategoryData
  };

   if (currentCategoryData) {
    return (
      <div>
        <Navigation match={match} currentCategoryData={currentCategoryData} />
        <Route path={`${props.match.url}/:id`} render={(urlParams) => <Category {...urlParams} {...categoryParams} />} />

        {props.match.isExact && (
          <div className={styles.categoryContainer}>
            <br />
            <h1>{currentCategoryData.name}</h1>
            <p>{currentCategoryData.description}</p>
            <CategoryList {...categoryListParams} />
            <LessonList {...lessonListParams} />
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
  parentCategoryData: PropTypes.object,
  displaySubCategoryLessonsToggle: PropTypes.func.isRequired,
  displaySubCategoryLessons: PropTypes.bool.isRequired
}

export default Category;
