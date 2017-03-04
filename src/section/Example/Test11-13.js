import React from 'react';
var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message!'
    };
  },
  getInitialState: function () {
    return {
    name: this.props.name
    };
  },
  onButtonClick: function (e) {
    e.preventDefault();
    var nameRef=this.refs.name.value;
    this.refs.name.value='';
    if  (typeof nameRef==='string'&& nameRef.length>0){
      this.setState({
        name: nameRef
      });
    }
  },
  render: function () {
    var name = this.state.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!!'}</p>
        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

export default Greeter;
