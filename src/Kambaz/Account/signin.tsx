import { Link } from "react-router-dom"

export default function Signin() {
    return (
        <div id="wd-signin-screen">
            <h3>Sign in to Kambaz</h3>
            <input placeholder="username" /> <br />
            <input placeholder="password" type="password" className="wd-password" /> <br />
            <Link to="/Kambaz/Account/Profile" id="wd-signin-btn"> Sign in </Link> <br />
            <Link to="/Kambaz/Account/Signup" id="wd-signin-link"> Sign in </Link>
        </div >
    )
}