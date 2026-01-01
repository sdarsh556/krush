import { useState } from 'react';
import { Camera, Video, ZoomIn, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import './Gallery.css';

// Dynamically import images from assets/pics
const photosGlob = import.meta.glob('../assets/pics/*', { eager: true });
const photos = Object.entries(photosGlob).map(([path, module], index) => {
    // Extract filename for caption (e.g., "/src/assets/pics/vacation.jpg" -> "vacation")
    const filename = path.split('/').pop().split('.')[0];
    // Convert camelCase or snake_case to Title Case
    const caption = filename
        .replace(/([A-Z])/g, ' $1')
        .replace(/[_-]/g, ' ')
        .replace(/^\w/, c => c.toUpperCase())
        .trim();

    return {
        id: index + 1,
        url: module.default,
        caption: caption || `Memory ${index + 1}`
    };
});

// Dynamically import videos from assets/videos
const videosGlob = import.meta.glob('../assets/videos/*', { eager: true });
const videos = Object.entries(videosGlob).map(([path, module], index) => {
    const filename = path.split('/').pop().split('.')[0];
    const caption = filename
        .replace(/([A-Z])/g, ' $1')
        .replace(/[_-]/g, ' ')
        .replace(/^\w/, c => c.toUpperCase())
        .trim();

    return {
        id: index + 1,
        // Use a nice placeholder or the video itself
        thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop', // Better video placeholder
        url: module.default,
        caption: caption || `Video Memory ${index + 1}`
    };
});

function Gallery() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % photos.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + photos.length) % photos.length);
    };

    return (
        <section className="gallery section">
            <div className="section-header">
                <h2 className="section-title">Our Beautiful Memories</h2>
                <p className="section-subtitle">Every moment with you is a treasure</p>
            </div>

            {/* Photo Gallery */}
            <div className="gallery-container">
                <h3 className="gallery-section-title">
                    <Camera size={24} />
                    <span>Photo Memories</span>
                </h3>
                <div className="photo-grid">
                    {photos.map((photo, index) => (
                        <div
                            key={photo.id}
                            className="photo-item"
                            onClick={() => openLightbox(index)}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <img src={photo.url} alt={photo.caption} />
                            <div className="photo-overlay">
                                <ZoomIn size={32} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Gallery */}
            <div className="gallery-container">
                <h3 className="gallery-section-title">
                    <Video size={24} />
                    <span>Video Memories</span>
                </h3>
                <div className="video-grid">
                    {videos.map((video, index) => (
                        <div
                            key={video.id}
                            className="video-item"
                            onClick={() => {
                                setCurrentImageIndex(index);
                                setLightboxOpen('video');
                            }}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="video-thumbnail">
                                {/* Use the video itself as a thumbnail */}
                                <video
                                    src={`${video.url}#t=0.001`}
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    className="thumbnail-video"
                                    onMouseOver={(e) => e.target.play().catch(() => { })}
                                    onMouseOut={(e) => {
                                        e.target.pause();
                                        e.target.currentTime = 0;
                                    }}
                                />
                                <div className="play-button">
                                    <Play size={40} />
                                </div>
                            </div>
                            {/* <p className="video-caption">{video.caption}</p> */}
                        </div>
                    ))}
                </div>
            </div>


            {/* Lightbox */}
            {lightboxOpen && (
                <div className="lightbox" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}>
                        <X size={32} />
                    </button>

                    {lightboxOpen === true ? (
                        <>
                            <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
                                <ChevronLeft size={40} />
                            </button>
                            <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
                                <ChevronRight size={40} />
                            </button>
                            <div className="lightbox-content photo-content" onClick={(e) => e.stopPropagation()}>
                                <img src={photos[currentImageIndex].url} alt={photos[currentImageIndex].caption} />
                                <p className="lightbox-caption">{photos[currentImageIndex].caption}</p>
                            </div>
                        </>
                    ) : (
                        <div className="lightbox-content video-content" onClick={(e) => e.stopPropagation()}>
                            <video
                                src={videos[currentImageIndex].url}
                                controls
                                autoPlay
                                className="lightbox-video"
                            />
                            <p className="lightbox-caption">{videos[currentImageIndex].caption}</p>
                        </div>
                    )}
                </div>
            )}
        </section>
    );
}

export default Gallery;
