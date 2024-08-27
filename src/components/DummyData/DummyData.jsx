// dummyData.js

//hindu
import hindu1 from "../../assets/HilfulFuzul/hindu/1.jpg";
import hindu3 from "../../assets/HilfulFuzul/hindu/13.jpg";
import hindu2 from "../../assets/HilfulFuzul/hindu/4.jpg";
import hindu4 from "../../assets/HilfulFuzul/hindu/40.jpg";

// khistian
import khristan1 from "../../assets/HilfulFuzul/chistian/2.jpg";
import khristan2 from "../../assets/HilfulFuzul/chistian/22.jpg";
import khristan3 from "../../assets/HilfulFuzul/chistian/27.jpg";
import khristan4 from "../../assets/HilfulFuzul/chistian/28.jpg";
import khristan5 from "../../assets/HilfulFuzul/chistian/33.jpg";
import khristan6 from "../../assets/HilfulFuzul/chistian/35.jpg";
import khristan7 from "../../assets/HilfulFuzul/chistian/36.jpg";
import khristan8 from "../../assets/HilfulFuzul/chistian/38.jpg";

//attojiboni
import attojiboni1 from "../../assets/HilfulFuzul/attojiboni/26.jpg";
import attojiboni2 from "../../assets/HilfulFuzul/attojiboni/32.jpg";

//daoat o dayi
import daoat4 from "../../assets/HilfulFuzul/daoat and dayi/11.jpg";
import daoat5 from "../../assets/HilfulFuzul/daoat and dayi/19.jpg";
import daoat6 from "../../assets/HilfulFuzul/daoat and dayi/21.jpg";
import daoat7 from "../../assets/HilfulFuzul/daoat and dayi/29.jpg";
import daoat8 from "../../assets/HilfulFuzul/daoat and dayi/30.jpg";
import daoat1 from "../../assets/HilfulFuzul/daoat and dayi/5.jpg";
import daoat2 from "../../assets/HilfulFuzul/daoat and dayi/6.jpg";
import daoat3 from "../../assets/HilfulFuzul/daoat and dayi/9.jpg";

//islam and hedayet
import islam2 from "../../assets/HilfulFuzul/islam and hedayet/14.jpg";
import islam3 from "../../assets/HilfulFuzul/islam and hedayet/17.jpg";
import islam4 from "../../assets/HilfulFuzul/islam and hedayet/18.jpg";
import islam5 from "../../assets/HilfulFuzul/islam and hedayet/20.jpg";
import islam6 from "../../assets/HilfulFuzul/islam and hedayet/24.jpg";
import islam7 from "../../assets/HilfulFuzul/islam and hedayet/25.jpg";
import islam1 from "../../assets/HilfulFuzul/islam and hedayet/3.jpg";
import islam8 from "../../assets/HilfulFuzul/islam and hedayet/34.jpg";
import islam9 from "../../assets/HilfulFuzul/islam and hedayet/37.jpg";

//maolana
import maolana3 from "../../assets/HilfulFuzul/maolana/12.jpg";
import maolana4 from "../../assets/HilfulFuzul/maolana/15.jpg";
import maolana5 from "../../assets/HilfulFuzul/maolana/23.jpg";
import maolana6 from "../../assets/HilfulFuzul/maolana/31.jpg";
import maolana1 from "../../assets/HilfulFuzul/maolana/7.jpg";
import maolana2 from "../../assets/HilfulFuzul/maolana/8.jpg";

//ritiniti
import ritiniti1 from "../../assets/HilfulFuzul/ritiniti/16.jpg";

export const writers = [
  {
    id: 1,
    name: "যুবায়ের আহমদ",
    books_count: 5,
    image: "../../assets/man.jpg",
  },
  {
    id: 2,
    name: "যুবায়ের আহমদ",
    books_count: 3,
    image: "../../assets/man.jpg",
  },
];

export const publishers = [
  {
    id: 1,
    name: "হিলফুল ফুজুল",
    books_count: 10,
    image: "../../assets/ogrogoti.jpg",
  },
  {
    id: 1,
    name: "হিলফুল ফুজুল",
    books_count: 5,
    image: "../../assets/ogrogoti.jpg",
  },
];

