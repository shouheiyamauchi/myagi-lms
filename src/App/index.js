import React, { Component } from 'react';
import data from 'data';

class App extends Component {
  render() {
    console.log(data.categoryWithAllChildren(1));
    return (
      <div>
        Myagi LMS
      </div>
    );
  }
}

export default App;
