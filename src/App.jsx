import Skills from "./Skills";
import About from "./About";
import Header from "./Header";
import Education from "./Education";
import Experience from "./Experience";
import Hello from "./Hello";
import Contact from "./Contact";
// import "./App.css";

function App() {
  return (
    <div className="main">
      <Header />
      <div className="row ">
        <div className="column-left">
          <About />
          <Education />
          <Experience />
        </div>
        <div className="column-right">
          <Hello />
          <Contact />
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default App;
