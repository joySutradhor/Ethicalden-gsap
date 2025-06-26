import React from 'react';

const ServiceVideo = () => {
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
                src="https://res.cloudinary.com/dztzjmedo/video/upload/v1749709027/recognition_tfyblh.webm" 
                autoPlay 
                muted 
                loop 
                playsInline
            />
        </div>
    );
};

export default ServiceVideo;
