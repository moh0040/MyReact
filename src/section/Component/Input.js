import React, {Component} from 'react';


export default class Input extends React.Component {
  constructor() {
    super();
    this.state={
      txt:'this is a state',
      cat:1
    }
  }
  update(e){
    this.setState({txt:e.target.value})
  }
  render(){
    return (
      <div>
      <input type='text' onChange={this.update.bind(this)}/>
      <h1>{this.state.txt}</h1>
      <p>{this.state.cat}</p>
      </div>
    )
  }
}
