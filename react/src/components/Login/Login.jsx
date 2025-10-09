import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import "../../styles/Login.css";

function Login() {
  const navigate = useNavigate();
  const handleLoginSuccess = (data) => {
    console.log("Utilisateur connecté:", data);

    navigate("/Dashboard");
    // Ici tu pourras rediriger vers le dashboard
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>🔐 Connexion</h1>
        <LoginForm onSuccess={handleLoginSuccess} />
      </div>
    </div>
  );
}

export default Login;
