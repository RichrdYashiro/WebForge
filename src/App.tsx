import { Routes, Route } from "react-router-dom";

import { Login, MainPage, Registration, Profile } from "./pages";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
