const API_URL = import.meta.env.VITE_API_URL || 'http://remote.raug-info.ch:3000'

class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`
    const token = localStorage.getItem('token')
    
    const config = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
    }

    const response = await fetch(url, config)
    
    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Erreur API')
    }
    
    return response.json()
  }

  // Méthodes raccourcies
  get(endpoint) {
    console.log(this.token);
    return this.request(endpoint, { method: 'GET' })
  }

  post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data)
    })
  }

  delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' })
  }
}

// Export une instance unique
export const apiClient = new ApiClient(API_URL)