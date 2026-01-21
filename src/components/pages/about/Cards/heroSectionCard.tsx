export default function heroSectionCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-2">
      {/* Card 1 */}
      <div className="card relative h-auto min-h-72 md:min-h-80 lg:min-h-80 backdrop-blur-md p-6 opacity-0 translate-y-10 border-t border-r border-b border-white/60 flex flex-col justify-between">
        <div className="absolute top-0 right-0 w-6 h-6 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}></div>
        <div>
          <h3 className="text-white font-urbanist font-bold text-2xl mb-4">Technology with Real-World Impact</h3>
          <p className="text-white/90 font-poppins text-sm leading-relaxed">
            Invento goes beyond competitions by fostering innovation through industry-backed workshops, national-level expos, ISRO/VSSC collaborations, and large-scale job fairs, connecting students to real opportunities.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card relative h-auto min-h-72 md:min-h-80 lg:min-h-80 backdrop-blur-md p-6 opacity-0 translate-y-10 border-t border-r border-b border-white/60 flex flex-col justify-between">
        <div className="absolute top-0 right-0 w-6 h-6 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}></div>
        <div>
          <h3 className="text-white font-urbanist font-bold text-2xl mb-4">A National Stage for Culture & Creativity</h3>
          <p className="text-white/90 font-poppins text-sm leading-relaxed">
            Through Saptah, Invento stands as a premier inter-college cultural festival, celebrating artistic excellence with signature events like Natya and Taksati, uniting talent from across the country.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card relative h-auto min-h-72 md:min-h-80 lg:min-h-80 backdrop-blur-md p-6 opacity-0 translate-y-10 border-t border-r border-b border-white/60 flex flex-col justify-between">
         <div className="absolute top-0 right-0 w-6 h-6 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}></div>
         <div>
          <h3 className="text-white font-urbanist font-bold text-2xl mb-4">Student-Driven, Community-Focused</h3>
          <p className="text-white/90 font-poppins text-sm leading-relaxed">
            Entirely organized by students, Invento extends its impact beyond campus through school outreach, rural innovators’ platforms, and socially responsible themes, shaping leaders as much as technologists.
          </p>
         </div>
      </div>
    </div>
  );
}
