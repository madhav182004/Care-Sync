import { Routes, Route } from "react-router-dom";
import Homepage from "./components/video_call/video";
import RoomPage from "./components/video_call/room";
import Form from "./components/form/Form";
import Main from "./components/LandingPage/Main";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { RegisterPage } from "./components/RegisterPage/RegisterPage";
import DoctorForm from "./components/DoctorForm/DoctorForm";
import { Connect } from "./components/connect/Connect";
import BloodHelp from "./components/BloodHelp/BloodHelp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/connect" element={<Connect />} />
      <Route path="/form" element={<Form />} />
      <Route path="/doctorform" element={<DoctorForm />} />
      <Route path="/video" element={<Homepage />} />
      <Route path="/video/room/:roomId" element={<RoomPage />} />
      <Route path='/bloodHelp' element={<BloodHelp/>} />
    </Routes>
  );
}

export default App;