export const categories = [
  {
    id: 1,
    name: "হিন্দু ভাইদের জন্য",
  },
  {
    id: 2,
    name: "খ্রিষ্টান ভাইদের জন্য",
  },
  {
    id: 3,
    name: "আত্মজীবনী",
  },
  {
    id: 4,
    name: "দাওয়াত ও দায়ী",
  },
  {
    id: 5,
    name: "ইসলাম ও হেদায়েত",
  },
  {
    id: 6,
    name: "হযরত মাওলানা কালিম  সিদ্দিকী",
  },
  {
    id: 7,
    name: "রীতিনীতি",
  },
];

export const products = [
  //hindu

  {
    id: 1,
    name: "হিন্দু মুসলিম সংলাপ",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[0],
    description: "A fascinating fiction book.",
    price: 19.99,
    original_price: 24.99,
    discount: 20,
    stock: 50,
    available: true,
    image: hindu1,
    pdf: "../../assets/HilfulFuzul/hindu/আলোর পথে ( সিরিজ ১-৩).pdf",
  },
  {
    id: 2,
    name: "হিন্দু-ভাইবোনদের প্রতি ভালোবাসার পয়গাম",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[0],
    description: "A fascinating fiction book.",
    price: 19.99,
    original_price: 24.99,
    discount: 20,
    stock: 50,
    available: true,
    image: hindu2,
    pdf: "../../assets/HilfulFuzul/hindu/আলোর পথে ( সিরিজ ১-৩).pdf",
  },
  {
    id: 3,
    name: "হিন্দু থেকে মুসলমান",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[0],
    description: "A fascinating fiction book.",
    price: 19.99,
    original_price: 24.99,
    discount: 20,
    stock: 50,
    available: true,
    image: hindu3,
    pdf: "../../assets/HilfulFuzul/hindu/আলোর পথে ( সিরিজ ১-৩).pdf",
  },
  {
    id: 4,
    name: "পথ ও পদ্ধতি",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[0],
    description: "A fascinating fiction book.",
    price: 19.99,
    original_price: 24.99,
    discount: 20,
    stock: 50,
    available: true,
    image: hindu4,
    pdf: "../../assets/HilfulFuzul/hindu/আলোর পথে ( সিরিজ ১-৩).pdf",
  },

  //khristian

  {
    id: 5,
    name: "খ্রিস্টান ভাই-বোনদের প্রতি ভালোবাসার বার্তা",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[1],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: khristan1,
    pdf: "",
  },

  {
    id: 6,
    name: "খ্রিস্টান ভাইদের প্রতি জিজ্ঞাসা",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[1],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: khristan2,
    pdf: "",
  },

  {
    id: 7,
    name: "বড়দিনের উপহার",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[1],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: khristan3,
    pdf: "",
  },
  {
    id: 8,
    name: "নাজাত দাতা কে? যীশু না ঈশ্বর",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[1],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: khristan4,
    pdf: "",
  },
  {
    id: 9,
    name: "খ্রিস্টানদের প্রশ্ন মুসলমানদের উত্তর",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[1],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: khristan5,
    pdf: "",
  },
  {
    id: 10,
    name: "আল কুরআনে যীশু ও খ্রিস্ট ধর্ম",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[1],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: khristan6,
    pdf: "",
  },
  {
    id: 11,
    name: "বাংলাদেশে খ্রিস্টান মিশনারীদের তৎপরতা ও আমাদের করণীয়",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[1],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: khristan7,
    pdf: "",
  },
  {
    id: 12,
    name: "প্রচলিত খৃষ্টবাদ কিছু প্রশ্ন কিছু কথা",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[1],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: khristan8,
    pdf: "",
  },

  //attojiboni
  {
    id: 13,
    name: "আত্মজীবনীমূলক সাক্ষাৎকার",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[2],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: attojiboni1,
    pdf: "",
  },
  {
    id: 14,
    name: "৩০ হাজার খ্রিস্টানদের গুরু যেভাবে মুবাল্লিগ",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[2],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: attojiboni2,
    pdf: "",
  },

  //daoat o dayi

  {
    id: 15,
    name: "দাওয়াতী নেসাব",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[3],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: daoat1,
    pdf: "",
  },

  {
    id: 16,
    name: "দাওয়াত সম্পর্কিত চল্লিশ হাদিস",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[3],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: daoat2,
    pdf: "",
  },

  {
    id: 17,
    name: "দায়ীর গুণাবলী",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[3],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: daoat3,
    pdf: "",
  },

  {
    id: 18,
    name: "সত্যের দাওয়াত",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[3],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: daoat4,
    pdf: "",
  },

  {
    id: 19,
    name: "দাওয়াত-তাবলীগ শাহাদাত ও  এসলাহ",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[3],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: daoat5,
    pdf: "",
  },

  {
    id: 20,
    name: "দাওয়াতের ফিকির এবং আমলের ময়দান",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[3],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: daoat6,
    pdf: "",
  },

  {
    id: 21,
    name: "দাওয়াতের কর্ম বিরতি",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[3],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: daoat7,
    pdf: "",
  },

  {
    id: 22,
    name: "একটু ভাবুন",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[3],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: daoat8,
    pdf: "",
  },

  // islam and hedayet
  {
    id: 23,
    name: "আল্লাহ কে?",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[4],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: islam1,
    pdf: "",
  },
  {
    id: 24,
    name: "সিরাতুন্নবী",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[4],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: islam2,
    pdf: "",
  },
  {
    id: 25,
    name: "ইসলাম কাদের ধর্ম",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[4],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: islam3,
    pdf: "",
  },
  {
    id: 26,
    name: "মুক্তি কোন পথে",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[4],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: islam4,
    pdf: "",
  },
  {
    id: 27,
    name: "হক আদায়",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[4],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: islam5,
    pdf: "",
  },
  {
    id: 28,
    name: "এসো নবী সাল্লাল্লাহু আলাইহি ওয়াসাল্লামের পথে",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[4],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: islam6,
    pdf: "",
  },
  {
    id: 29,
    name: "আল্লাহর শাস্তি",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[4],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: islam7,
    pdf: "",
  },
  {
    id: 30,
    name: "দাওয়াত বিল কুরআন",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[4],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: islam8,
    pdf: "",
  },
  {
    id: 31,
    name: "আসবাবে হেদায়েত",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[4],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: islam9,
    pdf: "",
  },

  //maolana

  {
    id: 32,
    name: "সহযোগী হও প্রতিপক্ষ হয়ো না",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[5],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: maolana1,
    pdf: "",
  },
  {
    id: 33,
    name: "দিনের দাওয়াত কিছু প্রশ্ন কিছু বাস্তবতা",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[5],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: maolana2,
    pdf: "",
  },
  {
    id: 34,
    name: "হাদিয়া এ দাওয়াত",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[5],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: maolana3,
    pdf: "",
  },
  {
    id: 35,
    name: "তুহফায়ে দাওয়াত",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[5],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: maolana4,
    pdf: "",
  },
  {
    id: 36,
    name: "আপনার সেবায় আপনার আমানত",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[5],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: maolana5,
    pdf: "",
  },
  {
    id: 37,
    name: "নবীজির আদর্শ ও আমাদের জীবন বাস্তবতা",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[5],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: maolana6,
    pdf: "",
  },

  // ritiniti
  {
    id: 38,
    name: "অজানা বৈশাখ",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[6],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: ritiniti1,
    pdf: "",
  },
];

