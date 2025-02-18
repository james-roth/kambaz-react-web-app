import { ListGroup } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";

export default function CourseNavigation() {
  const cid = useParams().cid
  const { pathname } = useLocation()

  const course_nav_links = [
    { label: "Home", path: `/Kambaz/Courses/${cid}/Home` },
    { label: "Modules", path: `/Kambaz/Courses/${cid}/Modules` },
    { label: "Piazza", path: `/Kambaz/Courses/${cid}/Piazza` },
    { label: "Zoom", path: `/Kambaz/Courses/${cid}/Zoom` },
    { label: "Assignments", path: `/Kambaz/Courses/${cid}/Assignments` },
    { label: "Quizzes", path: `/Kambaz/Courses/${cid}/Quizzes` },
    { label: "Grades", path: `/Kambaz/Courses/${cid}/Grades` },
    { label: "People", path: `/Kambaz/Courses/${cid}/People` },
  ];

  return (
    <div>
      {course_nav_links.map((link) =>
        <ListGroup id="wd-courses-navigation" className="wd-list-group fs-5 list-group-flush">
          <ListGroup.Item key={link.path} as={Link} to={link.path} className={`bg-white text-left border-0 list-group-item 
              ${pathname.includes(link.label) ? "wd-course-menu-toggled" : "wd-course-menu-untoggled"}`}>
            {link.label}
          </ListGroup.Item>
        </ListGroup>
      )}
    </div>
  )
};
