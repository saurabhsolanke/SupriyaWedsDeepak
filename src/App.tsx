
// Import Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import LoveStory from './components/LoveStory';
import VenuesItinerary from './components/VenuesItinerary'; 
import Details from './components/Details';
import RSVPFooter from './components/RSVPFooter';

// Import Assets
import heroBg from './assets/bg.jpg';

function App() {
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

export default App;
