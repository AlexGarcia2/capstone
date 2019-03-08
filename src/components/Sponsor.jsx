import React from 'react';
import venti from '../assets/ventiMap.png';
import store from '../assets/ventiStore.jpg';

const card={
  padding:'10px',
  backgroundColor:'#fff9e7',
  boxShadow:'2px 2px 5px grey',
  borderRadius:'5px',
  opacity:'0.9'
}
const imgCard={
  boxShadow:'2px 2px 5px grey',
  borderRadius:'5px',
}

function Sponsor(){
  return (
    <div style={card}>
      <h1>Sponsor</h1>

      <div>
        <div>
        <h3>Venti's Cafe</h3>
        <img src={store} style={imgCard}/>
        </div>
        <div>
          <p>Modern cafe & taproom serving vegetarian-friendly global fare, plus a gluten-free menu.</p>
        </div>
        <div >
          <img src={venti} style={imgCard}/>
        </div>

      </div>
    </div>
  );
}

export default Sponsor;
