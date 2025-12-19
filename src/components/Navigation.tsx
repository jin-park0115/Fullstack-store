import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
  return (
    <Wrap>
      <p>로고</p>
      <NavWrap>
        <li>
          <Link to="/signup">내정보</Link>
        </li>
        <li>장바구니</li>
      </NavWrap>
    </Wrap>
  );
};

export default Navigation;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: gray;
  padding: 20px;
  p {
    cursor: pointer;
  }
`;

const NavWrap = styled.ul`
  display: flex;
  gap: 20px;
  cursor: pointer;
  :hover {
    color: red;
  }
  li {
    transition: ease-in-out 0.3s;
  }
`;
