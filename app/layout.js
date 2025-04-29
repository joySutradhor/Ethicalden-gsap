import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/hooks/smooth-scroll";

// import DelayedContent from "@/components/DelayedContent/DelayedContent";
// import PageTransitionVideo from "@/components/TransitionVideo/TransitionVideo";
// import { TransitionProvider } from "@/components/Context/TransitionContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ethical Den",
  description: "Best Software Company in India",
};

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         <SmoothScroll />
//         <TransitionProvider>
//           <PageTransitionVideo />
//           <DelayedContent>{children}</DelayedContent>
//         </TransitionProvider>
//       </body>
//     </html>
//   );
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
