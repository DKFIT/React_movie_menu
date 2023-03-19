
import React, { useState} from "react";
import SearchProduct from "./SearchProduct";
import OneProduct from "./OneProduct";
const Main = () => {
    const [productFromApi, setProductFromApi] = useState([]);

    const setResults = (products) => {
        setProductFromApi(products)
    }
    console.log(productFromApi)
  return (
    <div>


<SearchProduct setResults={setResults}/>
<OneProduct productFromApi={productFromApi}/>




    </div>
  )
}

export default Main