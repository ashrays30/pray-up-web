import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import {
  getFirestore,
  collection,
  runTransaction,
  doc,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import fireApp from "../fire";
import { useNavigate } from "react-router-dom";

const db = getFirestore();

const UserData = () => {
  const userRef = collection(db, "userdata");
  const [users] = useCollectionData(userRef);
  const navigate = useNavigate();
  const setUserType = async (uid, type) => {
    try {
      const userDocRef = doc(db, "userdata", uid);
      await runTransaction(db, async (transaction) => {
        const uDoc = await transaction.get(userDocRef);
        if (!uDoc.exists()) {
          console.log("Document does not exist!");
        }
        transaction.update(userDocRef, { type });
      });
      console.log("Transaction successfully committed!");
    } catch (e) {
      console.log("Transaction failed: ", e);
      console.log("some error occured");
    }
  };
  return (
    <Container>
      <div>
        <br />
        <Row>
          <Col sm={8}>
            <h1>User Data</h1>
          </Col>
          <Col sm={2}>
            <Button
              onClick={() => {
                navigate(`/wallfeed`);
              }}
              variant="outline-dark"
            >
              Add Wall Feed
            </Button>
          </Col>
          <Col sm={2}>
            <Button
              onClick={() => {
                navigate(`/chatList`);
              }}
              variant="outline-dark"
            >
              Go To All Chats
            </Button>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <Table striped bordered hover style={{ textAlign: "center" }}>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Phone Number</th>
                  <th>Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((user, index) => {
                    return (user.type !== 'admin') && <tr id={index}>
                      <td>{user.displayName}</td>
                      <td>{user.phone}</td>
                      <td>{user.type}</td>
                      <td>
                        {(user.type === "Volunteer") ? 
                          <Button
                          onClick={() => setUserType(user.uid, "User")}
                          variant="secondary"
                        >
                          Make User
                        </Button>
                        :<Button
                          onClick={() => setUserType(user.uid, "Volunteer")}
                          variant="success"
                        >
                          Make Volunteer
                        </Button>}

                        {` `}

                        {(user.type === "Chapter Leader") ? 
                          <Button
                          onClick={() => setUserType(user.uid, "User")}
                          variant="secondary"
                        >
                          Make User
                        </Button>
                        :<Button
                          onClick={() =>
                            setUserType(user.uid, "Chapter Leader")
                          }
                          variant="primary"
                          disabled={user.type === "Chapter Leader"}
                        >
                          Make Chapter Leader
                        </Button>}
                      </td>
                    </tr>;
                  })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default UserData;
