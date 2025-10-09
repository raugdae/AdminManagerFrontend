import "../styles/layout/AdminLayout.css"
import {Link} from 'react-router-dom'

function AdminLayout({children}){
    return(
        <div className='admin-container'>

            <header>Gestion Admin</header>
            <Link to="/admin/events">Afficher tout les évènements</Link>
            <div>
                    {children}
            </div>
        </div>
        
        
        
    )
}

export default AdminLayout