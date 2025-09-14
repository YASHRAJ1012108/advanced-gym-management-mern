import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Redux Store
import { store } from './redux/store';

// Theme
import theme from './theme/theme';

// Components
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import ProtectedRoute from './components/common/ProtectedRoute';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MemberProfile from './pages/MemberProfile';
import AdminPanel from './pages/AdminPanel';
import Billing from './pages/Billing';
import ClassSchedule from './pages/ClassSchedule';
import Analytics from './pages/Analytics';

// Hooks
import { useSelector } from 'react-redux';

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            {isAuthenticated && (
              <>
                <Navbar onMenuClick={handleSidebarToggle} />
                <Sidebar open={sidebarOpen} onToggle={handleSidebarToggle} />
              </>
            )}
            
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                minHeight: '100vh',
                pt: isAuthenticated ? 8 : 0,
                pl: isAuthenticated ? { xs: 0, md: 30 } : 0,
                transition: 'padding-left 0.3s ease',
              }}
            >
              <Routes>
                {/* Public Routes */}
                <Route 
                  path="/login" 
                  element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />} 
                />
                <Route 
                  path="/register" 
                  element={!isAuthenticated ? <Register /> : <Navigate to="/dashboard" />} 
                />
                
                {/* Protected Routes */}
                <Route 
                  path="/dashboard" 
                  element={
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/profile" 
                  element={
                    <ProtectedRoute>
                      <MemberProfile />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/admin" 
                  element={
                    <ProtectedRoute allowedRoles={['admin']}>
                      <AdminPanel />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/billing" 
                  element={
                    <ProtectedRoute>
                      <Billing />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/classes" 
                  element={
                    <ProtectedRoute>
                      <ClassSchedule />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/analytics" 
                  element={
                    <ProtectedRoute allowedRoles={['admin', 'manager']}>
                      <Analytics />
                    </ProtectedRoute>
                  } 
                />
                
                {/* Default Route */}
                <Route 
                  path="/" 
                  element={
                    <Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />
                  } 
                />
              </Routes>
            </Box>
          </Box>
          
          {/* Toast Notifications */}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            toastStyle={{
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.primary,
            }}
          />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
