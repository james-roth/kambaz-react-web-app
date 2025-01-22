

export default function AssignmentEditor() {
    // return (
    //     <h1>HELLO WORLD</h1>
    // );
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                Please put assignment description here
            </textarea>
            <br />
            <table align="right">
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr> <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="ASSIGNMENTS">Assignments</option>
                        </select>
                    </td>
                </tr> <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="PERCENTAGE">Percentage</option>
                            <option value="NUMBER">Number</option>
                        </select>
                    </td>
                </tr> <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="ONLINE">Online</option>
                        </select>
                    </td>
                </tr> <br />
                <tr>
                    <td></td>
                    <td>
                        <label htmlFor="wd-submission-type">Online Entry Options</label>
                    </td>
                </tr>
                <tr>
                    <td align="right"></td>
                    <td>
                        <input type="checkbox" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label>
                    </td>
                </tr>
                <tr>
                    <td align="right"></td>
                    <td>
                        <input type="checkbox" id="wd-tex-entry" />
                        <label htmlFor="wd-tex-entry">Website URL</label>
                    </td>
                </tr>
                <tr>
                    <td align="right"></td>
                    <td>
                        <input type="checkbox" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label>
                    </td>
                </tr>
                <tr>
                    <td align="right"></td>
                    <td>
                        <input type="checkbox" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotations</label>
                    </td>
                </tr>
                <tr>
                    <td align="right"></td>
                    <td>
                        <input type="checkbox" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Uploads</label>
                    </td>
                </tr>
                <p></p>
                <tr>
                    <td align="right">
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                    <td>
                        <label htmlFor="wd-assign-to">Assign To</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td><input id="wd-assign-to" value={"Everyone"} /></td>
                </tr> <br />
                <tr>
                    <td></td>
                    <td><label htmlFor="wd-due-date">Due</label></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="date" id="wd-due-date" defaultValue="2025-01-01" /></td>
                </tr> <br />
                <tr>
                    <td></td>
                    <td>
                        <label htmlFor="wd-available-from">Available From</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label htmlFor="wd-available-until">Until</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="date" id="wd-available-from" defaultValue="2025-01-02" /> &nbsp;
                        <input type="date" id="wd-available-until" defaultValue="2025-01-02" />
                    </td>
                </tr>
            </table> <br />
            <div >
                <hr></hr>
                <button id="wd-assign-edit-save" style={{float: "right"}}>Save</button>
                <button id="wd-assign-edit-cancel" style={{float: "right"}}>Cancel</button>
            </div>
        </div>
    );
}
