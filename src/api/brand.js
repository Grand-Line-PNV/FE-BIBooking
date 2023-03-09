import http from "./http";

// Brand information
export function infoBrand(id) {
  return http.get("brand/view-myinfo/" + id);
}

export function createInfoBrand(data) {
  return http.post("brand/create-info", data);
}

export function updateInfoBrand(id, data) {
  return http.post("brand/edit-info/" + id, data);
}

// Campaign
export function createCampaignBrand(data) {
  return http.post("brand/create-campaign", data);
}

export function getCampaign(data) {
  return http.post("filter-campaign", data);
}