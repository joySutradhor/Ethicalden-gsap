'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const SignInArea = () => {
    const [activeTab, setActiveTab] = useState('signin');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        service: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`${activeTab === 'signin' ? 'Sign In' : 'Sign Up'} Data`, formData);
        setFormData({
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            service: ''
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f0f] to-[#1e1e1e] text-white px-4 overflow-y-auto">
            <div className="w-full max-w-xl bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#a8ff57]/80 p-8 rounded-2xl shadow-2xl shadow-[#a8ff57]/40">

                {/* Tab Buttons (Styled Toggle) */}
                <div className="flex justify-center mb-8 bg-[#2a2a2a]/60 p-1 rounded-full w-fit mx-auto">
                    {['signin', 'signup'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`relative px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm sm:text-base
                ${activeTab === tab
                                    ? 'bg-gradient-to-r from-[#09e5e5] to-[#a8ff57] text-black shadow-md'
                                    : 'text-gray-300 hover:text-white'
                                }`}
                        >
                            {tab === 'signin' ? 'Sign In' : 'Sign Up'}
                        </button>
                    ))}
                </div>

                {/* Animated Form */}
                <AnimatePresence mode="wait">
                    <motion.form
                        key={activeTab}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-[#09e5e5]">
                                {activeTab === 'signin' ? 'Welcome Back' : 'Create Account'}
                            </h2>
                            <p className="text-sm text-gray-400 mt-1">
                                {activeTab === 'signin'
                                    ? 'Please sign in to continue.'
                                    : 'Join us and get started!'}
                            </p>
                        </div>

                        {/* Form Fields */}
                        {activeTab === 'signup' && (
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full p-4 rounded-lg bg-[#2a2a2a]/70 border border-gray-700 focus:border-[#a8ff57] focus:ring-1 focus:ring-[#a8ff57]/30 text-white outline-none"
                                value={formData.fullName}
                                onChange={(e) =>
                                    setFormData({ ...formData, fullName: e.target.value })
                                }
                                required
                            />
                        )}

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-4 rounded-lg bg-[#2a2a2a]/70 border border-gray-700 focus:border-[#a8ff57] focus:ring-1 focus:ring-[#a8ff57]/30 text-white outline-none"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                            required
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-4 rounded-lg bg-[#2a2a2a]/70 border border-gray-700 focus:border-[#a8ff57] focus:ring-1 focus:ring-[#a8ff57]/30 text-white outline-none"
                            value={formData.password}
                            onChange={(e) =>
                                setFormData({ ...formData, password: e.target.value })
                            }
                            required
                        />

                        {activeTab === 'signup' && (
                            <>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="w-full p-4 rounded-lg bg-[#2a2a2a]/70 border border-gray-700 focus:border-[#a8ff57] focus:ring-1 focus:ring-[#a8ff57]/30 text-white outline-none"
                                    value={formData.confirmPassword}
                                    onChange={(e) =>
                                        setFormData({ ...formData, confirmPassword: e.target.value })
                                    }
                                    required
                                />
                            </>
                        )}

                        <button
                            type="submit"
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#09e5e5] to-[#a8ff57] hover:from-[#a8ff57]/90 hover:to-[#09e5e5]/90 transition-all font-bold text-black shadow-lg "
                        >
                            {activeTab === 'signin' ? 'Sign In' : 'Sign Up'}
                        </button>
                    </motion.form>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default SignInArea;
