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
import BottomHome from './BottomHome';
import News from './News';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

const schedule = {
  marginLeft: '250px'
};

function App(){
  return (
    <div >
      <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Teams' component={Teams} />
          <Route path='/Events' component={Events} />
          <Route path='/Contact' component={Contact} />
          <Route component={Error404} />
        </Switch>
        <div>
          <About/>
        </div>
        <div>
          <MidHome/>
        </div>
        <div>
          <News/>
        </div>
        <div>
          <MidLowHome/>
        </div>
        <div>
          <Sponsor/>
        </div>
        <div>
         <BottomHome/>
        </div>
    </div>
  );
}

export default App;
