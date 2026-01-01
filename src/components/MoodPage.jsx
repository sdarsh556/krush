import { ArrowLeft, Smile, CloudRain, HeartHandshake, Cloud, Sparkles, Frown, BatteryLow, } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import './MoodPage.css';

import happyPic from '../assets/moods/happy.JPG';
import sadPic from '../assets/moods/sad.JPG';
import missingPic from '../assets/moods/missing.JPG';
import alonePic from '../assets/moods/alone.jpg';
import demotivatedPic from '../assets/moods/demotivated.JPG';

const moodData = {
    happy: {
        icon: Smile,
        title: "When You're Happy",
        note: "Uk baby, the thing i love the most about u is this cute little smile. The way you smile and the way you get happy even at the smallest of things i do, is what makes me want you to be life partner more. I mean just look at those cute natural blush cheeks when u smile. I mean damnnnnnn!!!!!!! This is what i can die for. This  smiles suites you so perfectly babu. The way you blush, the way you look at me with those eyes when i crack an inside joke. I mean bas yaarr yehi toh chahiye jeevan mein!!!! Always keep smiling cutie piee. Aur ha ab yeh dekhke senti mat ho jaana. Aur agar ho bhi gai toh send me a cute little selfie. I can literally imagine you being such a playful little kid when u are happy and behave like a clumsy  person holding my hands and walking so cutely; looking at me with those cute lil eyes. Always keep smiling maari jaaneman. I lovee youuu my cutuu lill pandaaa.",
        linkText: "Click here to see how i feel when i look at you baby",
        videoUrl: "https://youtu.be/kw4tT7SCmaY?si=75866igDBLFcynXv", // Just the way you are? Placeholder
        gradient: 'linear-gradient(135deg, #ffd89b 0%, #3e4448ff 100%)',
        image: happyPic
    },
    sad: {
        icon: CloudRain,
        title: "When You're Sad",
        note: "Fuckkkk!!!!!! Maari babudi down feel kare chhe!!!! Babu su thayu cutie? Imagine your hulk is giving you zorka hug baby. Itna zorka ki i am legit squeezing you very very tightly. Maari babudi radta hua saari laage ke baby? Aavi rite down nahi feel karwaanu cutie. Imagine tu mast maara arms ma chhe ane i am kissing you on your forehead and in a jiffy, you forget all the problems of your life baby. You dont need to be strong jaaneman. You can have that cute little smile of yours fade away for a moment because ik once you feel lighter, i will have my same cute panda again. I just want you to know that if you are feeling down, just close your eyes and think of all the cute moments which we have had babu. Like when i am cooking anything in the kitchen and you are like bhai i am so done with him be ya toh think of the cute dance we had in our own little room in kolad and how we grooved to those beats baby. Maari baby sad saari laage ke. I die on that smile be. I die to see my cutie showing of her cute side be. Chalo have wipe off your tears. Take a deep breath babu and chalo pick up your phone and send me a smiling selfie babu. Aavi rite down maari cutie thodi saari laage babu. Chalo now lighten your health with whatever you are holding and let it go babu. No need to hold onto it and start afresh cutudi. I am always here for you jaaneman. Imagine that we are cuddling and all our problems go away instantly in a jiffy jaaneman. My arms and body lying around your entire body babu and all our problems disappearing instantly jaaneman. I love you my cute lil pandaa.",
        linkText: "Click here to brighten up your mood baby",
        videoUrl: "https://youtu.be/Cb6wuzOurPc?si=Hd6heW7J1oePnLqh", // Placeholder for cheer up
        gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        image: sadPic
    },
    missing: {
        icon: HeartHandshake,
        title: "When You Miss Me",
        note: "Maari cutie.. Su thayu babu? Missing me baby? Aatlu na miss kar jaaneman. Just close your eyes jaaneman and take a deep deep breath baby. Imagine i am right there bachhaa, holding you in my big wide arms and making you rest peacefully against my chest baby. I am giving you so so many kisses all over your face baby; just the way you say, i am giving you ten thousand kisses jaaneman. Feel the peace which you feel when you are in my arms baby. Think of the time when we literally cuddle each other to bed. Ohhh mahnnn how fast you sleep be while cuddling baby!!! Imagine me getting up in the morning, giving you a sweet little kiss and making breakfast for u babu. Dont worry my jaaneman. We will soon be together for the rest of our lives baby and cuddle each other to sleep every night baby. This is just a very dark tunnel baby but there is a white light shining brightly on the other side. You will soon be able to feel the warmth of my hugs and my deep breaths on your forehead baby. Now look ar the cute little hulk at your window and imagine me i am right beside you baby holding you tightly. Stop missing me now maari yedi paagal chhokri. I want you to get a huge wide big smile on your face and stop missing me have. I am right there in your heart baby. A part of my soul is always there cutie pie. Chalo get up now and work on what you have to work on ya toh do thoda tp and lighten your mood babudi. I lovee you always my cutu lill pandaa.",
        linkText: "Click here to feel lighter",
        videoUrl: "https://youtu.be/8SYPKQMW_2Q?si=CowcKoSI_06-g6-b", // All of me? Placeholder
        gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        image: missingPic
    },
    alone: {
        icon: Cloud,
        title: "When You're Feeling Alone",
        note: "Maari baby ne lonely feel thaayeche jaaeman? Su thayu baby? Are you feeling like you do not belong here baby? If yes, then stop what you are doing and take a quick pause bachhaa. Close your eyes babu and put your hands on your chest bachhaa. Feeling the heart pumping baby? I am right there bachhaa. I am right in you baby. At the very spot bachhaa. There can be many reasons for you to feel lonely right now baby. Maybe the current obvio dumb me has just abandoned his cute lil babudi and has gone out with someone or maybe he is in the office. Or maybe ola be taara ghar na chutiyao kai bakchodi kairi chhe and you are irritated. Ya maybe something else occurred to you and u have legit started overthinking and you are missing me. I just want you to know my sweetheart that you dont have to deal with it alone bchhaa. You are never alone baby. We are all there for you bachhaa. Maybe ame logon physically nathi hoi sakta but we are always morally here supporting you in whatever ways we can baby. How much ever emotionally draining you might feel bachhaa, i am always here for you to give you that additional kick babu. There are chances i might be somewhere else currently or maybe sleeping but babu there is a part of me constantly in you. I just want you to feel it and feel that peace. You are never alone in this fight bachhaa. There are chances this dumb boyfriend of yours isnt of any help to you but trust me there is no way you are all alone. I am always there maybe not supporting by actually helping you out but trying to support emotionally. Maybe i am only making you feel alone but trust me bachhaa even in that scenario, i am always here for you cutie piee. My arms are always open for my jaaneman to fall into them and take off the entire burden from you babu. So maari jaaneman now stop feeling lonely baby coz you have a boatload of people supporting you over here jaaneman. Everyone is rooting for you baby and you are never alone babudi. So now take a deep breath cutie and calm down. Time to get to work babu ya toh thoduk have mind fresh karwa tp karwa bes jaaneman. I love you my cutu lill pandaa.",
        linkText: "Click here to make you feel better",
        videoUrl: "https://youtu.be/Nnop2walGmM?si=KNLuosMMGU2LYlJr", // Uptown Funk? Placeholder
        gradient: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
        image: alonePic
    },
    demotivated: {
        icon: Frown,
        title: "When You're Feeling Demotivated",
        note: "Babu down feel kare chhe jaaneman? Su thayu cutie? Kai karwaanu mann nathi thayi rayu cutie? I want you to know that you dont have to move mountains today. Babu, some days are meant only for breathing, for showing up softly, for existing without pressure. Your worth has never been measured by productivity or progress, it lives in who you are, not in how much you do. You dont need to carry the burden of everyone on your shoulders. Sometimes its okay to put yourself and your feelings first baby. Every one of us is just a call away bachhaa. I am always here rooting for you baby come what may cutie. It is okay for you to leave stuff behind right now and feel a bit lighter cutie pie. I want you to close your eyes and feel your heart pumping and feel the calmness which runs through your body babudi. You dont have to be 100% today baby. You can be 10% as well jaaneman. So have aatlu stress na lo babu. Now just close your eyes and think that i am hugging you tightly jaaneman. Ane have bachhaa get out of bed and wash your face. Think of what motivates you the most. You can do it baby. Think about how you can conquer the world if you think bachhaa. You are my strongest baby so bilkul demotivated feel karwaani zaruri nathi. So chalo jaaneman now stop overthinking and freshen up your mind baby. You can do it bachhaa. Thodik waar jowe toh tp kari le bachhaa and then get set go. Then we will start working ha jaaneman. You can do it babudi. I am always here for you to cheer you up baby. Trust me just call me. Even if this fat ass is sleeping, it doesnt matter jaaneman. I love you my cutu lil pandaa.",
        linkText: "Click here to lift your spirits",
        videoUrl: "https://youtu.be/9iIX4PBplAY?si=KfuY1PocMPg0DKyq", // Placeholder
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        image: demotivatedPic
    },
    // loved: {
    //     icon: Heart,
    //     title: "You Are So Loved",
    //     note: "You are loved beyond measure. Every single day, in every single way, I love you more than words can express. You are my everything - my best friend, my partner, my home. Your kindness, your beauty (inside and out), your laugh, your dreams, everything about you makes me fall deeper in love. Thank you for being you, for choosing me, for making my life infinitely better. I love you to the moon and back.",
    //     gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    //     image: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&h=600&fit=crop'
    // }
};

