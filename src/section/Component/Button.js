import React, {Component} from 'react';



export default class LikeButton  extends Component{

render () {
  var name=this.props.name;
  return(
  <button onClick={this.handleClick}>{name}</button>
  );
}
}
