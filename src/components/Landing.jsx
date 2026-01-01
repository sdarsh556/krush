import { Heart, Sparkles, Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

function Landing() {
    const navigate = useNavigate();

    return (
        <section className="landing section">
            <div className="landing-content">
                <div className="welcome-message">
                    <h1 className="main-title">
                        <span className="title-line">For My</span>
                        <span className="title-line gradient-text">Cute Little Panda</span>
                    </h1>
                    <p className="subtitle">
                        A special place just for you, filled with love notes for every moment
                    </p>
                    <button className="cta-button" onClick={() => navigate('/moods')}>
                        <span>Explore My Notes</span>
                        <ArrowRight size={20} />
                    </button>
                </div>
                <div className="landing-decoration">
                    <div className="photo-stack">
                        <div className="photo-card card-1">
                            <img src="/src/assets/pics/IMG_2895.JPG 
                            " alt="Us" />
                        </div>
                        <div className="photo-card card-2">
                            <img src="/src/assets/pics/1f0b19d6-a6e8-4a11-8c47-47c4bd676ccf.JPG" alt="Us" />
                        </div>
                        <div className="photo-card card-3">
                            <img src="/src/assets/pics/e0e76b4e-7a79-4264-9b53-548c5eaf5264.JPG" alt="Us" />
                        </div>
                    </div>
                    <Heart className="floating-icon icon-1" size={40} />
                    <Sparkles className="floating-icon icon-2" size={30} />
                    <Star className="floating-icon icon-3" size={35} />
                </div>
            </div>
        </section>
    );
}

export default Landing;
