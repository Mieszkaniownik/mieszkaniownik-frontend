import UserProvider from "./context/UserContext/UserProvider";
import LoginForm from "./pages/LoginForm";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import ErrorFallback from "./components/ErrorFallback";
import ProfilePage from "./pages/ProfilePage";
import RegisterForm from "./pages/RegisterForm";
import DashboardPage from "./pages/DashboardPage";
import AlertsPage from "./pages/AlertsPage";
import CreateAlertPage from "./pages/CreateAlertPage";
import MatchesPage from "./pages/MatchesPage";
import HeatmapPage from "./pages/HeatmapPage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import EditPasswordPage from "./pages/EditPasswordPage";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ScrollToTop />
        <UserProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/auth/callback" element={<AuthCallbackPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route
              path="/profile/edit/password"
              element={<EditPasswordPage />}
            />
            <Route path="/alerts" element={<AlertsPage />} />
            <Route path="/alerts/new" element={<CreateAlertPage />} />
            <Route path="/matches" element={<MatchesPage />} />
            <Route path="/heatmap" element={<HeatmapPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </UserProvider>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
