import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Provider } from "react-redux"
// import { ActiveStepProvider } from "./utils/ActiveStepContext.jsx";
// import { LoginStateProvider } from "./utils/LoginStateContext.jsx";
// import { ScrollProvider } from "./utils/ScrollContext.jsx";
// import store from "./utils/store.js";
import HeaderLayout from "./components/Header.jsx";
// import FooterLayout from "./components/Footer.jsx";
// import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home/index.jsx";
import "./theme.scss";

const AppContent = () => {
  return (
    <>
      <HeaderLayout />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <FooterLayout /> */}
    </>
  );
};
function App() {

  return (
    <Router>
          <div className="App">
            <main className="layoutSection">
                <AppContent />
            </main>
          </div>
    </Router>
  );
}

export default App;