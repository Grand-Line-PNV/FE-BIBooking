import http from "./http";

// Brand information
export function InfoBrand(account_id) {
  return http.get("brand/edit-info/" + account_id);
}

export function createInfoBrand(data) {
  return http.post("brand/create-info", data);
}

export function updateInfoBrand(brandId, data) {
  return http.post("brand/edit-info/" + brandId, data);
}

// Campaign
export function createCampaignBrand(data) {
  return http.post("brand/create-campaign", data);
}