
import { isAuthenticated,getUserRole } from "../utils/authHelpers";

export function checkAuth(){
    
    return isAuthenticated;

}

export function getRole(){
    
    return getUserRole;
}