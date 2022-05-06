import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Alert
} from "react-bootstrap";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, doc, addDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import fireApp from "../fire";
import { useNavigate } from "react-router-dom";

const db = getFirestore();
const auth = getAuth();

const WallFeed = () => {
  const [desc, setDesc] = useState("");
  const [alert, setAlert] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const submitPost = async () => {
    await addDoc(collection(db, "posts"), {
      userId: user.uid,
      name: user.displayName,
      post: desc,
      postImg: "",
      postTime: new Date(),
      likes: null,
      comments: null,
    });
    setAlert(true)
    setTimeout(() => {
      setAlert(false)
    }, 5000) 
    setDesc("");
  };
  return (
    <Container>
      <div>
        <br />
        <Row>
          <Col sm={8}>
            <h1> Add Wall Feeds</h1>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <br />
            <br />
            <br />
            <Row>
              <InputGroup>
                <InputGroup.Text>Add Feed</InputGroup.Text>
                <FormControl
                  as="textarea"
                  aria-label="With textarea"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </InputGroup>
            </Row>
            <br />
            <br />
            <Button
              variant="primary"
              type="button"
              onClick={() => {
                submitPost();
              }}
            >
              Add Feed
            </Button>
            <br />
            <br />
            <br />
            {alert && <Alert variant={"success"}>
              Feed added successfully
            </Alert>}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default WallFeed;
