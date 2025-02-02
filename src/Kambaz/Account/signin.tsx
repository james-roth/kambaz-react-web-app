import { Link } from "react-router-dom"
import { Form, Button } from "react-bootstrap"

export default function Signin() {
    return (
        <div id="wd-signin-screen" className="ms-4">
            <h3>Sign in to Kambaz</h3>
            <Form.Control placeholder="username" className="mb-2 mt-3 border-2"/>
            <Form.Control placeholder="password" type="password" className="wd-password mb-2 border-2" />
            <Button href="#/Kambaz/Dashboard" id="wd-signin-btn"  className="mb-2" style={{width: "250px"}}> Sign in </Button> <br />
            <Link to="/Kambaz/Account/Signup" id="wd-signup-link"> Sign up </Link>
        </div >
    )
}