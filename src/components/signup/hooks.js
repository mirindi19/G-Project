import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/axios.config";
import { toast } from "react-toastify";

export const useSignUp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const navigate = useNavigate();
    const handleSignUp = ({email, fullName, password}) => {
      setLoading(true);
      api
        .post('api/authentication/signup', { email, fullName, password, role: 'admin' })
        .then((res) => {
          setLoading(false);
          toast.success(res.data.message);
          navigate('/signin');
        })
        .catch((err) => {
          setLoading(false);
          setError(err.response.data.error || err.response.data.message);
          setTimeout(() => {
            setError(null);
          }, 5000);
        });
    };
    return {
      loading,
      error,
      handleSignUp,
    };
};

export const validate = ({email, fullname, password}) => {
  if (email === '' || fullname === '' || password === '' ) {
    toast.error('Please fill out required fields') 
    return false
  }
  if (password.length < 6 ) {
    toast.error('Password is too short') 
    return false
  }

  return true
}