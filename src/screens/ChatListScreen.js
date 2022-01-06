import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import "../App.css";
import fireApp from "../fire";
import {
  getFirestore,
  collection,
  query,
  onSnapshot,
  where,
} from "@firebase/firestore";
import { useNavigate } from "react-router-dom";

const auth = getAuth();
const db = getFirestore();

const ChatList = () => {
  const [currentUser] = useAuthState(auth);
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();
  const chatsQuery = query(
    collection(db, "rooms"),
    where("participantsArray", "array-contains", currentUser.email)
  );

  useEffect(() => {
    const unsubscribe = onSnapshot(chatsQuery, (querySnapshot) => {
      const parsedChats = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        userB: doc
          .data()
          .participants.find((p) => p.email !== currentUser.email),
      }));
      setRooms(parsedChats.filter((doc) => doc.lastMessage));
    });
    return () => unsubscribe();
  }, []);

  return (
    <Container>
      <div>
        <Row>
          <Col md="auto" style={{ padding: 10 }}>
            <h1> All Charts </h1>
          </Col>
        </Row>

        {rooms.map((room, index) => {
          return (
            <div style={{ padding: 10 }} key={index}>
              <Row>
                <Col xs lg="2">
                  <div className="circle">
                    <span className="initials">
                      {room.userB.displayName
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
                      navigate(`/chat`, {state:{ id: room.id }});
                    }}
                    style={{ width: 500 }}
                  >
                    <Card.Body>
                      {room.groupName ? <Card.Title>{`${room.userB.displayName} (Group: ${room.groupName})`}</Card.Title> : <Card.Title>{`${room.userB.displayName}`}</Card.Title>}
                      <Card.Subtitle className="mb-2 text-muted">
                        {room.lastMessage.text}
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default ChatList;
