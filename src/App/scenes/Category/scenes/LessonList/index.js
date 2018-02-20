import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { List, Avatar, Divider } from 'antd';

const LessonList = props => {
  const {
    match,
    currentCategoryData
  } = props;

  return (
    <div>
      <div style={{ clear: 'left' }} />
      <Divider>Lessons</Divider>
      <List
        itemLayout="horizontal"
        dataSource={currentCategoryData.lessons}
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

LessonList.propTypes = {
  match: PropTypes.object.isRequired,
  currentCategoryData: PropTypes.object.isRequired
}

export default LessonList;
