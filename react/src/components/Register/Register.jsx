import RegisterForm from './RegisterForm'


function Register() {
    const handleRegisterSuccess = (data) => {
        console.log ('User created', data)
    }

    return (
        <div className="register-page">
            <div className="register-container">
                <RegisterForm onSuccess={handleRegisterSuccess} />
            </div>
        </div>
    )
}
export default Register