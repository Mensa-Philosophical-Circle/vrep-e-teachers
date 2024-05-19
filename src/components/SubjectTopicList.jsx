import Sidebar from "./sidebar";
import "../styles/Subjects.css";
import searchIcon from "../assets/images/searchicon.png";
import plusIcon from "../assets/images/plusicon.png";
import threedots from "../assets/images/threedots.png";

function SubjectTopicList() {
  return (
    <>
      <Sidebar />
      <section className="subjects-panel-container">
        <div className="subjects-navbar">
          <div className="admin-info">
            <div className="avatar-container"></div>
            <h3>Abe Toluwani</h3>
            <div className="admin-links">
              <a>Profile</a>
              <a>Messages</a>
              <a>Notification</a>
            </div>
          </div>
          <div className="search-container">
            <img src={searchIcon} alt=""/>
            <input type="text" placeholder="Search here..." />
          </div>
        </div>

        <div className="subjects">
          <div className="subjects-panel">
            <h3>Subjects</h3>
          </div>

          <div className="topics-list">
            <ul>
              <li>
                <img src={threedots} className="three-dots" alt=""/>

                <p>Chapter 1</p>
                <span>Introduction</span>
              </li>

              <li>
                <img src={threedots} className="three-dots" alt=""/>

                <p>Chapter 2</p>
                <span>Chapter Name</span>
              </li>

              <li>
                <img src={threedots} className="three-dots" alt=""/>
                <p>Chapter 3</p>
                <span>Chapter Name</span>
              </li>

              <li>
                <img src={threedots} className="three-dots" alt=""/>
                <p>Chapter 4</p>
                <span>Chapter Name</span>
              </li>
            </ul>
          </div>

          <button href="#" className="btn-invert">
            <img src={plusIcon} alt=""/>
            Add Chapter
          </button>
        </div>
      </section>
    </>
  );
}

export default SubjectTopicList;
