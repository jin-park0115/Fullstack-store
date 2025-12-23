import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationBar = () => {
  return (
    <NavContainer>
      <NavInner>
        <Logo to="/">
          <span className="emoji">🛍️</span>
          <span className="text">All Store</span>
        </Logo>

        <NavLinks>
          <li>
            <NavLink to="/profile">내 정보</NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="cart-link">
              장바구니
            </NavLink>
          </li>
        </NavLinks>
      </NavInner>
    </NavContainer>
  );
};

export default NavigationBar;

const NavContainer = styled.nav`
  sticky: top 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #eee;
  padding: 0 20px;
`;

const NavInner = styled.div`
  max-width: 1100px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 900;
  color: #2d3436;

  .emoji {
    font-size: 1.8rem;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #636e72;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #ff4757;
    transition: all 0.2s ease-in-out;
    transform: translateX(-50%);
  }

  &:hover {
    color: #2d3436;
    &:after {
      width: 100%;
    }
  }

  &.cart-link {
    background-color: #f1f2f6;
    padding: 8px 16px;
    border-radius: 20px;

    &:hover {
      background-color: #dfe6e9;
      &:after {
        display: none;
      }
    }
  }
`;
