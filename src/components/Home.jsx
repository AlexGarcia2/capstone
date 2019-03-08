import React from 'react';
import About from './About';
import News from './News';
import Sponsor from './Sponsor';
import { Parallax } from 'react-scroll-parallax';
import ball from '../assets/rugbyBallNight.jpg';
import lostBoy from '../assets/lostBoy.jpg';
import back from '../assets/rugbyBackground.jpg';
import kick from '../assets/kick.jpg';

const imgTest={
  width:'1200px',
  height:'100vh'
}
const marg={
  marginTop:'100px'
}
const center={
  positionAlign:'center'
}
const card={
  marginBottom:'100px',
  padding:'10px',
  border:'2px 1px grey',
  backgroundColor:'#FF875E',
  opacity: '0.72'
}
const z={
  zIndex:'-1'
}



function Home(){
  return (
    <div style={center}>
      
      <div style={marg}>
     <Parallax
            className="firstParallax"
            offsetYMax={50}
            offsetYMin={-60}
            slowerScrollRate
            tag="figure"
        >
          <img style={imgTest} src={ball} />
         
          </Parallax>
      </div>

      <div style={card}>
     <Parallax
            className="firstParallax"
            offsetYMax={50}
            offsetYMin={-20}
            fastScrollRate
            tag="figure"
        >
          <div>
          <About/>
        </div>
          </Parallax>
      </div>

        <div>
        <Parallax
            className="firstParallax"
            offsetYMax={20}
            offsetYMin={-20}
            slowerScrollRate
            tag="figure"           
        >
          <img style={imgTest} src={back} />
            
          </Parallax>
        </div>

        <div style={card}>
        <Parallax
            className="firstParallax"
            offsetYMax={50}
            offsetYMin={-20}
            fasterScrollRate
            tag="figure"           
        >
            <div>
              <News/>
            </div>
          </Parallax>
        </div>

        <div>
        <Parallax
            className="firstParallax"
            offsetYMax={20}
            offsetYMin={-20}
            slowerScrollRate
            tag="figure"
        >
          <img style={imgTest} src={lostBoy} />
          </Parallax>
        </div>

        <div >
     <Parallax
            className="firstParallax"
            offsetYMax={20}
            offsetYMin={-20}
            fasterScrollRate
            tag="figure"
        >
          <div style={card}>
          <Sponsor/>
        </div>
          </Parallax>
      </div>

        <div>
        <Parallax
            className="firstParallax"
            offsetYMax={20}
            offsetYMin={-20}
            slowerScrollRate      
            tag="figure"           
        >
          <img style={imgTest} src={kick} />
          </Parallax>
        </div>
        
    </div>
  );
}

export default Home;
