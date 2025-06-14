'use client'

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const servicesList = [
    'Web Development',
    'UI/UX Design',
    'Branding',
    'SEO Optimization',
    'Maintenance & Support',
    'Others'
];

const MakeARequestArea = () => {
    const [step, setStep] = useState('initial')
    const [showAdditionalFields, setShowAdditionalFields] = useState(false);
    ;
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        service: ''
    });
    const [detailsForm, setDetailsForm] = useState({
        description: '',
        technicalRequirements: '',
        timeline: '',
        assets: null,
        drawing: null
    });
    const [isDrawing, setIsDrawing] = useState(false);
    const canvasRef = useRef(null);
    const [color, setColor] = useState('#ffffff');
    const [brushSize, setBrushSize] = useState(5);

    // Initialize canvas
    useEffect(() => {
        if (step === 'details' && canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            // Set canvas size
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;

            // Fill with dark background
            ctx.fillStyle = '#2a2a2a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
    }, [step]);

    const startDrawing = (e) => {
        setIsDrawing(true);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.strokeStyle = color;
        ctx.lineWidth = brushSize;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(
            e.nativeEvent.offsetX || e.touches[0].pageX - canvas.offsetLeft,
            e.nativeEvent.offsetY || e.touches[0].pageY - canvas.offsetTop
        );
    };

    const draw = (e) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.lineTo(
            e.nativeEvent.offsetX || e.touches[0].pageX - canvas.offsetLeft,
            e.nativeEvent.offsetY || e.touches[0].pageY - canvas.offsetTop
        );
        ctx.stroke();
    };

    const stopDrawing = () => {
        setIsDrawing(false);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.closePath();

        // Save drawing to state
        setDetailsForm(prev => ({
            ...prev,
            drawing: canvas.toDataURL()
        }));
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#2a2a2a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        setDetailsForm(prev => ({ ...prev, drawing: null }));
    };

    const handleInitialSubmit = (e) => {
        e.preventDefault();
        setStep('pending');
    };

    const handleDetailsSubmit = (e) => {
        e.preventDefault();
        // send all data to backend here
        console.log({
            ...formData,
            ...detailsForm
        });
        alert('Request submitted successfully! We will contact you soon.');
        setStep('initial');
        setFormData({ fullName: '', email: '', service: '' });
        setDetailsForm({ description: '', assets: null, drawing: null });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1e1e1e] text-white flex flex-col items-center justify-center px-4 py-8">
            <AnimatePresence>
                {step === 'initial' && (
                    <motion.form
                        key="initial"
                        onSubmit={handleInitialSubmit}
                        className="form-section bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#a8ff57]/80 p-8 rounded-2xl shadow-2xl shadow-[#a8ff57]/40 w-full max-w-xl space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="text-center mb-6">
                            <h2 className="text-4xl font-bold bg-clip-text text-[#09e5e5] ">
                                Start Your Project
                            </h2>
                            <p className="text-gray-400 mt-2">Tell us about your needs and we'll get back to you</p>
                        </div>

                        <div className="space-y-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Full Name "
                                    className="peer w-full p-4 rounded-lg bg-[#2a2a2a]/70 border border-gray-700 focus:border-[#a8ff57] focus:ring-1 focus:ring-[#a8ff57]/30 text-white transition-all outline-none"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    required
                                />

                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Email Address "
                                    className="peer w-full p-4 rounded-lg bg-[#2a2a2a]/70 border border-gray-700 focus:border-[#a8ff57] focus:ring-1 focus:ring-[#a8ff57]/30 text-white transition-all outline-none"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="relative">
                                <select
                                    className="peer w-full p-4 rounded-lg bg-[#2a2a2a]/70 border border-gray-700 focus:border-[#a8ff57] focus:ring-1 focus:ring-[#09e5e5]/70 text-white appearance-none outline-none"
                                    value={formData.service}
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    required
                                >
                                    <option value="" disabled hidden>
                                        Select a Service
                                    </option>
                                    {servicesList.map((service, i) => (
                                        <option key={i} value={service}>
                                            {service}
                                        </option>
                                    ))}
                                </select>

                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>

                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#09e5e5] to-[#a8ff57] hover:from-[#a8ff57]/90 hover:to-[#09e5e5]/90 transition-all font-bold text-black shadow-lg "
                        >
                            Submit Request
                        </button>

                        <p className="text-center text-gray-500 text-sm mt-4">
                            We respect your privacy. Your information will never be shared.
                        </p>
                    </motion.form>
                )}

                {step === 'pending' && (
                    <motion.div
                        key="pending"
                        className="form-section bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#a8ff57]/80 p-8 rounded-2xl shadow-2xl shadow-[#a8ff57]/70 w-full max-w-xl space-y-6 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-6">
                            <div className="w-20 h-20 bg-[#a8ff57]/10 border-2 border-[#a8ff57]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#a8ff57]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold text-[#a8ff57]">Request Received</h2>
                            <p className="text-gray-400 mt-2">We're reviewing your project details</p>
                        </div>

                        <div className="bg-[#2a2a2a]/50 rounded-xl p-6 space-y-3 text-left">
                            <div className="flex justify-between border-b border-gray-700 pb-2">
                                <span className="text-gray-400">Name:</span>
                                <span className="font-medium">{formData.fullName}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-700 pb-2">
                                <span className="text-gray-400">Email:</span>
                                <span className="font-medium">{formData.email}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Service:</span>
                                <span className="font-medium text-[#a8ff57]">{formData.service}</span>
                            </div>
                        </div>

                        <div className="flex gap-4 justify-center pt-4">
                            <button
                                className="py-3 px-6 rounded-xl bg-gradient-to-r from-[#09e5e5] to-[#a8ff57] hover:from-[#a8ff57]/90 hover:to-[#09e5e5]/90 transition-all font-bold text-black shadow-lg shadow-[#a8ff57]/20"
                                onClick={() => setStep('details')}
                            >
                                Continue to Details
                            </button>
                            <button
                                className="py-3 px-6 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 transition-all font-bold text-white shadow-lg shadow-red-500/20"
                                onClick={() => setStep('initial')}
                            >
                                Edit Request
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 'details' && (
                    <motion.form
                        key="details"
                        onSubmit={handleDetailsSubmit}
                        className="form-section bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#a8ff57]/90 p-8 rounded-2xl shadow-2xl shadow-[#a8ff57]/70 w-full max-w-3xl space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="text-center mb-6">
                            <h2 className="text-3xl font-bold bg-clip-text text-[#09e5e5]">
                                {formData.service} Details
                            </h2>
                            <p className="text-gray-400 mt-2">Add more information to help us understand your project</p>
                        </div>

                        <div className="space-y-4">
                            <div className="relative">
                                <textarea
                                    rows="5"
                                    placeholder="Project Description"
                                    className="peer w-full p-4 rounded-lg bg-[#2a2a2a]/70 border border-gray-700 focus:border-[#09e5e5] focus:ring-1 focus:ring-[#09e5e5]/30 text-white transition-all outline-none"
                                    value={detailsForm.description}
                                    onChange={(e) => setDetailsForm({ ...detailsForm, description: e.target.value })}
                                    required
                                />
                            </div>

                            {/* Add More Details Button */}
                            <button
                                type="button"
                                onClick={() => setShowAdditionalFields(!showAdditionalFields)}
                                className="flex items-center gap-2 text-[#a8ff57] hover:text-[#09e5e5] transition-colors text-sm font-medium"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                {showAdditionalFields ? 'Hide additional details' : 'Add more details'}
                            </button>

                            {/* Additional Fields Section */}
                            {showAdditionalFields && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-4 overflow-hidden"
                                >
                                    <div className="relative">
                                        <textarea
                                            rows="3"
                                            placeholder="Technical Requirements"
                                            className="peer w-full p-4 rounded-lg bg-[#2a2a2a]/70 border border-gray-700 focus:border-[#09e5e5] focus:ring-1 focus:ring-[#09e5e5]/30 text-white transition-all outline-none"
                                            value={detailsForm.technicalRequirements || ''}
                                            onChange={(e) => setDetailsForm({ ...detailsForm, technicalRequirements: e.target.value })}
                                        />
                                    </div>
                                    <div className="relative">
                                        <textarea
                                            rows="3"
                                            placeholder="Timeline Expectations"
                                            className="peer w-full p-4 rounded-lg bg-[#2a2a2a]/70 border border-gray-700 focus:border-[#09e5e5] focus:ring-1 focus:ring-[#09e5e5]/30 text-white transition-all outline-none"
                                            value={detailsForm.timeline || ''}
                                            onChange={(e) => setDetailsForm({ ...detailsForm, timeline: e.target.value })}
                                        />
                                    </div>
                                </motion.div>
                            )}

                            <div className="relative">
                                <input
                                    type="file"
                                    multiple
                                    onChange={(e) => setDetailsForm({ ...detailsForm, assets: e.target.files })}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    id="file-upload"
                                />
                                <label
                                    htmlFor="file-upload"
                                    className="block w-full p-4 rounded-lg bg-[#2a2a2a]/70 border border-gray-700 hover:border-[#09e5e5] text-white transition-all cursor-pointer"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-400">
                                            {detailsForm.assets
                                                ? `${detailsForm.assets.length} file(s) selected`
                                                : 'Upload project assets (images, documents)'}
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#09e5e5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                        </svg>
                                    </div>
                                </label>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-lg font-medium text-gray-300">Whiteboard Sketch</h3>
                                <div className="bg-[#2a2a2a] rounded-xl p-4">
                                    <div className="flex gap-3 mb-3">
                                        <div className="flex gap-1">
                                            {['#ffffff', '#ff0000', '#00ff00', '#0000ff', '#ffff00'].map((c) => (
                                                <button
                                                    key={c}
                                                    className={`w-6 h-6 rounded-full ${color === c ? 'ring-2 ring-offset-2 ring-offset-[#2a2a2a] ring-white' : ''}`}
                                                    style={{ backgroundColor: c }}
                                                    onClick={() => setColor(c)}
                                                />
                                            ))}
                                        </div>
                                        <select
                                            className="bg-[#1a1a1a] text-white rounded px-2 py-1 text-sm"
                                            value={brushSize}
                                            onChange={(e) => setBrushSize(parseInt(e.target.value))}
                                        >
                                            {[1, 3, 5, 8, 12].map((size) => (
                                                <option key={size} value={size}>{size}px</option>
                                            ))}
                                        </select>
                                        <button
                                            type="button"
                                            className="ml-auto text-sm bg-red-500/20 text-red-400 px-3 py-1 rounded"
                                            onClick={clearCanvas}
                                        >
                                            Clear
                                        </button>
                                    </div>
                                    <canvas
                                        ref={canvasRef}
                                        onMouseDown={startDrawing}
                                        onMouseMove={draw}
                                        onMouseUp={stopDrawing}
                                        onMouseLeave={stopDrawing}
                                        onTouchStart={startDrawing}
                                        onTouchMove={draw}
                                        onTouchEnd={stopDrawing}
                                        className="w-full h-64 rounded-lg border border-gray-700 touch-none cursor-crosshair"
                                    />
                                </div>
                                <p className="text-xs text-gray-500">Draw your ideas or upload reference images</p>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#09e5e5] to-[#a8ff57] hover:from-[#a8ff57]/90 hover:to-[#09e5e5]/90 transition-all font-bold text-black shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
                        >
                            Submit Final Details
                        </button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MakeARequestArea;