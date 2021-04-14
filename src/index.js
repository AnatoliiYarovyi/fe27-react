import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const a = `
  <main className="main">
    <h1 className="title">Title</h1>
  </main>
`;

// const main = document.createElement('main');
// const title = document.createElement('h1');
// main.classList.add('main');
// title.classList.add('title');
// main.appendChild(title);

const h1 = React.createElement(
  'h1',
  {
    className: 'title',
  },
  'Title'
);
const main = React.createElement(
  'main',
  {
    className: 'main',
  },
  h1
);

// with jsx
const mainComponent = (
  <main className="main">
    <h1 className="title">This is title</h1>
  </main>
);

// ReactDOM.render(mainComponent, document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
