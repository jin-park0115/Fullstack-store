import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import api from "../api";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.post("/api/auth/signup", {
        email,
        password,
        nickname,
      });
      alert("회원가입 성공! 🎉 로그인 페이지로 이동합니다.");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("회원가입 실패. 다시 시도해주세요.");
    }
  };

  return (
    <FullScreenContainer>
      <SignupBox>
        <LogoArea onClick={() => navigate("/")}>
          🛍️ <span>All Store</span>
        </LogoArea>
        <Title>새로운 계정 만들기</Title>
        <Subtitle>All Store의 멤버가 되어 다양한 상품을 만나보세요.</Subtitle>

        <StyledForm onSubmit={handleSubmit}>
          <InputGroup>
            <label>이메일</label>
            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputGroup>

          <InputGroup>
            <label>비밀번호</label>
            <input
              type="password"
              placeholder="8자 이상의 비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputGroup>

          <InputGroup>
            <label>닉네임</label>
            <input
              type="text"
              placeholder="사용하실 닉네임을 입력하세요"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
            />
          </InputGroup>

          <SubmitButton type="submit">가입하기</SubmitButton>
        </StyledForm>

        <Divider />

        <LoginPrompt>
          이미 계정이 있으신가요? <Link to="/login">로그인하기</Link>
        </LoginPrompt>
      </SignupBox>
    </FullScreenContainer>
  );
};

export default SignupPage;

const FullScreenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f1f2f6;
  padding: 20px;
`;

const SignupBox = styled.div`
  background: white;
  width: 100%;
  max-width: 450px;
  padding: 50px 40px;
  border-radius: 24px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  text-align: center;
`;

const LogoArea = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: 15px;
  span {
    color: #2d3436;
  }
`;

const Title = styled.h2`
  font-size: 1.6rem;
  color: #2d3436;
  margin-bottom: 8px;
  font-weight: 800;
`;

const Subtitle = styled.p`
  font-size: 0.9rem;
  color: #636e72;
  margin-bottom: 35px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const InputGroup = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 0.85rem;
    font-weight: 700;
    color: #2d3436;
    padding-left: 4px;
  }

  input {
    padding: 14px 16px;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
    background-color: #f8fafc;
    font-size: 0.95rem;
    outline: none;
    transition: all 0.2s ease;

    &:focus {
      border-color: #0984e3;
      background-color: white;
      box-shadow: 0 0 0 4px rgba(9, 132, 227, 0.1);
    }
  }
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  background-color: #0984e3; // 가입은 좀 더 강조되는 파란색 사용
  color: white;
  padding: 15px;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0773c5;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: #eee;
  margin: 30px 0;
`;

const LoginPrompt = styled.p`
  font-size: 0.9rem;
  color: #636e72;

  a {
    color: #2d3436;
    font-weight: 800;
    text-decoration: underline;
    margin-left: 5px;

    &:hover {
      color: #000;
    }
  }
`;
