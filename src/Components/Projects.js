import React from 'react';

import '../CSS/Projects.css';

const programmingCodingCardData = [
    // todoapp
    {
        frontImage: process.env.PUBLIC_URL + '/images/project-previews/todoapp.JPG',
        backImage: "https://unsplash.it/511/511/",
        title: "ToDoApp",
        technologies: "[React.js, Express.js, Restful API, Docker, Ngrok]",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.",
        liveDemoLink: "https://raymondng117.github.io/react-todo-app-static/",
        fullCodesLink: "https://github.com/raymondng117/react-todo-app"
    },

    // Pomodoro clock
    {
        frontImage: process.env.PUBLIC_URL + '/images/project-previews/pomodoroclock.JPG',
        backImage: "https://unsplash.it/511/511/",
        title: "Pomodoro clock",
        technologies: "[React.js, Bootstrap]",
        description: "This App creates a web application where users for now can customize own battle team for the adventure.",
        liveDemoLink: "https://raymondng117.github.io/pomodoroclock/",
        fullCodesLink: "https://github.com/raymondng117/pomodoroclock"
    },

    // IntrovertCopilot
    {
        frontImage: process.env.PUBLIC_URL + '/images/project-previews/Introvertcopilot.JPG',
        backImage: "https://unsplash.it/511/511/",
        title: "IntroCopilot",
        technologies: "[OpenAi API, Express.js, Bootstrap]",
        description: "This App creates a web application where users for now can customize own battle team for the adventure.",
        liveDemoLink: "https://raymondng117.github.io/introvertcopilot/",
        fullCodesLink: "https://github.com/raymondng117/introvertcopilot"
    },

    // FlipCards
    {
        frontImage: process.env.PUBLIC_URL + '/images/project-previews/filpcards.JPG',
        backImage: "https://unsplash.it/511/511/",
        title: "Flip Cards",
        technologies: "[React.js, Bootstrap]",
        description: "This App creates a page where users under same router can have consistent live chat with each other.",
        liveDemoLink: "https://raymondng117.github.io/flipcards",
        fullCodesLink: "https://github.com/raymondng117/flipcards"
    },

    // Wanderland RPG 
    {
        frontImage: process.env.PUBLIC_URL + '/images/project-previews/wanderland.JPG',
        backImage: "https://unsplash.it/511/511/",
        title: "Wanderland RPG",
        technologies: "[Angular, Angular-route, Angular-animate]",
        description: "This App creates a web application where users for now can customize own battle team for the adventure.",
        liveDemoLink: "https://raymondng117.github.io/wanderlandRPG/",
        fullCodesLink: "https://github.com/raymondng117/wanderlandRPG"
    },
    
    // calcualtor
    {
        frontImage: process.env.PUBLIC_URL + '/images/project-previews/calculator.JPG',
        backImage: "https://unsplash.it/511/511/",
        title: "Calculator",
        technologies: "[React.js, Bootstrap]",
        description: "This application employs typical React functionalities like useState and useEffect to handle complex chained calculations and negative number computations and bootstrap.",
        liveDemoLink: "https://raymondng117.github.io/freeCodeCamp_calculator/",
        fullCodesLink: "https://github.com/raymondng117/freeCodeCamp_calculator"
    },

    // API Random Quotes
    {
        frontImage: "https://th.bing.com/th/id/OIG.rmAGNkjypW7JBXj6epXG?pid=ImgGn",
        backImage: "https://unsplash.it/511/511/",
        title: "API Random Quotes",
        technologies: "[React.js, Json data, GitHub API]",
        description: "This app can fetch quotes from GitHub and randomly generate single quote at every clicking.",
        liveDemoLink: "https://raymondng117.github.io/randomQuotes/",
        fullCodesLink: "https://github.com/raymondng117/randomQuotes"
    },

    // Course Registration
    {
        frontImage: "https://th.bing.com/th/id/OIG.6MDhT.IxnRmSvcxdkkCw?pid=ImgGn",
        backImage: "https://unsplash.it/511/511/",
        title: "Course Registration",
        technologies: "[C#, ASP.NET, Bootstrap]",
        description: "This app establishes a lifelike student registration system that allows users to input student enrollment data following predefined verification criteria.",
        liveDemoLink: null,
        fullCodesLink: "https://github.com/raymondng117/courseRegistration"
    }
];

