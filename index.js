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

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}
