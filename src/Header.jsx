import { useState } from 'react'

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isNightMode, setIsNightMode] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    document.querySelector('body').style.backgroundColor = isNightMode ? '#FFF' : '#181818';
    document.querySelectorAll('*').forEach((element) => {
      element.style.color = isNightMode ? '#181818' : '#FFF';
    });
    document.querySelectorAll('em').forEach((element) => {
      element.style.color = '#e97c00';
    });
    document.querySelector('#nightModeToggle').style.backgroundColor = isNightMode ? '#181818' : '#FFF';
    document.querySelector('#nightModeToggle').style.maskImage = isNightMode ? 'url("https://raw.githubusercontent.com/jackmadethat/killteam/8c93ba3a2e264ab26877e9ba861363731e544023/src/img/moon.svg")' : 'url("https://raw.githubusercontent.com/jackmadethat/killteam/8c93ba3a2e264ab26877e9ba861363731e544023/src/img/sun.svg")';
    document.querySelector('h1').style.color = isNightMode ? '#181818' : '#FFF';
    document.querySelector('button').style.color = '#000';
    document.querySelector('#bgImage').style.opacity = isNightMode ? 0 : 1;
  }

  return (
    <>
      <div id="nightModeToggle" className="hovered" onClick={toggleNightMode}></div>

        <div id="header">
            <div className="logoImg" style={{ backgroundColor: isNightMode ? '#F80' : '#000' }}></div>
            <h1>Kill Team</h1>
        </div>
        <div className="textCenter">
          <button onClick={toggleVisibility}>Disclaimer</button>
          {isVisible && <p id="disclaimer"><i>The following is a hand-made personal project made as a labor of love and to be used as a quick reference. It is not intended to be a replacement for the official Kill Team rulebook. The information provided here may differ from official rules or may be deprecated. Support your local game store; buy a physical copy of Kill Team Core Rules.</i></p>}
        </div>
    </>
  )
}

export default Header
