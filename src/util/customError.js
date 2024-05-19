export const customError = (error) => {
  if (error.response && error.response.data && error.response.data.error)
    return { message: error.response.data.error };
  if (error.code === 'ERR_NETWORK') return { message: 'Network Error' };
  if (error.code === 'ERR_BAD_REQUEST') return { message: 'Not Found' };
  return { message: 'Something went wrong' };
};
