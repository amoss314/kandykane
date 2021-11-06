import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const Font = styled.div`
  color: purple;
`;

const Container = styled.div`
  text-align: center;
  background-color: Linen;
`;

function HomePage() {
  return (
    <Container>
      <Font>
        <header>Prolific Creations</header>
        <img
          src="/assets/images/Home.jpg"
          height="1000"
          width="1000"
          alt="Life"
        />
      </Font>
    </Container>
  );
}

export default HomePage;
