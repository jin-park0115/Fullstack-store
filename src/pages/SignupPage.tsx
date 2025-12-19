import styled from "styled-components";

const SingupPage = () => {
  return (
    <Container>
      <h1>회원가입</h1>
      <SignUpForm>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="text" placeholder="닉네임" />
        <button type="submit">가입하기</button>
      </SignUpForm>
    </Container>
  );
};

export default SingupPage;
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
