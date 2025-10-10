import "../index.css"
import MenuForm from './Menu/MenuForm.jsx'
import {Link} from 'react-router-dom';

function Layout({children}){
    return (
        <div className="max-w-full xl:max-w-2/3 mx-auto">

            <header className='bg-emerald-500 text-white text-center text-6xl p-4'>Bienvenu sur l'Hydromanager</header>
            <div className="grid grid-cols-[15rem_1fr] ">
                <div className='border-2 border-green-900 bg-emerald-800'>
                    <MenuForm />
                </div>
                
                <div className='h-max'>
                    {children}
                </div>
            
            </div>
            
        </div>
    )
}

export default Layout