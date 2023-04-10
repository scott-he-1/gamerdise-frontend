import { BasicUserInfo } from "../types/types";
import { DATABASE_URL } from "../../constants";

export const fetchUserNotifications = async () => {
  const unparsedUser = localStorage.getItem("user");
  if (!unparsedUser) {
    throw new Error("Not logged in");
  }
  const user: BasicUserInfo = JSON.parse(unparsedUser);
  return await fetch(`${DATABASE_URL}/user/${user.id}/notifications`, {
    headers: {
      Authorization: `Bearer ${user.token}`,
      "Content-Type": "application/json",
    },
  });
};
