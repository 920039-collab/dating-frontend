import { useState } from 'react';
import { ping, aiChat, API } from './lib/api';

export default function App() {
  const [log, setLog] = useState('');

  async function onPing() {
    setLog('Пингуем API… (если Render «спит», это займёт 30–60 c)');
    try {
      const data = await ping();
      setLog('Ответ /ping:\n' + JSON.stringify(data, null, 2));
    } catch (e) {
      setLog('Ошибка /ping:\n' + e.message);
    }
  }

  async function onAiStart() {
    const text = window.prompt('Напиши фразу для старта диалога', 'Привет!');
    if (!text) return;
    setLog('Шлём запрос в /ai/chat…');
    try {
      const data = await aiChat(text);
      setLog('Ответ /ai/chat:\n' + JSON.stringify(data, null, 2));
    } catch (e) {
      setLog('Ошибка /ai/chat:\n' + e.message);
    }
  }

  return (
    <main style={{ color:'#fff', padding:'40px', fontFamily:'Inter, system-ui, sans-serif' }}>
      <h1>Dating — MVP</h1>
      <p>Бэкенд: {API}</p>

      <div style={{display:'flex', flexDirection:'column', gap:'16px', maxWidth:680}}>
        <button onClick={onPing} style={btn}>Пинг API</button>
        <button onClick={onAiStart} style={btn}>AI-старт диалога</button>

        <pre style={pre}>{log || 'Лог появится здесь…'}</pre>
      </div>
    </main>
  );
}

const btn = {
  padding:'18px 20px',
  background:'#10151c',
  border:'1px solid #232a34',
  borderRadius:'12px',
  color:'#fff',
  textAlign:'left',
  cursor:'pointer'
};

const pre = {
  whiteSpace:'pre-wrap',
  background:'#0b0f14',
  border:'1px solid #232a34',
  borderRadius:'12px',
  padding:'16px',
  minHeight:'120px'
};
