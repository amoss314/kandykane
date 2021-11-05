import styled from 'styled-components'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Body = styled.div`
background-color: Linen;
`;

const Lists = styled.div`
position: right;
`;

const Font = styled.div`
font-family: Cursive, "Lucida Handwriting";
color: purple;
font-size: 30px;
`;

const Container = styled.div`
position: relative;
text-align: center;
color: white;
`;

  function AboutStyle(){

  return(
      <Body>
        <Container>
      <img src="/assets/images/About.jpg" width="625" height="200" class="img-fluid"  alt="Budda" />
      <img src="/assets/images/Contact.jpg" width="625" height="200" class="img-fluid"  alt="Fish" />
      <Lists>
        <ul>
          <Font>
          <li> Please use this site to gather photos of your favorite plants</li>
          <li> We offer these services for free, please use this website as an example of your creations!</li>
          <li> If you wish to reach out to us, please do so using the contact form</li>
          </Font>
        </ul>
        </Lists>
        </Container>
      </Body>  

  );

};


export default AboutStyle;

