import React from 'react';




  const card={
    height:'250px',
    margin:'50px',
    padding:'10px',
    backgroundColor:'#fff9e7',
    boxShadow:'2px 2px 5px grey',
    borderRadius:'5px',
    background: 'rgba(255, 255, 255, 0.5)',
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
      <div>
      <p> "news goes here with maybe with list" </p>
      </div>
    </div>
  );
}

export default News;
