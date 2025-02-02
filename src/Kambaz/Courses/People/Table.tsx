import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
    return (
        <div id="wd-people-table">
            <Table striped>
                <thead>
                    <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
                </thead>
                <tbody>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Tony</span>{" "}
                        <span className="wd-last-name">Stark</span></td>
                        <td className="wd-login-id">001234561S</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-01</td>
                        <td className="wd-total-activity">10:21:32</td>
                    </tr>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Amos</span>{" "}
                        <span className="wd-last-name">Burton</span></td>
                        <td className="wd-login-id">001234567S</td>
                        <td className="wd-section">S202</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2255-02-01</td>
                        <td className="wd-total-activity">23:08:32</td>
                    </tr>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Ikora</span>{" "}
                        <span className="wd-last-name">Rey</span></td>
                        <td className="wd-login-id">103257283S</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">INSTRUCTOR</td>
                        <td className="wd-last-activity">3177-01-01</td>
                        <td className="wd-total-activity">3425:02:12</td>
                    </tr>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Winston</span>{" "}
                        <span className="wd-last-name">Duarte</span></td>
                        <td className="wd-login-id">001955827S</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2377-01-01</td>
                        <td className="wd-total-activity">44:02:55</td>
                    </tr>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Elvi</span>{" "}
                        <span className="wd-last-name">Okoye</span></td>
                        <td className="wd-login-id">010978234S</td>
                        <td className="wd-section">S202</td>
                        <td className="wd-role">INSTRUCTOR</td>
                        <td className="wd-last-activity">2381-11-23</td>
                        <td className="wd-total-activity">62:02:15</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}