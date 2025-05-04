import React from 'react';

const AboutUsVideo = () => {
    return (
        <div className="w-full overflow-hidden">
            <video 
                className="
                    w-full object-cover
                    h-[40vh]      
                    sm:h-[50vh]    
                    md:h-[60vh]    
                    lg:h-[80vh]    
                    2xl:max-h-screen
                " 
                src="https://ik.imagekit.io/0lnr4mwox/Ethical%20den%20-%20gsap/HR2.mp4?updatedAt=1746359944107" 
                autoPlay 
                muted 
                loop 
                playsInline
            />
        </div>
    );
};

export default AboutUsVideo;
