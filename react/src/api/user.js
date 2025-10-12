import {apiClient} from './client'

export async function getAllUsers(){
    return await apiClient.get('/api/admin/user/getAllUsers')
}