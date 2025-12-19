import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SingupPage from "./pages/SignupPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SingupPage />} />
      </Routes>
    </>
  );
}

export default App;
