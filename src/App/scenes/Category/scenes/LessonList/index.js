import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Checkbox, List, Avatar, Divider } from 'antd';

class LessonList extends Component {
  getChildrenCategoryLessons = parentCategory => {
    let lessons = parentCategory.lessons;

    parentCategory.categories.forEach(category => {
      lessons = lessons.concat(this.getChildrenCategoryLessons(category));
    });

    return lessons;
  }

  render() {
    const {
      currentCategoryData,
      displaySubCategoryLessonsToggle,
      displaySubCategoryLessons
    } = this.props;

    const lessonsListDataSource = displaySubCategoryLessons ? this.getChildrenCategoryLessons(currentCategoryData) : currentCategoryData.lessons;

    return (
      <div>
        <Divider>Lessons</Divider>
        <Checkbox checked={displaySubCategoryLessons} onChange={displaySubCategoryLessonsToggle}>
          Display Subcategory Lessons
        </Checkbox>
        <br /><br />
        <List
          itemLayout="horizontal"
          dataSource={lessonsListDataSource}
          renderItem={lesson => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar>{lesson.name[0]}</Avatar>}
                title={<Link to={`/lessons/${lesson.id}`}>{lesson.name}</Link>}
                description={lesson.description}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

LessonList.propTypes = {
  currentCategoryData: PropTypes.object.isRequired,
  displaySubCategoryLessonsToggle: PropTypes.func.isRequired,
  displaySubCategoryLessons: PropTypes.bool.isRequired
}

export default LessonList;
