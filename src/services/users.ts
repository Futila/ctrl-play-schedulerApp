import { User } from "../types/user";
import { api } from "./api";

export interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  phone: string;
}

export type AddUserData = Omit<UserData, "id">;

export async function getUsers(): Promise<User[]> {
  const users = await api.get("users");
  return users.data.users;
}

export async function addUser(userData: AddUserData): Promise<User> {
  const addedUser = await api.post("users/add", userData);

  console.log(addedUser);
  return addedUser.data;
}
export async function updateUser(userData: UserData): Promise<User> {
  const updatedUser = await api.put(`users/${userData.id}`, userData);
  return updatedUser.data;
}

export async function deleUser(userId: number): Promise<User> {
  const deletedUser = await api.delete(`users/${userId}`);

  console.log(deletedUser.data);
  return deletedUser.data;
}
