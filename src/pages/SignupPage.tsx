import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/api/auth/signup", {
        email,
        password,
        nickname,
      });

      console.log("회원가입 성공", res.data);
      alert("회원가입 성공");
    } catch (err) {
      console.error(err);
      alert("회원가입 실패");
    }
  };

  return (
    <Container>
      <h1>회원가입</h1>
      <SignUpForm onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <button type="submit">가입하기</button>
      </SignUpForm>
      <button>
        <Link to="/login">로그인</Link>
      </button>
    </Container>
  );
};

export default SignupPage;
const Container = styled.div`
  width: 300px;
  margin: 0 auto;
  box-shadow: 0 0 0 1px black;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 4px;
  input {
    padding: 10px;
    border-radius: 4px;
    outline: none;
  }
`;
