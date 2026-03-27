import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from '../features/auth/authSlice';
import { PATHS } from '../routes/paths';

const useLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(loginThunk({ username, password }));

    if (loginThunk.fulfilled.match(result)) {
      navigate(PATHS.COURSES);
    }
  };

  return {
    username,
    password,
    showPassword,
    isLoading,
    error,
    handleUsernameChange,
    handlePasswordChange,
    togglePasswordVisibility,
    handleLoginSubmit,
  };
};

export default useLogin;
