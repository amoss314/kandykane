import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';



const Body = styled.div`
    backgroud-color: grey;
    `;




function GalleryPage() {
 
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
                return <img src={flower.preview_photos[0].urls.thumb} class="img-fluid" alt="photos"/>

              })
              setFlowers(listItems);
          } catch (error) {
              console.log("error", error);
          }
      };

      fetchData();
  }, []);

  return (
        
          <Body>{flowers}</Body>
          
  );
};


 
  export default GalleryPage;