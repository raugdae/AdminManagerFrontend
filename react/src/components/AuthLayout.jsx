import {Link} from 'react-router-dom'

function AuthLayout({children}){
    return(
        <div className='app-container'>

            <header>Gestion Login</header>
            <div>
                    {children}
            </div>
        </div>
        
        
        
    )
}

export default AuthLayout