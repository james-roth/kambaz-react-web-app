import { Link } from "react-router-dom";
import { Card, Col, Row, Button } from "react-bootstrap";
import "./styles.css";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    <Col className="wd-dashboard-course" style={{ width: "270px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/react.png" width="100%" height={180} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col >
                    <Col className="wd-dashboard-course" style={{ width: "270px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/3520/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/c++.png" width="100%" height={180} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS3520 C++</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Memory Management</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "270px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1000/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/python.jpg" width="100%" height={180} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS1000 Python</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Ssssssssssssssssssssss</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "270px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/4321/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/c_sharp.png" width="100%" height={180} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS4321 C#</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">C# Backend Dev</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "270px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/4500/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/sw_dev.jpg" width="100%" height={180} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS4500 C++</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Software Development</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "270px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/3520/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/writing.jpg" width="100%" height={180} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS0001 Writing</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Boop boop boop</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                </Row >
            </div>
        </div>
    );
}
