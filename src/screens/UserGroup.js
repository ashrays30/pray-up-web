import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import {
  getFirestore,
  collection,
  query,
  where,
  doc,
  setDoc,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import fireApp from "../fire";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const auth = getAuth();

const db = getFirestore();

const UserGroup = () => {
  const randomId = uuidv4();
  const userRef = query(collection(db, "userdata"));
  const [users] = useCollectionData(userRef);
  const [currentUser] = useAuthState(auth);
  const navigate = useNavigate();
  const [userArray, setUseArray] = useState([]);
  const [show, setShow] = useState(false);
  const [groupName, setGroupName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(randomId);
  const createGroup = async () => {
    const usr = JSON.parse(sessionStorage.getItem("userData"))
    const groupRef = doc(db, "rooms", randomId);
    await setDoc(groupRef, {
      groupName: groupName,
      type: "group",
      participants: [
        ...getAllParticipants(),
        ...getAllAdmins(),
        { displayName: currentUser.displayName, email: currentUser.email.toLowerCase(), type: usr.type },
      ],
      participantsArray: [
        ...getAllParticipants().map((u) => u.email),
        ...getAllAdmins().map((u) => u.email),
        currentUser.email,
      ],
    });
    navigate("/chatGroup");
  };
  const addOrRemove = (user) => {
    const array = [...userArray];
    var index = array.indexOf(user);
    if (index === -1) {
      array.push(user);
    } else {
      array.splice(index, 1);
    }
    setUseArray(array);
  };

  const getAllParticipants = () => {
    return userArray.map((u) => ({
      displayName: u.displayName,
      email: u.email.toLowerCase(),
      type: u.type
    }));
  };

  const getAllAdmins = () => {
    return users
      .filter((u) => u.type === "admin")
      .map((u) => ({ displayName: u.displayName, email: u.email.toLowerCase(), type: u.type }));
  };

  return (
    <Container>
      <div>
        <br />
        <Row>
          <Col sm={10}>
            <h1>List Of Volunteer</h1>
          </Col>
          <Col sm={2}>
            <Button
              onClick={() => {
                handleShow();
                console.log(userArray);
              }}
              variant="outline-dark"
            >
              Create Group
            </Button>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <ListGroup>
              {users &&
                users.map(
                  (user, index) =>
                    user.type === "Volunteer" && (
                      <ListGroup.Item key={index}>
                        <Form.Check
                          label={`${user.displayName} (${user.email})`}
                          onChange={() => addOrRemove(user)}
                          checked={
                            userArray.filter((u) => u.email === user.email)
                              .length
                          }
                        />
                      </ListGroup.Item>
                    )
                )}
            </ListGroup>
          </Col>
        </Row>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Group Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="Text"
            placeholder="Enter Group Name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => createGroup()}
            disabled={!(groupName.length > 1)}
          >
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default UserGroup;
