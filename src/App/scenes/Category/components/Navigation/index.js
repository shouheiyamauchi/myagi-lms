import React from 'react';
import { Breadcrumb } from 'antd';

const Navigation = props => {
  const {
    breadCrumbItems
  } = props;

  return (
    <Breadcrumb>
      {breadCrumbItems.map((breadCrumbItem, index) => {
        return <Breadcrumb.Item key={index}><a href={breadCrumbItem.url}>{breadCrumbItem.categoryName}</a></Breadcrumb.Item>
      })}
    </Breadcrumb>
  );
}

export default Navigation;
