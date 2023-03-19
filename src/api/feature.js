import http from "./http";

// Auth
export function addNewUser(data) {
  return http.post("auth/register", data);
}

export function getUserLoginApi(data) {
  return http.post("auth/login", data);
}

export function userLoginApi(data) {
  return http.post("auth/login", data);
}

export function verifyUser(data) {
  return http.post("auth/verify-otp", data);
}
export function sendEmailChangePassword(data) {
  return http.post("auth/send-email-to-change-password", data);
}
export function changePassword(data) {
  return http.post("auth/change-password", data);
}

export function logOut(data) {
  return http.post("auth/logout", data);
}

export function getNotifications(id) {
  return http.get("/notifications/" + id);
}
