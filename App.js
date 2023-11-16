import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement('h1', { id: 'heading' }, 'my heading');

const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'children' }, [
    heading,
    React.createElement('h2', { id: 'heading2' }, 'I am heading 2'),
  ])
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
