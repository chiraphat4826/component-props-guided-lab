export default function HomePage() {
  return (
    <div style={{ 
      backgroundColor: "#121212", 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
      textAlign: "center"
    }}>
      <h1 style={{ color: "#ffffff", fontSize: "48px", marginBottom: "16px" }}>
         My Favorite Bands
      </h1>
      <p style={{ color: "#a1a1aa", fontSize: "18px", maxWidth: "600px", lineHeight: "1.6" }}>
        ยินดีต้อนรับสู่เว็บไซต์รวบรวมข้อมูลวงดนตรีโปรด <br/>
        กรุณาคลิกเลือกชื่อวงดนตรีที่เมนูด้านบนเพื่อดูข้อมูลสมาชิกและประวัติของวงครับ
      </p>
    </div>
  );
}