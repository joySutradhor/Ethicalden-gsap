import ContactHome from '@/components/pages/contact/ContactHome';
import React from 'react';

export const metadata = {
  title: "Contact Us - Ethical Den",
  description: "Have questions or need help? Get in touch with the Ethical Den team for support and inquiries.",
  keywords: [
    "Contact Ethical Den",
    "Support",
    "Software Inquiry",
    "Get in Touch",
    "Customer Service",
  ],
  metadataBase: new URL("https://ethicalden-gsap.netlify.app"),
  openGraph: {
    title: "Contact Us - Ethical Den",
    description: "Have questions or need help? Get in touch with the Ethical Den team for support and inquiries.",
    url: "https://ethicalden-gsap.netlify.app/contact",
    siteName: "Ethical Den",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ethicalden-gsap.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ethical Den Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Ethical Den",
    description: "Reach out to Ethical Den for project inquiries, support, or collaborations.",
    creator: "@ethicalden",
    images: ["https://ethicalden-gsap.netlify.app/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};



const ContactPage = () => {
    return (
        <div>
            <ContactHome />
        </div>
    );
};

export default ContactPage;