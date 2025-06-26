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
                src="https://res.cloudinary.com/dztzjmedo/video/upload/v1749708434/about-us-banner_qm5cak.webm" 
                autoPlay 
                muted 
                loop 
                playsInline
            />
        </div>
    );
};

export default AboutUsVideo;
