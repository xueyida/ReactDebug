import React from 'react';
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props);
    console.log('constructor!')
  }

  

  componentDidMount(){
    console.log('did')
  }

  render(){
    return React.createElement('div', {}, "hello, world!")
  }
}

export default App;
