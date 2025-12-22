import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("spring-token");
    localStorage.removeItem("nickname");
    alert("로그아웃 되었습니다.");
    navigate("/login");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/auth/login", {
        email,
        password,
      });
      // 서버 토큰 변수에 담기
      const token = res.data;
      // 일단 나는 백엔드 이해를 위해 로컬에다가 저장을 한다
      localStorage.setItem("spring-token", token);

      // 토큰에서 닉네임 정보 꺼내기
      const base64Payload = token.split(".")[1]; // payload부분 추출
      const payload = JSON.parse(atob(base64Payload)); //base64 디코딩 후 객체화
      const realNickname = decodeURIComponent(payload.nickname);

      localStorage.setItem("nickname", realNickname);

      // 자동 로그아웃 설정
      const exp = payload.exp * 1000;
      const now = Date.now();
      const remainingTime = exp - now;

      if (remainingTime > 0) {
        setTimeout(() => {
          logout();
        }, remainingTime);
      }

      alert(`${realNickname}님, 환영합니다`);
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("로그인 실패");
    }
  };

  return (
    <>
      <h1>login 입니다,</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="이메일 입력"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="비밀번호"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">로그인</button>
      </form>
    </>
  );
};

export default LoginPage;
