import React from 'react';

import '../CSS/Projects.css';

const backImagePath = process.env.PUBLIC_URL + '/images/project-previews/filping-back-img-backgroundcolor.JPG'

const fullStackProjectsCardData = [   
    // todoapp
    {
        frontImage: process.env.PUBLIC_URL + '/images/project-previews/todoapp.JPG',
        backImage: backImagePath,
        title: "ToDoApp",
        technologies: "[React.js, Express.js, Restful API, MySQL, Docker, Ngrok]",
        description: "A React-based app featuring a full-stack To-Do applictaion where users can register, login and edit. The backend part including Restful API and MySQL is held using Docker container.",
        liveDemoLink: "https://raymondng117.github.io/react-todo-app-static/",
        fullCodesLink: "https://github.com/raymondng117/react-todo-app"
    },

    
     // Crafthub 
     {
        frontImage: process.env.PUBLIC_URL + '/images/project-previews/crafthub.JPG',
        backImage: backImagePath, 
        title: "Craft Hub",
        technologies: "[Django, MySQL, Ngrok, Bootstrap]",
        description: "A data-driven Python Django application featuring an e-commerce website where users can register, log in, shop for crafts, and checkout, with persistent data stored on a remote MySQL server",
        liveDemoLink: "https://terribly-content-mako.ngrok-free.app/",
        fullCodesLink: "https://github.com/raymondng117/crafthub"
    },

     // portfolio page
     {
        frontImage: process.env.PUBLIC_URL + '/images/project-previews/portfolio.JPG',
        backImage: backImagePath, 
        title: "Portfolio website",
        technologies: "[React.js, React Router, Anime.js, MongoDB]",
        description: "A React-based app with employments of react-router for page navigation, advanced CSS for animation and MongoDB to store client's message.",
        liveDemoLink: "https://raymondng117.github.io/portfolio-page/",
        fullCodesLink: "https://github.com/raymondng117/portfolio-page"
    },

    // Restaurant Review
    {
        frontImage: process.env.PUBLIC_URL + '/images/project-previews/restaurantreviewapp.JPG',
        backImage: backImagePath,
        title: "Restaurant Review",
        technologies: "[C#, ASP.NET(MVC and API modules), JSON, XML, Docker, Ngrok, Bootstrap]",
        description: "A C#-based MVC application allows users to perform CRUD operations on a XML file containing restaurant review models via another ASP.NET C#-based API application. Both applications are containerized using Docker.",
        liveDemoLink: "https://saved-included-reindeer.ngrok-free.app/",
        fullCodesLink: "https://github.com/raymondng117/restaurantreviewapp"
    },

     // IntrovertCopilot
     {
        frontImage: process.env.PUBLIC_URL + '/images/project-previews/Introvertcopilot.JPG',
        backImage: backImagePath,
        title: "IntroCopilot",
        technologies: "[OpenAi API, Express.js, Jquery, Bootstrap]",
        description: "A life-like business application based on fundamental CSS and JavaScript offering social introverts with AI-generated chat suggested examples for specific scenarios.",
        liveDemoLink: "https://raymondng117.github.io/introvertcopilot/",
        fullCodesLink: "https://github.com/raymondng117/introvertcopilot"
    },

    
];

const designCardData = [
    {
        frontImage: process.env.PUBLIC_URL + '/images/project-previews/figma.png',
        backImage: backImagePath,
        title: "Wander World",
        technologies: "[Figma, Components, Prototyping, Auto-Layout]",
        description: "A Figma project featuring a travel agency site with customized components and interactive elements",
        liveDemoLink: "https://www.figma.com/file/ZPtFbXJngR0s4yCepppOOH/Part1%3AWireframes?type=design&node-id=737-1651&mode=design",
        fullCodesLink: "https://www.figma.com/file/ZPtFbXJngR0s4yCepppOOH/Part1%3AWireframes?type=design&node-id=737-1651&mode=design&t=sdt1ezf0vsGjbfHk-0"
    },
    {
        frontImage: process.env.PUBLIC_URL + '/images/design1.png',
        backImage: backImagePath,
        title: "Slothrill",
        technologies: "[Adobe illustrator, Layers, Image tracking, Selcetion tool]",
        description: "An individual project utilizing Adobe illustrator built-in features such as Image tracking and Selcetion tool.",
        liveDemoLink: "https://drive.google.com/file/d/1quONhk-uH497rYbovkR1VTGRTmBy2OHV/view?usp=drive_link",
        fullCodesLink: "https://drive.google.com/file/d/1quONhk-uH497rYbovkR1VTGRTmBy2OHV/view?usp=drive_link"
    }
];

