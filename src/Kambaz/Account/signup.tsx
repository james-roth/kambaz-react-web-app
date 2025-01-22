import { Link } from "react-router-dom"

export default function Signup() {
    return (
        <div>
            <input defaultValue="username" className="wd-username" /> <br />
            <input defaultValue="password" type="password" className="wd-password" /> <br />
            <input defaultValue="verfiy password" type="password" className="wd-password-verify" /> <br />
            <Link to="/Kambaz/Account/Profile" > Sign up </Link><br />
            <Link to="/Kambaz/Account/Signin" >Sign in</Link>
        </div>
    )
}