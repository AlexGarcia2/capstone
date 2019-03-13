import React from 'react';
import About from './About';
import News from './News';
import Sponsor from './Sponsor';
import SalemLogo from '../assets/Salem-Rugby-Logo2.png';

const imgCard={
  margin:'50px',
  padding:'10px',
  backgroundColor:'#fff9e7',
  boxShadow:'2px 2px 20px black',
  borderRadius:'5px',
  background: 'rgba(255, 255, 255, 0.7)',
}

const imgPos={
  display: 'block',
  marginLeft:' auto',
  marginRight:' auto',
  width: '50%'

}






function Home(){
  return (
    <div>
      <div style={imgCard}>
        <img style={imgPos} src={SalemLogo} />
      </div>

      <div>
          <About/>
      </div>
      <div>
          <Sponsor/>
      </div>
    </div>
  );
}

export default Home;
