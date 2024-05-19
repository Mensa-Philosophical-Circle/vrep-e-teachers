import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/dashboard/Dashboard';
import Subjects from './Pages/subjects/Subject';
import DashboardErrorPage from './Pages/dashboard/dashboardError';
import ComingSoonPage from './Pages/comingSoon';
import Attendance from './Pages/attendance/attendace';
import ExamResult from './Pages/exam/examResults';
import Login from './Pages/auth/Login';
import SubjectsList from './Pages/academics/SubjectsList';
import TryOut from './Pages/TryOut';
import Exam from './Pages/exam/exam';
import Academics from './Pages/academics/Academics';
import Pupils from './Pages/pupils/Pupils';
import StudentRootLayout from './Pages/pupils/StudentRootLayout';
import StudentExams from './Pages/pupils/StudentExams';
import StudentProfile from './Pages/pupils/StudentProfile';
import TeacherRemarks from './Pages/pupils/TeacherRemarks';
import AddExam from './Pages/exam/AddExam';
import AddExamEdit from './Pages/exam/AddExamEdit';
import { ToastifyContainer } from './lib/toastifyLoaders';
import { RequireAuth, RequireNoAuth } from './hooks/protectRoutes';
import Result from './Pages/result/Result';
import AddExamEditOption from './Pages/exam/AddExamEditOption';
import Classes from './Pages/classes/Classes';
import Terms from './Pages/result/Terms';
import ExamResults from './Pages/result/ExamResults';
import TestResults from './Pages/result/TestResults';
import ExamDetails from './Pages/exam/ExamDetails';
import CreateExam from './Pages/exam/CreateExam';

function App() {
  return (
    <>
      <ToastifyContainer />
      <BrowserRouter>
        <Routes>
          <Route element={<RequireNoAuth />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
            {/* <Route index element={<Subjects />} /> */}
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/pupils">
              <Route index element={<Pupils />} />
              <Route path=":studentId" element={<StudentRootLayout />}>
                <Route index element={<StudentProfile />} />
                <Route path="exams" element={<StudentExams />} />
                <Route path="teacher-remarks" element={<TeacherRemarks />} />
              </Route>
            </Route>
            <Route path="/exam">

              <Route index element={<Exam />} />

              <Route path="details" element={<ExamDetails/>} />

              <Route path="create-exam" element={<CreateExam/>} />


            </Route>

            <Route path="/results">

              <Route index element={<Result />} />
              
              <Route path="terms">
            
                <Route index element={<Terms />} />

                <Route path="exam-results" element={<ExamResults/>} />
                <Route path="test-results" element={<TestResults/>} />

            
              </Route>
            
            </Route>

            <Route path="/subjectslist" element={<SubjectsList />} />
            <Route path="tryout" element={<TryOut />} />
            <Route path="/comingSoon" element={<ComingSoonPage />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/Addexam" element={<AddExam />} />
            <Route path="/Addexamedit" element={<AddExamEdit />} />
            <Route path="/addexameditoption" element={<AddExamEditOption />} />

            <Route path="/classes" element={<Classes/>} />

            <Route path="/examResult" element={<ExamResult />} />
          </Route>
          <Route path="*" element={<DashboardErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

