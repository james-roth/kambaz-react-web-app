import { Link } from "react-router-dom";

let element_last: string = "";

function updateCourseNav(id_str: string, toggle: boolean, stop_recur: boolean=false) {
    // update the background and text color of the element when clicked, find the last element and reset
    let classname = document.getElementById(id_str)?.getAttribute("className");
    let old_classname = classname ? classname : "";

    if (old_classname == "") {
        if (toggle) {
            old_classname = "list-group-item wd-course-menu-toggled text-black";
        } else {
            old_classname = "list-group-item wd-course-menu-untoggled text-danger";
        }
    }
    if (toggle) {
        //toggle the element selected
        old_classname.replace("wd-course-menu-untoggled", "wd-course-menu-toggled");
        old_classname.replace("text-danger", "text-black");
    } else {
        // toggle the element unselected, reset colors
        old_classname.replace("wd-course-menu-toggled", "wd-course-menu-untoggled");
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
        updateCourseNav(element_last, false, true);
        element_last = id_str;
    }
}


export default function CourseNavigation() {
  return (
    <div id="wd-courses-navigation" className="wd-list-group fs-5">
      <Link to="/Kambaz/Courses/1234/Home" id="wd-course-home-link"
        className="list-group-item text-danger"
        onClick={() => updateCourseNav("wd-course-home-link", true)}> Home </Link><br />
      <Link to="/Kambaz/Courses/1234/Modules" id="wd-course-modules-link"
        className="list-group-item text-danger wd-course-menu-toggled"
        onClick={() => updateCourseNav("wd-course-modules-link", true)}> Modules </Link><br />
      <Link to="/Kambaz/Courses/1234/Piazza" id="wd-course-piazza-link"
        className="list-group-item text-danger"
        onClick={() => updateCourseNav("wd-course-piazza-link", true)}> Piazza </Link><br />
      <Link to="/Kambaz/Courses/1234/Zoom" id="wd-course-zoom-link"
        className="list-group-item text-danger"
        onClick={() => updateCourseNav("wd-course-zoom-link", true)}> Zoom </Link><br />
      <Link to="/Kambaz/Courses/1234/Assignments" id="wd-course-quizzes-link"
        className="list-group-item text-danger"
        onClick={() => updateCourseNav("wd-course-quizzes-link", true)}> Assignments </Link><br />
      <Link to="/Kambaz/Courses/1234/Quizzes" id="wd-course-assignments-link"
        className="list-group-item text-danger"
        onClick={() => updateCourseNav("wd-course-assignments-link", true)}> Quizzes </Link><br />
      <Link to="/Kambaz/Courses/1234/People" id="wd-course-people-link"
        className="list-group-item text-danger"
        onClick={() => updateCourseNav("wd-course-people-link", true)}> People </Link><br />
    </div>
);}