function MoodPage() {
    const { moodId } = useParams();
    const navigate = useNavigate();

    // Find key in moodData (case-insensitive or exact match depending on structure)
    // Here moodId matches the keys exactly based on previous file content
    const currentMood = moodData[moodId];

    if (!currentMood) {
        return (
            <section className="mood-page section">
                <div className="mood-content">
                    <h2>Mood Not Found</h2>
                    <button className="back-button" onClick={() => navigate('/moods')}>
                        <ArrowLeft size={20} />
                        <span>Back to Moods</span>
                    </button>
                </div>
            </section>
        );
    }

    const IconComponent = currentMood.icon;

    return (
        <section className="mood-page section">
            <button className="back-button" onClick={() => navigate('/moods')}>
                <ArrowLeft size={20} />
                <span>Back to Moods</span>
            </button>

            <div className="mood-content">
                <div className="mood-header">
                    <div className="mood-page-icon" style={{ background: currentMood.gradient }}>
                        <IconComponent size={60} strokeWidth={1.5} />
                    </div>
                    <h2>{currentMood.title}</h2>
                </div>

                {/* Mood Image */}
                <div className="mood-image-container">
                    <img src={currentMood.image} alt={currentMood.title} className="mood-image" />
                </div>

                <div className="note-card">
                    <p className="note-text">{currentMood.note}</p>

                    {currentMood.linkText && currentMood.videoUrl && (
                        <div className="mood-link-container">
                            <a
                                href={currentMood.videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mood-video-link"
                            >
                                {currentMood.linkText}
                            </a>
                        </div>
                    )}

                    <p className="note-signature">Your Hulk ❤️</p>
                </div>
            </div>
        </section>
    );
}

export default MoodPage;
