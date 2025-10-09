import { apiClient } from "./client";

export async function fetchAllEvents(){
    return apiClient.get('/api/admin/getEvent')
}