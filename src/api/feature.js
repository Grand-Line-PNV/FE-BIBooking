import http from "./http";

export function addNewUser(data) {
  return http.post("auth/register", data);
}

export function userLoginApi(data) {
  return http.post("auth/login", data);
}
export function verifyUser(data) {
  return http.post("/verify-otp", data);
}