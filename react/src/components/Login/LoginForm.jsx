import { useState } from 'react'
import { login } from '../../api/auth'

import Input from '../ui/Input'
import Button from '../ui/Button'
import Message from '../ui/Message'

function LoginForm({ onSuccess }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ text: '', type: 'info' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ text: '', type: 'info' })
    
    try {
      // Utilise la fonction importée
      const data = await login(email, password)
      //                    ↑ Fonction depuis auth.js
      
      // Succès
      setMessage({ text: '✅ Connexion réussie !', type: 'success' })
      
      if (data.token) {
        localStorage.setItem('token', data.token)
      }
      
      if (onSuccess) {
        onSuccess(data)
      }
      
    } catch (error) {
      // L'erreur vient du throw new Error() dans auth.js
      setMessage({ 
        text: '❌ ' + error.message, 
        type: 'error' 
      })
    } finally {
      setLoading(false)
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
        {loading ? 'Connexion...' : 'Se connecter'}
      </Button>
      
      <Message text={message.text} type={message.type} />
    </form>
  )
}

export default LoginForm