import React from 'react';

const card={
    padding:'10px',
    backgroundColor:'#fff9e7',
    boxShadow:'2px 2px 5px grey',
    borderRadius:'5px',
    opacity:'0.9'
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
