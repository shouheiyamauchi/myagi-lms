import React, { Component } from 'react';
import MockDatabase from 'MockDatabase';
import { Redirect } from "react-router-dom";

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
      lessonData: MockDatabase.findLesson(parseInt(this.props.match.params.id))
    });
  }

  render() {
    const {
      lessonData
    } = this.state;

    return (
      <div>
        <h1>{lessonData.name}</h1>
        <p>{lessonData.description}</p>
      </div>
    );
  }
}

export default Lesson;
