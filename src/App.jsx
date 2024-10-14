import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import "./App.scss";

import { useState, useEffect } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Устанавливаем data-theme на элемент
    const personalCard = document.querySelector(".personal-card");
    if (personalCard) {
      personalCard.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    }
  }, [isDarkMode]);

  return (
    <div className="personal-card">
      <div className="wrapper">
        <input
          type="checkbox"
          name="checkbox"
          className="switch"
          onChange={toggleTheme}
          checked={isDarkMode}
        />
      </div>

      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
