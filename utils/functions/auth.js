// utils/auth.js
export const getTokenFromCookie = (name = "token") => {
  const match = document.cookie.match(
    new RegExp("(^| )" + name + "=([^;]+)")
  );
  return match ? match[2] : null;
};
