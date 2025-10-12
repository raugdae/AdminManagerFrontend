import {jwtDecode} from 'jwt-decode'

export const isAuthenticated = () =>{
    return localStorage.getItem('token')?true:false;
}

export const getUserRole = () => {
    const token = getToken();
    return decodeToken(token)?.role
}

export const getToken = () => {
    return localStorage.getItem('token')
}

export const decodeToken = ( token ) =>{
    if (!token) return null;
    try {
        return jwtDecode(token)
    }
    catch (error) {
        console.error('token invalid', error);
        return null
    }

}
