export const getUser = () => {
  const users = JSON.parse(localStorage.getItem("account"));
  return users;
};
