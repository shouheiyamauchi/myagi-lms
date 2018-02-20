import React, { Component } from 'react';
import MockDatabase from 'MockDatabase';
import { Redirect } from "react-router-dom";
import { Tabs, Divider } from 'antd';
import Material from './components/Material';
import styles from './styles.module.scss';

const TabPane = Tabs.TabPane;

class Lesson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lessonData: {
        name: '',
        description: '',
        materials: []
      }
    };
  }

  componentDidMount() {
    this.setState({
      lessonData: MockDatabase.findLesson(parseInt(this.props.match.params.id, 10))
    });
  }

  render() {
    const {
      lessonData
    } = this.state;

    if (lessonData) {
      return (
        <div>
          <h1>{lessonData.name}</h1>
          <p>{lessonData.description}</p>
          <br />
          <Divider>Lesson Materials</Divider>
          {!lessonData.materials.length && (
            <div className={styles.noData}>No data</div>
          )}
          <Tabs tabPosition="top">
            {lessonData.materials.map((material, index) => {
              return (
                <TabPane tab={material.title} key={index}>
                  <Material materialData={material} />
                </TabPane>
              )
            })}
          </Tabs>
        </div>
      );
    } else {
      return <Redirect push to="/404" />;
    };
  }
}

export default Lesson;
