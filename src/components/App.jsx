import React from 'react';
import Header from './Header';
import Home from './Home';
import Teams from './Teams';
import Contact from './Contact';
import Events from './Events';
import Gallery from './Gallery';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import blackWhite from '../assets/backgroundBlackWhite.jpg';

const background={
  filter:'blur(5px)',
  position:'absolute',
  width:'100vw',
  height:'100vh',
  zIndex:'-1'
}
const routers={
  postion:'absolute',
}


function App(){

  return (
    <div>

      <img style={background} src={blackWhite} />

        <div style={routers}>
          <Header/>

            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/Teams' component={Teams} />
              <Route path='/Events' component={Events} />
              <Route path='/Gallery' component={Gallery} />
              <Route path='/Contact' component={Contact} />
              <Route component={Error404} />
            </Switch>

        </div>
    </div>
  );
}


export default App;
