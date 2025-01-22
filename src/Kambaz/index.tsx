import { Route, Routes, Link } from "react-router";
import Account from "./Account";
import Dashboard from "./dashboard";
import Courses from "./Courses";
import KambazNavigation from "./navigation";

export default function Kambaz() {
    return (
        <div id="wd-kambaz">
            <h1>Kambaz</h1>
            <Link to="/Labs">Labs</Link> <br />
            <table align="left">
                <tr>
                    <td valign="top">
                        <KambazNavigation />
                    </td>
                    <td>
                        <Routes>
                            {/* <Route path="/" element={<Navigate to="Account" />} /> */}
                            <Route path="/Account/*" element={<Account />} />
                            <Route path="/Dashboard" element={<Dashboard />} />
                            <Route path="/Courses/:cid/*" element={<Courses />} />
                            <Route path="/Calendar" element={<h1>Calendar</h1>} />
                            <Route path="/Inbox" element={<h1>Inbox</h1>} />
                        </Routes>
                    </td>
                </tr>
            </table>
        </div>
    );
}