export const orders = [
  {
    id: 1,
    name: "Alice Brown",
    email: "alice@example.com",
    phone_number: "123456789",
    alt_phone_number: "987654321",
    country: "USA",
    district: "California",
    area: "Los Angeles",
    address_details: "123 Main St, Los Angeles, CA 90001",
    total: 49.99,
    shipping_cost: 5.99,
    grand_total: 55.98,
    payment_method: "Credit Card",
    products: [products[0], products[1]],
  },
];

export const orderItems = [
  {
    id: 1,
    order: orders[0],
    product: products[0],
    quantity: 1,
    price: 19.99,
  },
  {
    id: 2,
    order: orders[0],
    product: products[1],
    quantity: 1,
    price: 29.99,
  },
];

export const blogs = [
  {
    id: 1,
    title: "Introduction to React",
    summary: "This blog introduces you to the basics of React.",
    date: "2024-08-27",
    author: "Jane Developer",
    image: "/path/to/blog_images/react_intro.jpg",
  },
  {
    id: 2,
    title: "Advanced Django",
    summary: "Deep dive into advanced Django topics.",
    date: "2024-08-28",
    author: "John Coder",
    image: "/path/to/blog_images/django_advanced.jpg",
  },
];

export const contacts = [
  {
    id: 1,
    name: "Charlie Davis",
    email: "charlie@example.com",
    phone_number: "555555555",
    message: "I would like more information about your products.",
    created_at: "2024-08-27T12:00:00Z",
  },
];
