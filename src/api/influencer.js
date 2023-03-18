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

// task
export function getTaskInfluencer(id) {
  return http.get("influencer/booking-history/" + id);
}

export function getDetailTaskInfluencer(id) {
  return http.get("influencer/booking-history-detail/" + id);
}

