import React, { Component } from 'react';
import MockDatabase from 'MockDatabase';
import update from 'immutability-helper';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css'
import ForwardBackButtons from './components/ForwardBackButtons';
import Home from './scenes/Home';
import NotFound from './scenes/NotFound';
import Category from './scenes/Category';
import Lesson from './scenes/Lesson';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentCategoryData: null,
      displaySubCategoryLessons: true
    };
  }

  componentDidMount() {
    this.setState({
      parentCategoryData: {
        id: 'root',
        categories: [MockDatabase.categoryWithAllChildren(1)]
      }
    });
  }

  displaySubCategoryLessonsToggle = e => {
    this.setState({ displaySubCategoryLessons: e.target.checked });
  }

  render() {
    const {
      parentCategoryData,
      displaySubCategoryLessons
    } = this.state;

    const layoutStyle = {
      minHeight: '100vh'
    };

    const layoutContentStyle = {
      margin: '24px 16px',
      padding: '24px',
      background: '#fff',
      minHeight: '280px'
    };

    const categoryParams = {
      match: { params: {id: '1'}, url: '/categories' },
      displaySubCategoryLessonsToggle: this.displaySubCategoryLessonsToggle,
      displaySubCategoryLessons,
      parentCategoryData
    };

    const exactCategoryParams = update(categoryParams, { match: { isExact: { $set: true } } });

    return (
      <Layout style={layoutStyle}>
        <Layout.Content style={layoutContentStyle}>
          <ForwardBackButtons />
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/404" component={NotFound} />
              <Route exact path="/categories" render={() => <Category {...exactCategoryParams} />} />
              <Route path="/categories" render={() => <Category {...categoryParams} />} />
              <Route path="/lessons/:id" component={Lesson} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </Layout.Content>
      </Layout>
    );
  }
}

export default App;
