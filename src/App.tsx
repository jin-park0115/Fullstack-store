import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import useAuthTimeOut from "./hooks/useAuthTimeout";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";
import SingupPage from "./pages/SignupPage";

function App() {
  useAuthTimeOut();
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SingupPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
