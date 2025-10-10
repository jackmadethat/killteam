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
            <img src="./src/img/killteamLogo.svg" className="logoImg" />
            <h1>Kill Team</h1>
        </div>
        <div className="textCenter">
          <button onClick={toggleVisibility}>Disclaimer</button>
          {isVisible && <p>The following is provided as a reference and is not intended as a replacement for the official Kill Team rulebook. The information displayed here may differ from official rules or may not be up-to-date. Support your local game store; buy a physical copy.</p>}
        </div>
    </>
  )
}

export default Header
