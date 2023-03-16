import About from "../../components/about";
import Banner from "../../components/banner";
import ButtonAppBar from "../../components/navbar";

const HomePage = () => {
  return (
    <>
      <ButtonAppBar>
        <section id="home">
          <Banner></Banner>
        </section>
        <section id="about" class="about section">
          <About></About>
        </section>
      </ButtonAppBar>
    </>
  );
};

export default HomePage;
