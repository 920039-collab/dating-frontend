// src/lib/api.js
export const API = import.meta.env.VITE_API_URL; // у тебя это https://backend-r6yb.onrender.com

export async function ping() {
  const res = await fetch(`${API}/ping`);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

// Если на бэкенде у /ai/chat поле в body называется НЕ prompt,
// поменяй ниже { prompt } на нужное имя (например, { text }).
export async function aiChat(prompt) {
  const body = { prompt };
  const res = await fetch(`${API}/ai/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
