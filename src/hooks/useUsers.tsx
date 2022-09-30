import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  addUser,
  AddUserData,
  deleUser,
  getUsers,
  updateUser,
  UserData,
} from "../services/users";
import { User } from "../types/user";

interface UsersContextData {
  users: User[];
  asyncUpdateUser: (userData: UserData) => void;
  asyncDeleteUser: (userId: number) => void;
  asyncAddUser: (userData: AddUserData) => void;
}

interface UsersContextProps {
  children: ReactNode;
}

export const UsersContext = createContext<UsersContextData>(
  {} as UsersContextData
);

export function UsersProvider({ children }: UsersContextProps) {
  const [users, setUsers] = useState<User[]>([]);

  const asyncGetUsers = async () => {
    const loadedUsers = await getUsers();
    setUsers(loadedUsers);
  };

  useEffect(() => {
    asyncGetUsers();
  }, []);

  const asyncAddUser = async (userData: AddUserData) => {
    const addedUser = await addUser(userData);
    addedUser["id"] = Number(new Date().getMilliseconds());
    setUsers([addedUser, ...users]);
  };

  const asyncUpdateUser = async (userData: UserData) => {
    const updatedUser = await updateUser(userData);

    let newUsers = users;

    const existingUser = newUsers.find((user) => user.id === userData.id);

    if (existingUser) {
      newUsers = newUsers.map((user) =>
        user.id === userData.id
          ? {
              ...updatedUser,
              firstName: updatedUser.firstName,
              lastName: updatedUser.lastName,
              email: updatedUser.email,
              phone: updatedUser.phone,
            }
          : user
      );
    }

    setUsers(newUsers);
  };

  const asyncDeleteUser = async (userId: number) => {
    let newUsers = users;
    const existingUser = newUsers.find((user) => user.id === userId);

    if (!existingUser) {
      return;
    }
    if (userId > 100) {
      newUsers = newUsers.filter((user) => user.id !== userId);

      setUsers(newUsers);
      return;
    }
    const deletedUser = await deleUser(userId);

    newUsers = newUsers.filter((user) => user.id !== userId);

    setUsers(newUsers);
  };

  return (
    <UsersContext.Provider
      value={{ users, asyncUpdateUser, asyncDeleteUser, asyncAddUser }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UsersContext);

  return context;
}
