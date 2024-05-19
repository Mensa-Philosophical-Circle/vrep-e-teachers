import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../Pages/auth/service/loginSlice';
import datacountSlice from '../Pages/dashboard/services/datacountSlice';
import getStudentsSlice from '../Pages/pupils/services/getStudentsSlice';
import getTimetableSlice from '../services/timetable/getTimetableSlice';
import getCoursesSlice from '../Pages/academics/services/getCoursesSlice';
import createCourseSlice from '../Pages/academics/services/createCourseSlice';
import deleteCourseSlice from '../Pages/academics/services/deleteCourseSlice';
import editCourseSlice from '../Pages/academics/services/editCourseSlice';
import editTimetableSlice from '../services/timetable/editTimetableSlice';
import deleteTimetableSlice from '../services/timetable/deleteTimetableSlice';
import getAttendancesSlice from '../Pages/attendance/services/getAttendancesSlice';
import editAttendanceSlice from '../Pages/attendance/services/editAttendanceSlice';
import WhichTermSlice from './Slices/WhichTermSlice';
import CreateOREditExamSlice from './Slices/CreateOREditExamSlice';
import CancleExamPopup from './Slices/CancleExamPopupSlice';
import FinishedExamPopSlice from './Slices/FinishedExamPopSlice';
import DeleteExamSlice from './Slices/DeleteExamSlice';

const store = configureStore({
  reducer: {
    login: loginSlice,
    datacount: datacountSlice,
    getstudents: getStudentsSlice,
    gettimetable: getTimetableSlice,
    getcourses: getCoursesSlice,
    createcourse: createCourseSlice,
    deletecourse: deleteCourseSlice,
    editcourse: editCourseSlice,
    edittimetable: editTimetableSlice,
    deletetimetable: deleteTimetableSlice,
    getattendances: getAttendancesSlice,
    editattendance: editAttendanceSlice,
    createOrEdit:CreateOREditExamSlice,
    cancelExam:CancleExamPopup,
    finishedExam:FinishedExamPopSlice,
    deleteExam:DeleteExamSlice,

    whichTerm:WhichTermSlice,
  },
});

export default store;

