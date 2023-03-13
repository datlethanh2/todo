const token = "token";

export const setAccessToken = (accessToken: string) => {
  localStorage.setItem(token, accessToken);
};

export const getAccessToken = () => {
  const newToken = localStorage.getItem(token);
  return newToken;
};

export const removeAccessToken = () => {
  window.location.reload();
  return localStorage.removeItem(token);
};
