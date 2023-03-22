import http from "./http";

// Campaign
export function getBookingCampaign(id) {
  return http.get("bookings/get-detail/" + id);
}

export function updateStatusBooking(id, data) {
  return http.post("bookings/update/" + id, data);
}

// payment vnpay

export function createPaymentVnpay(data) {
  return http.post("payment/create-payment", data);
}

export function getPaymentVnpay(id) {
  return http.post("payment/vnpay/" + id);
}