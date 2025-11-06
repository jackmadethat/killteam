import { useState } from 'react';
import { Killzones } from './Data_Killzones'
import { CritOpsData } from './Data_CritOps'
import { TacOpsData } from './Data_TacOps'

const Tracker = () => {
  const [selectedKillzones, setSelectedKillzones] = useState([]);
  const [selectedTacOps, setSelectedTacOps] = useState([]);
  const [critOp, setCritOp] = useState(null);
  const [tacOps, setTacOps] = useState([]);
  const [killzoneImage, setKillzoneImage] = useState(null);
  const [generateGame, setGenerateGame] = useState(false);

  const killzoneOptions = [
    'Open', 'Bheta-Decima', 'Gallowdark', 'Mechelen', 'Octarius', 'Tomb World', 'Volkus'
  ];

  const tacOpOptions = [
    'Infiltration', 'Recon', 'Seek & Destroy', 'Security'
  ];

  const handleGenerate = () => {
    // Select random Crit Op
    const randomCritOp = CritOpsData[Math.floor(Math.random() * CritOpsData.length)];
    setCritOp(randomCritOp.content);

    // Select 2 random Tac Ops
    const filteredTacOps = TacOpsData.filter(tacOp => selectedTacOps.includes(tacOp.archetype));
    if (filteredTacOps.length >= 2) {
      const randomTacOp1 = filteredTacOps[Math.floor(Math.random() * filteredTacOps.length)];
      let randomTacOp2 = filteredTacOps[Math.floor(Math.random() * filteredTacOps.length)];
      while (randomTacOp2 === randomTacOp1) {
        randomTacOp2 = filteredTacOps[Math.floor(Math.random() * filteredTacOps.length)];
      }
      setTacOps([randomTacOp1.content, randomTacOp2.content]);
    } else if (filteredTacOps.length === 1) {
      setTacOps([filteredTacOps[0].content, null]);
    } else {
      setTacOps([null, null]);
    }

    // Select random Killzone
    const filteredKillzones = Killzones.filter(killzone => selectedKillzones.includes(killzone.killzone));
    if (filteredKillzones.length > 0) {
      const randomKillzone = filteredKillzones[Math.floor(Math.random() * filteredKillzones.length)];
      setKillzoneImage(randomKillzone.image);
    } else {
      setKillzoneImage(null);
    }
  };

  const handleKillzoneChange = (killzone) => {
    if (selectedKillzones.includes(killzone)) {
      setSelectedKillzones(selectedKillzones.filter(k => k !== killzone));
    } else {
      setSelectedKillzones([...selectedKillzones, killzone]);
    }
  };

  const handleTacOpChange = (tacOp) => {
    if (selectedTacOps.includes(tacOp)) {
      setSelectedTacOps(selectedTacOps.filter(t => t !== tacOp));
    } else {
      setSelectedTacOps([...selectedTacOps, tacOp]);
    }
  };

  const handleClear = () => {
    setCritOp(null);
    setTacOps([]);
    setKillzoneImage(null);
    setSelectedKillzones([]);
    setSelectedTacOps([]);
  };

  const toggleGenerateGame = () => {
    setGenerateGame(!generateGame);
  }

  const zipArrays = (arr1, arr2) => {
    const maxLength = Math.max(arr1.length, arr2.length);
    return Array(maxLength).fill().map((_, index) => ({
      killzone: arr1[index],
      tacOp: arr2[index]
    }));
  }

  return (
    <div className="sectionContent" id="tracker" style={{ textAlign: 'center' }}>
      <button className="disclaimerBtn" style={{ marginTop: 25 + 'px' }} onClick={toggleGenerateGame}><span style={{ color: 'white' }}>GENERATE GAME</span></button>
      {generateGame && 
        <>
          <table className="optionsTable">
            <thead>
              <tr>
                <th>Select Killzone</th>
                <th>Select Tac Ops</th>
              </tr>
            </thead>
            <tbody>
              {zipArrays(killzoneOptions, tacOpOptions).map((item, index) => (
                <tr key={index}>
                  <td>
                    {item.killzone && (
                      <div>
                        <input type="checkbox" checked={selectedKillzones.includes(item.killzone)} onChange={() => handleKillzoneChange(item.killzone)} />
                        <label>{item.killzone}</label>
                      </div>
                    )}
                  </td>
                  <td>
                    {item.tacOp && (
                      <div>
                        <input type="checkbox" checked={selectedTacOps.includes(item.tacOp)} onChange={() => handleTacOpChange(item.tacOp)} />
                        <label>{item.tacOp}</label>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: 20 + 'px' }}>
            <button className="disclaimerBtn" onClick={handleGenerate}><span style={{ color: 'white' }}>GENERATE</span></button>
            <button className="disclaimerBtn" onClick={handleClear}><span style={{ color: 'white' }}>CLEAR</span></button>
          </div>
          {critOp && (
            <div>
              <h2>Crit Op</h2>
              <div className="missionGrid">
                {critOp}
              </div>
            </div>
          )}
          {tacOps.length > 0 && (
            <div style={{ textAlign: 'left' }}>
              <h2 style={{ textAlign: 'center' }}>Tac Ops</h2>
                <div className="missionGrid">
                  {tacOps[0]}
                  {tacOps[1]}
                </div>
            </div>
          )}
          {killzoneImage && (
            <div>
              <h2>Killzone</h2>
              {killzoneImage}
            </div>
          )}
        </>
      }
    </div>
  );
};

export default Tracker;