import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });

      console.log("로그인 성공", res.data);
      alert("로그인 완료");
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
