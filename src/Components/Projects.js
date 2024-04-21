import React from 'react';

import '../CSS/Projects.css';

const cardData = [
    {
        frontImage: process.env.PUBLIC_URL + '/images/project-previews/todoapp.JPG',
        backImage: "https://unsplash.it/511/511/",
        title: "ToDoApp",
        technologies: "[React.js, Express.js, Restful API, Docker, Ngrok]",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.",
        liveDemoLink: "https://raymondng117.github.io/react-todo-app-static/",
        fullCodesLink: "https://github.com/raymondng117/react-todo-app"
    },
    {
        frontImage: "https://unsplash.it/502/502/",
        backImage: "https://unsplash.it/503/503/",
        title: "Strizzes",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c."
    },
    {
        frontImage: "https://unsplash.it/504/504/",
        backImage: "https://unsplash.it/505/505/",
        title: "Reflupper",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c."
    },
    {
        frontImage: "https://unsplash.it/506/506/",
        backImage: "https://unsplash.it/508/508/",
        title: "Acirassi",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c."
    },
    // Add more card data as needed
];

const ParallaxCard = ({ frontImage, backImage, title, technologies, description, liveDemoLink, fullCodesLink  }) => (
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

const ParallaxCards = () => (
    <div className="projects-wrapper">
        <h1>Programming Projects</h1>
        <div className="projects-cols">
            {cardData.map((card, index) => (
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
        
        </>
     );
}
 
// export default Projects;

export default ParallaxCards;


// const Projects = () => {
//     return (
//         <div className="container ">
//             <div className="row justify-content-center" >
//                 {/* title */}
//                 <p className="display-4 text-center mt-4">Programming</p>
//                 <hr className='hr' />

//                 {/* Wanderland RPG */}
//                 <div className="col-md-4 col-sm-6 mt-3 " >
//                     <div className="card text-black border-4 m-2 d-flex" >
//                         <div class="card-body flex-fill">
//                             <div className="card-image" >
//                                 <img class="card-img-top " src="https://th.bing.com/th/id/OIG.cfF3eF2SxmVZ6vavcfac?pid=ImgGn&w=1024&h=1024&rs=1" alt="MicrosoftAIimage" />
//                             </div>
//                             <h3 class="card-title fw-bolder mt-2">Wanderland RPG</h3>
//                             <p class="card-subtitle mb-2 text-secondary fw-bold">Angular.js || Angular-route.js || Angular-animate.js || Bootstrap</p>
//                             <p class="card-text text-sm">This App creates a web application where users for now can customize own battle team for the adventure.</p>
//                             <a href="https://raymondng117.github.io/wanderlandRPG/" class="btn btn-primary me-2 project-links">Live demo</a>
//                             <a href="https://github.com/raymondng117/wanderlandRPG" class="btn btn-primary project-links">Full Codes</a>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Live Chat */}
//                 <div className="col-md-4 col-sm-6 mt-3 " >
//                     <div className="card text-black border-4 m-2 d-flex" >
//                         <div class="card-body flex-fill">
//                             <div className="card-image" >
//                                 <img class="card-img-top " src="https://th.bing.com/th/id/OIG.2W_p46W042h7V0BFZeoa?pid=ImgGn" alt="MicrosoftAIimage" />
//                             </div>
//                             <h3 class="card-title fw-bolder mt-2">ChatHub</h3>
//                             <p class="card-subtitle mb-2 text-secondary fw-bold">Express.js || React.js || Socket.io || mongoDB || Bootstrap</p>
//                             <p class="card-text text-sm">This App creates a page where users under same router can have consistent live chat with each other.</p>
//                             <a href="https://github.com/raymondng117/liveChat" class="btn btn-primary project-links">Full Codes</a>

//                         </div>
//                     </div>
//                 </div>

//                 {/*Calculator*/}
//                 <div className="col-md-4 col-sm-6 mt-3" >
//                     <div className="card text-black border-4 m-2 d-flex" >
//                         <div class="card-body flex-fill">
//                             <div className="card-image" >
//                                 <img class="card-img-top border-dark border-4 " src="https://th.bing.com/th/id/OIG.dCZAhKbJKQu3aHkQK1GT?pid=ImgGn" alt="MicrosoftAIimage" />
//                             </div>
//                             <h3 class="card-title fw-bolder mt-2">Calculator</h3>
//                             <p class="card-subtitle mb-2 text-secondary fw-bold">React.js || Bootstrap </p>
//                             <p class="card-text text-sm">This application employs typical React functionalities like useState and useEffect to handle complex chained calculations and negative number computations and bootstrap.</p>
//                             <a href=" https://raymondng117.github.io/freeCodeCamp_calculator/" class="btn btn-primary me-2 project-links">Live demo</a>
//                             <a href="https://github.com/raymondng117/freeCodeCamp_calculator" class="btn btn-primary project-links">Full Codes</a>
//                         </div>
//                     </div>
//                 </div>

//                 {/*Calculator Tetsing*/}
//                 <div className="col-md-4 col-sm-6 mt-3" >
//                     <div className="card text-black border-4 m-2 d-flex" >
//                         <div class="card-body flex-fill">
//                             <div className="card-image" >
//                                 <img class="card-img-top border-dark border-4 " src="https://th.bing.com/th/id/OIG.ZfGCQKu.EA8xp904z4KP?pid=ImgGn" alt="MicrosoftAIimage" />
//                             </div>
//                             <h3 class="card-title fw-bolder mt-2">Calculator QA</h3>
//                             <p class="card-subtitle mb-2 text-secondary fw-bold">mocha || Chai || Selenium </p>
//                             <p class="card-text text-sm">This app perform a basic QA for my online calculator project hosting on GitHub.</p>
//                             <a href="https://github.com/raymondng117/onlineCalculatorTesting" class="btn btn-primary project-links">Full Codes</a>
//                         </div>
//                     </div>
//                 </div>

//                 {/*Random Quotes*/}
//                 <div className="col-md-4 col-sm-6 mt-3" >
//                     <div className="card text-black border-4 m-2" >
//                         <div class="card-body">
//                             <div className="card-image" >
//                                 <img class="card-img-top border-dark border-4 " src="https://th.bing.com/th/id/OIG.rmAGNkjypW7JBXj6epXG?pid=ImgGn" alt="MicrosoftAIimage" />
//                             </div>
//                             <h3 class="card-title fw-bolder mt-2">API Random Quotes</h3>
//                             <p class="card-subtitle mb-2 text-secondary fw-bold">React.js || Json data || GitHub API</p>
//                             <p class="card-text text-sm">This app can fetch quotes from GitHub and randomly generate single quote at every clicking.</p>
//                             <a href=" https://raymondng117.github.io/randomQuotes/" class="btn btn-primary me-2 project-links">Live demo</a>
//                             <a href="https://github.com/raymondng117/randomQuotes" class="btn btn-primary project-links">Full Codes</a>
//                         </div>
//                     </div>
//                 </div>

//                 {/*IntrovertCopilot*/}
//                 <div className="col-md-4 col-sm-6 mt-3" >
//                     <div className="card text-black border-4 m-2" >
//                         <div class="card-body">
//                             <div className="card-image" >
//                                 <img class="card-img-top border-dark border-4 " src="https://th.bing.com/th/id/OIG.mbNvkEtlS.LFPB4C8Pvg?pid=ImgGn" alt="MicrosoftAIimage" />
//                             </div>
//                             <h3 class="card-title fw-bolder mt-2">IntrovertCopilot</h3>
//                             <p class="card-subtitle mb-2 text-secondary fw-bold">ChatGPT API || Express.js || jQuery || localStroage</p>
//                             <p class="card-text text-sm">This app create a website for introverts to learn conversations skills and gain proposed conversations.</p>
//                             <a href="https://github.com/tiffahahahu7/IntrovertCopilot.git" class="btn btn-primary project-links">Full Codes</a>
//                         </div>
//                     </div>
//                 </div>



//                 {/* APOD search */}
//                 <div className="col-md-4 col-sm-6 mt-3" >
//                     <div className="card text-black border-4 m-2" >
//                         <div class="card-body">
//                             <div className="card-image" >
//                                 <img class="card-img-top border-dark border-4 " src="https://th.bing.com/th/id/OIG.xdLdg5rky0lbwHFInpkJ?pid=ImgGn" alt="MicrosoftAIimage" />
//                             </div>
//                             <h3 class="card-title fw-bolder mt-2">APOD search</h3>
//                             <p class="card-subtitle mb-2 text-secondary fw-bold">NASA API || Javascript || localStroage</p>
//                             <p class="card-text text-sm">This App serves a webpage allowing users select images from NASA databse and save their favourite images in local storage.</p>
//                             <a href="https://github.com/raymondng117/liveChat" class="btn btn-primary project-links">Full Codes</a>
//                         </div>
//                     </div>
//                 </div>


//                 {/* Course Registration */}
//                 <div className="col-md-4 col-sm-6 mt-3" >
//                     <div className="card text-black border-4 m-2" >
//                         <div class="card-body">
//                             <div className="card-image" >
//                                 <img class="card-img-top border-dark border-4 " src="https://th.bing.com/th/id/OIG.6MDhT.IxnRmSvcxdkkCw?pid=ImgGn" alt="MicrosoftAIimage" />
//                             </div>
//                             <h3 class="card-title fw-bolder mt-2">Course Registration </h3>
//                             <p class="card-subtitle mb-2 text-secondary fw-bold"> C# || ASP.NET || Bootstrap</p>
//                             <p class="card-text text-sm">This app establishes a lifelike student registration system that allows users to input student enrollment data following predefined verification criteria.</p>
//                             <a href="https://github.com/raymondng117/courseRegistration" class="btn btn-primary project-links">Full Codes</a>
//                         </div>
//                     </div>
//                 </div>



//                 {/* title */}
//                 <div className="row justify-content-center mt-4" >
//                     <p className="display-4 text-center mt-4">Design</p>
//                     <hr className='hr' />

//                     {/* Figma */}
//                     <div className="col-md-4 col-sm-6 mt-3" >
//                         <div className="card text-black border-4 m-2" >
//                             <div class="card-body">
//                                 <div className="card-image" >
//                                     <img class="card-img-top border-dark border-4 " src={process.env.PUBLIC_URL + '/images/figma.png'} alt="Figma project" />
//                                 </div>
//                                 <h3 class="card-title fw-bolder mt-2">Wander World</h3>
//                                 <p class="card-subtitle mb-2 text-secondary fw-bold"> Components || Prototyping || Auto-Layout</p>
//                                 <p class="card-text text-sm">In this project, the Figma online platform is utilized to craft a webpage resembling a travel agency site, featuring interactive elements. </p>
//                                 <a href="https://www.figma.com/file/ZPtFbXJngR0s4yCepppOOH/Part1%3AWireframes?type=design&node-id=737-1651&mode=design&t=sdt1ezf0vsGjbfHk-0" class="btn btn-primary ">More details</a>
//                             </div>
//                         </div>
//                     </div>

//                     {/* slothrill */}
//                     <div className="col-md-4 col-sm-6 mt-3" >
//                         <div className="card text-black border-4 m-2" >
//                             <div class="card-body">
//                                 <div className="card-image" >
//                                     <img class="card-img-top border-dark border-4 " src={process.env.PUBLIC_URL + '/images/design1.png'} alt="Illustrator project" />
//                                 </div>
//                                 <h3 class="card-title fw-bolder mt-2">Slothrill</h3>
//                                 <p class="card-subtitle mb-2 text-secondary fw-bold"> Layers || Image tracking || Selcetion tool</p>
//                                 <p class="card-text text-sm">This image is created using various Adobe illustrator built-in features through a individual project.</p>
//                                 <a href="https://drive.google.com/file/d/1quONhk-uH497rYbovkR1VTGRTmBy2OHV/view?usp=drive_link" class="btn btn-primary">Document source</a>
//                             </div>
//                         </div>
//                     </div>

//                 </div>


//             </div>
//         </div>
//     );
// }

// export default Projects;