var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: 'Bong',
  location: 'Bangkok'
};

var objTwo = {
  age: 25,
  ...objOne
};

console.log(objTwo);

ReactDOM.render(
    <h1>boilerplate !</h1>,
    document.getElementById('app')
  );
