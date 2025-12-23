import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
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
      const res = await api.post("/api/auth/login", { email, password });
      const token = res.data;
      localStorage.setItem("spring-token", token);

      const base64Payload = token.split(".")[1];
      const payload = JSON.parse(atob(base64Payload));
      const realNickname = decodeURIComponent(payload.nickname);

      localStorage.setItem("nickname", realNickname);

      const exp = payload.exp * 1000;
      const now = Date.now();
      const remainingTime = exp - now;

      if (remainingTime > 0) {
        setTimeout(() => logout(), remainingTime);
      }

      alert(`${realNickname}님, 환영합니다!`);
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("이메일 또는 비밀번호를 확인해주세요.");
    }
  };

  return (
    <LoginContainer>
      <LoginBox>
        <LogoArea onClick={() => navigate("/")}>
          🛍️ <span>All Store</span>
        </LogoArea>
        <Title>반가워요! 다시 로그인해주세요.</Title>

        <StyledForm onSubmit={handleSubmit}>
          <InputGroup>
            <label>이메일</label>
            <input
              type="email"
              placeholder="example@email.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </InputGroup>
          <InputGroup>
            <label>비밀번호</label>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </InputGroup>
          <LoginButton type="submit">로그인</LoginButton>
        </StyledForm>

        <Divider>또는</Divider>

        <SignupPrompt>
          계정이 없으신가요? <Link to="/signup">회원가입 하러가기</Link>
        </SignupPrompt>
      </LoginBox>
    </LoginContainer>
  );
};

export default LoginPage;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f1f2f6;
  padding: 20px;
`;

const LoginBox = styled.div`
  background: white;
  width: 100%;
  max-width: 400px;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const LogoArea = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: 20px;
  span {
    color: #2d3436;
  }
`;

const Title = styled.h2`
  font-size: 1.2rem;
  color: #636e72;
  margin-bottom: 30px;
  font-weight: 500;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 0.85rem;
    font-weight: 600;
    color: #2d3436;
    padding-left: 4px;
  }

  input {
    padding: 14px;
    border-radius: 12px;
    border: 1px solid #ddd;
    outline: none;
    transition: border-color 0.2s;

    &:focus {
      border-color: #0984e3;
    }
  }
`;

const LoginButton = styled.button`
  background-color: #2d3436;
  color: white;
  padding: 14px;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #000;
  }
`;

const Divider = styled.div`
  margin: 25px 0;
  display: flex;
  align-items: center;
  color: #b2bec3;
  font-size: 0.85rem;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #eee;
    margin: 0 10px;
  }
`;

const SignupPrompt = styled.p`
  font-size: 0.9rem;
  color: #636e72;

  a {
    color: #0984e3;
    font-weight: bold;
    text-decoration: none;
    margin-left: 5px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
