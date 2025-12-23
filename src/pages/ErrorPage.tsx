import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <ErrorBox>
        <Icon>🔒</Icon>
        <Title>접근 권한이 없습니다</Title>
        <Message>
          이 페이지를 보려면 로그인이 필요합니다.
          <br />
          로그인 후 더 많은 서비스를 이용해 보세요.
        </Message>
        <ButtonGroup>
          <PrimaryButton onClick={() => navigate("/login")}>
            로그인하러 가기
          </PrimaryButton>
          <SecondaryButton onClick={() => navigate("/signup")}>
            회원가입
          </SecondaryButton>
        </ButtonGroup>
      </ErrorBox>
    </Container>
  );
};

export default ErrorPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const ErrorBox = styled.div`
  text-align: center;
  background: white;
  padding: 50px;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  max-width: 400px;
  width: 90%;
`;

const Icon = styled.div`
  font-size: 4rem;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  color: #2d3436;
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const Message = styled.p`
  color: #636e72;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PrimaryButton = styled.button`
  background-color: #2d3436;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #000;
  }
`;

const SecondaryButton = styled.button`
  background-color: transparent;
  color: #636e72;
  border: 1px solid #ddd;
  padding: 14px;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #f1f2f6;
  }
`;
