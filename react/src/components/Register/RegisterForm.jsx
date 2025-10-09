import { useState } from "react";
import { register } from "../../api/auth";

import Button from "../ui/Button";
import Message from "../ui/Message";
import Input from "../ui/Input";

function RegisterForm({ onSuccess }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState({ text: "", type: "info" })
  const [loading, setLoading] = useState("false")

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", type: "info" });

    try {
      const data = await register(email, password);

      setMessage({ text: "Account created successfully", type: "success" })

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      if (onSuccess) {
        onSuccess(data);
      }
    } catch (error) {
      setMessage({
        text: error.message,
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  }
    return (
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          label="Mot de passe"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button type="submit" disabled={loading}>
          {loading ? "Enregistrement en cours" : "S'enregistrer"}
        </Button>

        <Message text={message.text} type={message.type} />
      </form>
    );
  
}

export default RegisterForm;
