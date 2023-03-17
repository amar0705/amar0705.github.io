import About from "../../components/about";
import Banner from "../../components/banner";
import ButtonAppBar from "../../components/navbar";
import Skills from "../../components/skills";
const sectionPadding = { paddingTop: "6%" };

const HomePage = () => {
  return (
    <>
      <ButtonAppBar>
        <section id="home" style={sectionPadding}>
          <Banner></Banner>
        </section>
        <section id="about" className="about section" style={sectionPadding}>
          <About></About>
        </section>
        <section id="skills" className="skills section" style={sectionPadding}>
          <Skills></Skills>
        </section>
      </ButtonAppBar>
    </>
  );
};

export default HomePage;
