import React, { Component } from 'react';
import MockDatabase from 'MockDatabase';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      currentPath: [],
      notFound: false,
      breadCrumbItems: [],
      currentPageData: {}
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
    return window.location.pathname.split('/').slice(1);
  }

  setCurrentPageData() {
    let notFound;
    let index = 0;
    let lastParentCategory = this.state.data;
    const currentPageLevel = this.state.currentPath.length - 1;
    const breadCrumbItems = [
      {
        url: '/',
        categoryName: 'Home'
      }
    ];

    while(!notFound && this.state.currentPath[index]) {
      const categoryId = parseInt(this.state.currentPath[index]);

      lastParentCategory = this.getChildCategory(lastParentCategory, categoryId);

      if (index === currentPageLevel) this.setState({ currentPageData: lastParentCategory });

      if (lastParentCategory) {
        const url = breadCrumbItems[breadCrumbItems.length - 1].url + lastParentCategory.id + '/';
        const categoryName = lastParentCategory.name;

        breadCrumbItems.push({ url, categoryName });
        index++;
      } else {
        notFound = true;
      };
    };

    notFound ? this.setState({ notFound }) : this.setState({ breadCrumbItems });
  }

  getChildCategory(parentCategoryObject, childCategoryId) {
    return parentCategoryObject.categories.find(childCategoryObject => childCategoryObject.id === childCategoryId);
  }

  render() {
    const {
      data
    } = this.state;

    return (
      <div><a href="">here</a></div>
    );
  }
}

export default App;
