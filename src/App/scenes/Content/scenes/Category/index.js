import React from 'react';
import PropTypes from 'prop-types';
import { List, Avatar } from 'antd';

const Category = props => {
  const {
    currentPageData,
    currentPageBreadCrumb
  } = props;

  return (
    <div>
      <h1>Categories</h1>
      {currentPageData.categories.length ? (
        <List
          itemLayout="horizontal"
          dataSource={currentPageData.categories}
          renderItem={category => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar>{category.name[0]}</Avatar>}
                title={<a href={currentPageBreadCrumb.url + category.id}>{category.name}</a>}
                description={category.description}
              />
            </List.Item>
          )}
        />
      ) : (
        <h3>None</h3>
      )}
    </div>
  );
}

Category.propTypes = {
  currentPageData: PropTypes.object.isRequired,
  currentPageBreadCrumb: PropTypes.object
}

export default Category;
