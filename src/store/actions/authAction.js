export function signInRequest(email, pass) {
    return {
      type: '@auth/SIGN_IN_REQUEST',
      payload: { email, pass },
    };
}

export function signInSuccess(token, user) {
    return {
      type: '@auth/SIGN_IN_SUCCESS',
      payload: { token, user },
    };
}

export function signFailure() {
    return {
      type: '@auth/SIGN_FAILURE',
    };
}

export function signOut() {
    return {
      type: '@auth/SIGN_OUT',
    };
}

export function changeToken(token) {
  return {
    type: '@auth/CHANGE_TOKEN',
    payload: { token },
  };
}