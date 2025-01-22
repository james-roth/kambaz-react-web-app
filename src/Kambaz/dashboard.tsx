import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/react.png" width={200} />
                        <div>
                            <h5> CS1234 React JS </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course"> <Link to="/Kambaz/Courses/3520/Home"
                    className="wd-dashboard-course-link" >
                    <img src="/images/c++.png" width={200} />
                    <div>
                        <h5> CS3520 C++ </h5>
                        <p className="wd-dashboard-course-title">
                            C++ scary development  </p>
                        <button> Go </button>
                    </div>
                </Link> </div>
                <div className="wd-dashboard-course"> <Link to="/Kambaz/Courses/1000/Home"
                    className="wd-dashboard-course-link" >
                    <img src="/images/python.jpg" width={200} />
                    <div>
                        <h5> CS1000 Python </h5>
                        <p className="wd-dashboard-course-title">
                            Python basic development </p>
                        <button> Go </button>
                    </div>
                </Link> </div>
                <div className="wd-dashboard-course"> <Link to="/Kambaz/Courses/4321/Home"
                    className="wd-dashboard-course-link" >
                    <img src="/images/c_sharp.png" width={200} />
                    <div>
                        <h5> CS4321 C# </h5>
                        <p className="wd-dashboard-course-title">
                            C# backend development </p>
                        <button> Go </button>
                    </div>
                </Link> </div>
                <div className="wd-dashboard-course"> <Link to="/Kambaz/Courses/4500/Home"
                    className="wd-dashboard-course-link" >
                    <img src="/images/sw_dev.jpg" width={200} />
                    <div>
                        <h5> CS4500 C# </h5>
                        <p className="wd-dashboard-course-title">
                            Software Development </p>
                        <button> Go </button>
                    </div>
                </Link> </div>
                <div className="wd-dashboard-course"> <Link to="/Kambaz/Courses/0001/Home"
                    className="wd-dashboard-course-link" >
                    <img src="/images/writing.jpg" width={200} />
                    <div>
                        <h5> CS0001 Writing for Writers? </h5>
                        <p className="wd-dashboard-course-title">
                            Writing I Guess </p>
                        <button> Go </button>
                    </div>
                </Link> </div>
            </div>
        </div>
    );
}
