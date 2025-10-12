import {Link} from 'react-router-dom'

function AuthLayout({children}){
    return(
        <div className='app-container'>

            <div>
                    {children}
            </div>
        </div>
        
        
        
    )
}

export default AuthLayout