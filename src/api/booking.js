import http from "./http";

// Campaign
export function getBookingCampaign(id) {
  return http.get("bookings/get-detail/" + id);
}