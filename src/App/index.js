import React, { Component } from 'react';
import MockDatabase from 'MockDatabase';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from 'antd';
import 'antd/dist/antd.css'
import Category from './scenes/Category';
import NotFound from './scenes/NotFound';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }

  componentWillMount() {
    this.setState({
      data: MockDatabase.categoryWithAllChildren(1)
    });
  }

  render() {
    const {
      data
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

    const parentCategoryData = {
      id: 'root',
      categories: [data]
    }

    return (
      <Layout style={layoutStyle}>
        <Layout.Content style={layoutContentStyle}>
          <Router>
            <Switch>
              <Route exact path="/404" component={NotFound} />
              <Route exact path="/categories" render={() => <Category match={{ params: {id: '1'}, url: '/categories', isExact: true }} parentCategoryData={parentCategoryData} />} />
              <Route path="/categories" render={() => <Category match={{ params: {id: '1'}, url: '/categories' }} parentCategoryData={parentCategoryData} />} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </Layout.Content>
      </Layout>
    );
  }
}

export default App;
