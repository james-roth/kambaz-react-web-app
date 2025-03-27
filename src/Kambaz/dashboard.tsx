import { Link } from "react-router-dom";
import { Row, Card, Col, Button, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addEnrollment, deleteEnrollment, setEnrollments } from "./enrollReducer";
import * as enrollmentsClient from "./client"

export default function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse, enrolling, setEnrolling, updateEnrollment }: {
            courses: any[]; course: any; setCourse: (course: any) => void;
            addNewCourse: () => void; deleteCourse: (course: any) => void;
            updateCourse: () => void;
            enrolling: boolean;
            setEnrolling: (enrolling: boolean) => void;
            updateEnrollment: (courseId: string, enrolled: boolean) => void;
        }) {

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollReducer);
    const [enrollBtn, setEnrollBtn] = useState<any>(0);
    const dispatch = useDispatch();
    const fetchEnrollments = async () => {
        const enrollments = await enrollmentsClient.getEnrollmentsForUser(currentUser._id as string);
        dispatch(setEnrollments(enrollments));
    }
    const createEnrollment = async (enrollment: any) => {
        await enrollmentsClient.addEnrollment(enrollment);
        dispatch(addEnrollment(enrollment));
    };
    const removeEnrollment = async (enrollment: any) => {
        await enrollmentsClient.deleteEnrollment(enrollment._id);
        dispatch(deleteEnrollment(enrollment));
    };
    useEffect(() => {
        fetchEnrollments();
    }, [])

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">
                Dashboard
                <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
                    {enrolling ? "My Courses" : "All Courses"}
                </button></h1> <hr />
            {(currentUser.role === "FACULTY" || currentUser.role === "ADMIN") &&
                <div>
                    <div >
                        <h5>New Course
                            <button className="btn btn-primary float-end"
                                id="wd-add-new-course-click"
                                onClick={addNewCourse} > Add </button>
                            <button className="btn btn-warning float-end me-2"
                                onClick={updateCourse} id="wd-update-course-click">
                                Update
                            </button>
                        </h5>
                        <br />
                        <FormControl value={course.name} className="mb-2"
                            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                        <FormControl as="textarea" value={course.description} rows={3}
                            onChange={(e) => setCourse({ ...course, description: e.target.value })} />
                    </div>
                    <hr />
                    <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
                    <div id="wd-dashboard-courses-faculty">
                        <Row xs={1} md={5} className="g-4">
                            {courses.map((course) => (
                                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                                    <Card>
                                        <Link to={`/Kambaz/Courses/${course._id}/Home`}
                                            className="wd-dashboard-course-link text-decoration-none text-dark" >
                                            <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                                            <Card.Body className="card-body">
                                                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                                    {course.name} </Card.Title>
                                                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                                    {course.description} </Card.Text>
                                                <Button variant="primary"> Go </Button>
                                                <button onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                }} className="btn btn-danger float-end"
                                                    id="wd-delete-course-click">
                                                    Delete
                                                </button>
                                                <button id="wd-edit-course-click"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        setCourse(course);
                                                    }}
                                                    className="btn btn-warning me-2 float-end" >
                                                    Edit
                                                </button>
                                            </Card.Body>
                                        </Link>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>}
            {currentUser.role === "STUDENT" &&
                <div>
                    <Button variant="primary" className="float-end me-3"
                        onClick={() => { enrollBtn < 2 ? setEnrollBtn(enrollBtn + 1) : setEnrollBtn(0) }}> Enrollments </Button> <br />
                    <div id="wd-dashboard-courses-student">
                        <Row xs={1} md={5} className="g-4">
                            {courses.filter(
                                () => enrollBtn === 1 || enrollBtn !== 0).map((course) => (
                                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                                        <Card>
                                            <Link onClick={(e) => {
                                                if (!enrollments.some((enrollment: any) => enrollment.user === currentUser._id && enrollment.course === course._id)) {
                                                    e.preventDefault(); // stops the link from triggering if the user is not enrolled
                                                }
                                            }} to={`/Kambaz/Courses/${course._id}/Home`}
                                                className="wd-dashboard-course-link text-decoration-none text-dark" >
                                                <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                                                <Card.Body className="card-body">
                                                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                                        {course.name}
                                                    </Card.Title>
                                                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                                        {course.description} </Card.Text>
                                                    <div>
                                                        {enrolling && (
                                                            <button onClick={(event) => {
                                                                event.preventDefault();
                                                                updateEnrollment(course._id, !course.enrolled);
                                                            }} className={`btn mb-2 ${course.enrolled ? "btn-danger" : "btn-success"} float-end`} >
                                                                {course.enrolled ? "Unenroll" : "Enroll"}
                                                            </button>
                                                        )}
                                                    </div>
                                                </Card.Body>
                                            </Link>
                                        </Card>
                                    </Col>
                                ))}
                        </Row>
                    </div>
                </div>}
        </div >);
}