const sideProjectsCardData = [
    // Pomodoro clock
    {
        frontImage: process.env.PUBLIC_URL + '/images/project-previews/pomodoroclock.JPG',
        backImage: backImagePath,
        title: "Pomodoro clock",
        technologies: "[React.js, Bootstrap]",
        description: "A React-based App where user can set a timer to break work into intervals, typically 25 minutes in length, separated by short breaks.",
        liveDemoLink: "https://raymondng117.github.io/pomodoroclock/",
        fullCodesLink: "https://github.com/raymondng117/pomodoroclock"
    },
   
    // API Random Quotes
    {
        frontImage: process.env.PUBLIC_URL + '/images/project-previews/random-quotes.JPG',
        backImage: backImagePath,
        title: "API Random Quotes",
        technologies: "[React.js, Json data, GitHub API]",
        description: "A React-based App fetching quotes from GitHub and randomly generate single quote at every clicking.",
        liveDemoLink: "https://raymondng117.github.io/randomQuotes/",
        fullCodesLink: "https://github.com/raymondng117/randomQuotes"
    },

    // FlipCards
    {
        frontImage: process.env.PUBLIC_URL + '/images/project-previews/filpcards.JPG',
        backImage: backImagePath,
        title: "Flip Cards",
        technologies: "[React.js, Bootstrap]",
        description: "A React-based card game handling cards rendering during matching and dismatching state.",
        liveDemoLink: "https://raymondng117.github.io/flipcards",
        fullCodesLink: "https://github.com/raymondng117/flipcards"
    },

    // Wanderland RPG 
    {
        frontImage: process.env.PUBLIC_URL + '/images/project-previews/wanderland.JPG',
        backImage: backImagePath,
        title: "Wanderland RPG",
        technologies: "[Angular, Angular-route, Angular-animate]",
        description: "An Angular-based app rendering an interface of RPG adventure game.",
        liveDemoLink: "https://raymondng117.github.io/wanderlandRPG/",
        fullCodesLink: "https://github.com/raymondng117/wanderlandRPG"
    },

    // calcualtor
    {
        frontImage: process.env.PUBLIC_URL + '/images/project-previews/calculator.JPG',
        backImage: backImagePath,
        title: "Calculator",
        technologies: "[React.js, Bootstrap]",
        description: "A React-based application handling complex chained calculations and negative number computations.",
        liveDemoLink: "https://raymondng117.github.io/freeCodeCamp_calculator/",
        fullCodesLink: "https://github.com/raymondng117/freeCodeCamp_calculator"
    },

]


const ParallaxCard = ({ frontImage, backImage, title, technologies, description, liveDemoLink, fullCodesLink }) => (
    <div className="projects-col" onTouchStart="this.classList.toggle('hover')">
        <div className="projects-container">
            <div className="front" style={{ backgroundImage: `url(${frontImage})` }}>
                <div className="inner front-inner">
                    <p>{title}</p>
                    <span className='text-start front-tech-text'>{technologies}</span>
                </div>
            </div>
            <div className="back" style={{ backgroundImage: `url(${backImage})` }}>
                <div className="inner back-inner-small-screen">
                    <div className="description-row mb-4">
                        <p className='text-start fs-6'>{description}</p>
                    </div>
                    <div className="links-row d-flex align-items-center">
                        <div className='d-flex link-buttons-flex justify-content-around align-items-center'>
                            <a href={liveDemoLink} target="_blank col-4 "><button className='btn btn-secondary link-buttons'>Live Demo</button></a>
                            <a href={fullCodesLink} target="_blank col-4 "><button className='btn btn-secondary link-buttons'>Code Source</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const FullStackProjectsCards = () => (
    <div className="projects-wrapper p-2">
        <div className='my-5 display-6 text-center'>Full-Stack Projects</div>
        <hr />
        <div className="projects-cols">
            {fullStackProjectsCardData.map((card, index) => (
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

const SideProjectsCards = () => (
    <div className="projects-wrapper p-2 my-5">
        <div className='my-5 display-6 text-center'>Side Projects</div>
        <hr />
        <div className="projects-cols">
            {sideProjectsCardData.map((card, index) => (
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
            <FullStackProjectsCards />
            <DesignCards />
            <SideProjectsCards />
        </>
    );
}

export default Projects;