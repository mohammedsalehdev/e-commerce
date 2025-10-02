import { apiClient } from "./api-client";

export async function getUserOrders({userId}) {
  try {
    const options = {
      url: `/orders/user/${userId}`,
      method : "GET",
    }
    const response = await apiClient.request(options)
    return response
  } catch (error) {
    throw error;
  }
}