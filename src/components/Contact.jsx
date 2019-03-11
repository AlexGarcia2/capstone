import React from 'react';

const card={
  padding:'20px',
  backgroundColor:'#fff9e7',
  width:'80%',
  margin:'10%'
}

const formContent={
  marginLeft:'200px'
}
const inputBar={
  margin:'5px',
  height:'20px',
  width:'300px'
}
const textField={
  margin:'5px',
  height:'100px',
  width:'400px'
}


function Contact(){
  return (
    <div style={card}>
      <form action="">
          <div>
            <h2>Please Contact Us</h2>
          </div>
          <div style={formContent}>
            <div>
              <input style={inputBar} type="text" placeholder=" First"/>  <input style={inputBar} type="text" placeholder=" Last"/>
            </div>
            <div>
              <input style={inputBar} type="text" placeholder=" Email"/>
            </div>
            <div>
              <textarea style={textField} name="" id="" cols="30" rows="10"></textarea>
            </div>
          </div>
        </form>
    </div>
  );
}

export default Contact;
