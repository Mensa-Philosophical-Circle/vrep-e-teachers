import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../hooks/useStorage';

const LogoutLogics = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    removeUser();
    navigate('/login');
  };
  return { handleLogout: handleLogout };
};

export default LogoutLogics;
