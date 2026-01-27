import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginpage";
import SignupPage from "./pages/signuppage";
import HomePage from "./pages/homepage";
import AboutPage from "./pages/aboutpage";
import ContactUs from "./pages/contactus";

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