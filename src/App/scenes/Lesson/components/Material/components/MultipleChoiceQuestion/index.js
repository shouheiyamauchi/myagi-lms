import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';

const RadioGroup = Radio.Group;

class MultipleChoiceQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null
    };
  }

  selectionChange = e => {
    this.setState({ selectedOption: e.target.value });
  }

  render() {

    const {
      materialData
    } = this.props;

    const {
      selectedOption
    } = this.state;

    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };

    return (
      <div>
        <h1>{materialData.question}</h1>
        <RadioGroup onChange={this.selectionChange} value={selectedOption}>
          {materialData.options.map((option, index) => <Radio key={index} style={radioStyle} value={index}>{option}</Radio>)}
        </RadioGroup>
        <br /><br />
        {(selectedOption !== null) && (selectedOption === materialData.correct_answer ? <span>That is correct!</span> : <span>That is incorrect!</span>)}
      </div>
    );
  }
}

MultipleChoiceQuestion.propTypes = {
  materialData: PropTypes.object.isRequired
}

export default MultipleChoiceQuestion;
