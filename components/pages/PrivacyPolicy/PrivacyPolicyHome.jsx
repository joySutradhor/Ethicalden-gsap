import Navbar from '@/components/Shared/Navbar/Navbar';
import React from 'react';

const privacySections = [
    {
        title: 'Introduction',
        content:
            'We value your privacy and are committed to protecting your personal information. This privacy policy explains what information we collect, how we use it, and your rights.',
    },
    {
        title: 'Information We Collect',
        content: `We collect information to provide better services. This includes:
- Personal Data: Name, email address, contact details.
- Usage Data: How you interact with our website.
- Cookies: Small files stored on your device to improve experience.`,
    },
    {
        title: 'How We Use Your Information',
        content:
            'Your information helps us provide, maintain, and improve our services, communicate with you, and ensure security.',
    },
    {
        title: 'Data Security',
        content:
            'We implement strict security measures to protect your data from unauthorized access, alteration, or destruction.',
    },
    {
        title: 'Your Rights',
        content:
            'You have the right to access, update, or delete your personal data. Contact us anytime for privacy concerns.',
    },
    {
        title: 'Changes to This Policy',
        content:
            'We may update this privacy policy occasionally. We encourage you to review it periodically.',
    },
    {
        title: 'Contact Us',
        content:
            'For any questions regarding this policy, please contact our support team at support@example.com.',
    },
];

const PrivacyPolicyHome = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
            {/* Navbar */}
            <header className="sticky top-0 z-30 bg-white shadow-sm">
                <Navbar backgroundColor="white" textColor="black" />
            </header>

            {/* Banner Section */}
            <section className="relative bg-[#111] text-white py-24 px-6 sm:px-12 md:px-20 lg:px-32 flex flex-col justify-center items-center text-center">
                <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 max-w-4xl leading-tight">
                    Privacy Policy
                </h1>
                <p className="text-xl max-w-3xl mx-auto pb-5">
                    At Ethical Den, we take your privacy seriously. Read about how we protect and manage your information below.
                </p>
                <a
                    href="#privacy-content"
                    className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
                    aria-label="Scroll to privacy content"
                >
                    Read Policy
                </a>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-48 h-48 bg-white rounded-full opacity-10 blur-3xl pointer-events-none"></div>
            </section>

            {/* Privacy Content */}
            <main
                id="privacy-content"
                className="flex-grow max-w-7xl mx-auto px-6 py-16 sm:px-12 md:px-20 lg:px-32"
            >
                <h2 className="text-3xl font-bold mb-12 text-center text-black">
                    Our Privacy Practices
                </h2>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {privacySections.map(({ title, content }, i) => (
                        <section
                            key={i}
                            className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
                            aria-labelledby={`section-title-${i}`}
                        >
                            <h3
                                id={`section-title-${i}`}
                                className="text-xl font-semibold mb-4 text-black"
                            >
                                {title}
                            </h3>
                            {content.includes('-') ? (
                                <ul className="list-disc list-inside space-y-2 text-gray-700 whitespace-pre-line">
                                    {content
                                        .split('\n')
                                        .filter((line) => line.trim().startsWith('-'))
                                        .map((line, idx) => (
                                            <li key={idx}>{line.replace(/^- /, '')}</li>
                                        ))}
                                </ul>
                            ) : (
                                <p className="text-gray-700 leading-relaxed">{content}</p>
                            )}
                        </section>
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 text-center py-8 mt-16">
                <p className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Ethical Den. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default PrivacyPolicyHome;
