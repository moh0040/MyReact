import React from 'react';
import Request from 'superagent';
import _      from 'lodash'
class App extends React.Component {
  constructor(){
  super();
  this.state = {};
}

componentWillMount(){
this.search()
}

updateSearch(){
 this.search(this.refs.query.value);

}

  render(){
    var movies= _.map(this.state.movies, (movie) =>{

      return<li>{movie.Title}</li>;
    });

    return (
      <div>
        <input ref="query" onChange={(e) => {this.updateSearch(); }} type="text"/>
        {movies}
        <h2>the total nubmrer of movies are:{this.state.total}</h2>
      </div>

    );
  }
  //create a search method this method should be call in some Component like update if not it is nothing
  search(query=""){
    var url = `http://www.omdbapi.com?s=${query}&y=&r=json&plot=full`;
    Request.get(url).then((response)=> {
    this.setState({

      movies:response.body.Search,
      total:response.body.totalResults
    });
    });
  }

}

export default App;
