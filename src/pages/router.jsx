import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import TestPage from "./Testpage";
import Signup from "./Signup";
import TestResultPage from "./TestResultPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/result" element={<TestResultPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
