import HomeStyle from '../components/Home.style'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const Font = styled.div`
font-family: Cursive, "Lucida Handwriting";
color: purple;
font-size: 30px;
`;

const Container = styled.div`
position: relative;
text-align: center;
color: white;
background-color: Linen;

`;


function HomePage() {
    return <Container>
        <Font>
        <header>Prolific Creations</header>
        
      <HomeStyle />
      </Font>
          </Container>
    
  }
  
  export default HomePage;