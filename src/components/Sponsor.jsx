import React from 'react';
import venti from '../assets/ventiMap.png';
import store from '../assets/ventiStore.jpg';

const card={
  border:'2px 2px grey',
  padding:'2px'
}

function Sponsor(){
  return (
    <div>
      <h1>Sponsor</h1>

      <div>
        <div>
        <h3>Venti's Cafe</h3>
        <img src={store} alt=""/>
        </div>
        <div style={card}>
          <img src={venti} alt=""/>
        </div>
        <div>
          <p>Modern cafe & taproom serving vegetarian-friendly global fare, plus a gluten-free menu.</p>
        </div>

      </div>
    </div>
  );
}

export default Sponsor;
