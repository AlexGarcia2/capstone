import React from 'react';
import About from './About';
import News from './News';
import Sponsor from './Sponsor';
import { Parallax } from 'react-scroll-parallax';
import ball from '../assets/rugbyBallNight.jpg';
import lostBoy from '../assets/lostBoy.jpg';
import back from '../assets/rugbyBackground.jpg';


const imgTest={
  width:'1200px',
  height:'800px', 
  opacity:'0.5'
}
const lostImg={
  width:'1200px',
  height:'600px'
}
const marg={
  marginTop:'100px'
}

const card={
  marginBottom:'100px',
  padding:'10px',
  backgroundColor:'#FF875E'
}




function Home(){
  return (
    <div>
      
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
            fasterScrollRate
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
            offsetYMin={-20}
            fasterScrollRate
            tag="figure"
        >
            <div style={card}>
          <Sponsor/>
        </div>
          </Parallax>
      </div>
        
    </div>
  );
}

export default Home;
