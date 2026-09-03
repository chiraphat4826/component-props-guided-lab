import BandProfile from "@/components/BandProfile";
import type { Band } from "@/type/band";

const bodyslamData: Band = {
  id: 1,
  name: "Bodyslam",
  genre: "ร็อก (Rock)",
  membersCount: 5,
  formedYear: 2545,
  debutFrom: "เดบิ้วต์ในชื่อวง ละอ่อน จากเวที Hot Wave Music Awards",
  totalSongs: 90,
  totalAlbums: 8,
  coverImage: "/images/bands/bodyslam.jpg", // ต้องมีรูปนี้ในโฟลเดอร์
  members: [
    { name: "ตูน", role: "ร้องนำ", image: "/images/members/toon.jpg" },
    { name: "ปิ๊ด", role: "เบส", image: "/images/members/pid.jpg" },
    { name: "ยอด", role: "กีตาร์", image: "/images/members/yod.jpg" },
    { name: "ชัช", role: "กลอง", image: "/images/members/chad.jpg" },
    { name: "โอม", role: "คีย์บอร์ด", image: "/images/members/ohm.jpg" },
  ]
};

export default function BodyslamPage() {
  return <BandProfile band={bodyslamData} />;
}