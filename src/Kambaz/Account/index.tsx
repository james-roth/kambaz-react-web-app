import { Routes, Route, Navigate } from "react-router";
import { useSelector } from "react-redux";
import Signin from "./signin";
import Profile from "./profile";
import Signup from "./signup";
import Users from "./Users";
import AccountNavigation from "./navigation";
import { Row, Col } from "react-bootstrap";

export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-account-screen">
      <Row>
        <Col xs={1}>
          <AccountNavigation />
        </Col>
        <Col className="d-flex justify-content-left">
          <Routes>
            <Route path="/" element={<Navigate to={currentUser ? "/Kambaz/Account/Profile" : "/Kambaz/Account/Signin"} />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/Users/:uid" element={<Users />} />
          </Routes>
        </Col>
      </Row>
    </div>
  );
}

