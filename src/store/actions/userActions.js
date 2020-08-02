import { Alert } from "react-native";

export function addNotification(notification) {
    return {
      type: '@user/ADD_FAVORITE',
      payload: { notification },
    };
}

export function requestGroupPermission(id, token) {
  return {
    type: '@user/GROUP_PERMISSION',
    payload: { id, token }
  }
}
