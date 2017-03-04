import React from 'react';

var GreeterMassage=React.createClass({
render:function(){
  return(
    <div>
    <p>comp2</p>
    </div>
  );
}
});



var GreeterForm=React.createClass({
  onFormSubmit: function (e) {
  e.preventDefault();

  var name1= this.refs.name1.value;
  if (name1.length>0){
    this.refs.name1.value='';
    alert(name1)
  }
},
render:function(){
  return(
    <div>
    <h1>com3</h1>

    <form onSubmit={this.onFormSubmit} >
      <input type="text" ref="name1"/>
      <button>submit me</button>
    </form>
    </div>
  );
}
});

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

        <GreeterMassage/>
        <GreeterForm/>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

export default Greeter;
