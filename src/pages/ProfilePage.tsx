import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import NavigationBar from "../components/NavigationBar";

const ProfilePage = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("nickname");

  const handleLogout = () => {
    if (!confirm("로그아웃 하시겠습니까?")) {
      return;
    }
    localStorage.removeItem("spring-token");
    localStorage.removeItem("nickname");
    navigate("/login");
  };

  return (
    <PageWrapper>
      <NavigationBar />
      <Container>
        <ProfileCard>
          <Title>내 정보</Title>
          <AvatarSection>
            <Avatar>{name ? name[0] : "U"}</Avatar>
          </AvatarSection>

          <InfoSection>
            <Label>닉네임</Label>
            <Value>{name || "사용자"}님</Value>
          </InfoSection>

          <ButtonGroup>
            <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
          </ButtonGroup>
        </ProfileCard>
      </Container>
    </PageWrapper>
  );
};

export default ProfilePage;

const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;

const ProfileCard = styled.div`
  background: white;
  width: 100%;
  max-width: 400px;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #2d3436;
  margin-bottom: 30px;
  font-weight: 700;
`;

const AvatarSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  background-color: #0984e3;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(9, 132, 227, 0.3);
`;

const InfoSection = styled.div`
  background-color: #f1f2f6;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 30px;
  text-align: left;
`;

const Label = styled.span`
  display: block;
  font-size: 0.85rem;
  color: #636e72;
  margin-bottom: 5px;
`;

const Value = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3436;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LogoutButton = styled.button`
  background-color: transparent;
  color: #ff4757;
  border: 1px solid #ff4757;
  padding: 12px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #ff4757;
    color: white;
  }

  &:active {
    transform: scale(0.98);
  }
`;
