import { Link } from "react-router-dom";

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
    return (
        <div id="wd-account-navigation">
            <Link to={`/Kambaz/Account/Signin`} id="wd-signin-link" className="list-group-item wd-signin-menu-untoggled text-danger"
                onClick={() => updateSigninNav("wd-signin-link", true)}>Signin  </Link> <br />
            <Link to={`/Kambaz/Account/Signup`} id="wd-signup-link" className="list-group-item wd-signin-menu-untoggled text-danger"
                onClick={() => updateSigninNav("wd-signup-link", true)}>Signup  </Link> <br />
            <Link to={`/Kambaz/Account/Profile`} id="wd-signin-profile-link" className="list-group-item wd-signin-menu-untoggled text-danger"
                onClick={() => updateSigninNav("wd-signin-profile-link", true)}>Profile </Link> <br />
        </div>
    );
}
