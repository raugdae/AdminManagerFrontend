import "../styles/components/Layout.css"
import {Link} from 'react-router-dom';

function Layout({children}){
    return (
        <div className='app-container'>

            <header>Bienvenu sur l'Hydromanager</header>

            <div className="content-wrapper">
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout