import styled from 'styled-components'
import React from 'react';


const Body = styled.div`
background-color: lavendar;
position: right-center;
`;

const Tree = styled.div`
float: right-center;
width: 300px;
padding: 100px;
`;

const Font = styled.div`
font-family: Cursive, "Lucida Handwriting";
color: purple;
font-size: 30px;
`;


  function HomeStyle(){


  return(
      <Body>
          <Font> Welcome!........ Inspiration at work</Font>
     <Tree> <img src="/assets/images/Home.jpg" width="1100" height="900" alt="Life" /></Tree>
      </Body> 
      

  );

};


export default HomeStyle;


// width="800" height="500"