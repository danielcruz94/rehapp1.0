import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'
import { GoogleAnalytics } from '@next/third-parties/google'



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "rehApp",
  description: "Fisioterapia a tu alcance",
  other: {
    'color-scheme': 'dark', // Sugiere al navegador un esquema de color oscuro
    'theme-color': '#000000', // Define el color del tema para la barra de estado y otros elementos de UI
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <GoogleTagManager gtmId="GTM-KZRZS6JT" />
      <GoogleAnalytics gaId="G-PJVJ1C8N1Y" />

      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
