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
  height:'800px',  
}
const lostImg={
  width:'1200px',
  height:'600px'
}
const marg={
  marginTop:'100px'
}
const center={
  positionAlign:'center'
}
const card={
  
  padding:'10px',
  backgroundColor:'#FF875E'
}




function Home(){
  return (
    <div style={center}>
      
      <div style={marg}>
     <Parallax
            className="firstParallax"
            offsetYMax={20}
            offsetYMin={-20}
            slowerScrollRate
            tag="figure"
        >
          <img style={imgTest} src={ball} />
         
          </Parallax>
      </div>
      <div>
     <Parallax
            className="firstParallax"
            offsetYMax={20}
            offsetYMin={-20}
            fastScrollRate
            tag="figure"
        >
          <div style={card}>
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

        <div >
        <Parallax
            className="firstParallax"
            offsetYMax={0}
            offsetYMin={-20}
            fasterScrollRate
            tag="figure"           
        >
            <div style={card}>
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
          <img style={lostImg} src={lostBoy} />
          </Parallax>
        </div>

        <div>
     <Parallax
            className="firstParallax"
            offsetYMax={20}
            offsetYMin={-80}
            slowerScrollRate
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
            offsetYMin={-80}
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
