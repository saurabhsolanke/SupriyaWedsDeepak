
// Import Components
import Navbar from './Navbar';
import Hero from './Hero';
import Countdown from './Countdown';
import LoveStory from './LoveStory';
import VenuesItinerary from './VenuesItinerary';
import Details from './Details';
import RSVPFooter from './RSVPFooter';

import { useEffect } from 'react';

// Import Assets
import heroBg from '../assets/bg.jpg';

function WeddingSite() {
    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full overflow-x-hidden">
            <Navbar />
            <Hero backgroundImage={heroBg} />
            <Countdown />
            <LoveStory />
            <VenuesItinerary />
            <Details />
            <RSVPFooter />
        </div>
    );
}

export default WeddingSite;
