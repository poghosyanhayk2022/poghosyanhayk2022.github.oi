const ProtectedRoute = ({ children }) => {
  const userData = localStorage.getItem('userData');
  if (userData) {
      return children;
  }
  window.location.assign('/login');
};

export default ProtectedRoute;
