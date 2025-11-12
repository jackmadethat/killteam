import { useState } from 'react'
import { TacOpsData } from './Data_TacOps'

const TacOps = () => {
  const [visible_Infiltration, setVisible_Infiltration] = useState(false);
  const [visible_Security, setVisible_Security] = useState(false);
  const [visible_Recon, setVisible_Recon] = useState(false);
  const [visible_SeekDestroy, setVisible_SeekDestroy] = useState(false);

  const toggleInfiltration = () => {
    setVisible_Infiltration(!visible_Infiltration);
  };

  const toggleSecurity = () => {
    setVisible_Security(!visible_Security);
  };

  const toggleRecon = () => {
    setVisible_Recon(!visible_Recon);
  };

  const toggleSeekDestroy = () => {
    setVisible_SeekDestroy(!visible_SeekDestroy);
  };

  return (
    <div className="sectionContent" id="tacOps">
      <p style={{ marginBottom: 20 + 'px' }}>A Tac Op is a secret objective that each player chooses individually at the start of the game by selecting one from one of their team's archetypes (for example, Warpcoven must select either <b>Security</b> or <b>Recon</b>). Each Tac Op explains how it is scored and other relevant information, such as Op-specific actions. Each player can score a maximum of 6VP total (for the entire game) from their Tac Op.<br /><br />
      <em>Click on a sub-heading below to see available Tac Ops.</em></p>

      <h2 className="subHeading hovered" style={{ fontSize: 1.3 + 'em', marginLeft: 2 + '%' }} onClick={toggleInfiltration}>Infiltration</h2>
      <div className="weaponLine" style={{ marginBottom: 20 + 'px', marginLeft: 1 + '%' }}></div>
      {visible_Infiltration &&
        <div className="missionGrid">
          {TacOpsData.filter((item) => item.archetype === 'Infiltration').map((item) => (
            <div key={item.id}>{item.content}</div>
          ))}
        </div>
      }

      <h2 className="subHeading hovered" style={{ fontSize: 1.3 + 'em', marginLeft: 2 + '%' }} onClick={toggleRecon}>Recon</h2>
      <div className="weaponLine" style={{ marginBottom: 20 + 'px', marginLeft: 1 + '%' }}></div>
      {visible_Recon &&
        <div className="missionGrid">
          {TacOpsData.filter((item) => item.archetype === 'Recon').map((item) => (
            <div key={item.id}>{item.content}</div>
          ))}
        </div>
      }

      <h2 className="subHeading hovered" style={{ fontSize: 1.3 + 'em', marginLeft: 2 + '%' }} onClick={toggleSeekDestroy}>Seek & Destroy</h2>
      <div className="weaponLine" style={{ marginBottom: 20 + 'px', marginLeft: 1 + '%' }}></div>
      {visible_SeekDestroy &&
        <div className="missionGrid">
          {TacOpsData.filter((item) => item.archetype === 'Seek & Destroy').map((item) => (
            <div key={item.id}>{item.content}</div>
          ))}
        </div>
      }

      <h2 className="subHeading hovered" style={{ fontSize: 1.3 + 'em', marginLeft: 2 + '%' }} onClick={toggleSecurity}>Security</h2>
      <div className="weaponLine" style={{ marginBottom: 20 + 'px', marginLeft: 1 + '%' }}></div>
      {visible_Security &&
        <div className="missionGrid">
          {TacOpsData.filter((item) => item.archetype === 'Security').map((item) => (
            <div key={item.id}>{item.content}</div>
          ))}
        </div>
      }
    </div>

  )
}

export default TacOps
