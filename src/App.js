import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ScrollProvider } from "./utils/context/ScrollContext.jsx";
import HeaderLayout from "./components/Header.jsx";
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
          <ScrollProvider>
            <AppContent />
          </ScrollProvider>
        </main>
      </div>
    </Router>
  );
}

export default App;
