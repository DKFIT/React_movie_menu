import { Card, Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../components/oneProduct.css";

const OneProduct = (props) => {
  const items = props.productFromApi.Search;
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [secondApiDetails, setSecondApiDetails] = useState([]);

  const handleClick = (item) => {
    setSelectedItem(item);
    fetchData(item.Title);
    setShowModal(true);
    console.log(item.Title);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  // naujas api
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (searchWord) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=c6547346&t=${searchWord}`
      );
      const json = await response.json();
      console.log(json);
      setSecondApiDetails(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //

  return (
    <div className="mt-5 container-fluid justify-content-center">
      {items?.map((item) => (
        <Card className="border border-5 border-dark m-4 " key={item.imdbID}>
          <h1 className="d-flex justify-content-center">{item.Title}</h1>
          <h3 className="d-flex justify-content-center">{item.Year}</h3>
          <img src={item.Poster} alt="" />
          <button className="clickmore w-100" onClick={() => handleClick(item)}>
           <h5>More details</h5>
          </button>
        </Card>
      ))}
      <Modal className="modal-xl" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{secondApiDetails.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalbody">
          <div className="d-flex row">
            <div className="col-6">
              <img className="modalImg" src={secondApiDetails.Poster} alt="" />
            </div>
            <div className="col-6 modalinfo">
              <h4 className="p-3">Title: {secondApiDetails.Title}</h4>
              <h4 className="p-3">Genre: {secondApiDetails.Genre}</h4>
              <h4 className="p-3">Actors: {secondApiDetails.Actors}</h4>
              <h4 className="p-3">Writer: {secondApiDetails.Writer}</h4>
              <h4 className="p-3">Runtime: {secondApiDetails.Runtime}</h4>
              <h4 className="p-3">Released: {secondApiDetails.Released}</h4>
              <h4 className="p-3">Production: {secondApiDetails.Production}</h4>
              
            </div>
          </div>
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
