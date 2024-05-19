import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getUser } from '../../../hooks/useStorage';
import { useNavigate } from 'react-router';
import { loginUser, resetLogin } from './loginSlice';

const LoginLogics = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedin = useSelector((state) => state.login);

  useEffect(() => {
		if (loggedin.status === 'fulfilled') {
			getUser(loggedin.user);
			dispatch(resetLogin());
			navigate('/dashboard');
		}
	}, [loggedin, dispatch, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({email, password}));
  };

  return [email, setEmail, password, setPassword, visible, setVisible, handleLogin, loggedin];
};

export default LoginLogics;
