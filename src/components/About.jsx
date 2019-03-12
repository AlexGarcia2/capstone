import React from 'react';


const card={
  margin:'50px',
  padding:'10px',
  backgroundColor:'#fff9e7',
  boxShadow:'2px 2px 5px grey',
  borderRadius:'5px',
  background: 'rgba(255, 255, 255, 0.7)',
  gridRow: '1/2'
}
const fontColor={
  color:'black'
}
const title={
  background: 'rgba(255, 0, 0, 0.7)',
  width:'500px',
  paddingLeft:'10px',
}
const divSpace={
  margin:'5px'
}




function About(){
  return (
    <div style={card} >
      <div >
        <div style={title}>
          <h1>History</h1>
        </div>

      <div>
        <div style={divSpace}>
          <p>The Salem Spartans are the Salem Rugby Club’s mens team and play in the Pacific Northwest Rugby Football Union (PNRFU), which includes teams from Washington, Idaho, and Oregon. Kyle Anderson and Joseph Boyd originally started the Salem Rugby Club (SRC) as a men’s team in 2011. The Club searched out its first Head Coach, Peter Bale, who coached the team until 2015. The team slowly gained numbers and improved each season until they finally won the Division 3 PNRFU title and went onto nationals. The Club found a new Head Coach in James Tyson, PhD, in 2016 and he remained through the 2017-2018 season. Jeff Rehder is currently handling Head Coaching duties.</p>
        </div>
        <div style={divSpace}>
          <p>Rehder gained his rugby pedigree by originally playing for the University of Missouri-Columbia and upon graduating moved to St. Louis, Missouri where he played with the St. Louis Bombers Rugby Club for five years. The St. Louis Bombers are the premier men’s rugby club in the St. Louis area (don’t tell the other St. Louis Clubs that), consistently making the national playoff circuit. Additionally, Coach Rehder was selected to captain the Missouri Bears “select” team in 2014 where players from five St. Louis clubs joined to play competitive 15s. In February 2014, the Missouri Bears traveled to Memphis, TN to compete against the USA South Panthers. Coach Rehder scored the final two tries to secure the 32-25 victory against USA South.</p>
        </div>
        <div style={divSpace}>
          <p>The Salem Rugby Club (SRC) renews a proud tradition of rugby in Salem that originated in the 1970’s under the “Capital City Rugby Club.” The Capital City Rugby Club practiced and played on the Oregon State hospital field located at D Street and 25th. The Salem Rugby Club can often be found practicing on this very same field.

          All SRC teams now claim Claggett Creek Park in Keizer, OR as their home pitch for all league matches.</p>
        </div>
      </div>


      </div>


    </div>
  );
}

export default About;
