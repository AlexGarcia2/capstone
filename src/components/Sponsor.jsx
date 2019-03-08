import React from 'react';
import venti from '../assets/ventiMap.png';


function Sponsor(){
  return (
    <div>
      <h1>Sponsor</h1>

      <div>
        <div>
        <h3>Venti's Cafe</h3>
        </div>
        <dir>
          <img src={venti} alt=""/>
        </dir>
        <div>
          <p>Modern cafe & taproom serving vegetarian-friendly global fare, plus a gluten-free menu.</p>
        </div>

      </div>
    </div>
  );
}

export default Sponsor;
