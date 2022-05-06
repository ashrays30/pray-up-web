import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Alert,
  Table
} from "react-bootstrap";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, doc, addDoc, deleteDoc  } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import fireApp from "../fire";
import { useNavigate } from "react-router-dom";

const db = getFirestore();
const auth = getAuth();

const WallFeed = () => {
  const [desc, setDesc] = useState("");
  const [alert, setAlert] = useState(false);
  const feedRef = collection(db, "posts");
  const [feeds] = useCollection(feedRef);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const deletePost = async (id) => {
    await deleteDoc(doc(db, "posts", id));
  };

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
          <Row>
            <Col>
            <Table striped bordered hover style={{ textAlign: "center" }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Feed</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {feeds &&
                  feeds.docs.map((doc, index) => {
                   const feed = doc.data()
                    return <tr id={index}>
                      <td>{feed.name}</td>
                      <td>{feed.post}</td>
                      <td>
                          <Button
                          onClick={() => {deletePost(doc.id)}}
                          variant="secondary"
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>;
                  })}
              </tbody>
            </Table>
            </Col>
          </Row>
        </Row>
      </div>
    </Container>
  );
};

export default WallFeed;
