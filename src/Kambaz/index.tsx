import { Route, Routes } from "react-router";
import Account from "./Account";
import Dashboard from "./dashboard";
import Courses from "./Courses";
import KambazNavigation from "./navigation";
import Labs from "../Labs";
import "./styles.css";

export default function Kambaz() {
    return (
        <div id="wd-kambaz">
            <KambazNavigation />
            <h1 className="text-danger wd-main-content-offset p-3">Kambaz</h1>
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
