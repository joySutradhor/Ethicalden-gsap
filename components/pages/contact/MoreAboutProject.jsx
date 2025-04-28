import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

const MoreAboutProject = () => {
    const projectAboutRef = useRef(null);
    const budgetRef = useRef(null);
    const findUsRef = useRef(null);
    const [budget, setBudget] = useState('');
    const [findUs, setFindUs] = useState('');
    const [privacyPolicy, setPrivacyPolicy] = useState(false);

    const budgetOptions = [
        'Under $10,000',
        '$10,000 - $25,000',
        '$25,000 - $50,000',
        'Above $50,000'
    ];

    const findUsOptions = [
        'word of mouth',
        'Dribble',
        'Clutch',
        'I just googled it',
        'Linkdin',
        'other'
    ];

    const handleFocus = (e) => {
        const placeholder = e.target.previousElementSibling;
        if (placeholder) {
            gsap.to(placeholder, {
                y: -15,
                fontSize: '14px',
                color: 'white',
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    };

    const handleBlur = (e) => {
        const placeholder = e.target.previousElementSibling;
        if (placeholder && !e.target.value) {
            gsap.to(placeholder, {
                y: 0,
                fontSize: '20px',
                color: 'rgb(209 213 219)',
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    };

    useEffect(() => {
        if (budget && budgetRef.current) {
            const placeholder = budgetRef.current.previousElementSibling;
            gsap.to(placeholder, {
                y: -10,
                fontSize: '14px',
                color: 'white',
                duration: 0.3,
                ease: 'power2.out'
            });
        }
        if (findUs && findUsRef.current) {
            const placeholder = findUsRef.current.previousElementSibling;
            gsap.to(placeholder, {
                y: -10,
                fontSize: '14px',
                color: 'white',
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    }, [budget, findUs]);

    return (
        <div className="mt-24 px-5 md:px-10 lg:px-10 xl:max-w-screen-2xl xl:mx-auto p-6 bg-white rounded-lg">
            <div className="mb-6 lg:flex gap-20 lg:gap-15">
                <div className="flex-1/3">
                    <h2 className="text-4xl lg:text-5xl font-extrabold font-helvetica leading-[1]">More about your project.</h2>
                    <p className="mt-5 mb-5 lg:mb-0 text-xl text-gray-700 font-helvetica ">
                        Share as much details as you want and we'll take it from there.
                    </p>
                </div>

                <div className="space-y-8 flex-2/3 relative">
                    {/* Budget Field */}
                    <div className="relative font-helvetica">
                        <label
                            htmlFor="budget"
                            className={`absolute left-6 ${budget ? 'top-2 text-sm' : 'top-6 text-xl'} pointer-events-none text-gray-300 font-bold font-helvetica transition-all`}
                        >
                            What is your estimated budget?
                        </label>
                        <select
                            ref={budgetRef}
                            id="budget"
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                            className="mt-1 block w-full p-6 pt-8 bg-cyan-900 text-white text-xl font-bold font-helvetica appearance-none"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            required
                        >
                            <option value="" disabled hidden></option>
                            {budgetOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>

                        {/* Show Selected Budget Text */}
                        {budget && (
                            <div className="mt-3 text-cyan-900 text-lg font-semibold">
                                {budget}
                            </div>
                        )}
                    </div>

                    {/* Project About Field */}
                    <div className="relative font-helvetica">
                        <label
                            htmlFor="projectAbout"
                            className={`absolute left-6 ${projectAboutRef.current?.value ? 'top-2 text-sm' : 'top-6 text-xl'} pointer-events-none text-gray-300 font-bold font-helvetica transition-all`}
                        >
                            What is your project about?
                        </label>
                        <textarea
                            ref={projectAboutRef}
                            id="projectAbout"
                            className="mt-1 block w-full p-6 pt-8 pb-24 bg-cyan-900 text-white text-xl font-bold font-helvetica"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>

                    {/* Find Us Field */}
                    <div className="relative font-helvetica">
                        <label
                            htmlFor="findUs"
                            className={`absolute left-6 ${findUs ? 'top-2 text-sm' : 'top-6 text-xl'} pointer-events-none text-gray-300 font-bold font-helvetica transition-all`}
                        >
                            How did you find us?
                        </label>
                        <select
                            ref={findUsRef}
                            id="findUs"
                            value={findUs}
                            onChange={(e) => setFindUs(e.target.value)}
                            className="mt-1 block w-full p-6 pt-8 bg-cyan-900 text-white text-xl font-bold font-helvetica appearance-none"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            required
                        >
                            <option value="" disabled hidden></option>
                            {findUsOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>

                        {/* Show Selected FindUs Text */}
                        {findUs && (
                            <div className="mt-3 text-cyan-900 text-lg font-semibold">
                                {findUs}
                            </div>
                        )}
                    </div>

                    {/* Privacy Policy */}
                    <div className="flex items-center mt-6 font-helvetica">
                        <input
                            type="checkbox"
                            id="privacyPolicy"
                            checked={privacyPolicy}
                            onChange={(e) => setPrivacyPolicy(e.target.checked)}
                            className="h-6 w-6 text-cyan-900 rounded focus:ring-cyan-900"
                        />
                        <label htmlFor="privacyPolicy" className="ml-3 block text-xl text-gray-700 font-bold">
                            I have read and I accept the Privacy Policy
                        </label>
                    </div>

                    {/* Send Inquiry Button */}
                    <button
                        type="button font-helvetica"
                        className="mt-8 w-full bg-cyan-900 text-white text-xl font-bold py-6 px-6 rounded hover:bg-cyan-800 transition-colors"
                    >
                        Send Inquiry
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MoreAboutProject;
