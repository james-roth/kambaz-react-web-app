export default function Assignments() {
    return (
        <div id="wd-assignments">
            <input placeholder="Search for Assignments"
                id="wd-search-assignment" />
            <button id="wd-add-assignment-group">+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>
            <h3 id="wd-assignments-title">
                ASSIGNMENTS 40% of Total <button>+</button> </h3>
            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <a href="#/Kambaz/Courses/1234/Assignments/123"
                        className="wd-assignment-link" >
                        A1 - ENV + HTML
                    </a> </li>
                <text>
                    The introductory homework for CS 4550. <br />
                    Due yesterday.
                </text>
                <li className="wd-assignment-list-item">
                    <a href="#/Kambaz/Courses/1234/Assignments/123"
                        className="wd-assignment-link" >
                        A2 - CSS + Bootstrap
                    </a> </li>
                <text>
                    Multiple Modules | <strong>Not available yet. </strong><br />
                    Still due yesterday.
                </text>
                <li className="wd-assignment-list-item">
                    <a href="#/Kambaz/Courses/1234/Assignments/123"
                        className="wd-assignment-link" >
                        A3 - React??
                    </a> </li>
                <text>
                    Multiple Modules | <strong>Out now </strong><br />
                    It's work. Some homework. React maybe?
                </text>
            </ul>
        </div>
    );
}
