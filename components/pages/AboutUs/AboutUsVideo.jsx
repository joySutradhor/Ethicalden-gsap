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
                src="https://html.hixstudio.net/videos/liko/liko.mp4" 
                autoPlay 
                muted 
                loop 
                playsInline
            />
        </div>
    );
};

export default AboutUsVideo;
