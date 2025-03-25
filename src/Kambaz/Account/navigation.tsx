import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
let element_last = "";

function updateSigninNav(id_str: string, toggle: boolean, stop_recur: boolean = false) {
    // update the background and text color of the element when clicked, find the last element and reset
    let classname = document.getElementById(id_str)?.getAttribute("className");
    let old_classname = classname ? classname : "";

    if (old_classname == "") {
        if (toggle) {
            old_classname = "list-group-item wd-signin-menu-toggled text-black";
        } else {
            old_classname = "list-group-item wd-signin-menu-untoggled text-danger";
        }
    }
    if (toggle) {
        //toggle the element selected
        old_classname.replace("wd-signin-menu-untoggled", "wd-signin-menu-toggled");
        old_classname.replace("text-danger", "text-black");
    } else {
        // toggle the element unselected, reset colors
        old_classname.replace("wd-signin-menu-toggled", "wd-signin-menu-untoggled");
        old_classname.replace("text-black", "text-danger");
    }

    const element = document.getElementById(id_str);
    if (element) {
        element.className = old_classname;
    }

    // re-assign the old element an unselected style
    if (!stop_recur) {
        if (element_last == "") {
            element_last = id_str;
            return;
        }
        updateSigninNav(element_last, false, true);
        element_last = id_str;
    }
}

export default function AccountNavigation() {
    const { pathname } = useLocation();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const active = (path: string) => (pathname.includes(path) ? "active" : "");
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    return (
        <div id="wd-account-navigation">
            {links.map((link) => (
                <Link to={`/Kambaz/Account/${link}`} id={`wd-signin-${link.toLowerCase()}-link`}
                    className="list-group-item wd-signin-menu-untoggled text-danger"
                    onClick={() => updateSigninNav(`wd-signin-${link.toLowerCase()}-link`, true)}>
                    {link} </Link>
            ))}
            {currentUser && currentUser.role === "ADMIN" && (
                <Link to={`/Kambaz/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link>)}
        </div>
    );
}
