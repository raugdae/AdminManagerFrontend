import { apiClient } from "./client";

export async function fetchAllEvents(){
    return apiClient.get('/api/admin/allEvents')
}

export async function fetchEventData(eventID){
    
    return  apiClient.get('/api/admin/event/'+eventID)
}

export async function pushEventUpdate(eventID,data){
    return apiClient.put(`/api/admin/event/${eventID}/updateEvent`,data)
}

export async function getOrderFromInfomaniak(eventID,data){
    return apiClient.put(`/api/admin/event/${eventID}/updateInfomaniakTicketing`,data)
}

export async function getEventGroups(eventID){
    return apiClient.get(`/api/admin/event/${eventID}/getGroups`)
}

export async function deleteEventGroup(eventID,groupID){
    return apiClient.delete(`/api/admin/event/${eventID}/groups/deleteGroup/${groupID}`)
}

export async function updateEventGroup(eventID,groupID,data){
    return apiClient.put(`/api/admin/event/${eventID}/groups/${groupID}/updateEventGroup`,data)
}