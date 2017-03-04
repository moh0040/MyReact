import React, {Component} from 'react';

import { Grid, Row, Col  } from 'react-bootstrap';


import Header from './section/MainComp/Header';
import Map1   from './section/MainComp/Map1';//live transport Api
import Detail from './section/MainComp/Detail';
import Footer from './section/MainComp/Footer';
import Map    from './section/MainComp/Map';



//Example
import Test from './section/Example/movieAPI';



class App extends Component {

  render() {
    return (
        <Grid>
          <Row className="show-grid">
            <Col xs={18} md={12}><code>

                <Header/>
                <Map/>
                <Detail/>
                <Footer/>
                <Test/>

            </code></Col>
          </Row>
        </Grid>


    );
  }
}

export default App;
