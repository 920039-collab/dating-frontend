// Мини-клиент для работы с API.
// Базовый URL читается из переменной окружения Vite.
const BASE_URL = import.meta.env.VITE_API_URL?.replace(/\/+$/, '') || ''

export const api = {
  async get(path) {
    const res = await fetch(`${BASE_URL}${path}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    })
    if (!res.ok) throw new Error(`GET ${path} -> ${res.status}`)
    return res.json()
  },
  async post(path, body) {
    const res = await fetch(`${BASE_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(body)
    })
    if (!res.ok) throw new Error(`POST ${path} -> ${res.status}`)
    return res.json()
  }
}
