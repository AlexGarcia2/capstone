import React from 'react';

const card={
  padding:'10px',
  border:'2px 1px grey',
  backgroundColor:'#FF875E',
  opacity: '0.72'
}

function News(){
  return (
    <div style={card}>
      <div>
      <h1>Current News</h1>
      </div>
      <div>
      <p>
            news goes here with maybe with list
      </p>
      </div>
    </div>
  );
}

export default News;
