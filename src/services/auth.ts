export function isAuthenticated() {
  return new Promise((resolve, reject) => {
    const token = window.localStorage.getItem("token");

    if (token) {
      resolve(JSON.parse(token));
    }

    reject(false);
  });
}
export function setToken(value: string) {
  if (value) {
    window.localStorage.setItem("token", JSON.stringify(value));
  }
}

export function setUser(value: object) {
  if (value) {
    window.localStorage.setItem("user", JSON.stringify(value));
  }
}

export function getUser() {
  const user = window.localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }

  return null;
}

export function logout() {
  window.localStorage.clear();
}
