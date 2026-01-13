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
        <div className="w-full relative">
            <nav className="w-full py-4 px-6 flex justify-center items-center shadow-sm bg-[#4a2026]">
                <div className="font-playfair text-2xl font-semibold text-gray-100 tracking-wider">
                    D & S
                </div>
            </nav>

            <div className={`py-10 px-4 flex flex-col items-center justify-center bg-white text-center transition-all ${showSecurity ? 'blur-sm brightness-50' : ''}`}>
                <h2 className="text-3xl font-playfair mb-6 text-gray-800">Wedding Location</h2>
                <p className="font-montserrat text-gray-600 mb-8 max-w-md">
                    We can't wait to see you there!
                    <br />
                    <strong>Venkatesh Mangal Karyalaya, Majalgaon</strong>
                </p>

                <div className="w-full max-w-4xl h-64 md:h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        src={mapEmbedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

                <a
                    href={mapLocation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-pink-600 text-white font-montserrat px-8 py-3 rounded-full text-lg shadow-lg hover:bg-pink-700 transition-colors transform hover:scale-105"
                >
                    Open in Google Maps
                </a>

                <div className="mt-8">
                    <button
                        onClick={() => setShowSecurity(true)}
                        className="text-pink-600 underline font-montserrat hover:text-pink-800 transition-colors"
                    >
                        View Full Wedding Site
                    </button>
                </div>
            </div>

            {/* Security Modal */}
            {showSecurity && (
                <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full animate-fade-in relative">
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

                        <h3 className="text-2xl font-playfair text-gray-800 mb-4">Security Question</h3>
                        <p className="text-gray-600 mb-6 font-montserrat text-sm">
                            To view the full wedding site, please verify you know the couple.
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
                                    placeholder="Enter groom's first name"
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
