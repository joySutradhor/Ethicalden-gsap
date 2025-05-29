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
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
            {/* Navbar */}
            <header className="sticky top-0 z-30 bg-white shadow-sm">
                <Navbar backgroundColor="white" textColor="black" />
            </header>

            {/* Banner Section */}
            <section className="bg-[#111] text-white py-24 px-6 sm:px-12 md:px-20 lg:px-32 text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
                    Privacy Policy
                </h1>
                <p className="text-lg sm:text-xl max-w-3xl mx-auto">
                    At Ethical Den, we take your privacy seriously. Learn how we protect and manage your information below.
                </p>
                <a
                    href="#privacy-content"
                    className="mt-6 inline-block bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-100 transition"
                >
                    Read Policy
                </a>
            </section>

            {/* Privacy Content */}
            <main
                id="privacy-content"
                className="flex-grow max-w-4xl mx-auto px-6 py-16 sm:px-10 lg:px-12"
            >
                {privacySections.map(({ title, content }, i) => (
                    <section key={i} className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
                        {content.includes('-') ? (
                            <ul className="list-disc list-inside space-y-2 text-gray-800 whitespace-pre-line">
                                {content
                                    .split('\n')
                                    .filter((line) => line.trim().startsWith('-'))
                                    .map((line, idx) => (
                                        <li key={idx}>{line.replace(/^- /, '')}</li>
                                    ))}
                            </ul>
                        ) : (
                            <p className="text-gray-800 leading-relaxed">{content}</p>
                        )}
                    </section>
                ))}
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 text-center py-8">
                <p className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Ethical Den. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default PrivacyPolicyHome;
