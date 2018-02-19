import React, { Component } from 'react';
import MockDatabase from 'MockDatabase';
import 'antd/dist/antd.css'
import { Layout } from 'antd';
import NotFound from './scenes/NotFound';
import Category from './scenes/Category';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      currentPath: [],
      breadCrumbItems: [],
      currentPageData: {},
      notFound: false
    };
  }

  componentDidMount() {
    this.setState({
      data: MockDatabase.categoryWithAllChildren(1),
      currentPath: this.getCurrentPath()
    }, () => {
      this.setCurrentPageData();
    });
  }

  getCurrentPath = () => {
    // convert current URL path into array of IDs
    return window.location.pathname.split('/').filter(pathElement => pathElement !== '');
  }

  setCurrentPageData() {
    let notFound;
    let index = 0;

    let lastParentCategory = this.state.data;
    const breadCrumbItems = [
      {
        url: '/',
        categoryName: 'Home'
      }
    ];

    while(!notFound && this.state.currentPath[index]) {
      const categoryId = parseInt(this.state.currentPath[index]);

      lastParentCategory = this.getChildCategory(lastParentCategory, categoryId);

      if (lastParentCategory) {
        const url = breadCrumbItems[breadCrumbItems.length - 1].url + lastParentCategory.id + '/';
        const categoryName = lastParentCategory.name;

        breadCrumbItems.push({ url, categoryName });
        index++;
      } else {
        notFound = true;
      };
    };

    notFound ? this.setState({ notFound }) : this.setState({ currentPageData: lastParentCategory, breadCrumbItems });
  }

  getChildCategory(parentCategoryObject, childCategoryId) {
    return parentCategoryObject.categories.find(childCategoryObject => childCategoryObject.id === childCategoryId);
  }

  render() {
    const {
      breadCrumbItems,
      currentPageData,
      notFound
    } = this.state;

    return (
      <Layout style={{ minHeight: 'calc(100vh)' }}>
        <Layout.Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
          {notFound ? (
            <NotFound />
          ) : (
            <Category breadCrumbItems={breadCrumbItems} currentPageData={currentPageData} />
          )}
        </Layout.Content>
      </Layout>
    );
  }
}

export default App;
