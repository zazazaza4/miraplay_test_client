const getAuthStateFromLS = () => {
  const token = localStorage.getItem('token') || null;
  const user = JSON.parse(localStorage.getItem('user')) || null;

  return {
    user,
    token,
    isLoading: false,
  };
};

export { getAuthStateFromLS };
