import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
    const mapLocation = "https://maps.app.goo.gl/NQssFQf4eNBCKpK88";
    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.459637652443!2d76.17942287568988!3d19.17511658205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdab1da0ad94b95%3A0x194ee811537b894b!2sVenkatesh%20Mangal%20Karyalaya%20and%20Lawns!5e0!3m2!1sen!2sin!4v1768290144491!5m2!1sen!2sin";

    const navigate = useNavigate();
    const [showSecurity, setShowSecurity] = useState(false);
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState('');

    const handleSecurityCheck = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple security check - case insensitive
        if (answer.trim().toLowerCase() === 'supriyafoundherdeepak') {
            navigate('/ourstory');
        } else {
            setError('Incorrect answer. Please try again.');
        }
    };

    return (
        <div className="w-full h-screen flex flex-col overflow-hidden relative bg-white">
            <nav className="w-full py-3 px-6 flex justify-center items-center shadow-sm bg-[#4a2026] shrink-0 z-20 h-[60px]">
                <div className="font-playfair text-xl font-semibold text-gray-100 tracking-wider">
                    Deepak & Supriya
                </div>
            </nav>

            <div className="flex-1 flex flex-col md:flex-row w-full overflow-hidden">
                <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 relative transition-all">
                    <div className="text-center mb-2 md:mb-4">
                        <h2 className="text-2xl md:text-3xl font-playfair mb-1 md:mb-2 text-gray-800">Wedding Location</h2>
                        <p className="font-montserrat text-gray-600 text-xs md:text-sm max-w-sm mx-auto">
                            <strong>Venkatesh Mangal Karyalaya, Majalgaon</strong>
                        </p>
                    </div>

                    <div className="w-full max-w-2xl flex-1 min-h-0 rounded-lg overflow-hidden shadow-lg mb-4 border border-gray-100 relative">
                        <iframe
                            src={mapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0"
                        >
                        </iframe>
                    </div>

                    <a
                        href={mapLocation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-block bg-pink-600 text-white font-montserrat px-6 py-2 md:py-3 rounded-full text-sm md:text-base shadow-lg hover:bg-pink-700 transition-colors"
                    >
                        Open Maps
                    </a>
                </div>

                {/* Right/Bottom: Itinerary */}
                <div className="flex-1 bg-pink-50/50 flex flex-col justify-center p-4 md:p-8 overflow-y-auto">
                    <div className="w-full max-w-md mx-auto" data-aos="fade-left">
                        <h2 className="text-[#4a2026] font-playfair text-2xl md:text-4xl mb-6 md:mb-8 text-center italic">
                            Itinerary
                        </h2>

                        <div className="w-full">
                            {[
                                { time: '2nd Feb, 4:00 PM', event: 'Engagement' },
                                { time: '2nd Feb, 6:00 PM', event: 'Haldi' },
                                { time: '3rd Feb, 12:30 PM', event: 'Vidhi' },
                                { time: '3rd Feb, 6:22 PM', event: 'Varmala' },
                            ].map((item, index) => (
                                <div key={index} className="flex mb-4 md:mb-6 items-start last:mb-0">
                                    <span className="w-[90px] md:w-[100px] font-semibold text-gray-800 text-xs md:text-sm pt-1 text-right pr-4">{item.time}</span>
                                    <span className="flex-1 uppercase tracking-[1px] text-xs md:text-sm border-l-2 border-pink-700 pl-4 text-gray-700 py-1">
                                        {item.event}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Security Modal */}
            {showSecurity && (
                <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/60 backdrop-blur-sm">
                    <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8 max-w-md w-full animate-fade-in relative mx-4">
                        <button
                            onClick={() => {
                                setShowSecurity(false);
                                setError('');
                                setAnswer('');
                            }}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                        >
                            ✕
                        </button>

                        <h3 className="text-2xl font-playfair text-gray-800 mb-4">Security Check</h3>
                        <p className="text-gray-600 mb-6 font-montserrat text-sm">
                            Please verify you know the couple to view the site.
                        </p>

                        <form onSubmit={handleSecurityCheck} className="flex flex-col gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 font-montserrat">
                                    What is the hashtag for this wedding?
                                </label>
                                <input
                                    type="text"
                                    value={answer}
                                    onChange={(e) => {
                                        setAnswer(e.target.value);
                                        setError('');
                                    }}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                                    placeholder="Answer"
                                    autoFocus
                                />
                                {error && <p className="text-red-500 text-xs mt-2 font-montserrat">{error}</p>}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-pink-600 text-white font-montserrat py-3 rounded-md hover:bg-pink-700 transition-colors shadow-md disabled:opacity-50"
                                disabled={!answer.trim()}
                            >
                                Verify & Continue
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LandingPage;
