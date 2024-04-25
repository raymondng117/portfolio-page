import '../CSS/Resume.css';

const Resume = () => {

  const typedWords = [
    "EDUCATION",
    "--Web Development & Internet Applications Diploma in Algonquin College, Ottawa",
    "Dean's Honours List:",
    // 3
    "GPA 3.94/4.0",

    "--Master of Arts in Journalism from The Chinese University of Hong Kong",
    "--Bachelor of Social Science from City University of Hong Kong",



    "SKILLSET",
    "--Languages and Frameworks:",
    // 8
    "React.js",
    "Express.js",
    "SQL",
    "C#",
    "Bootstrap",
    "Docker",
    "MongoDB",
    "PHP",

    // 16
    "--Operating Systems:",
    // 17
    "Linux",
    "IOS",
    "Ubuntu",
    "Windows 10",


    "--Graphic Tools:",
    "Photoshop",
    "Illustrator",
    "Figma",



    "Learn more"
  ];

  const downloadResume = () => {
    const resumePath = process.env.PUBLIC_URL + '/resume.pdf';
    window.open(resumePath, '_blank');
  };

  return (
    <div className="resume-container">
      <div className="resume-section">

        {/* Education */}
        <h1 className="display-5 fw-bolder">{typedWords[0]}</h1>

        <h5 className="mt-4">{typedWords[1]}</h5>
        <ul className="m-2">
          <li>{typedWords[2]} <button button className='btn btn-outline-secondary rounded-pill m-1 btn-resume-skill'>{typedWords[3]}</button></li>
        </ul>
        <h5 className="mt-4">{typedWords[4]}</h5>
        <h5 className="mt-4">{typedWords[5]}</h5>

        {/* Skills */}
        <h1 className='display-5 fw-bolder mt-5'>{typedWords[6]}</h1>

        <h5 >{typedWords[7]}</h5>
        <div className='d-flex flex-sm-row flex-column justify-content-start skillset-small-screen'>
          <button className='btn btn-outline-secondary rounded-pill m-1 btn-resume-skill'><img width="16" height="16" src="https://img.icons8.com/officel/16/react.png" alt="react" className='me-2'/> {typedWords[8]}</button>


          <button className='btn btn-outline-secondary rounded-pill m-1 btn-resume-skill'><img width="16" height="16" src="https://img.icons8.com/nolan/64/express-js.png" alt="express-js" className='me-2'/>{typedWords[9]}</button>

          <button className='btn btn-outline-secondary rounded-pill m-1 btn-resume-skill'><img width="16" height="16" src="https://img.icons8.com/fluency/48/c-sharp-logo.png" alt="c-sharp-logo" className='me-2' />{typedWords[11]}</button>


          <button className='btn btn-outline-secondary rounded-pill m-1 btn-resume-skill'><img width="20" height="20" src="https://img.icons8.com/color/48/php.png" alt="php" className='me-2'/>{typedWords[15]}</button>
        </div>

        <div className='d-flex flex-sm-row flex-column justify-content-start skillset-small-screen'>

          <button className='btn btn-outline-secondary rounded-pill m-1 btn-resume-skill'><img width="24" height="24" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/external-Docker-social-media-those-icons-lineal-color-those-icons.png" alt="external-Docker-social-media-those-icons-lineal-color-those-icons" className='me-2' />{typedWords[13]}</button>

          <button className='btn btn-outline-secondary rounded-pill m-1 btn-resume-skill'><img width="16" height="16" src="https://img.icons8.com/nolan/64/bootstrap.png" alt="bootstrap" className='me-2' />{typedWords[12]}</button>

          <button className='btn btn-outline-secondary rounded-pill m-1 btn-resume-skill'><img width="16" height="16" src="https://img.icons8.com/office/16/data-configuration.png" alt="data-configuration" className='me-2' />{typedWords[10]}</button>

          <button className='btn btn-outline-secondary rounded-pill m-1 btn-resume-skill '>
            <img width="16" height="16" src="https://img.icons8.com/nolan/64/mongo-db.png" alt="mongo-db" className='me-2' />
            {typedWords[14]}</button>

        </div>

        <h5 className='mt-4'>{typedWords[16]}</h5>
        <div className='d-flex flex-sm-row flex-column justify-content-start skillset-small-screen'>
          <button className='btn btn-outline-secondary rounded-pill m-1 btn-resume-skill'> <i class="devicon-linux-plain me-2"></i> {typedWords[17]}</button>
          <button className='btn btn-outline-secondary rounded-pill m-1 btn-resume-skill'> <i class="devicon-apple-original me-2"></i>{typedWords[18]}</button>
          <button className='btn btn-outline-secondary rounded-pill m-1 btn-resume-skill'><i class="devicon-ubuntu-plain me-2"></i>{typedWords[19]}</button>
          <button className='btn btn-outline-secondary rounded-pill m-1 btn-resume-skill'><i class="devicon-windows8-original me-2"></i>{typedWords[20]}</button>
        </div>

        <h5 className='mt-4'>{typedWords[21]}</h5>
        <div className='d-flex flex-sm-row flex-column justify-content-start skillset-small-screen'>
          <button className='btn btn-outline-secondary rounded-pill m-1 btn-resume-skill'>
            <i class="devicon-photoshop-plain me-2"></i>
            {typedWords[22]}</button>
          <button className='btn btn-outline-secondary rounded-pill m-1 btn-resume-skill'>
            <i class="devicon-illustrator-plain me-2"></i>
            {typedWords[23]}</button>
          <button className='btn btn-outline-secondary rounded-pill m-1 btn-resume-skill'>
            <i class="devicon-figma-plain me-2"></i>
            {typedWords[24]}</button>
        </div>


        <div className='d-flex justify-content-center'>
          {/* onClick={downloadResume} */}
          {<button className='btn btn-secondary btn-lg mt-5' onClick={downloadResume}>{typedWords[25]}</button>}
        </div>

      </div>
    </div>
  );
};


export default Resume;
