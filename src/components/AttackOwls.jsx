import React from 'react';
import owl from '../assets/attackOwlLogo.jpg';
import gteam from '../assets/girlsTeam.jpg';

const card={
  margin:'50px',
  padding:'10px',
  backgroundColor:'#fff9e7',
  boxShadow:'2px 2px 5px grey',
  borderRadius:'5px',
  background: 'rgba(130, 0, 242, 0.5)',
  gridRow: '1/2',

  gridTemplateColumns:'auto auto'
}
const img={
  height:'200px',
  borderRadius:'100%'
}
const imgPos={
  float:'right'
}
const girlsTeam={
  height:'400px',
}
const floatShape={
  float:'left',
  shapeOutside:'url()',
  width:'550px',
  height:'550px'
}


function AttackOwls(){
  return (
    <div style={card}>
      <div style={imgPos}>
        <img style={img} src={owl}/>
      </div>
      <div>
        <h1>AttackOwls information</h1>
      </div>
      <div>
        <p>"We are a Women's Rugby Team associated with Salem Rugby Club. Always recruiting, no experience necessary! They're using our own satellites against us. And the clock is ticking. God help us, we're in the hands of engineers. Remind me to thank John for a lovely weekend. Jaguar shark! So tell me - does it really exist? We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore!"
          <div style={floatShape}>
            <img style={girlsTeam} src={gteam}/>
          </div>
        <br/>
        "Life finds a way. Did he just throw my cat out of the window? Hey, take a look at the earthlings. Goodbye! Eventually, you do plan to have dinosaurs on your dinosaur tour, right? Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!"


        Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Remind me to thank John for a lovely weekend. Do you have any idea how long it takes those cups to decompose. Do you have any idea how long it takes those cups to decompose.Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Remind me to thank John for a lovely weekend. Do you have any idea how long it takes those cups to decompose. Do you have any idea how long it takes those cups to decompose.Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Remind me to thank John for a lovely weekend. Do you have any idea how long it takes those cups to decompose. Do you have any idea how long it takes those cups to decompose.Is

         this my espresso machine? Wh-what is-h-how did you get my espresso machine? Remind me to thank John for a lovely weekend. Do you have any idea how long it takes those cups to decompose. Do you have any idea how long it takes those cups to decompose.Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Remind me to thank John for a lovely weekend. Do you have any idea how long it takes those cups to decompose. Do you have any idea how long it takes those cups to decompose.Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Remind me to thank John for a lovely weekend. Do you have any idea how long it takes those cups to decompose. Do you have any idea how long it takes those cups to decompose.Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Remind me to thank John for a lovely weekend. Do you have any idea how long it takes those cups to decompose. Do you have any idea how long it takes those cups to decompose.Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Remind me to thank John for a lovely weekend. Do you have any idea how long it takes those cups to decompose. Do you have any idea how long it takes those cups to decompose.</p>
      </div>


    </div>
  );
}

export default AttackOwls;
