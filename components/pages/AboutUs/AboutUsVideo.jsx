import React from 'react';

const AboutUsVideo = () => {
    return (
        <div className="w-full min-h-screen overflow-hidden">
            <video 
                className="w-full h-screen object-cover" 
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
