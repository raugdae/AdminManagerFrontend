

export const filterMenuButtons = (items,isAuth, userRole) =>{
    return items.filter(item => {
        if(item.requireAuth && !isAuth) return false

        if((item.requireAuth && !isAuth) && (item.requiredRole !== userRole)) return false

        if(!item.requireAuth && isAuth) return false

        return true
    })
}

export const getMenuList = (items,level,parent) =>{
    return items.filter((item) => item.parentMenu === parent);
}

