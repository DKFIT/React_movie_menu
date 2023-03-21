import { useState } from "react";
import searchProduct from "../services/productService";
import "../components/SearchProduct.css"

import { Modal, Button } from "react-bootstrap";

const SearchProduct = ({ setResults }) => {
  const [searchWord, setSearchWord] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formError, setFormError] = useState("");
  // Uzsetinu paieskos zodi I state
  const handleChange = (searchWord) => {
    setSearchWord(searchWord);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page from reloading
    if (searchWord.trim() === "") {
      setFormError("Search field cannot be empty.");
      setShowModal(true);
    } else {
      searchProduct(searchWord).then((res) => {
        if (res.Response === "False") {
          setResults([]);
          setError(res.Error);
          setShowModal(true);
        } else {
          setResults(res);
          setError("");
          setShowModal(false);
        }
      });
    }
  };

  return (
    <div className="container d-flex mt-5 justify-content-center">
      
        
     
      <form onSubmit={handleSubmit}>
        <h1 className="Movienight">Movie Night</h1>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control rounded-pill h-100 m-1 "
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-search"
            value={searchWord}
            onChange={(e) => handleChange(e.target.value)}
          />

        
          <button
            className="btn btn-light rounded-pill h-100 m-1"
            type="submit"
            id="button-search"
          >
            Search
          </button>
        </div>
      </form>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{error || formError}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SearchProduct;


