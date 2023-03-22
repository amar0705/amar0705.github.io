import About from "../../components/about";
import Banner from "../../components/banner";
import GitCalendar from "../../components/gitCalendar";
import ButtonAppBar from "../../components/navbar";
import Projects from "../../components/projects";
import Skills from "../../components/skills";
import Stats from "../../components/stats";
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
        <section id="projects" className="projects section" style={sectionPadding}>
          <Projects></Projects>
        </section>
        <section style={sectionPadding}>
          <Stats></Stats>
        </section>
        <section style={sectionPadding}>
          <GitCalendar />
        </section>
      </ButtonAppBar>
    </>
  );
};

export default HomePage;
