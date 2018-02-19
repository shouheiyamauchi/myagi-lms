import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'antd';

const Navigation = props => {
  const {
    breadCrumbItems,
    currentUrl
  } = props;

  return (
    <Breadcrumb>
      {breadCrumbItems.map((breadCrumbItem, index) => {
        return <Breadcrumb.Item key={index}><a href={breadCrumbItem.url}>{breadCrumbItem.categoryName}</a></Breadcrumb.Item>
      })}
    </Breadcrumb>
  );
}

Navigation.propTypes = {
  breadCrumbItems: PropTypes.array.isRequired
}

export default Navigation;
