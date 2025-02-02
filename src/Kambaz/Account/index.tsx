import { Routes, Route, Navigate } from "react-router";
import Signin from "./signin";
import Profile from "./profile";
import Signup from "./signup";
import AccountNavigation from "./navigation";
import { Row, Col } from "react-bootstrap";

export default function Account() {
  return (
    <div id="wd-account-screen">
      <Row>
        <Col xs={1}>
          <AccountNavigation />
        </Col>
        <Col className="d-flex justify-content-left">
          <Routes>
            <Route path="/" element={<Navigate to="/Kambaz/Account/Signin" />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </Col>
      </Row>
    </div>
  );
}

