import React, { useEffect, useState } from 'react';
import '../CSS/Home.css'
import { useNavigate } from "react-router-dom";
import { HiOutlinePaperAirplane } from "react-icons/hi2";


const Home = () => {

  const [typedText, setTypedText] = useState(false)
  const [currentIntroText, setCurrentIntroText] = useState('');
  const [currentIntroText2, setCurrentIntroText2] = useState('')
  const [currentMottoText, setCurrentMottoText] = useState('');
  const [currentQuoteText, setCurrentQuoteText] = useState('');
  const [currentJapaneseMottoText, setCurrentJapaneseMottoText] = useState('');
  const [currentJapaneseText, setCurrentJapaneseText] = useState('');
  const navigate = useNavigate();
  const [moved, setMoved] = useState(false);

  const introText = '  This is Raymond Ng!';
  const introText2 = ' Welcome to my portfolio page!';
  const mottoText = ' "What you desperately learn becomes your talent."';
  const quoteText = '  --FULLMETAL ALCHEMIST';
  const japaneseMottoText = '  "自分が必死に学習したことが才能になる"';
  const japaneseText = '  --鋼の錬金術師';

  let introCharIndex = 0;
  let introChar2Index = 0;
  let mottoCharIndex = 0;
  let quoteCharIndex = 0;
  let japaneseMottoCharIndex = 0;
  let japaneseCharIndex = 0;
  let interval;

  const moveArrowColumn = () => {
    setMoved(true);
    setTimeout(() => {
      navigate('/about');
    }, 600);
  };


  useEffect(() => {
    interval = setInterval(() => {
      if (introCharIndex < introText.length) {
        setCurrentIntroText((prevText) => prevText + introText[introCharIndex]);
        introCharIndex++;
      } else if (introChar2Index < introText2.length) {
        setTypedText(true)
        setCurrentIntroText2((prevText) => prevText + introText2[introChar2Index]);
        introChar2Index++;
      }
      else if (mottoCharIndex < mottoText.length) {
        setCurrentMottoText((prevText) => prevText + mottoText[mottoCharIndex]);
        mottoCharIndex++;
      } else if (quoteCharIndex < quoteText.length) {
        setCurrentQuoteText((prevText) => prevText + quoteText[quoteCharIndex]);
        quoteCharIndex++;
      } else if (japaneseMottoCharIndex < japaneseMottoText.length) {
        setCurrentJapaneseMottoText((prevText) => prevText + japaneseMottoText[japaneseMottoCharIndex]);
        japaneseMottoCharIndex++;
      } else if (japaneseCharIndex < japaneseText.length) {
        setCurrentJapaneseText((prevText) => prevText + japaneseText[japaneseCharIndex]);
        japaneseCharIndex++;
      } else {
        clearInterval(interval);
      }
    }, 55);

    return () => {
      clearInterval(interval);
    };

  }, []);


  return (
    <div className='d-flex col-12 flex-sm-row flex-column content-container'>
      <div className='home-page-bg col-md-10 d-flex justify-content-center align-items-center'>
        <div className="container">
          <div className="row">
            <div className='col-12 text-center'>
              <h1 className="display-5 fw-bolder my-5">
                {currentIntroText.replace("undefined", "")}
                {typedText ? (<i className="fa-regular fa-face-smile-wink fa-bounce"></i>) : null}
              </h1>
              <h1 className="display-5 fw-bolder my-5">
                {currentIntroText2.replace("undefined", "")}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className='arrow-column-bg col-md-1'></div>

      <div className={`arrow-column d-flex col-sm-5  col-12 col-md-1 justify-content-center align-items-center text-center ${moved ? 'moved' : ''}`} onClick={moveArrowColumn}>
        <HiOutlinePaperAirplane className='arrow-img' />
      </div>
    </div>
  );
}

export default Home;
