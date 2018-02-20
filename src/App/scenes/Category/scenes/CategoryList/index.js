import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { List, Avatar, Divider } from 'antd';

const CategoryList = props => {
  const {
    match,
    currentCategoryData
  } = props;

  return (
    <div>
      <Divider>Subcategories</Divider>
      <List
        itemLayout="horizontal"
        dataSource={currentCategoryData.categories}
        renderItem={category => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar>{category.name[0]}</Avatar>}
              title={<Link to={`${match.url}/${category.id}`}>{category.name}</Link>}
              description={category.description}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

CategoryList.propTypes = {
  match: PropTypes.object.isRequired,
  currentCategoryData: PropTypes.object.isRequired
}

export default CategoryList;
