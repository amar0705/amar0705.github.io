import About from "../../components/about";
import Banner from "../../components/banner";
import ButtonAppBar from "../../components/navbar";

const HomePage = () => {
  return (
    <>
      <ButtonAppBar>
        <Banner></Banner>
        <About></About>
      </ButtonAppBar>
    </>
  );
};

export default HomePage;
