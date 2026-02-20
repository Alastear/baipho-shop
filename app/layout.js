import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ร้านใบโพธิ์ เวียงชัย – อุปกรณ์การเรียน ชุดนักเรียน รองเท้า สินค้าสัตว์เลี้ยง เชียงราย",
  description:
    "ร้านใบโพธิ์ เวียงชัย เชียงราย จำหน่ายอุปกรณ์การเรียน ชุดนักเรียน รองเท้านักเรียน รองเท้าทั่วไป อุปกรณ์และอาหารสัตว์เลี้ยง ครบครัน ราคาย่อมเยา ออกบิลได้ เปิดทุกวัน",
  keywords: [
    "ร้านใบโพธิ์",
    "ใบโพธิ์ เวียงชัย",
    "ร้านค้า เวียงชัย",
    "อุปกรณ์การเรียน เชียงราย",
    "ชุดนักเรียน เชียงราย",
    "รองเท้านักเรียน เชียงราย",
    "อาหารสัตว์เลี้ยง เวียงชัย",
    "ร้านขายรองเท้า เวียงชัย",
    "baipho shop",
  ],
  authors: [{ name: "ร้านใบโพธิ์ เวียงชัย" }],
  creator: "ร้านใบโพธิ์ เวียงชัย",
  openGraph: {
    title: "ร้านใบโพธิ์ เวียงชัย – สินค้าครบครัน คุณภาพดี ราคาคุ้มค่า",
    description:
      "จำหน่ายอุปกรณ์การเรียน ชุดนักเรียน รองเท้า และสินค้าสัตว์เลี้ยง ครบครันในที่เดียว ต.เวียงชัย อ.เวียงชัย เชียงราย",
    url: "https://www.facebook.com/baiphoshoesshop",
    siteName: "ร้านใบโพธิ์ เวียงชัย",
    images: [
      {
        url: "https://scontent.fbkk6-2.fna.fbcdn.net/v/t39.30808-6/592526536_1153831730291898_2464330813993563386_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=2a1932&_nc_ohc=Hd7dlskXUnMQ7kNvwHKMeT0&_nc_ht=scontent.fbkk6-2.fna&oh=00_Afsh1PmP27VD6O_igYgZr1JPYbObH67nkD0mdWVEBt2uAg&oe=699DE52C",
        width: 2048,
        height: 1556,
        alt: "ร้านใบโพธิ์ เวียงชัย",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ร้านใบโพธิ์ เวียงชัย",
    description: "อุปกรณ์การเรียน ชุดนักเรียน รองเท้า สินค้าสัตว์เลี้ยง ครบครัน เปิดทุกวัน",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.facebook.com/baiphoshoesshop",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ร้านใบโพธิ์ เวียงชัย",
              "alternateName": "Baipho Shop",
              "description": "ร้านค้าครบครัน จำหน่ายอุปกรณ์การเรียน ชุดนักเรียน รองเท้า และสินค้าสัตว์เลี้ยง",
              "url": "https://www.facebook.com/baiphoshoesshop",
              "telephone": "098-341-7259",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "198/1 หมู่ 1 ต.เวียงชัย",
                "addressLocality": "อ.เวียงชัย",
                "addressRegion": "เชียงราย",
                "addressCountry": "TH",
              },
              "openingHours": "Mo-Su 06:00-18:00",
              "sameAs": ["https://www.facebook.com/baiphoshoesshop"],
              "image": "https://scontent.fbkk6-2.fna.fbcdn.net/v/t39.30808-1/591173249_1153837776957960_1567603954261718774_n.jpg",
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
