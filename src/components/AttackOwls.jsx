import React from 'react';
import owl from '../assets/attackOwlLogo.jpg';

const card={
  margin:'50px',
  padding:'10px',
  backgroundColor:'#fff9e7',
  boxShadow:'2px 2px 5px grey',
  borderRadius:'5px',
  background: 'rgba(130, 0, 242, 0.5)',
  gridRow: '1/2',
  height:'250px'
}
const img={
  height:'200px',
  borderRadius:'100%'
}
const imgPos={
  float:'right'

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
        <p>"We are a Women's Rugby Team associated with Salem Rugby Club. Always recruiting, no experience necessary!"</p>
      </div>


    </div>
  );
}

export default AttackOwls;
