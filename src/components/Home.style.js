import styled from 'styled-components'
import React from 'react';


const Body = styled.div`
background-color: lavendar;
position: center;
`;


  function HomeStyle(){


  return(
      <Body>
          <h1> Welcome! Please take a look around!</h1>
      <img src="/assets/images/Home.jpg" width="800" height="500" position="center" alt="Life" />
      </Body> 
      

  );

};


export default HomeStyle;
