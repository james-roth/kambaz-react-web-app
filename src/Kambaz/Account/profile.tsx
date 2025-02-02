import { Form, Button, FormSelect } from "react-bootstrap"

export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h3>Profile</h3>
            <Form.Control defaultValue="hello" placeholder="username" id="wd-username" className="mb-2 border-2" /> 
            <Form.Control defaultValue="password123" placeholder="password" type="password" id="wd-password" className="mb-2 border-2"/>
            <Form.Control defaultValue="Alice" placeholder="First Name" id="wd-firstname" className="mb-2 border-2" />
            <Form.Control defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" className="mb-2 border-2"/>
            <Form.Control defaultValue="1970-01-01" type="date" id="wd-dob" className="mb-2 border-2"/>
            <Form.Control defaultValue="yourname@example.com" type="email" id="wd-email" className="mb-2 border-2" />
            <FormSelect defaultValue="FACULTY" id="wd-role" className="mb-2 border-2">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </FormSelect>
            <Button variant="danger" href="/Kambaz/Account/Signin" style={{width: "250px"}}>Sign out</Button>
        </div>
    )
}