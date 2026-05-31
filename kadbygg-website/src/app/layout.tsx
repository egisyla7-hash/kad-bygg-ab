import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company } from "@/lib/site";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: "KAD Bygg AB – Bygg & renovering i Uppsala",
    template: "%s | KAD Bygg AB",
  },
  description:
    "KAD Bygg AB är din helhetsentreprenör i Uppsala för nybyggnation, tak, fasad, fönster, golv, kök och badrum. Förstklassigt hantverk med trygghet och precision.",
  keywords: [
    "byggfirma Uppsala",
    "renovering Uppsala",
    "takläggning Uppsala",
    "fasad Uppsala",
    "köksmontering",
    "snickare Uppsala",
    "KAD Bygg",
    "byggföretag Uppsala",
  ],
  authors: [{ name: company.legalName }],
  creator: company.legalName,
  publisher: company.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: company.url,
    siteName: company.legalName,
    title: "KAD Bygg AB – Bygg & renovering i Uppsala",
    description:
      "Helhetsentreprenör i Uppsala för nybyggnation, tak, fasad, fönster, golv, kök och badrum. Förstklassigt hantverk med trygghet och precision.",
    images: [
      {
        url: "/images/hero.jpeg",
        width: 1235,
        height: 1145,
        alt: "KAD Bygg AB – takläggning i Uppsala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KAD Bygg AB – Bygg & renovering i Uppsala",
    description:
      "Helhetsentreprenör i Uppsala för nybyggnation, tak, fasad, fönster, golv, kök och badrum.",
    images: ["/images/hero.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport = {
  themeColor: "#2d4a1e",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${company.url}/#organization`,
    name: company.legalName,
    description: company.tagline,
    url: company.url,
    telephone: `+46${company.phone.replace(/\D/g, "").replace(/^0/, "")}`,
    email: company.email,
    foundingDate: String(company.founded),
    vatID: company.orgNr,
    image: `${company.url}/images/hero.jpeg`,
    logo: `${company.url}/images/hero.jpeg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      postalCode: company.address.postalCode,
      addressLocality: company.address.city,
      addressCountry: company.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.geo.lat,
      longitude: company.geo.lng,
    },
    areaServed: company.serviceAreas.map((a) => ({
      "@type": "City",
      name: a,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
    sameAs: [company.social.linkedin],
  };

  return (
    <html lang="sv" className={`${display.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
