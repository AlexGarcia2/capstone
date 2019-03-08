import React from 'react';
import Header from './Header';
import Home from './Home';
import Teams from './Teams';
import Contact from './Contact';
import Events from './Events';
import { Switch, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Error404 from './Error404';

const test ={
  
  zIndex:'-1'
}

function App(){
    
  return (
    <div>
      <div style={test}>
     <Header/>
      </div>
      <ParallaxProvider>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Teams' component={Teams} />
            <Route path='/Events' component={Events} />
            <Route path='/Contact' component={Contact} />
            <Route component={Error404} />
          </Switch>
      </ParallaxProvider>
    </div>
  );
}


export default App;
