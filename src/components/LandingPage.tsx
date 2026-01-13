import React, { useState } from 'react';

const LandingPage: React.FC = () => {
    const mapLocation = "https://maps.app.goo.gl/NQssFQf4eNBCKpK88";
    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.459637652443!2d76.17942287568988!3d19.17511658205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdab1da0ad94b95%3A0x194ee811537b894b!2sVenkatesh%20Mangal%20Karyalaya%20and%20Lawns!5e0!3m2!1sen!2sin!4v1768290144491!5m2!1sen!2sin";

    const [showSecurity, setShowSecurity] = useState(false);
    const [activeTab, setActiveTab] = useState<'location' | 'itinerary' | 'accommodation'>('location');

    return (
        <div className="w-full h-screen flex flex-col overflow-hidden relative bg-white font-montserrat">
            {/* Top Navbar */}
            <nav className="w-full py-3 px-6 flex justify-between items-center shadow-md bg-[#4a2026] shrink-0 z-20 h-[60px]">
                <div className="font-playfair text-xl font-semibold text-gray-100 tracking-wider">
                    Deepak & Supriya
                </div>
                {/* <button onClick={() => setShowSecurity(true)}
                    className="text-gray-100 text-xs uppercase tracking-widest hover:text-pink-200 transition-colors border border-white/20 px-3 py-1 rounded-sm">
                    Enter Site
                </button> */}
            </nav>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col md:flex-row w-full overflow-hidden relative">

                {/* 1. Location Section (Desktop: Left Col, Mobile: Tab 1) */}
                <div className={`flex-1 flex-col items-center justify-center p-4 md:p-8 relative transition-all bg-white
                                ${activeTab === 'location' ? 'flex' : 'hidden md:flex'} border-r border-gray-100`}>
                    <div className="text-center mb-4">
                        <h2 className="text-2xl md:text-3xl font-playfair mb-2 text-gray-800">Wedding Location</h2>
                        <p className="text-gray-600 text-xs md:text-sm max-w-sm mx-auto">
                            <strong>Venkatesh Mangal Karyalaya, Majalgaon</strong>
                        </p>
                    </div>

                    <div className="w-full max-w-xl flex-1 min-h-0 rounded-lg overflow-hidden shadow-lg mb-6 border border-gray-100 relative bg-gray-50">
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
                        className="shrink-0 inline-block bg-pink-600 text-white font-montserrat px-8 py-3 rounded-full text-sm md:text-base shadow-lg hover:bg-pink-700 transition-transform transform hover:scale-105"
                    >
                        Open in Google Maps
                    </a>
                </div>

                {/* 2. Itinerary Section (Desktop: Center Col, Mobile: Tab 2) */}
                <div className={`flex-1 flex-col justify-center p-6 md:p-8 overflow-y-auto bg-pink-50/30
                                ${activeTab === 'itinerary' ? 'flex' : 'hidden md:flex'} border-r border-gray-100`}>
                    <div className="w-full max-w-md mx-auto h-full flex flex-col justify-center">
                        <h2 className="text-[#4a2026] font-playfair text-3xl md:text-4xl mb-8 md:mb-12 text-center italic">
                            Itinerary
                        </h2>

                        <div className="w-full space-y-6 md:space-y-8">
                            {[
                                { time: '2nd Feb, 4:00 PM', event: 'Engagement' },
                                { time: '2nd Feb, 6:00 PM', event: 'Haldi' },
                                { time: '3rd Feb, 12:30 PM', event: 'Vidhi' },
                                { time: '3rd Feb, 6:22 PM', event: 'Varmala' },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center group">
                                    <span className="w-24 font-bold text-gray-700 text-sm text-right pr-4 group-hover:text-pink-600 transition-colors">{item.time}</span>
                                    <div className="h-full border-l-2 border-pink-300 pl-4 py-1">
                                        <span className="block uppercase tracking-widest text-sm text-gray-800 font-medium">
                                            {item.event}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 3. Accommodation Section (Desktop: Right Col, Mobile: Tab 3) */}
                <div className={`flex-1 flex-col items-center justify-center p-6 md:p-8 bg-white
                                ${activeTab === 'accommodation' ? 'flex' : 'hidden md:flex'}`}>
                    <div className="w-full max-w-md mx-auto h-full flex flex-col justify-center text-center">
                        <h2 className="font-playfair text-3xl md:text-4xl mb-6 font-normal uppercase tracking-widest text-gray-800">
                            Stay
                        </h2>
                        <p className="opacity-80 text-sm leading-relaxed mb-8 max-w-xs mx-auto text-gray-600">
                            For your comfort, we recommend the following hotel.
                        </p>

                        <div className="flex flex-col items-center group cursor-pointer">
                            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gray-100 mb-6 border-4 border-white shadow-xl overflow-hidden relative">
                                {/* Placeholder for hotel image - using a generic building icon or colored div if no image */}
                                <div className="absolute inset-0 bg-[#4a2026]/5 flex items-center justify-center text-gray-300">
                                    <span className="text-4xl">🏨</span>
                                </div>
                            </div>
                            <a
                                href="https://www.google.com/search?q=Sukhsagar+hotel+Majalgaon"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-2 relative"
                            >
                                <span className="uppercase tracking-wider text-lg text-[#4a2026] font-semibold border-b-2 border-transparent group-hover:border-[#4a2026] transition-all">
                                    Sukhsagar Hotel
                                </span>
                                <span className="block text-xs text-gray-400 mt-1 uppercase tracking-widest">Majalgaon</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Bottom Tab Bar */}
            <div className="md:hidden shrink-0 h-[60px] bg-white border-t border-gray-100 flex justify-around items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-30">
                <button
                    onClick={() => setActiveTab('location')}
                    className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${activeTab === 'location' ? 'text-pink-600' : 'text-gray-400'}`}
                >
                    <span className="text-xl">📍</span>
                    <span className="text-[10px] uppercase tracking-wider font-semibold">Location</span>
                </button>
                <div className="w-[1px] h-8 bg-gray-100"></div>
                <button
                    onClick={() => setActiveTab('itinerary')}
                    className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${activeTab === 'itinerary' ? 'text-pink-600' : 'text-gray-400'}`}
                >
                    <span className="text-xl">📅</span>
                    <span className="text-[10px] uppercase tracking-wider font-semibold">Itinerary</span>
                </button>
                <div className="w-[1px] h-8 bg-gray-100"></div>
                <button
                    onClick={() => setActiveTab('accommodation')}
                    className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${activeTab === 'accommodation' ? 'text-pink-600' : 'text-gray-400'}`}
                >
                    <span className="text-xl">🏨</span>
                    <span className="text-[10px] uppercase tracking-wider font-semibold">Stay</span>
                </button>
            </div>

            {/* Security Modal */}
            {showSecurity && (
                <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-[#4a2026]/80 backdrop-blur-sm">
                    <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 max-w-sm w-full animate-fade-in relative mx-4">
                        <button onClick={() => { setShowSecurity(false); }}
                            className="absolute top-4 right-4 text-gray-300 hover:text-gray-500 transition-colors">✕
                        </button>

                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-playfair text-gray-800 mb-2">Welcome</h3>
                            <p className="text-gray-500 text-xs uppercase tracking-widest">Security Check</p>
                        </div>

                        {/* <form onSubmit={handleSecurityCheck} className="flex flex-col gap-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    What is the hashtag?
                                </label>
                                <input
                                    type="text"
                                    value={answer}
                                    onChange={(e) => {
                                        setAnswer(e.target.value);
                                        setError('');
                                    }}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all bg-gray-50 text-center text-lg"
                                    placeholder="Answer"
                                    autoFocus
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-pink-600 text-white font-semibold py-3 rounded-lg hover:bg-pink-700 active:transform active:scale-95 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={!answer.trim()}
                            >
                                Enter Wedding Site
                            </button>
                        </form> */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LandingPage;
