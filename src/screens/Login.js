import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import logo from "../assets/app_logo.jpg";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import fireApp from "../fire";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getFirestore();

  const login = () => {
    signInWithEmailAndPassword(auth, email, pass)
      .then(async (userCredential) => {
        const userQuery = query(
          collection(db, "userdata"),
          where("uid", "==", userCredential.user.uid)
        );
        const userData = await getDocs(userQuery);
        userData.forEach((doc) => {
          const user = doc.data()
          sessionStorage.setItem("userData", JSON.stringify(user))
          if(user.type === "admin") {
            navigate(`/users`);
          }else if(user.type === "Chapter Leader") {
            navigate(`/chatGroup`);
          } else {
            console.log("not a valid user");
          }
        });
        //navigate(`/users`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        console.log("some error occured");
      });
  };
  return (
    <Container>
      <div>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Image
              src={logo}
              rounded
              style={{ height: 400, width: 350, marginLeft: 70 }}
            />
          </Col>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPass(e.target.value)}
                  value={pass}
                />
              </Form.Group>
              <Button variant="primary" type="button" onClick={() => login()}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Login;
