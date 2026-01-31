import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactUs from "./pages/ContactUs";
import FestivalCalendar from "./pages/FestivalCalendar";
import Layout from "./components/Layout";

/**
 * Application root component that configures client-side routes and renders the corresponding page components.
 *
 * @returns {JSX.Element} A React element containing the Router with the app's route configuration.
 */
function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes without layout */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        
        {/* Protected routes with layout (Navbar) */}
        <Route element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/calendar" element={<FestivalCalendar />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;