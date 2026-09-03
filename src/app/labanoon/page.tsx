import BandProfile from "@/components/BandProfile";
import type { Band } from "@/type/band";

const labanoonData: Band = {
  id: 2,
  name: "Labanoon",
  genre: "ป็อปร็อก (Pop Rock)",
  membersCount: 3,
  formedYear: 2541,
  debutFrom: "การรวมตัวของนักเรียนอิสลามวิทยาลัยแห่งประเทศไทย",
  totalSongs: 75,
  totalAlbums: 9,
  coverImage: "/images/bands/labanoon.jpg",
  members: [
    { name: "เมธี", role: "ร้องนำ / กีตาร์", image: "/images/members/metee.jpg" },
    { name: "อนันต์", role: "เบส", image: "/images/members/anan.jpg" },
    { name: "สมเมย์", role: "กลอง", image: "/images/members/sommay.jpg" },
  ]
};

export default function LabanoonPage() {
  return <BandProfile band={labanoonData} />;
}