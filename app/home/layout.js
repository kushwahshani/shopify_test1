// import localFont from "next/font/local";
// import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="shopify-api-key" content="fe56c0cf0d804e83ddbbce365e1c2353" />
        <script src="https://cdn.shopify.com/shopifycloud/app-bridge.js"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
