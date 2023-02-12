import http from './http';

export function addNewUser(data){
  return http.post('auth/register',data)
}