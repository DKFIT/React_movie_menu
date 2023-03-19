import { Card, Button, Modal, } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../components/oneProduct.css";

const OneProduct = (props) => {
  const items = props.productFromApi.Search;
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
    fetchData(item.Title);
  };
  

  const handleClose = () => {
    setShowModal(false);
  };
// naujas api
const [data, setData] = useState([]);

useEffect(() => {
  fetchData();
}, []);

const fetchData = async (searchWord) => {
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=c6547346&t=${searchWord}`);
    const json = await response.json();
    console.log(json);
    setData(json);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


console.log(data);

//
  
  return (
    <div className="container d-flex flex-wrap justify-content-center">
      {items?.map((item) => (
        <Card className="border border-5 border-dark m-4">
          <h2>{item.Title}</h2>
          <h2>{item.Year}</h2>
          <img src={item.Poster} alt="" />
          <Button onClick={() => handleClick(item)}>Open Modal</Button>
        </Card>
      ))}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedItem?.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedItem?.Poster} alt="" />
          <p>{selectedItem?.Year}</p>
          <p>{selectedItem?.imdbID}</p>
          <p>{selectedItem?.Type}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OneProduct;
