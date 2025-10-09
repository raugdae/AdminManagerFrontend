import {Link} from 'react-router-dom'

function HomePage(){
    return (
        <div className="Main">
            <h1>Bienvenue sur le site de l'Hydromanager!</h1>

            <div>
                <Link to="/auth/login">Login</Link>
            </div>
        </div>
    )
}
export default HomePage