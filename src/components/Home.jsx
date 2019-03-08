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
  marginTop:'50px'
}
const center={
  positionAlign:'center'
}
const card={
  padding:'10px',
  border:'2px 1px grey',
  backgroundColor:'#FF875E',
  opacity: '0.72'
}



function Home(){
  return (
    <div style={center}>
      
      <div style={marg}>
     <Parallax
            className="firstParallax"
            offsetYMax={50}
            offsetYMin={-20}
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
            slowerScrollRate
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
            offsetYMax={80}
            offsetYMin={-20}
            fasterScrollRate
            tag="figure"           
        >
          <img style={imgTest} src={back} />
            
          </Parallax>
        </div>

        <div style={card}>
        <Parallax
            className="firstParallax"
            offsetYMax={20}
            offsetYMin={-20}
            slowerScrollRate
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
            fasterScrollRate
            tag="figure"
        >
          <img style={imgTest} src={lostBoy} />
          </Parallax>
        </div>

        <div style={card}>
     <Parallax
            className="firstParallax"
            offsetYMax={50}
            offsetYMin={-20}
            slowerScrollRate
            tag="figure"
        >
          <div>
          <Sponsor/>
        </div>
          </Parallax>
      </div>

        <div>
        <Parallax
            className="firstParallax"
            offsetYMax={80}
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
