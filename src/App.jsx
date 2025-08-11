import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Chat from "./pages/Chat.jsx";

const navStyle = { padding: "12px 16px", display:"flex", justifyContent:"space-between", alignItems:"center", background:"#181818" };
const linkStyle = { color:"#fff", textDecoration:"none", marginLeft:12 };

export default function App() {
  const token = localStorage.getItem("token");

  return (
    <div>
      <nav style={navStyle}>
        <Link to="/" style={{...linkStyle, fontWeight:"700"}}>SoulMatch+</Link>
        <div>
          <Link to="/" style={linkStyle}>Домой</Link>
          {token ? (
            <button style={linkStyle} onClick={() => { localStorage.removeItem("token"); location.href="/"; }}>Выйти</button>
          ) : (
            <>
              <Link to="/login" style={linkStyle}>Войти</Link>
              <Link to="/signup" style={linkStyle}>Регистрация</Link>
            </>
          )}
          <Link to="/chat" style={{...linkStyle, background:"#e91e63", padding:"6px 12px", borderRadius:8}}>Чат</Link>
        </div>
      </nav>

      <div style={{padding:16, maxWidth:800, margin:"0 auto"}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="*" element={<div>Страница не найдена</div>} />
        </Routes>
      </div>
    </div>
  );
}
