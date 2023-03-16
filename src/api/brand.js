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
export function getCampaignBrand(id) {
  return http.get("brand/get-all-campaigns/" + id);
}

export function getDetailsCampaignBrand(id) {
  return http.get("brand/get-detail-campaign/" + id);
}

export function createCampaignBrand(data) {
  return http.post("brand/create-campaign", data);
}

export function updateCampaignBrand(id, data) {
  return http.post("brand/edit-campaign/" + id, data);
}

export function deleteCampaignBrand(id) {
  return http.delete("brand/delete-campaign/" + id);
}

// task
export function getTaskBrand(id) {
  return http.get("brand/booking-history/" + id);
}

export function getDetailTaskBrand(id) {
  return http.get("brand/booking-history-detail/" + id);
}

