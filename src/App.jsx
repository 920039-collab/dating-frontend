import React, { useEffect, useState } from 'react'
import { api } from './lib/api'

export default function App() {
  const [ping, setPing] = useState('')
  const [starter, setStarter] = useState('')

  useEffect(() => {
    // Простой пинг API (если есть GET /ping)
    api.get('/ping')
      .then(res => setPing(JSON.stringify(res.data)))
      .catch(() => setPing('API ping: ошибка или эндпоинт отсутствует'))

    // Пример AI-стартера (если есть GET /ai/starter)
    api.get('/ai/starter')
      .then(res => setStarter(res.data?.text || JSON.stringify(res.data)))
      .catch(() => setStarter('AI starter: ошибка или эндпоинт отсутствует'))
  }, [])

  return (
    <div style={{display: 'grid', placeItems: 'center', minHeight: '100dvh', background:'#0b0b0f', color:'#fff', fontFamily:'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell'}}>
      <div style={{maxWidth: 720, width:'100%', padding: 24}}>
        <h1 style={{margin:0, fontSize: 32, lineHeight: 1.2}}>Dating — MVP</h1>
        <p style={{opacity:.8}}>Бэкенд: <code>{import.meta.env.VITE_API_URL}</code></p>

        <div style={{marginTop: 24, padding:16, background:'#13131a', borderRadius:12}}>
          <h3>Пинг API</h3>
          <pre style={{whiteSpace:'pre-wrap'}}>{ping}</pre>
        </div>

        <div style={{marginTop: 16, padding:16, background:'#13131a', borderRadius:12}}>
          <h3>AI-старт диалога</h3>
          <pre style={{whiteSpace:'pre-wrap'}}>{starter}</pre>
        </div>

        <p style={{opacity:.7, marginTop: 24}}>
          Если видишь пусто/ошибки — проверь переменную <code>VITE_API_URL</code> на Vercel и доступность эндпоинтов на бэкенде.
        </p>
      </div>
    </div>
  )
}
