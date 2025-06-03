// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import SmoothScroll from "@/components/hooks/smooth-scroll";

// // import DelayedContent from "@/components/DelayedContent/DelayedContent";
// // import PageTransitionVideo from "@/components/TransitionVideo/TransitionVideo";
// // import { TransitionProvider } from "@/components/Context/TransitionContext";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Ethical Den",
//   description: "Best Software Company in India",
// };

// // export default function RootLayout({ children }) {
// //   return (
// //     <html lang="en">
// //       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
// //         <SmoothScroll />
// //         <TransitionProvider>
// //           <PageTransitionVideo />
// //           <DelayedContent>{children}</DelayedContent>
// //         </TransitionProvider>
// //       </body>
// //     </html>
// //   );
// // }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         <SmoothScroll />
//         {children}
//       </body>
//     </html>
//   );
// }


import { Geist, Geist_Mono } from "next/font/google";
import { Urbanist } from "next/font/google"; 
import "./globals.css";
import SmoothScroll from "@/components/hooks/smooth-scroll";
import CustomCursor from "@/components/CustomCursor/CustomCursor";

// Define the Geist and Geist_Mono fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define the Urbanist font
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-urbanist",
});

export const metadata = {
  title: "Ethical Den",
  description: "Best Software Company in India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-arp="">
      <body
      cz-shortcut-listen="true"
        className={`${geistSans.variable} ${geistMono.variable} ${urbanist.variable} antialiased`}
      >
        <CustomCursor />
        <SmoothScroll />
        
        {children}
      </body>
    </html>
  );
}
