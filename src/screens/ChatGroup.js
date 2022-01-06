import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  getFirestore,
  collection,
  where,
  onSnapshot,
  query,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import fireApp from "../fire";
import { useNavigate } from "react-router-dom";

const db = getFirestore();
const auth = getAuth();

const ChatGroup = () => {
  const [currentUser] = useAuthState(auth);
  const groupRef = query(
    collection(db, "rooms"),
    where("type", "==", "group"),
    where("participantsArray", "array-contains", currentUser.email)
  );
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(groupRef, (querySnapshot) => {
      const parsedChats = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        userB: doc
          .data()
          .participants.find((p) => p.email !== currentUser.email),
      }));
      setGroups(parsedChats);
    });
    return () => unsubscribe();
  }, []);
  const navigate = useNavigate();
  console.log(groups);
  return (
    <Container>
      <div>
        <br />
        <Row>
          <Col sm={10}>
            <h1>User Groups</h1>
          </Col>
          <Col sm={2}>
            <Button
              onClick={() => {
                navigate(`/userGroup`);
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
            {groups &&
              groups.map((group, index) => {
                return (
                  <div style={{ padding: 10 }} key={index}>
                    <Row>
                      <Col xs lg="2">
                        <div className="circle">
                          <span className="initials">
                            {group.groupName
                              .match(/(\b\S)?/g)
                              .join("")
                              .match(/(^\S|\S$)?/g)
                              .join("")
                              .toUpperCase()}
                          </span>
                        </div>
                      </Col>
                      <Col xs={6}>
                        <Card
                          onClick={() => {
                            navigate(`/chat`, { state: { id: group.id } });
                          }}
                          style={{ width: 500 }}
                        >
                          <Card.Body>
                            <Card.Title>{group.groupName}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                              {group.lastMessage ? group.lastMessage.text : ""}
                            </Card.Subtitle>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                );
              })}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ChatGroup;
