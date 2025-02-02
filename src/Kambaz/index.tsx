import { Route, Routes, Link } from "react-router";
import Account from "./Account";
import Dashboard from "./dashboard";
import Courses from "./Courses";
import KambazNavigation from "./navigation";
import Labs from "../Labs";
import "./styles.css";

export default function Kambaz() {
    return (
        <div id="wd-kambaz">
            <h1 className="text-danger wd-main-content-offset pt-3">Kambaz</h1>
            <Link to="/Kambaz/Labs/Lab1" id="wd-labs-link-main" className="wd-main-content-offset">Link to Labs</Link>
            <KambazNavigation />
            <div className="wd-main-content-offset p-3">
                <Routes>
                    <Route path="/Account/*" element={<Account />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/Courses/:cid/*" element={<Courses />} />
                    <Route path="/Calendar" element={<h1>Calendar</h1>} />
                    <Route path="/Inbox" element={<h1>Inbox</h1>} />
                    <Route path="/Labs/*" element={<Labs />} />
                </Routes>
            </div>
        </div>
    );
}
