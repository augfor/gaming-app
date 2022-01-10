import { useSelector } from '../store/Store';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user);

  if (!user?.email) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired
};

export default ProtectedRoute;
