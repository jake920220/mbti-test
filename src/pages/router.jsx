import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import TestPage from "./Testpage";
import Signup from "./Signup";
import TestResultPage from "./TestResultPage";

const ProtectedRoute = ({ user, children }) => {
  return user ? children : <Navigate to="/login" />;
};

const UnAuthProtectedRoute = ({ user, children }) => {
  return !user ? children : <Navigate to="/" />;
};

const AppRouter = () => {
  const user = true;

  const protectedRoutes = [
    { path: "/profile", element: <Profile /> },
    { path: "/test", element: <TestPage /> },
    { path: "/results", element: <TestResultPage /> },
  ];

  const unAuthProtectedRoutes = [
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
  ];

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {unAuthProtectedRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <UnAuthProtectedRoute user={user}>
                {route.element}
              </UnAuthProtectedRoute>
            }
          />
        ))}
        {protectedRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <ProtectedRoute user={user}>{route.element}</ProtectedRoute>
            }
          />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRouter;
