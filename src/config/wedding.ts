/**
 * Everything the card shows lives here. Edit this file to personalise the card;
 * no other file holds couple-specific content.
 */

import type { ThemeId } from "./themes.ts";

export type Person = {
  name: string;
  fullName: string;
  role: string;
  /** Parents shown on the back of the flip card; leave empty to hide. */
  parents: string[];
  bio: string;
  photo: string;
  phone?: string;
  bank: { name: string; number: string; owner: string };
};

export type WeddingEvent = {
  title: string;
  /** ISO 8601 with offset, e.g. 2027-01-17T12:00:00+07:00 */
  start: string;
  durationMin: number;
  place: string;
  address: string;
  mapUrl?: string;
};

export type StoryItem = { title: string; text: string; photo: string };

export const wedding = {
  title: "Xuân Tùng & Phương Anh — Thiệp cưới",
  description: "Trân trọng kính mời bạn đến chung vui trong ngày trọng đại của chúng mình.",
  initials: "T & A",
  /** Main moment used by the countdown and the hero date. */
  date: "2027-01-17T12:00:00+07:00",
  lunarDate: "Tức ngày 10 tháng 12 năm Bính Ngọ",
  heroPhoto: "/photos/couple-15",
  quote: "Yêu nhau không phải là nhìn nhau, mà là cùng nhau nhìn về một hướng.",
  /** Default colour theme (see `config/themes.ts`); a guest link can override it with `?theme=<id>`. */
  theme: "hong-do" satisfies ThemeId as ThemeId,
  /** Show the floating palette button so guests can switch themes themselves. */
  themePicker: true,
  music: "https://cdn.jsdelivr.net/gh/saygoodbyethe3-bit/music-hosting/Beautiful in White - Westlife.mp3",

  groom: {
    name: "Xuân Tùng",
    fullName: "Cấn Xuân Tùng",
    role: "Chú rể",
    parents: [],
    bio: "Người con trai luôn tin rằng hạnh phúc là được nắm tay một người thật lâu.",
    photo: "/photos/couple-12",
    phone: "0348889995",
    bank: { name: "Techcombank", number: "1312228888", owner: "CAN XUAN TUNG" },
  } satisfies Person,

  bride: {
    name: "Phương Anh",
    fullName: "Trần Thị Phương Anh",
    role: "Cô dâu",
    parents: [],
    bio: "Cô gái thích hoa, thích nắng và thích mỗi ngày được bình yên bên anh.",
    photo: "/photos/couple-13",
    bank: { name: "Techcombank", number: "1312228888", owner: "CAN XUAN TUNG" },
  } satisfies Person,

  events: [
    {
      title: "Lễ Vu Quy",
      start: "2027-01-17T08:00:00+07:00",
      durationMin: 120,
      place: "Tư gia nhà gái",
      address: "Hải Phòng",
    },
    {
      title: "Lễ Thành Hôn",
      start: "2027-01-17T10:00:00+07:00",
      durationMin: 120,
      place: "Tư gia nhà trai",
      address: "Hải Phòng",
    },
    {
      title: "Tiệc Cưới",
      start: "2027-01-17T12:00:00+07:00",
      durationMin: 180,
      place: "The Pandora Center Hải Phòng",
      address: "12 Võ Nguyên Giáp, Kênh Dương, Lê Chân, Hải Phòng",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Pandora+Center,+12+V%C3%B5+Nguy%C3%AAn+Gi%C3%A1p,+K%C3%AAnh+D%C6%B0%C6%A1ng,+L%C3%AA+Ch%C3%A2n,+H%E1%BA%A3i+Ph%C3%B2ng",
    },
  ] satisfies WeddingEvent[],

  story: [
    {
      title: "Lần đầu gặp gỡ",
      text: "Một buổi chiều rất bình thường, bỗng trở thành ngày đáng nhớ nhất khi hai ánh mắt chạm nhau.",
      photo: "/photos/couple-01",
    },
    {
      title: "Những chuyến đi",
      text: "Cùng nhau đi qua biển, qua phố, qua những bữa ăn giản dị — và nhận ra nơi nào có nhau là nhà.",
      photo: "/photos/couple-03",
    },
    {
      title: "Lời hứa trọn đời",
      text: "Và rồi, chúng mình quyết định viết tiếp câu chuyện này bằng hai chữ: mãi mãi.",
      photo: "/photos/couple-14",
    },
  ] satisfies StoryItem[],

  /** Photo bases; each has `<base>.webp` (full) and `<base>-sm.webp` (480px wide). */
  gallery: [
    "/photos/couple-15",
    "/photos/couple-01",
    "/photos/couple-02",
    "/photos/couple-04",
    "/photos/couple-06",
    "/photos/couple-07",
    "/photos/couple-08",
    "/photos/couple-14",
    "/photos/couple-05",
    "/photos/couple-09",
  ],
};

export type Wedding = typeof wedding;
