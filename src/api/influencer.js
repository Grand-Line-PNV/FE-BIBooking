import http from "./http";

export function getCampaignInfluencer(data) {
    return http.post("filter-campaign", data);
  }

export function createInfluencerProfile(data) {
  return http.post("influencer/create-info", data);
}
export function social(data){
    return http.post("influencer/social-media-info",data)
}
export function createAudienceData(data){
    return http.post("influencer/audience-data-info",data)
}
export function createService(data){
    return http.post("influencer/service-info",data)
}
export function infoInfluencer(id) {
  return http.get("influencer/view-myinfo/" + id);
}
export function updateInfo(id,data) {
  return http.post("influencer/edit-info/" + id,data)
}
export function updateSocialMedia(id, data) {
  return http.post(`influencer/edit-social-media-info/${id}`, data)
}
export function updateAudienceData(id,data) {
  return http.post("influencer/edit-audience-data-info/" + id, data)
}
export function updateServices(id,data) {
  return http.post("influencer/edit-service-info/" + id, data)
}
export function getAudienceData(id){
  return http.get("influencer/view-audience/" + id)
}
	