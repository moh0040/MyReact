import React from 'react';




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var GreeterMassage=React.createClass({
render:function(){
 var namesms=this.props.namemassage;
 var smsmassage=this.props.smsmassage;

  return(
    <div>
    <h1>from massage comp: {namesms}</h1>
    <p>from massage comp:{smsmassage}</p>
    </div>
  );
}
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var GreeterForm=React.createClass({
  onFormSubmit: function (e) {
  e.preventDefault();

  var nameform= this.refs.name1.value;
  if (nameform.length>0){
    this.refs.name1.value='';
    this.props.onNewName(nameform)
  }
},
render:function(){
  return(
    <div>

    <form onSubmit={this.onFormSubmit} >
      <input type="text" ref="name1"/>
      <button>from greeter form </button>
    </form>
    </div>
  );
}
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

handleNewName: function(nameform){
  this.setState({
    name:nameform
  });
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
        <h1>from Greeter comp:  Hello {name}!</h1>
        <p>from Greeter comp: {message + '!!'}</p>

        <GreeterMassage namemassage={name} smsmassage={message}/>
        <GreeterForm onNewName={this.handleNewName}/>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>from Greeter form</button>
        </form>
      </div>
    );
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default Greeter;
