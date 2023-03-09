import http from "./http";

export function createInfluencerProfile(data){
    return http.post("influencer/create-info", data);

}