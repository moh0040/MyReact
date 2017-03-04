import React, {Component} from 'react';

 class Test010 extends Component{

   static get defaultProps() {
     return {
          name: 'soraya jan',
          massage:'Default massage'
     }
   }

   render(){
     var myname=this.props.name;

     return(
       <div>
       <h1>Hello {myname}!</h1>
       <p>{this.props.massage}</p>
       </div>
     );
   }
 }

 var lastname="sharifi";

 export default class Test10 extends Component{

   render(){
     return(

        <Test010 name="saeed" massage="this is the massage"/>  //if there is no props here default props apply
        //<Test010 name={lastname}/>  //when we want to add var lastname

     );
   }
 }
