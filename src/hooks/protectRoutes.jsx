import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getUser } from './useStorage';

export const RequireAuth = () => {
  const token = getUser()?.token;
  if (!token) return <Navigate to='/login' replace />;
  return <Outlet />;
};

export const RequireNoAuth = () => {
  const token = getUser()?.token;
  if (token) return <Navigate to='/' replace />;
  return <Outlet />;
};
