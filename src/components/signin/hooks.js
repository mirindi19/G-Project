import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/axios.config";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/slices/tokenSlice";

export const useSignIn = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSignIn = ({email, password}) => {
      setLoading(true);
      api
        .post('api/authentication/signin', { email, password })
        .then((res) => {
          setLoading(false);
          toast.success(`Login Successful, ${res.data.data.user.fullName}`)
          dispatch(setToken(res.data.data.token));
          navigate('/');
        })
        .catch((err) => {
          console.log(err.response.data.message)
          setLoading(false);
          toast.error(err.response.data.message);
        });
    };
    return {
      loading,
      error,
      handleSignIn,
    };
};

export const validate = ({email, fullname, password}) => {
  if (email === '' || fullname === '' || password === '' ) {
    toast.error('Please fill out required fields') 
    return false
  }

  return true
}