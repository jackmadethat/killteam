import { useState } from 'react'

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div id="nightModeToggle"></div>

        <div id="header">
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/killteamLogo.svg" className="logoImg" />
            <h1>Kill Team</h1>
        </div>
        <div className="textCenter">
          <button onClick={toggleVisibility}>Disclaimer</button>
          {isVisible && <p>The following is a hand-made personal project made as a labor of love and to be used as a quick reference. It is not intended to be a replacement for the official Kill Team rulebook. The information provided here may differ from official rules or may not be up-to-date. Support your local game store; buy a physical copy of Kill Team Core Rules.</p>}
        </div>
    </>
  )
}

export default Header
