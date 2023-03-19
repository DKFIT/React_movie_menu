import React from "react";
import { Card } from "react-bootstrap";
import '../components/oneProduct.css'
const OneProduct = (props) => {
  // console.log(props.productFromApi.Search);
  const items = props.productFromApi.Search;
  console.log(items);
  return (
    <div className="container d-flex flex-wrap justify-content-center">
      
      {items?.map((item) => (
        <Card className="border border-5 border-dark m-4">

          <h2>{item.Title}</h2>
          <h2>{item.Year}</h2>
          <img src={item.Poster} alt="" />
        </Card>
      ))}
    </div>
  );
};

export default OneProduct;
