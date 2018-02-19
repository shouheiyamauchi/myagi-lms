import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'antd';
import _ from 'lodash';
import Navigation from './components/Navigation';
import Category from './scenes/Category';

const Content = props => {
  const {
    breadCrumbItems,
    currentPageData
  } = props;

  return (
    <div>
      <Navigation breadCrumbItems={breadCrumbItems} />
      <Divider />
      <Category currentPageData={currentPageData} currentPageBreadCrumb={_.last(breadCrumbItems)} />
    </div>
  );
}

Content.propTypes = {
  breadCrumbItems: PropTypes.array.isRequired,
  currentPageData: PropTypes.object.isRequired
}

export default Content;
