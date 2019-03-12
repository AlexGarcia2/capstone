import React from 'react';
import Spartans from './Spartans';
import LostBoys from './LostBoys';
import AttackOwls from './AttackOwls';
import Contact from './Contact';



function Teams(){
  return (
    <div>
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
        <Contact/>
      </div>
    </div>
  );
}

export default Teams;
