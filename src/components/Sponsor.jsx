import React from 'react';
import venti from '../assets/ventiMap.png';
import store from '../assets/ventiStore.jpg';

const card={
  margin:'50px',
  padding:'10px',
  backgroundColor:'#fff9e7',
  boxShadow:'2px 2px 20px black',
  borderRadius:'5px',
  background: 'rgba(255, 255, 255, 0.7)',
  gridRow: '1/2',
  columnCount:'2',
  columnGap:'10px'
}
const imgStore={
  marginRight:'15px',
  marginBottom:'10px',
  float:'left',
  boxShadow:'2px 2px 5px grey',
  borderRadius:'5px',
  height:'400px'
}
const imgMap={
  boxShadow:'2px 2px 5px grey',
  borderRadius:'5px',
  height:'400px'
}
const title={
  float:'right',
  background: 'rgba(255, 0, 0, 0.7)',
  width:'500px',
  paddingLeft:'10px',
}


function Sponsor(){
  return (
    <div style={card}>


      <div>
        <div>
          <h1>Venti's Cafe</h1>
        </div>
        <div>
          <img src={store} style={imgStore}/>
        </div>
        <div>
          <p>We moved from our original location (in the Reed Opera House) in summer of 2008. Our downtown Salem location is bigger and allows for a full kitchen and a full basement bar. We like to say we “crossed the road.”

            While we serve lots of meatless & GFF options, chicken teriyaki is the core of our offerings — the original rice bowl at the Reed Opera House was served w/ skewered chicken. By cafe owner Dino Venti’s account, he has prepped 50 tons of chicken. In honor of that feat we redesigned our logo to pay homage to the chicken. The rooster logo is a nod to the glorious cock, an animal loved for its power, boldness and beauty.

            Venti’s strives to carry unique microbrews and ciders. The local beer-drinking crowd is enthusiastic and often gets to help select the next keg. We opt for Oregon and NW brews but occasionally throw something different out there. </p>
        </div>
        <div>
          At Venti’s Downtown, 325 Court St NE, Salem, OR 97301, we pride ourselves on good, clean food, a modern atmosphere, and a commitment to unique flavor, attitude and culture. We now have over 24 rotating craft beer taps, which includes cider and kombucha.
        </div>
        <div>
          <h1 style={title}>Sponsor</h1>
        </div>
        <div>
          <h4>Cafe open</h4>
          <ul>
            <li>"M-Sa 11a – 9p"</li>
            <li>"Sun 11a – 8p"</li>
          </ul>

          <h4>Basement Bar (21+) open</h4>
          <ul>
            <li>"M + Tu 4p – 10p"</li>
            <li>"Wed + Th 4p – 11p"</li>
            <li>"Fri 4p –12a"</li>
            <li>"Sa 4p –12a"</li>
            <li>"Sun 4p – 8p"</li>
          </ul>
        </div>
        <div >
          <img src={venti} style={imgMap}/>
        </div>

      </div>
    </div>
  );
}

export default Sponsor;
