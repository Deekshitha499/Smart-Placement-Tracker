import ATSChecker from "../pages/students/ATSChecker";

import {

  BrowserRouter,
  Routes,
  Route,
  Navigate

} from "react-router-dom";



/* AUTH */

import Login from "../pages/auth/Login";

import Register from "../pages/auth/Register";



/* TPO */

import Dashboard from "../pages/dashboard/Dashboard";

import Drives from "../pages/drives/Drives";

import Companies from "../pages/companies/Companies";

import Students from "../pages/students/Students";

import Applications from "../pages/applications/Applications";



/* STUDENT */

import StudentDashboard from "../pages/students/StudentDashboard";

import StudentCompanies from "../pages/students/StudentCompanies";

import StudentDrives from "../pages/students/StudentDrives";

import MyApplications from "../pages/students/MyApplications";

import MockInterviews from "../pages/students/MockInterviews";

import InterviewQuestions from "../pages/students/InterviewQuestions";

import Tests from "../pages/students/Tests";

import TestResult from "../pages/students/TestResult";

import QuizPage from "../pages/students/QuizPage";





export default function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        {/* DEFAULT */}

        <Route
          path="/"
          element={<Navigate to="/login" />}
        />



        {/* AUTH */}

        <Route
          path="/login"
          element={<Login />}
        />



        <Route
          path="/register"
          element={<Register />}
        />



        {/* TPO ROUTES */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />



        <Route
          path="/drives"
          element={<Drives />}
        />



        <Route
          path="/companies"
          element={<Companies />}
        />



        <Route
          path="/students"
          element={<Students />}
        />



        <Route
          path="/applications"
          element={<Applications />}
        />



        {/* STUDENT ROUTES */}

        <Route
          path="/student/dashboard"
          element={<StudentDashboard />}
        />



        <Route
          path="/student/companies"
          element={<StudentCompanies />}
        />

        <Route
  path="/student/mock-interviews"
  element={<MockInterviews />}
/>

<Route
  path="/student/interview-questions"
  element={<InterviewQuestions />}
/>



<Route
  path="/student/tests"
  element={<Tests />}
/>

<Route
  path="/student/test-result"
  element={<TestResult />}
/>

<Route
  path="/student/quiz/:type"
  element={<QuizPage />}
/>


        <Route
          path="/student/drives"
          element={<StudentDrives />}
        />



        <Route
          path="/student/applications"
          element={<MyApplications />}
        />



        {/* FALLBACK */}

        <Route
          path="*"
          element={<Navigate to="/login" />}
        />

        <Route
  path="/student/ats-checker"
  element={<ATSChecker />}
/>

      </Routes>

    </BrowserRouter>

  );

}