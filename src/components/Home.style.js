import styled from 'styled-components'
import React from 'react';


const Body = styled.div`
background-color: lavendar;
position: right-center;
font-italic;
`;

const Tree = styled.div`
float: right-center;
width: 300px;
padding: 100px;
`;



  function HomeStyle(){


  return(
      <Body>
          <div> Welcome!........ Inspiration at work</div>
     <Tree> <img src="/assets/images/Home.jpg" width="1100" height="900" alt="Life" /></Tree>
      </Body> 
      

  );

};


export default HomeStyle;


// width="800" height="500"