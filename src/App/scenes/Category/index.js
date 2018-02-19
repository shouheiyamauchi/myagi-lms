import React from 'react';
import Navigation from './components/Navigation';
import { Divider } from 'antd';

const Category = props => {
  const {
    breadCrumbItems,
    currentPageData
  } = props;

  return (
    <div>
      <Navigation breadCrumbItems={breadCrumbItems} />
      <Divider />
      Category
    </div>
  );
}

export default Category;
