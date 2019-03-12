import React from 'react';
import lostLogo from '../assets/lostBoys.jpeg';


const card={
  margin:'50px',
  padding:'10px',
  backgroundColor:'#fff9e7',
  boxShadow:'2px 2px 20px black',
  borderRadius:'5px',
  background: 'rgba(0, 0, 153, 0.7)',
  gridRow: '1/2',

  gridTemplateColumns:'auto auto'
}
const img={
  height:'200px',
  borderRadius:'5%',
}
const imgPos={
  float:'left',
  margin:'10px'
}
const fontColor={
  color:'	#bbbbbb',
  fontSize:'20px'
}
const title={
  textAlign:'right',
  marginRight:'15px'
}
const divSpace={
  margin:'5px'
}

function LostBoys(){
    return (
      <div style={card}>
        <div style={imgPos}>
          <img style={img} src={lostLogo}/>
        </div>
        <h1 style={title}>Lost Boys</h1>
        <div style={divSpace}>
          <p style={fontColor}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue ut lectus arcu bibendum at varius vel. Iaculis at erat pellentesque adipiscing commodo. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Integer malesuada nunc vel risus. Augue neque gravida in fermentum et sollicitudin ac orci. Dictum sit amet justo donec enim diam vulputate ut. Consectetur a erat nam at lectus urna duis. Ultricies mi quis hendrerit dolor magna eget est. Id aliquet risus feugiat in ante metus."</p>
        </div>
        <div style={divSpace}>
          <p style={fontColor}>"Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Ullamcorper malesuada proin libero nunc consequat. Congue mauris rhoncus aenean vel elit. Sit amet dictum sit amet justo donec enim diam vulputate. Sodales ut etiam sit amet nisl purus in mollis. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Dui accumsan sit amet nulla facilisi. Ac ut consequat semper viverra. Elit sed vulputate mi sit amet mauris. Dictum varius duis at consectetur. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Interdum consectetur libero id faucibus nisl tincidunt. Ac felis donec et odio pellentesque diam. Ut tristique et egestas quis ipsum. Dictum sit amet justo donec enim diam vulputate ut pharetra. Maecenas volutpat blandit aliquam etiam erat velit. Risus feugiat in ante metus. Odio euismod lacinia at quis risus."</p>
        </div>
      </div>

  );
}

export default LostBoys;
