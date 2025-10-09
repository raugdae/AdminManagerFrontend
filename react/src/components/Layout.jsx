
import {Link} from 'react-router-dom';

function Layout({children}){
    return (
        <div className='app-container'>

            <header>Bienvenu sur l'Hydromanager</header>

            <div className="content-wrapper">
                <aside>
                    <Link to ="/auth/login"> Se connecter </Link>
                    <Link to ="/auth/register">S'enregsitere</Link>
                </aside>

                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout