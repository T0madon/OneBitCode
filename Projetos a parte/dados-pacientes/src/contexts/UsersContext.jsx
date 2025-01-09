import { createContext, useState } from "react";

export const UsersContext = createContext({});

export function UsersContextProvider({ children }) {
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users-t0madon");
    if (!storedUsers) return [];
    const users = JSON.parse(storedUsers);
    return users;
  });

  const addUser = (user) => {
    setUsers((current) => {
      const updatedUsers = [user, ...current];
      localStorage.setItem("users-t0madon", JSON.stringify(updatedUsers));
      return updatedUsers;
    });
  };

  const getUser = (id) => {
    return users.find((u) => u.id == +id);
  };

  const deleteUser = (id) => {
    setUsers((current) => {
      const updatedUsers = current.filter((u) => u.id !== +id);
      localStorage.setItem("users-t0madon", JSON.stringify(updatedUsers));
      return updatedUsers;
    });
  };

  const updateUsers = (userId, newAttributes) => {
    setUsers((current) => {
      const index = current.findIndex((u) => u.id === +userId);
      const updatedUsers = [...current];
      Object.assign(updateUsers[index], newAttributes);
      localStorage.setItem("users-t0madon", JSON.stringify(updatedUsers));
      return updateUsers;
    });
  };

  const stock = {
    users,
    addUser,
    getUser,
    deleteUser,
    updateUsers,
  };

  return (
    <UsersContext.Provider value={stock}>{children}</UsersContext.Provider>
  );
}
