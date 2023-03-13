import http from "./http";

// Campaign
export function getCampaignInfluencer(data) {
  return http.post("filter-campaign", data);
}

// booking campaign
export function getDetailBookingCampaignInfluencer(id) {
  return http.get("bookings/get-detail/" + id);
}

export function createBookingCampaignInfluencer(data) {
  return http.post("bookings/create", data);
}


