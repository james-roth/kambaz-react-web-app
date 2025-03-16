import { InputGroup, Button, Form } from "react-bootstrap";
import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
import { ListGroup } from 'react-bootstrap';
import { Link } from "react-router";
import { BsGripVertical } from 'react-icons/bs';
import AssignmentControlButtons from "./AssignmentControlButtons";
import { CgArrowDownO } from "react-icons/cg";
import { BiBook } from "react-icons/bi";
import { useParams, useNavigate } from 'react-router';
import { useSelector, useDispatch } from "react-redux";
import { setAssignments, deleteAssignment } from "./reducer";
import * as assignmentsClient from "./client"
import { useEffect } from "react";


function gen_date_string(date_raw: string) {
    const date = new Date(date_raw)
    const month = date.toLocaleDateString('default', { month: 'long', timeZone: 'UTC' });
    const day = date.toLocaleDateString('default', { day: '2-digit', timeZone: 'UTC' });
    return `${month} ${day}`
}

export default function Assignments() {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const { cid } = useParams()
    const { assignments } = useSelector((state: any) => state.assignmentReducer);
    const generate_new_aid = () => {
        return Math.max(
            ...assignments.filter((assignments: any) => assignments.course == cid)
                .map((a: any) => parseInt(a._id.substring(1)))) + 1
    }
    const fetchAssignments = async () => {
        const assignments = await assignmentsClient.findAllAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    }
    const removeAssignment = async (asgn: any) => {
        await assignmentsClient.deleteAssignmentForCourse(asgn.course, asgn._id);
        dispatch(deleteAssignment(asgn._id))
    };
    useEffect(() => {
        fetchAssignments();
    }, [])

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
                    <Button variant="danger" className="me-2 flex-end" id="wd-add-assignment" style={{ display: 'flex', alignItems: 'center' }}
                        onClick={() => { nav(`${generate_new_aid()}`) }} >
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
                {assignments.map((asgn: any) => (
                    <ListGroup.Item className="wd-asgn ps-2">
                        <div className="d-flex ml-auto">
                            <Link to={`/Kambaz/Courses/${cid}/Assignments/${asgn._id}`} className="list-group-item border-0" >
                                <div className="d-flex ps-1 mt-1">
                                    <div className="d-flex mt-4">
                                        <BsGripVertical size="30" />
                                        <BiBook className="me-2" size="30" />
                                    </div>
                                    <div className="d-flex flex-column ms-3">
                                        <text className="wd-asgn-link-font pe-4">{asgn.title}</text>

                                        <text className="wd-asgn-modules-text">
                                            Multiple Modules
                                        </text>
                                        <text className="wd-asgn-description-text">
                                            | <strong>Not available until </strong> {gen_date_string(asgn.avail_date_str)}. |
                                            <strong> Due </strong> {gen_date_string(asgn.due_date_str)}. | {asgn.points}pts.
                                        </text>
                                    </div>
                                </div>
                            </Link>
                            <div className="ms-auto mt-4">
                                <AssignmentControlButtons deleteAssignment={() => removeAssignment(asgn)}/>
                            </div>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}
