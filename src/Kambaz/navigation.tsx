import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid, LiaCalendar, LiaFlaskSolid, LiaHomeSolid, LiaMailBulkSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";

let element_last: string = "";

function updateBgText(id_str: string, toggle: boolean, stop_recur: boolean=false) {
    // update the background and text color of the element when clicked, find the last element and reset
    let classname = document.getElementById(id_str)?.getAttribute("className");
    let old_classname = classname ? classname : "";

    if (old_classname == "") {
        if (toggle) {
            old_classname = "list-group-item text-center border-0 bg-white text-danger";
        } else {
            old_classname = "list-group-item text-center border-0 bg-black text-white";
        }
    }
    if (toggle) {
        //toggle the element selected
        old_classname.replace("bg-black", "bg-white");
        old_classname.replace("text-white", "text-danger");
    } else {
        // toggle the element unselected, reset colors
        old_classname.replace("bg-white", "bg-black");
        old_classname.replace("text-danger", "text-white")
    }

    const element = document.getElementById(id_str);
    if (element) {
        element.className = old_classname;
    }

    // re-assign the old element an unselected color scheme
    if (!stop_recur) {
        if (element_last == "") {
            element_last = id_str;
            return;
        }
        updateBgText(element_last, false, true);
        element_last = id_str;
    }
}

export default function KambazNavigation() {
    return (
        <div>
            <div id="wd-kambaz-navigation" style={{ width: 110 }}
                className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2 ">
                <a id="wd-neu-link" target="_blank"
                    href="https://www.northeastern.edu/"
                    className="list-group-item bg-black border-0 text-center">
                    <img src="/images/NEU.jpg" width="75px" /></a>
                <Link to="/Kambaz/Account" id="wd-account-link"
                    onClick={() => updateBgText("wd-account-link", true)}
                    className="list-group-item text-center border-0 bg-black text-white">
                    <FaRegCircleUser className="fs-1 text text-white" /><br />
                    Account</Link>
                <Link to="/Kambaz/Dashboard" id="wd-dashboard-link"
                    onClick={() => updateBgText("wd-dashboard-link", true)}
                    className="list-group-item text-center border-0 bg-black text-white">
                    <AiOutlineDashboard className="fs-1 text-danger" /><br />
                    Dashboard </Link>
                <Link to="/Kambaz/Dashboard" id="wd-course-link"
                    onClick={() => updateBgText("wd-course-link", true)}
                    className="list-group-item text-center border-0 bg-black text-white">
                    <LiaBookSolid className="fs-1 text-danger" /><br />
                    Courses </Link>
                <Link to="/Kambaz/Calendar" id="wd-calendar-link"
                    onClick={() => updateBgText("wd-calendar-link", true)}
                    className="list-group-item text-center border-0 bg-black text-white">
                    <LiaCalendar className="fs-1 text-danger" /><br />
                    Calendar </Link>
                <Link to="/Kambaz/Inbox" id="wd-inbox-link"
                    onClick={() => updateBgText("wd-inbox-link", true)}
                    className="list-group-item  text-center border-0 bg-black text-white">
                    <LiaMailBulkSolid className="fs-1 text-danger" /><br />
                    Inbox </Link>
                <Link to="/Kambaz/Labs" id="wd-labs-link"
                    onClick={() => updateBgText("wd-labs-link", true)}
                    className="list-group-item text-center border-0 bg-black text-white">
                    <LiaFlaskSolid className="fs-1 text-danger" /><br />
                    Labs </Link>
                <Link to="/" id="wd-home-link"
                    className="list-group-item text-white bg-black text-center border-0">
                    <LiaHomeSolid className="fs-1 text-danger" /><br />
                    Home </Link>
            </div>
        </div>
    );
}
