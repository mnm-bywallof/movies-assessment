import React, { useState, useEffect } from 'react';

const Watched = (movie)=>{

    const [show, setShow] = useState(false);
    const [watched, setWatched] = useState(false);
    const handleClose = ()=> setShow(false);

    return (
        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>{`Have you watched ${movie.title}?`}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Button variant="primary" onClick={handleShow} style={{marginRight:'5px'}}>
        {`Watched `}
      </Button>
        </>
    );
}

export default Watched;