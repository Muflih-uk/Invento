import Image from "next/image";
import Link from "next/link";
import EventCard from "../components/EventCard";

const SapthaEventDetails = () => {
    // Defines the data for Group Events. 
    // You can manually change the image, title, and date for each event here.
    const groupEvents = [
        { image: "event1.webp", title: "INTER COLLEGE DANCE", date: "Friday | 29.Jan.2025" },
        { image: "event2.webp", title: "MUSIC BAND", date: "Saturday | 30.Jan.2025" },
        { image: "event3.webp", title: "FASHION SHOW", date: "Sunday | 31.Jan.2025" },
        { image: "event4.webp", title: "THEATRE PLAY", date: "Friday | 29.Jan.2025" },
        { image: "event5.webp", title: "GROUP DANCE", date: "Saturday | 30.Jan.2025" },
        { image: "event6.webp", title: "BATTLE OF BANDS", date: "Sunday | 31.Jan.2025" },
    ];

    // Defines the data for Solo Events.
    const soloEvents = [
        { image: "event1.webp", title: "SOLO SINGING", date: "Friday | 29.Jan.2025" },
        { image: "event2.webp", title: "SOLO DANCE", date: "Saturday | 30.Jan.2025" },
        { image: "event3.webp", title: "INSTRUMENTAL", date: "Sunday | 31.Jan.2025" },
        { image: "event4.webp", title: "MONO ACT", date: "Friday | 29.Jan.2025" },
        { image: "event5.webp", title: "MIME", date: "Saturday | 30.Jan.2025" },
        { image: "event6.webp", title: "STAND UP", date: "Sunday | 31.Jan.2025" },
    ];

    return (
      <div className="w-full bg-black text-white flex flex-col items-center justify-start pt-20 pb-60 relative">
        
        {/* Group Events Section */}
        <section className="w-full max-w-7xl px-2 md:px-4 flex flex-col items-center mt-20">
            <h1 className="font-akira text-4xl md:text-6xl text-white mb-40 mt-15 text-center">GROUP EVENTS</h1>
            {/* Changed from grid-cols-1 to grid-cols-2 for mobile as requested */}
            <div className="grid grid-cols-2 gap-x-2 md:gap-x-12 gap-y-1 w-full max-w-6xl">
                {groupEvents.map((event, index) => {
                    const isShiftedRow = Math.floor(index / 2) % 2 !== 0; 
                    return (
                        <EventCard 
                            key={index}
                            imageSrc={`/about-events/saptha/group events/${event.image}`}
                            title={event.title}
                            date={event.date}
                            // Scale 50 kept, adjusted margins and translations for smaller screens
                            className={`scale-50 -my-30 md:-my-65 ${isShiftedRow ? "translate-x-2 md:translate-x-44" : "-translate-x-2 md:-translate-x-32"}`} 
                        />
                    );
                })}
            </div>
        </section>

        {/* Solo Events Section */}
        <section className="w-full max-w-7xl px-2 md:px-4 flex flex-col items-center mt-20">
            <h1 className="font-akira text-4xl md:text-6xl text-white mb-40 mt-15 text-center">SOLO EVENTS</h1>
            <div className="grid grid-cols-2 gap-x-2 md:gap-x-12 gap-y-1 w-full max-w-6xl">
                {soloEvents.map((event, index) => {
                    const isShiftedRow = Math.floor(index / 2) % 2 !== 0;
                    return (
                        <EventCard 
                            key={index}
                            imageSrc={`/about-events/saptha/solo events/${event.image}`}
                            title={event.title}
                            date={event.date}
                            className={`scale-50 -my-30 md:-my-65 ${isShiftedRow ? "translate-x-2 md:translate-x-44" : "-translate-x-2 md:-translate-x-32"}`}
                        />
                    );
                })}
            </div>
        </section>

        {/* Register Button */}
        <div className="w-full flex justify-center mt-40 z-50 relative">
            <Link href="/coming-soon">
                <button className="bg-[#A41F22] text-white font-akira text-xl md:text-3xl px-20 py-6 hover:bg-white hover:text-black transition-colors duration-300">
                    REGISTER HERE
                </button>
            </Link>
        </div>

      </div>
    );
};
  
export default SapthaEventDetails;
