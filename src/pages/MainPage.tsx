import Navigation from "../components/Navigation";

const MainPage = () => {
  const name = localStorage.getItem("nickname");
  return (
    <>
      <Navigation />
      <h1>home</h1>
      <p>{name}</p>
    </>
  );
};

export default MainPage;
