import BackspaceIcon from "../../assets/back-icon-white.png";
import ProfileIcon from "../../assets/student-profile.png";
import "../../styles/examResults.css";
export default function ExamResult () {
    return(
        <>
         <article className="exam-result-content">
            <article className="exam-result-main">
                <article className="header">
                    <img src={BackspaceIcon} alt="An arrow pointing to the left" />
                    <h1>Exam Result Details</h1>
                </article>
                <article className="exam-result-details">
                    <article className="left-details">
                        <article className="student-details">
                            <img src={ProfileIcon} alt="" />
                            <article className="main">
                                <h2>Dara Ejibo</h2>
                                <article>
                                    <p className="gray-rectangle one">
                                        Pupil ID
                                    </p>
                                    <p>TIPSG5682</p>
                                    <p className="gray-rectangle two">
                                        Gender
                                    </p>
                                    <p>Male</p>
                                    <p className="gray-rectangle three">
                                        Class
                                    </p>
                                    <p>4th Grade</p>
                                </article>
                            </article>
                        </article>
                        <article className="subject-details">
                            <article className="header">
                                <h2>Mathematics</h2>
                                <h2>Art</h2>
                                <h2>Physics</h2>
                                <h2>Chemistry</h2>
                            </article>
                            <article className="main-student-details">
                                <article className="first-row">
                                    <p>Passed</p>
                                    <p className="score">
                                        <span className="green-text">
                                            20
                                        </span>
                                        <span className="small-text">
                                            /50
                                        </span>
                                    </p>
                                    <p className="score">
                                        <span className="green-text">
                                            8
                                        </span>
                                        <span className="small-text">
                                            /10
                                        </span>
                                    </p>
                                    <p className="score">
                                        <span className="green-text">
                                            15
                                        </span>
                                        <span className="small-text">
                                            /40
                                        </span>
                                    </p>
                                    <p className="score">
                                        <span className="green-text">
                                            9
                                        </span>
                                        <span className="small-text">
                                            /20
                                        </span>
                                    </p>
                                </article>
                                <article className="second-row">
                                    <p>Failed</p>
                                    <p className="score">
                                        <span className="red-text">
                                            30
                                        </span>
                                        <span className="small-text">
                                            /50
                                        </span>
                                    </p>
                                    <p className="score">
                                        <span className="red-text">
                                            2
                                        </span>
                                        <span className="small-text">
                                            /10
                                        </span>
                                    </p>
                                    <p className="score">
                                        <span className="red-text">
                                            25
                                        </span>
                                        <span className="small-text">
                                            /40
                                        </span>
                                    </p>
                                    <p className="score">
                                        <span className="red-text">
                                            11
                                        </span>
                                        <span className="small-text">
                                            /20
                                        </span>
                                    </p>
                                </article>
                            </article>
                        </article>
                    </article>
                    <article className="right-details">
                        <h3 className="header">
                            Exam Details
                        </h3>
                        <article className="exam-evaluation">
                            <article className="single-evaluation">
                                <p>Total Exams</p>
                                <p className="score one">
                                    245
                                    <span className="small-text">
                                        Exam
                                    </span>
                                </p>
                            </article>
                            <article className="single-evaluation">
                                <p>Attempted</p>
                                <p className="score">
                                    120
                                    <span className="small-text">
                                        /245
                                    </span>
                                </p>
                            </article>
                            <article className="single-evaluation">
                                <p>Passed</p>
                                <p className="score pie">
                                    <span className="green-text big-text">
                                        75
                                    </span>
                                    <span className="small-text green-text">
                                        /120
                                    </span>
                                </p>
                            </article>
                            <article className="single-evaluation">
                                <p>Failed</p>
                                <p className="score pie">
                                    <span className="red-text big-text">
                                        45
                                    </span>
                                    <span className="small-text red-text">
                                        /120
                                    </span>
                                </p>
                            </article>
                        </article>
                    </article>
                </article>
            </article>
         </article>
        </>
    )
}