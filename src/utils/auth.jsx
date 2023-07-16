import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from '../redux/store';
import { clearToken } from '../redux/slices/tokenSlice';
import { Navigate, useNavigate } from 'react-router-dom';

export const ProtectedComponent = ({ replace, children }) => {
  const token = useSelector((state) => state.token.value);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    token ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [token]);
  return isLoggedIn ? children : <Navigate to={`${replace}`} replace />;
};

export const ReverseProtectedComponent = ({ replace, children }) => {
  const token = useSelector((state) => state.token.value);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    token ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [token]);
  return isLoggedIn ? <Navigate to={`${replace}`} replace /> : children;
};

export const Logout = () => {
  store.dispatch(clearToken());
};