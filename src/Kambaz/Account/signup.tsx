import { Link } from "react-router-dom"
import { Form } from "react-bootstrap"

export default function Signup() {
    return (
        <div>
            <h2 className="ms-1 mb-2">Signup for Kambaz</h2>
            <Form.Control defaultValue="username" className="wd-username ms-1 mb-2 border-2" />
            <Form.Control defaultValue="password" type="password" className="wd-password ms-1 mb-2 border-2" />
            <Form.Control defaultValue="verfiy password" type="password" className="wd-password-verify ms-1 mb-2 border-2" />
            <Link to="/Kambaz/Account/Profile">Sign up </Link><br />
            <Link to="/Kambaz/Account/Signin">Sign in </Link>
        </div>
    )
}