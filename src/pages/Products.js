import React, {useState, useEffect} from 'react';
import styled from "styled-components";



const Body = styled.div`
    backgroud-color: grey;
    `;

const Title = styled.div`
    font-color: blue;
    `;


function ProdutsPage() {
 
  const [flower, setFlower] = useState("");

  useEffect(() => {
      const url = "https://api.unsplash.com/search/collections/?query=flowers&client_id=ajJ-1qfeeR9_15ZMNN-QlHIRzpSlqNXA0-R0le21aZ4";

      const fetchData = async () => {
          try {
              const response = await fetch(url);
              const json = await response.json();
              console.log(json.slip.flower);
              setFlower(json.slip.flower);
          } catch (error) {
              console.log("error", error);
          }
      };

      fetchData();
  }, []);

  return (
        <Title> Flowers 
          <Body>{flower}</Body>
          </Title>
  );
};


//   let [flowerImage, setFlowerImage] = useState(null)

//   useEffect(() => {
//     fetch("https://api.unsplash.com/search/collections/?query=flowers&client_id=ajJ-1qfeeR9_15ZMNN-QlHIRzpSlqNXA0-R0le21aZ4")
//     .then(response => response.json())
    
//     .then(data => setFlowerImage(data.message))
//   },[])

//   return (
//     <div>
//     {flowerImage && <img src={flowerImage} alt="unsplash" />}
//     </div>
//   );
// }
  
  export default ProdutsPage;