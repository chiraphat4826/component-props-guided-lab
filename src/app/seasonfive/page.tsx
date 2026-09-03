import BandProfile from "@/components/BandProfile";
import type { Band } from "@/type/band";

const seasonfiveData: Band = {
  id: 3,
  name: "Season Five",
  genre: "ป็อป / อะแคปเปลลา",
  membersCount: 4,
  formedYear: 2552,
  debutFrom: "กลุ่มเพื่อนมัธยมโรงเรียนกรุงเทพคริสเตียนวิทยาลัย",
  totalSongs: 40,
  totalAlbums: 2,
  coverImage: "/images/bands/seasonfive.jpg",
  members: [
    { name: "เอก", role: "ร้องนำ (Tenor)", image: "/images/members/aek.jpg" },
    { name: "เจ๊ก", role: "ร้องนำ (High Tenor)", image: "/images/members/jek.jpg" },
    { name: "จั๊ก", role: "ร้องนำ (Baritone)", image: "/images/members/jug.jpg" },
    { name: "เปา", role: "ร้องนำ (Bass)", image: "/images/members/pao.jpg" },
  ]
};

export default function SeasonFivePage() {
  return <BandProfile band={seasonfiveData} />;
}