const designCardData = [
    {
        frontImage: process.env.PUBLIC_URL + '/images/figma.png',
        backImage: "https://unsplash.it/511/511/",
        title: "Wander World",
        technologies: "[Components, Prototyping, Auto-Layout]",
        description: "In this project, the Figma online platform is utilized to craft a webpage resembling a travel agency site, featuring interactive elements.",
        liveDemoLink: null,
        fullCodesLink: "https://www.figma.com/file/ZPtFbXJngR0s4yCepppOOH/Part1%3AWireframes?type=design&node-id=737-1651&mode=design&t=sdt1ezf0vsGjbfHk-0"
    },
    {
        frontImage: process.env.PUBLIC_URL + '/images/design1.png',
        backImage: "https://unsplash.it/511/511/",
        title: "Slothrill",
        technologies: "[Layers, Image tracking, Selcetion tool]",
        description: "This image is created using various Adobe illustrator built-in features through a individual project.",
        liveDemoLink: null,
        fullCodesLink: "https://drive.google.com/file/d/1quONhk-uH497rYbovkR1VTGRTmBy2OHV/view?usp=drive_link"
    }
];


const ParallaxCard = ({ frontImage, backImage, title, technologies, description, liveDemoLink, fullCodesLink }) => (
    <div className="projects-col" onTouchStart="this.classList.toggle('hover')">
        <div className="projects-container">
            <div className="front" style={{ backgroundImage: `url(${frontImage})` }}>
                <div className="inner">
                    <p>{title}</p>
                    <span className='text-start'>{technologies}</span>
                </div>
            </div>
            <div className="back" style={{ backgroundImage: `url(${backImage})` }}>
                <div className="inner">
                    <div className="description-row">
                        <p>{description}</p>
                    </div>
                    <div className="links-row d-flex align-items-center">
                        <div className='d-flex link-buttons-flex justify-content-between align-items-center'>
                            <a href={liveDemoLink} target="_blank col-4"><button className='btn btn-secondary'>Live Demo</button></a>
                            <a href={fullCodesLink} target="_blank col-4"><button className='btn btn-secondary'>Code Source</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const ProgrammingCodingCards = () => (
    <div className="projects-wrapper p-2">
        <div className='my-5 display-6 text-center'>Programming Projects</div>
        <hr />
        <div className="projects-cols">
            {programmingCodingCardData.map((card, index) => (
                <ParallaxCard
                    key={index}
                    frontImage={card.frontImage}
                    backImage={card.backImage}
                    title={card.title}
                    technologies={card.technologies}
                    description={card.description}
                    liveDemoLink={card.liveDemoLink}
                    fullCodesLink={card.fullCodesLink}
                />
            ))}
        </div>
    </div>
);

const DesignCards = () => (
    <div className="projects-wrapper p-2 my-5">
        <div className='my-5 display-6 text-center'>Designing Projects</div>
        <hr />
        <div className="projects-cols">
            {designCardData.map((card, index) => (
                <ParallaxCard
                    key={index}
                    frontImage={card.frontImage}
                    backImage={card.backImage}
                    title={card.title}
                    technologies={card.technologies}
                    description={card.description}
                    liveDemoLink={card.liveDemoLink}
                    fullCodesLink={card.fullCodesLink}
                />
            ))}
        </div>
    </div>
);

const Projects = () => {
    return (
        <>
            <ProgrammingCodingCards />
            <DesignCards />
        </>
    );
}

export default Projects;