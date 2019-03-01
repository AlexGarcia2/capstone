import React from 'react';
import Spartans from './Spartans';
import LostBoys from './LostBoys';
import AttackOwls from './AttackOwls';

import { Link } from 'react-router-dom';

function Teams(){
  return (
    <div>
      <h1>Salem Ruby Teams</h1>
      <div>
        <Spartans/>
      </div>
      <div>
        <LostBoys/>
      </div>
      <div>
        <AttackOwls/>
      </div>
      <div>
       
      </div>
    </div>
  );
}

export default Teams;
