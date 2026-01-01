import { Smile, CloudRain, HeartHandshake, Cloud, Sparkles, Frown } from 'lucide-react';
import './MoodHub.css';

const moods = [
    {
        id: 'happy',
        icon: Smile,
        title: 'Happy',
        description: 'Celebrating your joy',
        gradient: 'linear-gradient(135deg, #ffd89b 0%, #19547b 100%)'
    },
    {
        id: 'sad',
        icon: CloudRain,
        title: 'Sad',
        description: 'Here to comfort you',
        gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
        id: 'missing',
        icon: HeartHandshake,
        title: 'Missing Me',
        description: 'I miss you too',
        gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    },
    {
        id: 'alone',
        icon: Cloud,
        title: 'Feeling Alone',
        description: 'Let me support you',
        gradient: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)'
    },
    {
        id: 'demotivated',
        icon: Frown,
        title: 'Demotivated',
        description: 'Let me cheer you up',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    // {
    //     id: 'loved',
    //     icon: Heart,
    //     title: 'Loved',
    //     description: 'You are so loved',
    //     gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    // }
];

import { useNavigate } from 'react-router-dom';

function MoodHub() {
    const navigate = useNavigate();

    const handleMoodClick = (moodId) => {
        navigate(`/mood/${moodId}`);
    };

    return (
        <section className="mood-hub section">
            <div className="section-header">
                <h2 className="section-title">How are you feeling today?</h2>
                <p className="section-subtitle">Pick a mood and read a special note just for you</p>
            </div>

            <div className="mood-grid">
                {moods.map((mood, index) => {
                    const IconComponent = mood.icon;
                    return (
                        <div
                            key={mood.id}
                            className="mood-card"
                            onClick={() => handleMoodClick(mood.id)}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="mood-icon" style={{ background: mood.gradient }}>
                                <IconComponent size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="mood-title">{mood.title}</h3>
                            <p className="mood-description">{mood.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default MoodHub;
