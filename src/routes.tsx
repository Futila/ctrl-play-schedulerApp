import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { ScheduleEmployees } from "./pages/ScheduleEmployees";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/scheduled-employees" element={<ScheduleEmployees />} />
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
}
