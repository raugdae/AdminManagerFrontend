import Menu from '../Menu/Menu.jsx'
import {Link} from 'react-router-dom';

function Layout({children}){
    return (
        <div className="h-screen max-w-full xl:max-w-2/3 mx-auto bg-emerald-100">

            <header className='bg-emerald-500 text-white text-center text-6xl p-4'>Bienvenu sur l'Hydromanager</header>
            <div className="grid grid-cols-[15rem_1fr]  h-full">
                <div>
                    <Menu />
                </div>
                
                <div>
                    {children}
                </div>
            
            </div>
            
        </div>
    )
}

export default Layout