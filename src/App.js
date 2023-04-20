import Resume from "./components/Resume"
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About /> 
      <Portfolio />
      <Resume />
      <Contact />
      <SocialLinks /> 
    </div>
  );
}
export default App;
