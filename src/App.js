import Changer from "./components/Changer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import './styles/App.css';
function App() {
  return (
    <div className="app-container">
       <Changer />
       <Navbar />
        <Header />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
    </div>
  );
}

export default App;
