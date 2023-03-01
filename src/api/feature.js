import http from "./http";

export function addNewUser(data) {
  return http.post("auth/register", data);
}

export function getUserLoginApi(data) {
  return http.get("auth/login", data);
}

export function userLoginApi(data) {
  return http.post("auth/login", data);
}
export function verifyUser(data) {
  return http.post("/verify-otp", data);
}
export function sendEmailChangePassword(data){
  return http.post("/send-email-to-change-password",data);
}
export function changePassword(data){
  return http.post('/change-password', data);
}