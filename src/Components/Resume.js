const Resume = () => {

  const typedWords = [
    "EDUCATION",
    "--Web Development & Internet Applications Diploma in Algonquin College, Ottawa",
    "Dean's Honours List:",
    // 3
    "GPA 3.92/4.0",

    "--Master of Arts in Journalism from The Chinese University of Hong Kong",
    "--Bachelor of Social Science from City University of Hong Kong",



    "SKILLSET",
    "--Languages and Frameworks:",
    // 8
    "React",
    "Node.js",
    "SQL",
    "C#",
    "ASP.NET",
    "Python",
    "MongoDB",
    "CSS",

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

        <h5 className="mt-3">{typedWords[1]}</h5>
        <ul className="m-2">
          <li>{typedWords[2]} <button button className='btn btn-outline-secondary rounded-pill m-1 btn-resume-skill'>{typedWords[3]}</button></li> 
        </ul>
        <h5 className="mt-3">{typedWords[4]}</h5>
        <h5 className="mt-3">{typedWords[5]}</h5>

        {/* Skills */}
        <h1 className='display-5 fw-bolder mt-5'>{typedWords[6]}</h1>

        <h5 >{typedWords[7]}</h5>
        <div className='d-flex flex-sm-row flex-column justify-content-start'>
          <button className='btn btn-outline-secondary rounded-pill m-1 btn-resume-skill'><i class="fa-brands fa-react"></i> {typedWords[8]}</button>
          <button className='btn btn-outline-secondary rounded-pill m-1 btn-resume-skill'><i class="fa-brands fa-node-js me-2"></i>{typedWords[9]}</button>
          <button className='btn btn-outline-secondary rounded-pill m-1 btn-resume-skill'><i class="fa-solid fa-database me-2"></i>{typedWords[10]}</button>
          <button className='btn btn-outline-secondary rounded-pill m-1 btn-resume-skill'><i class="devicon-icon devicon-csharp-plain colored me-2"></i>{typedWords[11]}</button>

        </div>

        <div className='d-flex flex-sm-row flex-column justify-content-start'>
          <button className='btn btn-outline-secondary rounded-pill m-1 btn-resume-skill'><i class="devicon-icon devicon-dot-net-plain me-2"></i>{typedWords[12]}</button>
          <button className='btn btn-outline-secondary rounded-pill m-1 btn-resume-skill'><i class="devicon-icon devicon-python-plain me-2"></i>{typedWords[13]}</button>
          <button className='btn btn-outline-secondary rounded-pill m-1 btn-resume-skill '>
            <i class="devicon-icon devicon-mongodb-plain me-2"></i>
            {typedWords[14]}</button>
          <button className='btn btn-outline-secondary rounded-pill m-1 btn-resume-skill'><i class="devicon-icon devicon-css3-plain-wordmark me-2"></i>{typedWords[15]}</button>
        </div>

        <h5 className='mt-4'>{typedWords[16]}</h5>
        <div className='d-flex flex-sm-row flex-column justify-content-start'>
          <button className='btn btn-outline-secondary rounded-pill m-1 btn-resume-skill'> <i class="devicon-linux-plain me-2"></i> {typedWords[17]}</button>
          <button className='btn btn-outline-secondary rounded-pill m-1 btn-resume-skill'> <i class="devicon-apple-original me-2"></i>{typedWords[18]}</button>
          <button className='btn btn-outline-secondary rounded-pill m-1 btn-resume-skill'><i class="devicon-ubuntu-plain me-2"></i>{typedWords[19]}</button>
          <button className='btn btn-outline-secondary rounded-pill m-1 btn-resume-skill'><i class="devicon-windows8-original me-2"></i>{typedWords[20]}</button>
        </div>

        <h5 className='mt-4'>{typedWords[21]}</h5>
        <div className='d-flex flex-sm-row flex-column justify-content-start'>
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
          {<button className='btn btn-secondary btn-lg mt-5' onClick={downloadResume}>{typedWords[25]}</button>} 
        </div> 

      </div>
    </div>
  );
};


export default Resume;
