import ProductsHome from '@/components/pages/Products/ProductsHome';
import React from 'react';

export const metadata = {
  title: "Our Products - Ethical Den",
  description: "Discover powerful digital products and solutions crafted by Ethical Den for businesses and startups.",
  keywords: [
    "Ethical Den Products",
    "Digital Products",
    "SaaS Tools",
    "Business Software",
    "Tech Solutions",
  ],
  metadataBase: new URL("https://ethicalden-gsap.netlify.app"),
  openGraph: {
    title: "Our Products - Ethical Den",
    description: "Discover powerful digital products and solutions crafted by Ethical Den for businesses and startups.",
    url: "https://ethicalden-gsap.netlify.app/products",
    siteName: "Ethical Den",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ethicalden-gsap.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ethical Den Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Products - Ethical Den",
    description: "Explore premium digital solutions from Ethical Den tailored for business growth.",
    creator: "@ethicalden",
    images: ["https://ethicalden-gsap.netlify.app/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};



const ProductsPage = () => {
    return (
        <div>
            <ProductsHome />
        </div>
    );
};

export default ProductsPage;