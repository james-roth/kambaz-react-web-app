import { InputGroup, Button, Form } from "react-bootstrap";
import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
import { ListGroup } from 'react-bootstrap';
import { Link } from "react-router";
import { BsGripVertical } from 'react-icons/bs';
import AssignmentControlButtons from "./AssignmentControlButtons";
import { CgArrowDownO } from "react-icons/cg";
import { BiBook } from "react-icons/bi";


export default function Assignments() {
    return (
        <div id="wd-assignments">
            <div className="d-flex justify-content-between">
                <div>
                    <InputGroup id="wd-search-assignment flex-start" className="mb-1 me-5">
                        <InputGroup.Text><FaMagnifyingGlass /></InputGroup.Text>
                        <Form.Control type="" placeholder="Search..." />
                    </InputGroup>
                </div>
                <div className="d-flex">
                    <Button variant="secondary" className="me-2 flex-end" id="wd-add-assignment-group" style={{ display: 'flex', alignItems: 'center' }}>
                        <span> <FaPlus className="position-relative me-2" /> </span>
                        <span>Group</span>
                    </Button>
                    <Button variant="danger" className="me-2 flex-end" id="wd-add-assignment" style={{ display: 'flex', alignItems: 'center' }}>
                        <span> <FaPlus className="position-relative me-2" /> </span>
                        <span>Assignment</span>
                    </Button>
                </div>
            </div>
            <ListGroup variant="flush">
                <ListGroup.Item className="wd-module p-0 mt-3 fs-5 border-gray" id="wd-assignment-list">
                    <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between">
                        <div>
                            <BsGripVertical />
                            <CgArrowDownO className="me-2" />
                            Assignments
                        </div>
                        <div>
                            <Button variant="light" className="me-2">40% of Total</Button>
                            <FaPlus />
                        </div>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item className="wd-asgn ps-2">
                    <div className="d-flex ml-auto">
                        <Link to="/Kambaz/Courses/1234/Assignments/123" className="list-group-item border-0" >
                            <div className="d-flex ps-1 mt-1">
                                <div className="d-flex mt-4">
                                    <BsGripVertical size="30" />
                                    <BiBook className="me-2" size="30" />
                                </div>
                                <div className="d-flex flex-column ms-3">
                                    <text className="wd-asgn-link-font pe-4">A1</text>

                                    <text className="wd-asgn-modules-text">
                                        Multiple Modules
                                    </text>
                                    <text className="wd-asgn-description-text">
                                        | <strong>Not available until </strong> May 27th at 1:00am. |
                                        Introductory homework assignment for CS 4550. | 100pts.
                                    </text>
                                </div>
                            </div>
                        </Link>
                        <div className="ms-auto mt-4">
                            <AssignmentControlButtons />
                        </div>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item className="wd-asgn ps-2">
                    <div className="d-flex ml-auto">
                        <Link to="/Kambaz/Courses/1234/Assignments/123" className="list-group-item border-0" >
                            <div className="d-flex ps-1 mt-1">
                                <div className="d-flex mt-4">
                                    <BsGripVertical size="30" />
                                    <BiBook className="me-2" size="30" />
                                </div>
                                <div className="d-flex flex-column ms-3">
                                    <text className="wd-asgn-link-font pe-4">A2</text>

                                    <text className="wd-asgn-modules-text">
                                        Multiple Modules
                                    </text>
                                    <text className="wd-asgn-description-text">
                                        | <strong>Not available until </strong> May 31st at 1:00am. |
                                        CSS part 1 for CS4550. Homework assignment. | 100pts.
                                    </text>
                                </div>
                            </div>
                        </Link>
                        <div className="ms-auto mt-4">
                            <AssignmentControlButtons />
                        </div>
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}
