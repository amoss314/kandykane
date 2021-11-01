import React, {useState, useEffect} from 'react';


function ProdutssPage() {

  let [flowerImage, setFlowerImage] = useState(null)

  useEffect(() => {
    fetch("<Unsplash root>/search/collections/?query=flowers&client_id=ajJ-1qfeeR9_15ZMNN-QlHIRzpSlqNXA0-R0le21aZ4")
    .then(response => response.json())
    
    .then(data => setFlowerImage(data.message))
  },[])

  return (
    <div>
    {flowerImage && <img src={flowerImage} alt="unsplash" />}
    </div>
  );
}
  
  export default ProdutssPage;