// import Sidebar from '../../components/sidebar';
// import CalendarSidebar from './CalendarSidebar';
// import studentIcon from '../../assets/images/studentwhiteicon.png';
// import medalIcon from '../../assets/images/medalwhiteicon.png';
// import '../../styles/Teacherdash.css';
// import WeeklyTable from './WeeklyTable';
// import { PiExam } from 'react-icons/pi';
// import { Link } from 'react-router-dom';

// export default function TeachersDashboard({
//   getstudents,
//   datacount,
//   gettimetable,
//   handleGetTimetable,
// }) {
//   return (
//     <div className="dashboard-section">
//       <Sidebar />
//       <section className="main-section">
//         <nav>
//           <h3>Dashboard</h3>
//         </nav>
//         {datacount.status === 'pending' && <div>Loading...</div>}

//         {datacount.status === 'fulfilled' && (
//           <div className="teacher-dashboard-header">
//             <Link className="link" style={{ textDecoration: 'none' }} to="/pupils">
//               <div>
//                 <img src={studentIcon} className="student-icon" alt="student" />
//                 <p>
//                   Pupils<span>{datacount.data.students}</span>
//                 </p>
//               </div>
//             </Link>
//             <Link className="link" style={{ textDecoration: 'none' }} to="/academics">
//               <div>
//                 <img src={medalIcon} className="teacher-icon" alt="teacher" />
//                 <p>
//                   Subjects<span>{datacount.data.courses}</span>
//                 </p>
//               </div>
//             </Link>
//             <Link className="link" style={{ textDecoration: 'none' }} to="/exam">
//               <div>
//                 <PiExam
//                   style={{
//                     fontSize: 80,
//                     color: '#fff',
//                     backgroundColor: '#fcc43e',
//                     borderRadius: '50%',
//                     padding: 10,
//                   }}
//                 />
//                 <p>
//                   Exams<span>{datacount.data.exams}</span>
//                 </p>
//               </div>
//             </Link>
//           </div>
//         )}

//         {datacount.status === 'rejected' && <div>{datacount.error.message}</div>}
//         {gettimetable.status === 'pending' && <div>Loading...</div>}
//         {gettimetable.status === 'fulfilled' && (
//           <WeeklyTable gettimetable={gettimetable} handleGetTimetable={handleGetTimetable} />
//         )}
//         {gettimetable.status === 'rejected' && <div>{gettimetable.error.message}</div>}
//       </section>

//       <CalendarSidebar getstudents={getstudents} />
//     </div>
//   );
// }

