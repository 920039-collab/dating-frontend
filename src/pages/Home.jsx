export default function Home() {
  const card = {
    name: "Аня, 26",
    city: "СПб",
    interests: ["кино","йога"],
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800"
  };
  const box = { background:"#1e1e1e", borderRadius:16, padding:16, boxShadow:"0 8px 24px rgba(0,0,0,.4)" };

  return (
    <div>
      <h1 style={{fontSize:24, fontWeight:"700", margin:"12px 0"}}>Лучшие совпадения дня</h1>
      <div style={box}>
        <img src={card.photo} style={{width:"100%", borderRadius:12, marginBottom:12}} />
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <div>
            <div style={{fontWeight:"700"}}>{card.name}</div>
            <div style={{opacity:.8, fontSize:14}}>{card.city}</div>
            <div style={{opacity:.6, fontSize:12, marginTop:4}}>{card.interests.join(" • ")}</div>
          </div>
          <div>
            <button style={{marginRight:8, padding:"8px 12px"}}>👎</button>
            <button style={{padding:"8px 12px", background:"#e91e63", border:"none", borderRadius:8, color:"#fff"}}>❤️</button>
          </div>
        </div>
      </div>
      <p style={{opacity:.6, marginTop:12}}>Это демо-карточка. Подключим реальные кандидаты после добавления эндпоинтов на бэке.</p>
    </div>
  );
}
