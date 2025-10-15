import { useState } from 'react'

const MapsKey = () => {
  const [keyVisible, setKeyVisible] = useState(false);

  const toggleKey = () => {
    setKeyVisible(!keyVisible);
  };

  return (
    <>
      <div className="textCenter">
        <button className="disclaimerBtn" onClick={toggleKey} style={{ marginBottom: 20 + 'px' }}><span style={{ color: 'white' }}>SHOW KEY</span></button>
      </div>
      {keyVisible && <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/maps/MapKey.JPG" className="imgGraphic" style={{ maxWidth: 400 + 'px', paddingBottom: 20 + 'px' }} />}
    </>
  )
}

export default MapsKey
