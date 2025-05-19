import React from "react";
import EmployeeSide from "./components/EmployeeSide";
import Header from "./components/Header";
import ScheduleCalendar from "./components/ScheduleCalendar";
import HoursSummary from "./components/HoursSummary";
import { Route, Routes } from "react-router-dom";
import EmployeeManage from "./components/EmployeeManage";
import Setting from "./components/Setting";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="mx-auto flex flex-col justify-center  md:flex-row gap-3 ">
              <EmployeeSide />
              <div className="bg-blue-300 w-full md:w-5/7">
                <ScheduleCalendar />
                <HoursSummary />
              </div>
            </div>
          }
        />
        <Route path="/employees" element={<EmployeeManage />} />
        <Route path="/settings" element={<Setting />} />
      </Routes>
    </>
  );
};

export default App;
