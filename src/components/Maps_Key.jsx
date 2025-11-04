import { useState } from 'react'

export const MapsKey = () => {
  const [keyVisible, setKeyVisible] = useState(false);

  const toggleKey = () => {
    setKeyVisible(!keyVisible);
  };

  return (
    <>
      <div className="textCenter">
        <button className="disclaimerBtn" onClick={toggleKey} style={{ marginBottom: 20 + 'px' }}><span style={{ color: 'white' }}>SHOW KEY</span></button>
      </div>
      {keyVisible && 
      <figure>
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/maps/MapRule.JPG" className="imgGraphic" style={{ maxWidth: 400 + 'px', paddingBottom: 20 + 'px' }} />
        <p>View the Terrain Rules section for killzone-specific rules.</p>
        <br />
      </figure>}
    </>
  )
}

export default MapsKey
