import { useState } from 'react'

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNightMode, setIsNightMode] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleNightMode = () => {
    // Disabling night mode for now
    setIsNightMode(!isNightMode);
    document.querySelector('body').style.backgroundColor = isNightMode ? '#FFF' : '#181818';
    document.querySelectorAll('*').forEach((element) => {
      element.style.color = isNightMode ? '#181818' : '#FFF';
    });
    document.querySelectorAll('em').forEach((element) => {
      element.style.color = '#e97c00';
    });
    document.querySelectorAll('.actionName').forEach((element) => {
      element.style.color = '#FFF';
    });
    document.querySelectorAll('.actionCost').forEach((element) => {
      element.style.color = '#FFF';
    });
    document.querySelector('#nightModeToggle').style.backgroundColor = isNightMode ? '#181818' : '#FFF';
    document.querySelector('#nightModeToggle').style.maskImage = isNightMode ? 'url("https://raw.githubusercontent.com/jackmadethat/killteam/8c93ba3a2e264ab26877e9ba861363731e544023/src/img/moon.svg")' : 'url("https://raw.githubusercontent.com/jackmadethat/killteam/8c93ba3a2e264ab26877e9ba861363731e544023/src/img/sun.svg")';
    document.querySelector('h1').style.color = isNightMode ? '#181818' : '#FFF';
    document.querySelector('button').style.color = '#000';
    document.querySelector('#bgImage').style.opacity = isNightMode ? 0 : 1;
  }

  return (
    <>
      {/* <div id="nightModeToggle" className="hovered" onClick={toggleNightMode}></div> */}

        <div id="header">
            <div className="logoImg" style={{ backgroundColor: isNightMode ? '#F80' : '#000' }}></div>
            <h1>Kill Team</h1>
        </div>
        <div className="textCenter">
          <button className="disclaimerBtn" onClick={toggleVisibility}><span style={{ color: 'white' }}>DISCLAIMER</span></button>
          {isVisible && <p id="disclaimer"><i>This is a hand-made personal project made for the love of the game. It should not be used as a substitute for the official Kill Team rulebook as the information provided here differs from official rules or is out-of-date. The information displayed here has been compiled from freely available, legal sources such as Scribd, reddit, YouTube, and the Warhammer Community website. The author accepts no payments, donations or compensation of any kind for this work.<br /><br />Kill Team is the property of Games Workshop. Support your local game store; buy a physical copy of Kill Team Core Rules and a Kill Team box set.</i></p>}
        </div>
    </>
  )
}

export default Header
