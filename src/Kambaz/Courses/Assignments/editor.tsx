import { Form, FormCheck, FormSelect, InputGroup } from 'react-bootstrap';
import { Row, Col, Button } from 'react-bootstrap';
import Multiselect from 'multiselect-react-dropdown';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useState } from 'react';
import { addAssignment, updateAssignment } from './reducer';


export default function AssignmentEditor() {
    const { aid } = useParams();
    const { cid } = useParams()
    const { assignments } = useSelector((state: any) => state.assignmentReducer);
    const [assignment, setAssignment] = useState(assignments.find((a: any) => a._id == aid) ? assignments.find((a: any) => a._id == aid) : { _id: aid, course: cid });
    const dispatch = useDispatch();

    return (
        <div id="wd-assignments-editor">
            <Row>
                <Col xs={1}></Col>
                <Col>
                    <Form.Label htmlFor="wd-asgn-name" className="pe-2 mt-2">Assignment Name</Form.Label>
                    <InputGroup className="mt-2" style={{ width: "70%" }}>
                        <Form.Control id="wd-asgn-name" className="border-2" placeholder={assignment.title}
                            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
                    </InputGroup>
                    <Form.Control as="textarea" rows={5} style={{ width: "69%" }} className="mt-4 pe-5 border-2"
                        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={2} className="d-flex justify-content-end">
                    <Form.Label htmlFor="wd-asgn-points" className="mt-2">Points</Form.Label>
                </Col>
                <Col>
                    <Form.Control id="wd-asgn-points" className="border-2" value={assignment.points} style={{ width: "40%" }}
                        onChange={(e) => setAssignment({ ...assignment, points: e.target.value })} />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={2} className="d-flex justify-content-end">
                    <Form.Label htmlFor="wd-asgn-group-dd" className="mt-2">Assignment Group</Form.Label>
                </Col>
                <Col>
                    <FormSelect id="wd-asgn-group-dd" className="pe-2 border-2" style={{ width: "40%" }}>
                        <option value="ASSIGNMENTS">Assignments</option>
                    </FormSelect>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={2} className="d-flex justify-content-end">
                    <Form.Label htmlFor="wd-asgn-grade-as-dd" className="mt-2">Display Grade As</Form.Label>
                </Col>
                <Col>
                    <FormSelect id="wd-asgn-grade-as-dd" className="pe-2 border-2" style={{ width: "40%" }}>
                        <option value="PERCENTAGE">Percentage</option>
                        <option value="PERCENTAGE">Number</option>
                    </FormSelect>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={2} className="d-flex justify-content-end">
                    <Form.Label htmlFor="wd-asgn-submission-type-dd" className="mt-2">Submission Type</Form.Label>
                </Col>
                <Col>
                    <FormSelect id="wd-asgn-submission-type-dd" className="pe-2 border-2" style={{ width: "40%" }}>
                        <option value="ONLINE">Online</option>
                    </FormSelect>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={2}>  </Col>
                <Col>
                    <Form.Label>Online Entry Options</Form.Label>
                    <FormCheck type="checkbox" id="wd-text-entry" label="Text Entry" />
                    <FormCheck type="checkbox" id="wd-website-url" label="Website URL" />
                    <FormCheck type="checkbox" id="wd-media-recordings" label="Media Recordings" />
                    <FormCheck type="checkbox" id="wd-student-annotation" label="Student Annotations" />
                    <FormCheck type="checkbox" id="wd-file-upload" label="File Uploads" />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={2} className="d-flex justify-content-end">
                    <Form.Label className="mt-2">Assign</Form.Label>
                </Col>
                <Col>
                    <Form.Label htmlFor="wd-asgn-assign-to-dd" className="mt-2">Assign To</Form.Label>
                </Col>
            </Row>
            <Row>
                <Col xs={2}></Col>
                <Col xs={2}>
                    <Multiselect
                        isObject={false}
                        onKeyPressFn={function noRefCheck() { }}
                        onRemove={function noRefCheck() { }}
                        onSearch={function noRefCheck() { }}
                        onSelect={function noRefCheck() { }}
                        options={[
                            "Everyone"
                        ]} />
                </Col>
            </Row>
            <Row className="mt-2">
                <Col xs={2}></Col>
                <Col>
                    <Form.Label htmlFor="wd-asgn-due-date">Due</Form.Label>
                    <Form.Control id="wd-asgn-due-date" type="date" value={assignment.due_date_str} style={{ width: "150px" }}
                        onChange={(e) => setAssignment({ ...assignment, due_date_str: e.target.value })} />
                </Col>
            </Row>
            <Row className="mt-2">
                <Col xs={2}></Col>
                <Col xs={1} className="me-5">
                    <Form.Label htmlFor="wd-asgn-available-from">Available From</Form.Label>
                    <Form.Control id="wd-asgn-available-from" type="date" value={assignment.avail_date_str} style={{ width: "150px" }}
                        onChange={(e) => setAssignment({ ...assignment, avail_date_str: e.target.value })} />
                </Col>
                <Col>
                    <Form.Label htmlFor="wd-asgn-available-until">Until</Form.Label>
                    <Form.Control id="wd-asgn-available-until" type="date" value={assignment.avail_until_date_str} style={{ width: "150px" }}
                        onChange={(e) => setAssignment({ ...assignment, avail_until_date_str: e.target.value })} />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={8}>
                    <hr className="border-3 ms-5"></hr>
                    <Button variant="secondary" id="wd-assign-edit-cancel" style={{ float: "right" }} href={`#/Kambaz/Courses/${cid}/Assignments`}
                        onClick={() => {setAssignment({ _id: aid, course: cid })}}>Cancel</Button>
                    <Button variant="secondary" className="me-1" id="wd-assign-edit-save" style={{ float: "right" }}
                        onClick={() => {
                            assignments.filter((a: any) => a._id == aid).length > 0 ?
                                dispatch(updateAssignment(assignment)) :
                                dispatch(addAssignment(assignment));
                        }}
                        href={`#/Kambaz/Courses/${cid}/Assignments`}>Save</Button>
                </Col>
            </Row>
        </div >
    );
}
