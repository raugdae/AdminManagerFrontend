import AdminMenu from '../Menu/AdminMenu'


function EditEventLayout({children}){

    return (
        <div className='bg-cyan-50 p-0.5'>
            <AdminMenu menuLevel='2' parentMenu='manageEvent' />
            {children}
        </div>
    )
}
export default EditEventLayout