import React from 'react';




  const card={

    height:'250px',
    margin:'50px',
    padding:'10px',
    backgroundColor:'#fff9e7',
    boxShadow:'2px 2px 20px black',
    borderRadius:'5px',
    background: 'rgba(255, 255, 255, 0.7)',
    
    width:'auto',


  }
const rows={
  columnCount:'2',
  gridRow: '1/2'
}
const title={
    background: 'rgba(255, 0, 0, 0.7)',
    width:'500px',
    paddingLeft:'5px',
    float:'right'
  }

function News(){
  return (
    <div style={card}>

      <div >
      <h1 style={title} >Current News</h1>
      </div>
      <div sytle={rows}>
        <ul>
          <li>June Championships Bend Oregon</li>
          <p>PNRFU chaampionships more info to come</p>

          <li>July 7's tournament</li>
          <p>NorthWest Capital tournament</p>

        </ul>

      </div>
    </div>
  );
}

export default News;
