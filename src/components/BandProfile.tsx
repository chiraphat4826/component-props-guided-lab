import Image from "next/image";
import type { Band } from "@/type/band";

// รับข้อมูลผ่าน Props
type Props = {
  band: Band;
};

export default function BandProfile({ band }: Props) {
  return (
    <div style={{ backgroundColor: "#121212", minHeight: "100vh", paddingBottom: "80px", fontFamily: "sans-serif" }}>
      
      {/* 1. รูปหน้าปก (เปลี่ยนเป็น contain เพื่อบังคับให้รูปโชว์เต็มใบ ห้ามตัดขอบ) */}
      <div style={{ width: "100%", height: "400px", position: "relative", backgroundColor: "#121212" }}>
        <Image 
          src={band.coverImage} 
          alt={band.name}
          fill
          style={{ objectFit: "contain", objectPosition: "center" }}
          priority 
        />
      </div>

      <main style={{ maxWidth: "1000px", margin: "24px auto 0", padding: "0 24px", position: "relative", zIndex: 10 }}>
        
        {/* 2. ข้อมูลวงดนตรี */}
        <div style={{ backgroundColor: "#18181b", padding: "32px", borderRadius: "16px", border: "1px solid #333", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
          <h1 style={{ color: "#fff", fontSize: "42px", margin: "0 0 24px 0" }}>{band.name}</h1>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", color: "#a1a1aa", fontSize: "16px", lineHeight: "1.6" }}>
            <div>
              <p>🎵 <strong style={{ color: "#fff" }}>แนวเพลง:</strong> {band.genre}</p>
              <p>👥 <strong style={{ color: "#fff" }}>สมาชิก:</strong> {band.membersCount} คน</p>
              <p>📅 <strong style={{ color: "#fff" }}>ปีที่ตั้งวง:</strong> พ.ศ. {band.formedYear}</p>
            </div>
            <div>
              <p>🚀 <strong style={{ color: "#fff" }}>จุดกำเนิด:</strong> {band.debutFrom}</p>
              <p>💿 <strong style={{ color: "#fff" }}>จำนวนเพลง:</strong> {band.totalSongs} เพลง</p>
              <p>💽 <strong style={{ color: "#fff" }}>จำนวนอัลบั้ม:</strong> {band.totalAlbums} อัลบั้ม</p>
            </div>
          </div>
        </div>

        {/* 3. รายชื่อสมาชิก (ตรงตามโจทย์: ใช้ map วนลูป) */}
        <section style={{ marginTop: "48px" }}>
          <h2 style={{ color: "#fff", fontSize: "24px", borderBottom: "2px solid #333", paddingBottom: "12px", marginBottom: "32px" }}>
            สมาชิกวง (Members)
          </h2>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "flex-start" }}>
            {band.members.map((member, index) => (
              <div key={index} style={{ textAlign: "center", width: "120px" }}>
                
                {/* กรอบรูปสมาชิก (วงกลม) */}
                <div style={{ width: "120px", height: "120px", borderRadius: "50%", overflow: "hidden", position: "relative", border: "3px solid #3f3f46", marginBottom: "12px", backgroundColor: "#27272a" }}>
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                
                <h3 style={{ color: "#fff", fontSize: "16px", margin: "0 0 4px 0" }}>{member.name}</h3>
                <p style={{ color: "#888", fontSize: "13px", margin: "0" }}>{member.role}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}