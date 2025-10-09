import {apiClient} from './client'

export async function login (email, password){
    return apiClient.post('/api/auth/login', {login:email,password})
}

export async function register(email,password){
    return apiClient.post('/api/auth/register',{email:email,password:password})
}
