import { createContext } from "react";

const initialState = {
  username: "",
};

export const UserContext = createContext(initialState);
