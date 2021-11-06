import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const Font = styled.div`
  color: purple;
`;

const Container = styled.div`
  text-align: center;
  background-color: Linen;
`;


function AboutPage() {
  return (
    <Container>
      <Font>
        <ul>
          <li> Please use this site to gather photos of your favorite plants </li>
          <li> We offer these services for free, please use this website as an example of your creations! </li>
          <li> If you wish to reach out to us, please do so using the contact form </li>
        </ul>
      <img
        src="/assets/images/About.jpg"
        width="625"
        height="200"
        class="img-fluid"
        alt="Budda"
      />
      <img
        src="/assets/images/Contact.jpg"
        width="625"
        height="200"
        class="img-fluid"
        alt="Fish"
      />
      </Font>
    </Container>
  );
}

export default AboutPage;
