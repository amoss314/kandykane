import React, {useState, useEffect} from 'react';
import styled from "styled-components";



const Body = styled.div`
    backgroud-color: grey;
    `;

const Title = styled.div`
    font-color: blue;
    `;


function ProdutsPage() {
 
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
      const url = "https://api.unsplash.com/search/collections/?query=flowers&client_id=ajJ-1qfeeR9_15ZMNN-QlHIRzpSlqNXA0-R0le21aZ4";

      const fetchData = async () => {
          try {
              const response = await fetch(url);
              const json = await response.json();
              console.log(json);

              const flowers = json.results; 
              console.log(flowers);

              const listItems = flowers.map((flower) =>{
                return <img src={flower.preview_photos[0].urls.raw} width="300" height="300" alt="photos"/>

              })
              setFlowers(listItems);
          } catch (error) {
              console.log("error", error);
          }
      };

      fetchData();
  }, []);

  return (
        <Title> Flowers 
          <Body>{flowers}</Body>
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