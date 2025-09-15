import type { Metadata } from "next";
import "./globals.css";
import ThemeProv from "@/context/ThemeProv";

import { Cairo } from 'next/font/google'
import dynamic from "next/dynamic";
import Script from "next/script";

const SocialIcons = dynamic(() => import("@/components/layouts/SocialIcons"));
const cairo = Cairo({ weight: ["600", "700", "800"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "صباغ الكويت - 50303335 - صباغ شاطر ورخيص",
  description: "صباغ الكويت يقدم خدمات صباغة رخيصة واحترافية بجودة عالية وبأسعار تنافسية في جميع مناطق الكويت.",
  robots: "index,follow",
  keywords: "صباغ الكويت, صباغ شاطر, صباغ رخيص, اصباغ داخلية وخارجية, صباغ في الكويت, اصباغ حديثة, صباغ الكويت بأفضل الأسعار",
  openGraph: {
    type: "article",
    authors: ["صباغ الكويت", "https://sabaghinkuwait.com"],
    locale: "ar_AR",
    url: "https://sabaghinkuwait.com",
    title: "صباغ الكويت - 50303335 - صباغ شاطر ورخيص",
    description: "صباغ الكويت يقدم خدمات صباغة رخيصة واحترافية بجودة عالية وبأسعار تنافسية.",
    images: [
      {
        url: "https://sabaghinkuwait.com/logo.png",
        width: 1200,
        height: 630,
        alt: "صباغ الكويت",
      },
      {
        url: "https://sabaghinkuwait.com/logo.png",
        width: 1200,
        height: 630,
        alt: "صباغ الكويت",
      },
    ],
    siteName: "صباغ الكويت",
    section: "خدمات صباغة",
    publishedTime: "2024-10-1T12:00:00Z", // Publication date of the article
    modifiedTime: "2024-10-10T14:00:00Z", // Last modified time (optional)
    alternateLocale: "ar"
  },
  twitter: {
    card: "summary_large_image",
    title: "صباغ الكويت - 50303335 - صباغ شاطر ورخيص",
    description: "صباغ الكويت يقدم خدمات صباغة رخيصة واحترافية بجودة عالية في جميع مناطق الكويت.",
    images: "https://sabaghinkuwait.com/logo.png",
  },
  manifest: "/manifest.json",
  authors: {
    name: "صباغ الكويت",
    url: "https://sabaghinkuwait.com",
  },
  bookmarks: ["صباغ الكويت", "صباغ شاطر", "صباغ رخيص", "الكويت"],
  alternates: {
    canonical: "https://sabaghinkuwait.com", // Canonical URL for SEO purposes
    languages: {
      "ar": "https://sabaghinkuwait.com", // If you have an Arabic language version
    },
  },
  applicationName: "صباغ الكويت",
  creator: "mamdouh mohammed",
  category: "خدمات صباغة",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"ar"} dir={"rtl"}>
      <head>
        {/* <!-- Google Tag Manager --> */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PKTVLMGN');
          `}
        </Script>
        {/* <!-- End Google Tag Manager --> */}
        
        <Script id="google-conversion-direct" strategy="afterInteractive">
          {`
    gtag('event', 'conversion', {
      'send_to': 'AW-17541194066/fK86COvgqJsbENLCpaxB'
    });
  `}
        </Script>
        {/* Google Tag Manager */}
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17541194066"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tracking" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17541194066');
          `}
        </Script> */}
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="content-language" content="ar" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon.png"
          type="image/png"
          sizes="png"
        />
        <link
          rel="icon"
          href="/web-app-manifest-512x512.png"
          type="image/png"
          sizes="png"
        />
        {/* <GoogleAnalytics gaId="G-YYCCSJQ60Q" /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "@graph": [
                  {
                    "@type": "WebPage",
                    "@id": "https://sabaghinkuwait.com/",
                    "url": "https://sabaghinkuwait.com/",
                    "name": "صباغ الكويت - 50303335 - صباغ شاطر ورخيص",
                    "isPartOf": { "@id": "https://sabaghinkuwait.com#website" },
                    "primaryImageOfPage": { "@id": "https://sabaghinkuwait.com/#primaryimage" },
                    "image": { "@id": "https://sabaghinkuwait.com/#primaryimage" },
                    "thumbnailUrl": "https://sabaghinkuwait.com/logo.png",
                    "datePublished": "2020-12-29T13:47:49+00:00", "dateModified": "2024-10-01T07:59:36+00:00",
                    "description": "صباغ الكويت , هل تريد رقم صباغ شاطر ورخيص بالكويت ؟ نوفر لك افضل تصميمات وديكورات منزليه احترافيه فني تركيب ورق جدران ممتاز اتصل الان",
                    "breadcrumb": { "@id": "https://sabaghinkuwait.com/#breadcrumb" },
                    "inLanguage": "ar",
                    "potentialAction": [{ "@type": "ReadAction", "target": ["https://sabaghinkuwait.com/"] }]
                  },
                  {
                    "@type": "ImageObject",
                    "inLanguage": "ar",
                    "@id": "https://sabaghinkuwait.com/#primaryimage",
                    "url": "https://sabaghinkuwait.com/logo.png",
                    "contentUrl": "https://sabaghinkuwait.com/logo.png",
                    "width": 600,
                    "height": 450,
                    "caption": "صباغ الكويت"
                  },
                  {
                    "@type": "BreadcrumbList",
                    "@id": "https://sabaghinkuwait.com/#breadcrumb",
                    "itemListElement": [
                      {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "الرئيسية",
                        "item": "https://sabaghinkuwait.com/"
                      },
                      {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "اصباغ",
                        "item": "https://sabaghinkuwait.com/aspagh"
                      },
                      {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "صباغ رخيص",
                        "item": "https://sabaghinkuwait.com/sabaagh-rakhis"
                      },
                      {
                        "@type": "ListItem",
                        "position": 4,
                        "name": "صباغ شاطر",
                        "item": "https://sabaghinkuwait.com/sabaagh-shatir"
                      },
                      {
                        "@type": "ListItem",
                        "position": 5,
                        "name": "معلم صباغ",
                        "item": "https://sabaghinkuwait.com/muealim-sabagh"
                      },
                      {
                        "@type": "ListItem",
                        "position": 6,
                        "name": "صباغ الكويت",
                        "item": "https://sabaghinkuwait.com/sabaagh-alkuayt"
                      },
                      {
                        "@type": "ListItem",
                        "position": 7,
                        "name": "اصباغ الكويت",
                        "item": "https://sabaghinkuwait.com/aisbgh-alkuayt"
                      },
                      {
                        "@type": "ListItem",
                        "position": 8,
                        "name": "صباغ شاطر بالكويت",
                        "item": "https://sabaghinkuwait.com/sabaagh-shatir-bi-alkuayt"
                      },
                      {
                        "@type": "ListItem",
                        "position": 9,
                        "name": "معلم صباغ في الكويت",
                        "item": "https://sabaghinkuwait.com/muealim-sabaagh-bi-alkuayt"
                      },
                      {
                        "@type": "ListItem",
                        "position": 10,
                        "name": "فني صباغ الكويت",
                        "item": "https://sabaghinkuwait.com/faniy-sabagh"
                      },
                      {
                        "@type": "ListItem",
                        "position": 11,
                        "name": "صباغ ممتاز بالكويت",
                        "item": "https://sabaghinkuwait.com/sabaagh-mumtaz-bi-alkuayt"
                      },
                      {
                        "@type": "ListItem",
                        "position": 12,
                        "name": "صباغ ديكورات بالكويت",
                        "item": "https://sabaghinkuwait.com/dikurat-sabagh-lilkuayt"
                      },
                      {
                        "@type": "ListItem",
                        "position": 13,
                        "name": "صباغ منازل بالكويت",
                        "item": "https://sabaghinkuwait.com/manazil-sabaagh-bi-alkuayt"
                      },
                      {
                        "@type": "ListItem",
                        "position": 14,
                        "name": "صباغ شقق بالكويت",
                        "item": "https://sabaghinkuwait.com/shaqaq-sabaagh-bi-alkuayt"
                      },
                      {
                        "@type": "ListItem",
                        "position": 15,
                        "name": "صباغ غرف اطفال",
                        "item": "https://sabaghinkuwait.com/sabaagh-buyut-aitfal"
                      },
                      {
                        "@type": "ListItem",
                        "position": 16,
                        "name": "صباغ رسومات اطفال",
                        "item": "https://sabaghinkuwait.com/sabaagh-rusumat-aitfal"
                      },
                      {
                        "@type": "ListItem",
                        "position": 17,
                        "name": "صباغ رخيص بالكويت",
                        "item": "https://sabaghinkuwait.com/sabaagh-rakhisat-bi-alkuayt"
                      },
                      {
                        "@type": "ListItem",
                        "position": 18,
                        "name": "دهانات الكويت",
                        "item": "https://sabaghinkuwait.com/dihanat-alkuayt"
                      },
                      {
                        "@type": "ListItem",
                        "position": 19,
                        "name": "تركيب ورق جدران",
                        "item": "https://sabaghinkuwait.com/tarkib-waraq-judran"
                      },
                      {
                        "@type": "ListItem",
                        "position": 20,
                        "name": "اصباغ ابواب خشب",
                        "item": "https://sabaghinkuwait.com/asbagh-abwab-khashabia"
                      },
                      {
                        "@type": "ListItem",
                        "position": 21,
                        "name": "معلم جبس بورد",
                        "item": "https://sabaghinkuwait.com/muealim-jabs-burd"
                      },
                      {
                        "@type": "ListItem",
                        "position": 22,
                        "name": "صباغ السالمية",
                        "item": "https://sabaghinkuwait.com/sabaagh-alsaalimia"
                      },
                      {
                        "@type": "ListItem",
                        "position": 23,
                        "name": "صباغ صباح السالم",
                        "item": "https://sabaghinkuwait.com/sabaagh-sabah-alsaalim"
                      },
                      {
                        "@type": "ListItem",
                        "position": 24,
                        "name": "صباغ حولي",
                        "item": "https://sabaghinkuwait.com/sabaagh-hawalli"
                      },
                      {
                        "@type": "ListItem",
                        "position": 25,
                        "name": "صباغ جابر الاحمد",
                        "item": "https://sabaghinkuwait.com/sabaagh-jaber-alahmad"
                      },
                      {
                        "@type": "ListItem",
                        "position": 26,
                        "name": "صباغ خيطان",
                        "item": "https://sabaghinkuwait.com/sabaagh-khaitan"
                      },
                      {
                        "@type": "ListItem",
                        "position": 27,
                        "name": "صباغ الفروانية",
                        "item": "https://sabaghinkuwait.com/sabaagh-alfarwaniyah"
                      },
                      {
                        "@type": "ListItem",
                        "position": 28,
                        "name": "صباغ الجابرية",
                        "item": "https://sabaghinkuwait.com/sabaagh-aljabriya"
                      },
                      {
                        "@type": "ListItem",
                        "position": 29,
                        "name": "صباغ الشعب",
                        "item": "https://sabaghinkuwait.com/sabaagh-alshaab"
                      },
                      {
                        "@type": "ListItem",
                        "position": 30,
                        "name": "صباغ بيان",
                        "item": "https://sabaghinkuwait.com/sabaagh-bayan"
                      },
                      {
                        "@type": "ListItem",
                        "position": 31,
                        "name": "صباغ جنوب السرة",
                        "item": "https://sabaghinkuwait.com/sabaagh-janoub-alsura"
                      },
                      {
                        "@type": "ListItem",
                        "position": 32,
                        "name": "صباغ مبارك",
                        "item": "https://sabaghinkuwait.com/sabaagh-mubarak"
                      },
                      {
                        "@type": "ListItem",
                        "position": 33,
                        "name": "صباغ مشرف",
                        "item": "https://sabaghinkuwait.com/sabaagh-mishref"
                      },
                      {
                        "@type": "ListItem",
                        "position": 34,
                        "name": "صباغ الزهراء",
                        "item": "https://sabaghinkuwait.com/sabaagh-alzahraa"
                      },
                      {
                        "@type": "ListItem",
                        "position": 35,
                        "name": "صباغ الصديق",
                        "item": "https://sabaghinkuwait.com/sabaagh-alsiddiq"
                      },
                      {
                        "@type": "ListItem",
                        "position": 36,
                        "name": "صباغ حطين",
                        "item": "https://sabaghinkuwait.com/sabaagh-hateen"
                      },
                      {
                        "@type": "ListItem",
                        "position": 37,
                        "name": "صباغ سلوي",
                        "item": "https://sabaghinkuwait.com/sabaagh-salwa"
                      },
                      {
                        "@type": "ListItem",
                        "position": 38,
                        "name": "صباغ الشهداء",
                        "item": "https://sabaghinkuwait.com/sabaagh-alshuhadaa"
                      },
                      {
                        "@type": "ListItem",
                        "position": 39,
                        "name": "صباغ السلام",
                        "item": "https://sabaghinkuwait.com/sabaagh-al-salam"
                      },
                      {
                        "@type": "ListItem",
                        "position": 40,
                        "name": "صباغ المسلية",
                        "item": "https://sabaghinkuwait.com/sabaagh-al-masila"
                      },
                      {
                        "@type": "ListItem",
                        "position": 41,
                        "name": "صباغ المسايل",
                        "item": "https://sabaghinkuwait.com/sabaagh-almasayel"
                      },
                      {
                        "@type": "ListItem",
                        "position": 42,
                        "name": "صباغ ابو الحصاني",
                        "item": "https://sabaghinkuwait.com/sabaagh-abu-alhasania"
                      },
                      {
                        "@type": "ListItem",
                        "position": 43,
                        "name": "صباغ صبحان",
                        "item": "https://sabaghinkuwait.com/sabaagh-subhan"
                      },
                      {
                        "@type": "ListItem",
                        "position": 44,
                        "name": "صباغ ابو فطيرة",
                        "item": "https://sabaghinkuwait.com/sabaagh-abu-ftaira"
                      },
                      {
                        "@type": "ListItem",
                        "position": 45,
                        "name": "صباغ الفينطيس",
                        "item": "https://sabaghinkuwait.com/sabaagh-al-fintas"
                      },
                      {
                        "@type": "ListItem",
                        "position": 46,
                        "name": "صباغ مبارك الكبير",
                        "item": "https://sabaghinkuwait.com/sabaagh-mubarak-al-kabeer"
                      },
                      {
                        "@type": "ListItem",
                        "position": 47,
                        "name": "صباغ العقيلة",
                        "item": "https://sabaghinkuwait.com/sabaagh-alaqeela"
                      },
                      {
                        "@type": "ListItem",
                        "position": 48,
                        "name": "صباغ الفنطاس",
                        "item": "https://sabaghinkuwait.com/sabaagh-alfntas"
                      },
                      {
                        "@type": "ListItem",
                        "position": 49,
                        "name": "صباغ الرقة",
                        "item": "https://sabaghinkuwait.com/sabaagh-alraqa"
                      },
                      {
                        "@type": "ListItem",
                        "position": 50,
                        "name": "صباغ ابو حليفة",
                        "item": "https://sabaghinkuwait.com/sabaagh-abu-halifa"
                      },
                      {
                        "@type": "ListItem",
                        "position": 51,
                        "name": "صباغ الصباحية",
                        "item": "https://sabaghinkuwait.com/sabaagh-alsabahiya"
                      },
                      {
                        "@type": "ListItem",
                        "position": 52,
                        "name": "صباغ المنقف",
                        "item": "https://sabaghinkuwait.com/sabaagh-almanqaf"
                      },
                      {
                        "@type": "ListItem",
                        "position": 53,
                        "name": "صباغ المهبولة",
                        "item": "https://sabaghinkuwait.com/sabaagh-almahboula"
                      },
                      {
                        "@type": "ListItem",
                        "position": 54,
                        "name": "صباغ الاحمدي",
                        "item": "https://sabaghinkuwait.com/sabaagh-al-ahmadi"
                      },
                      {
                        "@type": "ListItem",
                        "position": 55,
                        "name": "صباغ الخيران",
                        "item": "https://sabaghinkuwait.com/sabaagh-al-khiran"
                      },
                      {
                        "@type": "ListItem",
                        "position": 56,
                        "name": "صباغ الفحيحيل",
                        "item": "https://sabaghinkuwait.com/sabaagh-alfhahil"
                      },
                      {
                        "@type": "ListItem",
                        "position": 57,
                        "name": "صباغ الوفرة",
                        "item": "https://sabaghinkuwait.com/sabaagh-alwafra"
                      },
                      {
                        "@type": "ListItem",
                        "position": 58,
                        "name": "صباغ جابر العلي",
                        "item": "https://sabaghinkuwait.com/sabaagh-jaber-alali"
                      },
                      {
                        "@type": "ListItem",
                        "position": 59,
                        "name": "صباغ فهد الاحمد",
                        "item": "https://sabaghinkuwait.com/sabaagh-fahad-alahmad"
                      },
                      {
                        "@type": "ListItem",
                        "position": 60,
                        "name": "صباغ الدعية",
                        "item": "https://sabaghinkuwait.com/sabaagh-aldaiya"
                      },
                      {
                        "@type": "ListItem",
                        "position": 61,
                        "name": "صباغ الدسمة",
                        "item": "https://sabaghinkuwait.com/sabaagh-aldasma"
                      },
                      {
                        "@type": "ListItem",
                        "position": 62,
                        "name": "صباغ الدوحة",
                        "item": "https://sabaghinkuwait.com/sabaagh-aldohah"
                      },
                      {
                        "@type": "ListItem",
                        "position": 63,
                        "name": "صباغ الخالدية",
                        "item": "https://sabaghinkuwait.com/sabaagh-alkhaldiya"
                      },
                      {
                        "@type": "ListItem",
                        "position": 64,
                        "name": "صباغ الروضة",
                        "item": "https://sabaghinkuwait.com/sabaagh-alrawdah"
                      },
                      {
                        "@type": "ListItem",
                        "position": 65,
                        "name": "صباغ الري",
                        "item": "https://sabaghinkuwait.com/sabaagh-alrai"
                      },
                      {
                        "@type": "ListItem",
                        "position": 66,
                        "name": "صباغ الشويخ",
                        "item": "https://sabaghinkuwait.com/sabaagh-alshuwaykh"
                      },
                      {
                        "@type": "ListItem",
                        "position": 67,
                        "name": "صباغ الشرق",
                        "item": "https://sabaghinkuwait.com/sabaagh-asharq"
                      },
                      {
                        "@type": "ListItem",
                        "position": 68,
                        "name": "صباغ الشامية",
                        "item": "https://sabaghinkuwait.com/sabaagh-alshamiya"
                      },
                      {
                        "@type": "ListItem",
                        "position": 69,
                        "name": "صباغ السرة",
                        "item": "https://sabaghinkuwait.com/sabaagh-alsurra"
                      },
                      {
                        "@type": "ListItem",
                        "position": 70,
                        "name": "صباغ القادسية",
                        "item": "https://sabaghinkuwait.com/sabaagh-alqadesiya"
                      },
                      {
                        "@type": "ListItem",
                        "position": 71,
                        "name": "صباغ القروان",
                        "item": "https://sabaghinkuwait.com/sabaagh-alqurawan"
                      },
                      {
                        "@type": "ListItem",
                        "position": 72,
                        "name": "صباغ الفيحاء",
                        "item": "https://sabaghinkuwait.com/sabaagh-alfaihaa"
                      },
                      {
                        "@type": "ListItem",
                        "position": 73,
                        "name": "صباغ العديلية",
                        "item": "https://sabaghinkuwait.com/sabaagh-aladiliya"
                      },
                      {
                        "@type": "ListItem",
                        "position": 74,
                        "name": "صباغ الصليبخات",
                        "item": "https://sabaghinkuwait.com/sabaagh-alsulaybikhat"
                      },
                      {
                        "@type": "ListItem",
                        "position": 75,
                        "name": "صباغ كيفان",
                        "item": "https://sabaghinkuwait.com/sabaagh-kaifan"
                      },
                      {
                        "@type": "ListItem",
                        "position": 76,
                        "name": "صباغ قرطبة",
                        "item": "https://sabaghinkuwait.com/sabaagh-qurtoba"
                      },
                      {
                        "@type": "ListItem",
                        "position": 77,
                        "name": "صباغ غرناطة",
                        "item": "https://sabaghinkuwait.com/sabaagh-ghranata"
                      },
                      {
                        "@type": "ListItem",
                        "position": 78,
                        "name": "صباغ ضاحية عبدالله السالم",
                        "item": "https://sabaghinkuwait.com/sabaagh-abdullah-al-salim"
                      },
                      {
                        "@type": "ListItem",
                        "position": 79,
                        "name": "صباغ دسمان",
                        "item": "https://sabaghinkuwait.com/sabaagh-dasman"
                      },
                      {
                        "@type": "ListItem",
                        "position": 80,
                        "name": "صباغ بنيد القار",
                        "item": "https://sabaghinkuwait.com/sabaagh-bneid-alqar"
                      },
                      {
                        "@type": "ListItem",
                        "position": 81,
                        "name": "صباغ النهضة",
                        "item": "https://sabaghinkuwait.com/sabaagh-alnahda"
                      },
                      {
                        "@type": "ListItem",
                        "position": 82,
                        "name": "صباغ النزهة",
                        "item": "https://sabaghinkuwait.com/sabaagh-alnuzha"
                      },
                      {
                        "@type": "ListItem",
                        "position": 83,
                        "name": "صباغ المنصورية",
                        "item": "https://sabaghinkuwait.com/sabaagh-almansouriya"
                      },
                      {
                        "@type": "ListItem",
                        "position": 84,
                        "name": "صباغ المنطقة العاشرة",
                        "item": "https://sabaghinkuwait.com/sabaagh-mantiqa-al-ashira"
                      },
                      {
                        "@type": "ListItem",
                        "position": 85,
                        "name": "صباغ الاندلس",
                        "item": "https://sabaghinkuwait.com/sabaagh-alandalus"
                      },
                      {
                        "@type": "ListItem",
                        "position": 86,
                        "name": "صباغ القرين",
                        "item": "https://sabaghinkuwait.com/sabaagh-alqrean"
                      },
                      {
                        "@type": "ListItem",
                        "position": 87,
                        "name": "صباغ القصور",
                        "item": "https://sabaghinkuwait.com/sabaagh-alkswor"
                      },
                      {
                        "@type": "ListItem",
                        "position": 88,
                        "name": "صباغ العدان",
                        "item": "https://sabaghinkuwait.com/sabaagh-aladaan"
                      },
                      {
                        "@type": "ListItem",
                        "position": 88,
                        "name": "صباع سعد العبدالله",
                        "item": "https://sabaghinkuwait.com/sabaagh-saad-alabdullah"
                      },
                      {
                        "@type": "ListItem",
                        "position": 89,
                        "name": "صباغ الجهراء",
                        "item": "https://sabaghinkuwait.com/sabaagh-aljahraa"
                      },
                      {
                        "@type": "ListItem",
                        "position": 90,
                        "name": "صباغ عبدالله مبارك",
                        "item": "https://sabaghinkuwait.com/sabaagh-abdullah-mubarak"
                      },
                      {
                        "@type": "ListItem",
                        "position": 91,
                        "name": "صباغ غرب عبدالله",
                        "item": "https://sabaghinkuwait.com/sabaagh-gharb-abdullah"
                      },
                      {
                        "@type": "ListItem",
                        "position": 92,
                        "name": "صباغ جنوب عبدالله",
                        "item": "https://sabaghinkuwait.com/sabaagh-janoub-abdullah"
                      },
                      {
                        "@type": "ListItem",
                        "position": 93,
                        "name": "صباغ العارضية",
                        "item": "https://sabaghinkuwait.com/sabaagh-alaardiya"
                      },
                      {
                        "@type": "ListItem",
                        "position": 94,
                        "name": "صباغ الفردوس",
                        "item": "https://sabaghinkuwait.com/sabaagh-alfardus"
                      },
                      {
                        "@type": "ListItem",
                        "position": 95,
                        "name": "صباغ صباح الناصر",
                        "item": "https://sabaghinkuwait.com/sabaagh-subah-alanasir"
                      },
                      {
                        "@type": "ListItem",
                        "position": 96,
                        "name": "صباغ الرومانسية",
                        "item": "https://sabaghinkuwait.com/sabaagh-alromanisya"
                      },
                      {
                        "@type": "ListItem",
                        "position": 96,
                        "name": "صباغين الكويت",
                        "item": "https://sabaghinkuwait.com/sabaagheen-alkuayt"
                      },
                      {
                        "@type": "ListItem",
                        "position": 96,
                        "name": "معلم تركيب ورق جدران",
                        "item": "https://sabaghinkuwait.com/muealim-tarkib-waraq-judran"
                      },
                      {
                        "@type": "ListItem",
                        "position": 96,
                        "name": "معلم تركيب سيراميك",
                        "item": "https://sabaghinkuwait.com/muealim-tarkib-seramik"
                      },
                    ]
                  },
                  {
                    "@type": "WebSite",
                    "@id": "https://sabaghinkuwait.com/#website",
                    "url": "https://sabaghinkuwait.com/",
                    "name": "صباغ الكويت",
                    "description": "صباغ الكويت 50303335 تركيب ورق جدران اصباغ الكوت صباغ شاطر ورخيص",
                    "potentialAction": [
                      {
                        "@type": "SearchAction",
                        "target": {
                          "@type": "EntryPoint",
                          "urlTemplate": "https://sabaghinkuwait.com/{search_term_string}"
                        },
                        "query-input": "required name=search_term_string"
                      }
                    ]
                    , "inLanguage": "ar"
                  }
                ]
              },
            )
          }}
        />


      </head>
      <body className={cairo.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PKTVLMGN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ThemeProv>
          <SocialIcons />
          {children}
        </ThemeProv>
      </body>
    </html>
  );
}
