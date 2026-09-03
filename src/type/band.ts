// โครงสร้างข้อมูลสมาชิก
export type Member = {
  name: string;
  role: string;
  image: string;
};

// โครงสร้างข้อมูลวงดนตรี
export type Band = {
  id: number;
  name: string;
  genre: string;
  membersCount: number;
  formedYear: number;
  debutFrom: string;
  totalSongs: number;
  totalAlbums: number;
  coverImage: string;
  members: Member[]; // ดึง Type Member มาใช้ซ้อนกัน
};