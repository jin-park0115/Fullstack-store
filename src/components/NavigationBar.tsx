import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationBar = () => {
  return (
    <Wrap>
      <p>로고</p>
      <NavWrap>
        <li>
          <Link to="/profile">내정보</Link>
        </li>
        <li>
          <Link to="/cart">장바구니</Link>
        </li>
      </NavWrap>
    </Wrap>
  );
};

export default NavigationBar;

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
