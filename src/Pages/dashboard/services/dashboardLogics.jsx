import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDatacount } from './datacountSlice';

const DashboardLogics = () => {
  const dispatch = useDispatch();
  const datacount = useSelector((state) => state.datacount);
  useEffect(() => {
    dispatch(fetchDatacount());
  }, []);
  return { datacount: datacount };
};

export default DashboardLogics;
