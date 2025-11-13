import { useState } from 'react'

export const MapsKey = () => {
  const [keyVisible, setKeyVisible] = useState(false);

  const toggleKey = () => {
    setKeyVisible(!keyVisible);
  };

  return (
    <>
      <div className="textCenter">
        <button className="disclaimerBtn" onClick={toggleKey} style={{ marginBottom: 20 + 'px' }}><span style={{ color: 'white' }}>{keyVisible ? "HIDE KEY" : "SHOW KEY"}</span></button>
        {keyVisible && 
          <div className="mapGrid">
              <figure>
                <img src="https://raw.githubusercontent.com/jackmadethat/killteam/e8d52443d51a4881e372065a015fd275f8069a35/src/img/maps/MapRule.svg" className="imgGraphic" />
                <p>View the Terrain Rules section (8.3) for killzone-specific rules.</p>
                <br />
              </figure>
          </div>
        }
      </div>
    </>
  )
}

export default MapsKey
