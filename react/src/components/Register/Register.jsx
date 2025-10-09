import RegisterForm from './RegisterForm'
import '../../styles/Register.css'

function Register() {
    const handleRegisterSuccess = (data) => {
        console.log ('User created', data)
    }

    return (
        <div className="register-page">
            <div className="register-container">
                <h1>S'enregistrer sur le site</h1>
                <RegisterForm onSuccess={handleRegisterSuccess} />
            </div>
        </div>
    )
}
export default Register