import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthTimeOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("spring-token");
    if (!token) return;

    let timeoutId: number;

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const exp = payload.exp * 1000;
      const now = Date.now();

      if (exp <= now) {
        logout();
      } else {
        timeoutId = window.setTimeout(logout, exp - now);
      }
    } catch {
      logout();
    }

    function logout() {
      localStorage.removeItem("spring-token");
      localStorage.removeItem("nickname");
      alert("로그인이 만료되어 자동 로그아웃 되었습니다.");
      navigate("/login");
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [navigate]);
};

export default useAuthTimeOut;
