import styled from 'styled-components'
import React from 'react';

const Body = styled.div`
background-color: lavendar;
`;

const Lists = styled.div`
position: right;
`;

const Font = styled.div`
font-family: Cursive, "Lucida Handwriting";
color: purple;
font-size: 30px;
`;

  function AboutStyle(){

  return(
      <Body>
      <img src="/assets/images/About.jpg" width="500" height="500" alt="Budda" />
      <img src="/assets/images/Products.jpg" width="500" height="500" alt="Fish" />
      <Lists>
        <ul>
          <Font>
          <li> Please use this site to gather photos of your favorite plants</li>
          <li> We offer these services for free, please use this website as an example of your creations!</li>
          <li> If you wish to reach out to us, please do so using the contact form</li>
          </Font>
        </ul>
        </Lists>
      </Body>  

  );

};


export default AboutStyle;

