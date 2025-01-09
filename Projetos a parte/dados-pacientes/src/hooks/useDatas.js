import { useContext } from "react";
import { UsersContext } from "../contexts/UsersContext";

export default function useDatas() {
  return useContext(UsersContext);
}
