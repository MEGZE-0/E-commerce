import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ProductList from "./component/ProductList";
import Header from "./component/Header";
import Footer from "./component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", darkTheme);
  }, [darkTheme]);

  return (
    <Router>
      {" "}
      {/* Wrap the app in Router */}
      <div className={`container-fluid ${darkTheme ? "dark" : "light"}`}>
        <Header darkTheme={darkTheme} toggleTheme={toggleTheme} />
        <main className="container">
          <ProductList />
        </main>
        <Footer darkTheme={darkTheme} />
      </div>
    </Router>
  );
};

export default App;
