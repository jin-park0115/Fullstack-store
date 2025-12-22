import { useNavigate } from "react-router-dom";

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
    <>
      <p> 내정보</p>
      {name}
      <button onClick={handleLogout}>로그아웃</button>
    </>
  );
};

export default ProfilePage;
