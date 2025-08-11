import { useState } from "react";
import { aiApi } from "../api";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const send = () => {
    if (!draft.trim()) return;
    setMessages([...messages, { me: true, text: draft }]);
    setDraft("");
  };

  const suggest = async () => {
    const { data } = await aiApi.starter();
    setSuggestion(data.starter);
    setDraft(data.starter);
  };

  return (
    <div style={{maxWidth:800, margin:"0 auto"}}>
      <h1 style={{fontSize:24, fontWeight:"700", margin:"12px 0"}}>Чат</h1>
      <div style={{background:"#1e1e1e", borderRadius:16, padding:16, minHeight:280}}>
        <div style={{display:"flex", flexDirection:"column", gap:8, marginBottom:12}}>
          {messages.map((m,i)=>(
            <div key={i} style={{
              alignSelf: m.me ? "flex-end" : "flex-start",
              background: m.me ? "#e91e63" : "#333",
              padding:"8px 12px", borderRadius:16
            }}>{m.text}</div>
          ))}
        </div>
        <div style={{display:"flex", gap:8}}>
          <input value={draft} onChange={e=>setDraft(e.target.value)} placeholder="Напишите сообщение…"
                 style={{flex:1, padding:12, borderRadius:8, background:"#2a2a2a", color:"#fff", border:"1px solid #333"}} />
          <button onClick={suggest} title="AI фраза" style={{padding:"8px 12px"}}>💡</button>
          <button onClick={send} style={{padding:"8px 12px", background:"#e91e63", border:"none", borderRadius:8, color:"#fff"}}>Отправить</button>
        </div>
        {suggestion && <div style={{opacity:.7, fontSize:12, marginTop:8}}>Предложение: {suggestion}</div>}
      </div>
    </div>
  );
}
