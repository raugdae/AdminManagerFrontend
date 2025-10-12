import AdminMenu from '../Menu/AdminMenu'



function AdminLayout({children}){
    return(
        <div className='h-screen bg-orange-300 m-1'>
            <AdminMenu></AdminMenu>
            <div>
                    {children}
            </div>
        </div>
        
        
        
    )
}

export default AdminLayout