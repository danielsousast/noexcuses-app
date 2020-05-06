export function addNotification(notification) {
    return {
      type: '@user/ADD_FAVORITE',
      payload: { notification },
    };
}

