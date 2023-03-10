import http from "./http";

export function createInfluencerProfile(data){
    return http.post("influencer/create-info", data);

}
export function social(data){
    return http.post("influencer/social-media-info",data)
}