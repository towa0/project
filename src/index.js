import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <iframe src="index.html" title="Rentigo" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


