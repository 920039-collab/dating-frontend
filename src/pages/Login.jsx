import { useState } from "react";
import { authApi } from "../api";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      const { data } = await authApi.signin({ phone, password });
      localStorage.setItem("token", data.access_token);
      location.href = "/";
    } catch (e) {
      setErr(e?.response?.data?.detail || "Ошибка входа");
    }
  };

  return (
    <div style={{maxWidth:420, margin:"24px auto", background:"#1e1e1e", padding:16, borderRadius:16}}>
      <h1 style={{fontSize:20, fontWeight:"700"}}>Войти</h1>
      <form onSubmit={submit} style={{display:"flex", flexDirection:"column", gap:12, marginTop:12}}>
        <input placeholder="+79991234567" value={phone} onChange={e=>setPhone(e.target.value)} style={{padding:12, borderRadius:8, background:"#2a2a2a", color:"#fff", border:"1px solid #333"}} />
        <input type="password" placeholder="Пароль" value={password} onChange={e=>setPassword(e.target.value)} style={{padding:12, borderRadius:8, background:"#2a2a2a", color:"#fff", border:"1px solid #333"}} />
        {err && <div style={{color:"#ff6b6b"}}>{err}</div>}
        <button style={{padding:12, borderRadius:8, background:"#e91e63", border:"none", color:"#fff"}}>Войти</button>
      </form>
    </div>
  );
}
