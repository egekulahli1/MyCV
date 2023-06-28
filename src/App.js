import Changer from "./components/Changer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import './styles/App.css';

import { createContext, useState} from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value= {{theme, toggleTheme}}>
    <div className="app-container" id={theme}>
       <Changer />
       <Navbar />
        <Header />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
