import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { User } from "../types/user";

export interface ScheduledUserData extends User {
  week_day: string;
  from: string;
  to: string;
}
interface ScheduledUsersData {
  scheduledUsers: ScheduledUserData[];
  scheduleUser: (scheduledUserData: ScheduledUserData) => void;
}

interface ScheduledUsersProps {
  children: ReactNode;
}

export const ScheduledUsersContext = createContext<ScheduledUsersData>(
  {} as ScheduledUsersData
);

export function ScheduledUsersProvider({ children }: ScheduledUsersProps) {
  const [scheduledUsers, setScheduledUsers] = useState<ScheduledUserData[]>([]);

  function scheduleUser(scheduledUserData: ScheduledUserData) {
    setScheduledUsers([scheduledUserData, ...scheduledUsers]);
  }

  return (
    <ScheduledUsersContext.Provider value={{ scheduledUsers, scheduleUser }}>
      {children}
    </ScheduledUsersContext.Provider>
  );
}

export function useScheduledUsers() {
  const context = useContext(ScheduledUsersContext);

  return context;
}
