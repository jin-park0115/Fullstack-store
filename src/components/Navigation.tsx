import styled from "styled-components";

const Navigation = () => {
  return (
    <Wrap>
      <ul>
        <li>로고</li>
        <li>내정보</li>
        <li>장바구니</li>
      </ul>
    </Wrap>
  );
};

export default Navigation;

const Wrap = styled.div`
  display: flex;
  background-color: red;
`;
