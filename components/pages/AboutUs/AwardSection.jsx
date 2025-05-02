const awards = [
    { name: "Awwwards", count: "07", icon: "/images/awards/awwwards.png" },
    { name: "CSS Design Awards", count: "02", icon: "/images/awards/css_design_awards.webp" },
    { name: "CSS Winner", count: "04", icon: "/images/awards/css_winner.webp" },
    { name: "Communicator", count: "06", icon: "/images/awards/awwwards.png" },
    { name: "Davey Awards", count: "05", icon: "/images/awards/css_design_awards.webp" },
    { name: "W3 Awards", count: "05", icon: "/images/awards/css_winner.webp" },
    { name: "iab Mixx", count: "03", icon: "/images/awards/awwwards.png" },
    { name: "Telly Awards", count: "02", icon: "/images/awards/css_winner.webp" },
  ];
  
  const AwardsSection = () => {
    return (
        <div className="2xl:max-w-4xl 2xl:mx-auto px-5 md:px-10 lg:px-10 xl:px-20   font-sans">
          <div className="grid md:grid-cols-1 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="flex items-center justify-between pb-4 ">
                <div className="flex items-center gap-4 w-full">
                  <img src={award.icon} alt={award.name} className="w-10 h-10 object-contain" />
                  <div className="flex-1 border-b border-gray-300">
                    <span className="font-bold text-2xl md:text-3xl text-[#00263a]  font-helvetica">{award.name}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl md:text-2xl font-bold text-black leading-none font-helvetica">{award.count}</p>
                  <p className="text-xl md:text-2xl text-black font-helvetica">Awards</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
  
  export default AwardsSection;
  