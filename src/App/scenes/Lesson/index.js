import React, { Component } from 'react';
import MockDatabase from 'MockDatabase';
import { Redirect } from "react-router-dom";
import Material from './components/Material';

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
          {lessonData.materials.map((material, index) => {
            return <Material key={index} />
          })}
        </div>
      );
    } else {
      return <Redirect push to="/404" />;
    };
  }
}

export default Lesson;
