import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAt8L_3lRhoM7mx1S2bby0nkOmhuMEFMQI",
    authDomain: "gg-movies-app.firebaseapp.com",
    projectId: "gg-movies-app",
    storageBucket: "gg-movies-app.appspot.com",
    messagingSenderId: "282048535921",
    appId: "1:282048535921:web:7a828611104feaa6542ad0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const coll = collection(db, "movies");

function Example() {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("series");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [bannerUrl, setBannerUrl] = useState("");
  const [coverUrl, setCoverUrl] = useState("");

  const handleAdd = () => {
    // const title =
    addDoc(coll, {
        title: title,
        description: description,
        bannerUrl: bannerUrl,
        coverUrl: coverUrl,
        type:type
    }).then((doc)=>{
        console.log(doc);
    }).catch(e =>{
        console.log(e)
    })
  };
  const handleShow = () => setShow(false);
  const prepareForAdding = ()=>{
    window.addEventListener('keydown', (event)=>{
        if(event.shiftKey && event.key === 'enter'){
            alert('shift pressed')
        }
    })
}

  return (
    <>
      <Button variant="primary" onClick={()=>{setShow(true)}} onLoad={prepareForAdding}>
        Add new show/movie
      </Button>

      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Add new show</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{display:'flex',flexFlow:'column'}}>
            <Form.Select onChange={(e)=>{
                console.log(e.target.value);
                setType(e.target.value);
                }}>
                <option>-- Select Type --</option>
                <option value={"series"}>Show/Series</option>
                <option value={"movie"}>Movie</option>
            </Form.Select>
            <Form.Label htmlFor='eTitle' style={{paddingTop:'20px'}}>Title:</Form.Label>
            <Form.Control type='text' placeholder={`name of the ${type}`} onChange={(e)=>{
                console.log(e.target.value)
                setTitle(e.target.value)
            }} id='eTitle'/>
            <Form.Label htmlFor='eCoverUrl' style={{paddingTop:'20px'}} >Cover URL:</Form.Label>
            <Form.Control type='text' placeholder={`cover for ${title}`} id='eCoverUrl' onChange={(e)=>{
                setCoverUrl(e.target.value)
            }}/>
            <Form.Label htmlFor='eBannerUrl' style={{paddingTop:'20px'}}>Banner URL:</Form.Label>
            <Form.Control type='text' placeholder={`banner for ${title}`} id='eBannerUrl' onChange={(e)=>{
                setBannerUrl(e.target.value)
            }}/>

            <Form.Group className="mb-3">
                <Form.Label htmlFor='eDescription'>Description</Form.Label>
                <Form.Control as="textarea" rows={3} id='eDescription' onChange={(e)=>{
                setDescription(e.target.value)
            }}/>
            </Form.Group>
            
            {/* <Form.Text placeholder={`description of the ${title} ${type}`}/> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAdd}>
            {type == "series" ? "Add Series" : "Add Movie"}
          </Button>
          <Button variant="primary" onClick={handleShow}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;