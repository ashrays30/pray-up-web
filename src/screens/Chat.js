import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import fireApp from "../fire";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  getDoc,
} from "firebase/firestore";
import "../App.css";

const auth = getAuth();
const db = getFirestore();

const Chat = () => {
  const location = useLocation();
  const [currentUser] = useAuthState(auth);
  const [messages, setMessages] = useState([]);
  const [roomData, setRoomData] = useState(null);
  const roomId = location.state.id;
  const roomMessagesRef = collection(db, "rooms", roomId, "messages");
  const roomsRef = doc(db, "rooms", roomId);
  useEffect(() => {
    const unsubscribe = onSnapshot(roomMessagesRef, (querySnapshot) => {
      const messagesFirestore = querySnapshot
        .docChanges()
        .filter(({ type }) => type === "added")
        .map(({ doc }) => {
          const message = doc.data();
          return { ...message, createdAt: message.createdAt.toDate() };
        })
        .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
      appendMessages(messagesFirestore);
    });
    getDoc(roomsRef).then((doc) => {
      console.log(doc.data());
      setRoomData(doc.data());
    });
    return () => unsubscribe();
  }, []);

  const appendMessages = useCallback(
    (messages) => {
      setMessages(messages);
    },
    [messages]
  );
  return (
    <Container className="chatSection">
      <h1>Participants</h1>
      <br />
      <Row>
        {roomData &&
          roomData.participants.map((value, index) => {
            console.log(value)
            return <Col md={3} id={index}>
              <div
                className="circle"
                style={{ width: "3.5rem", height: "3.5rem" }}
              >
                <span
                  className="initials"
                  style={{ fontSize: "2rem", top: "0.7rem" }}
                >
                  {value.displayName
                    .match(/(\b\S)?/g)
                    .join("")
                    .match(/(^\S|\S$)?/g)
                    .join("")
                    .toUpperCase()}
                </span>
              </div>
              {`${value.displayName} (${value.type})`}
            </Col>;
          })}
      </Row>
      <br />
      <hr />
      <Row>
        <Col>
          {messages &&
            messages.map((msg) => (
              <ChatMessage
                key={msg.id}
                message={msg}
                currentUser={currentUser}
              />
            ))}
        </Col>
      </Row>
    </Container>
  );
};

function ChatMessage({ message, currentUser }) {
  const { text, uid, photoURL, user } = message;
  const messageClass = uid === currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <div className="circle" style={{ width: "3.5rem", height: "3.5rem" }}>
          <span
            className="initials"
            style={{ fontSize: "2rem", top: "0.7rem" }}
          >
            {user.name
              .match(/(\b\S)?/g)
              .join("")
              .match(/(^\S|\S$)?/g)
              .join("")
              .toUpperCase()}
          </span>
        </div>
        <p>{text}</p>
      </div>
    </>
  );
}

export default Chat;
