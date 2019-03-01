import React from 'react';
import Header from './Header';
import Home from './Home';
import Teams from './Teams';
import Contact from './Contact';
import Events from './Events';
import Sponsor from './Sponsor';
import News from './News';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

const schedule = {
  marginLeft: '250px'
};

function App(){
  return (
    <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Teams' component={Teams} />
          <Route path='/Events' component={Events} />
          <Route path='/Contact' component={Contact} />
          <Route component={Error404} />
        </Switch>
    </div>
  );
}

export default App;
