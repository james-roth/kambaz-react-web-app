export default function Modules() {
    return (
      <div>
        <button type="button">Collapse all</button>
        <button type="button">View Progress</button>
        <select>
            <option value="PUBLISH ALL">Publish All</option>
        </select>
        <button type="button">+ Module</button>
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Hello world</li>
                </ul>
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Week 1 lecture slides</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  