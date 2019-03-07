import React from 'react';
import Header from './Header';
import Home from './Home';
import Teams from './Teams';
import Contact from './Contact';
import Events from './Events';
import About from './About';
import Sponsor from './Sponsor';
import MidHome from './MidHome';
import MidLowHome from './MidLowHome';
import News from './News';
import { Switch, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

import Error404 from './Error404';


const ParallaxImage = () => (
  <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
    <img src={kick} />
  </Parallax>
);


class App extends React.Component {

  render(){
    
    return (
      <div>
        <Header/>
        <ParallaxProvider>
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/Teams' component={Teams} />
              <Route path='/Events' component={Events} />
              <Route path='/Contact' component={Contact} />
              <Route component={Error404} />
            </Switch>
          </div>
          {/* //need to add state for hide show functionality for this components */}
          <div>
            <About/>
          </div>
          <div>
            <MidHome/>
          </div>
          <div>
            <News/>
          </div>
          <MidLowHome/>
          <div>
            <Sponsor/>
          </div>
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;
