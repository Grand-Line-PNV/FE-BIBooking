import http from "./http";

// Campaign
export function getCampaignInfluencer(data) {
    return http.post("filter-campaign", data);
  }

