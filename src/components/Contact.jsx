import React from 'react';

const card={
  backgroundColor:'#fff9e7'
}


function Contact(){
  return (
    <div style={card}>
      <form action="">
          <div>
            <h2>Please Contact Us</h2>
          </div>
          <div>
            <input type="text" placeholder="First"/>  <input type="text" placeholder="Last"/>
          </div>
          <div>
          <input type="text" placeholder="Email"/>
          </div>
          <div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        </form>
    </div>
  );
}

export default Contact;
