import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactUs from "./pages/ContactUs";

/**
 * Application root component that configures client-side routes and renders the corresponding page components.
 *
 * @returns {JSX.Element} A React element containing the Router with the app's route configuration.
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUs />} />


      </Routes>
    </Router>
  );
}

export default App;