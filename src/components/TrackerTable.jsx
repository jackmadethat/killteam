import { useState, useEffect } from 'react';
import KillOpsTable from "./KillOpsTable"

const TrackerTable = () => {
  const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
      const storedValue = localStorage.getItem(key);
      return storedValue !== null ? parseInt(storedValue) : initialValue;
    });

    useEffect(() => {
      localStorage.setItem(key, value);
    }, [value, key]);

    return [value, setValue];
  };

  const [killOpShown, setKillOpShown] = useState(false);
  const [turningPoint, setTurningPoint] = useLocalStorage('turningPoint', 0);
  const [p1_CP, setp1_CP] = useLocalStorage('p1_CP', 0);
  const [p2_CP, setp2_CP] = useLocalStorage('p2_CP', 0);
  const [p1_CritOp, setp1_CritOp] = useLocalStorage('p1_CritOp', 0);
  const [p2_CritOp, setp2_CritOp] = useLocalStorage('p2_CritOp', 0);
  const [p1_TacOp, setp1_TacOp] = useLocalStorage('p1_TacOp', 0);
  const [p2_TacOp, setp2_TacOp] = useLocalStorage('p2_TacOp', 0);
  const [p1_KillOp, setp1_KillOp] = useLocalStorage('p1_KillOp', 0);
  const [p2_KillOp, setp2_KillOp] = useLocalStorage('p2_KillOp', 0);

  const toggleKillOp = () => {
    setKillOpShown(!killOpShown);
  }

  const adjustTurningPoint = () => {
    setTurningPoint(turningPoint + 1);
  }

  const adjustP1_CP = (add) => {
    setp1_CP(prevP1_CP => Math.max(0, prevP1_CP + (add ? 1 : -1)));
  }

  const adjustP2_CP = (add) => {
    setp2_CP(prevP2_CP => Math.max(0, prevP2_CP + (add ? 1 : -1)));
  }

  const adjustP1_CritOp = (add) => {
    setp1_CritOp(prevP1_CritOp => Math.min(6, Math.max(0, prevP1_CritOp + (add ? 1 : -1))));
  }

  const adjustP2_CritOp = (add) => {
    setp2_CritOp(prevP2_CritOp => Math.min(6, Math.max(0, prevP2_CritOp + (add ? 1 : -1))));
  }

  const adjustP1_TacOp = (add) => {
    setp1_TacOp(prevP1_TacOp => Math.min(6, Math.max(0, prevP1_TacOp + (add ? 1 : -1))));
  }

  const adjustP2_TacOp = (add) => {
    setp2_TacOp(prevP2_TacOp => Math.min(6, Math.max(0, prevP2_TacOp + (add ? 1 : -1))));
  }

  const adjustP1_KillOp = (add) => {
    setp1_KillOp(prevP1_KillOp => Math.min(6, Math.max(0, prevP1_KillOp + (add ? 1 : -1))));
  }

  const adjustP2_KillOp = (add) => {
    setp2_KillOp(prevP2_KillOp => Math.min(6, Math.max(0, prevP2_KillOp + (add ? 1 : -1))));
  }

  const resetTable = () => {
    setTurningPoint(0);
    setp1_CP(0);
    setp2_CP(0);
    setp1_CritOp(0);
    setp2_CritOp(0);
    setp1_TacOp(0);
    setp2_TacOp(0);
    setp1_KillOp(0);
    setp2_KillOp(0);
  }

  return (
    <>
      <table className="trackerTable" style={{ width: 200 + 'px', marginBottom: -15 + 'px' }}>
        <thead>
          <tr>
            <th style={{ fontSize: 1.25 + 'em' }}><b>Turning Point</b></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ fontSize: 1.8 + 'em' }}><span>{turningPoint}</span></td>
          </tr>
          <tr>
            <td><button className="pointsBtn" style={{ marginTop: 0 + 'px' }} onClick={adjustTurningPoint}><span>+</span></button></td>
          </tr>
        </tbody>
      </table>
      <table className="trackerTable">
        <thead>
          <tr>
            <th style={{ fontSize: 1.25 + 'em' }}><b>Player 1</b></th>
            <th style={{ fontSize: 1.25 + 'em' }}><b>Player 2</b></th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr>
            <td>Command Points</td>
            <td>Command Points</td>
          </tr>
          <tr>
            <td><button className="pointsBtn" onClick={() => adjustP1_CP(false)}><span>-</span></button><span>{p1_CP}</span><button className="pointsBtn" onClick={() => adjustP1_CP(true)}><span>+</span></button></td>
            <td><button className="pointsBtn" onClick={() => adjustP2_CP(false)}><span>-</span></button><span>{p2_CP}</span><button className="pointsBtn" onClick={() => adjustP2_CP(true)}><span>+</span></button></td>
          </tr>
          <tr>
            <td>Crit Op</td>
            <td>Crit Op</td>
          </tr>
          <tr>
            <td><button className="pointsBtn" onClick={() => adjustP1_CritOp(false)}><span>-</span></button><span>{p1_CritOp}</span><button className="pointsBtn" onClick={() => adjustP1_CritOp(true)}><span>+</span></button></td>
            <td><button className="pointsBtn" onClick={() => adjustP2_CritOp(false)}><span>-</span></button><span>{p2_CritOp}</span><button className="pointsBtn" onClick={() => adjustP2_CritOp(true)}><span>+</span></button></td>
          </tr>
          <tr>
            <td>Tac Op</td>
            <td>Tac Op</td>
          </tr>
          <tr>
            <td><button className="pointsBtn" onClick={() => adjustP1_TacOp(false)}><span>-</span></button><span>{p1_TacOp}</span><button className="pointsBtn" onClick={() => adjustP1_TacOp(true)}><span>+</span></button></td>
            <td><button className="pointsBtn" onClick={() => adjustP2_TacOp(false)}><span>-</span></button><span>{p2_TacOp}</span><button className="pointsBtn" onClick={() => adjustP2_TacOp(true)}><span>+</span></button></td>
          </tr>
          <tr>
            <td>Kill Op</td>
            <td>Kill Op</td>
          </tr>
          <tr>
            <td><button className="pointsBtn" onClick={() => adjustP1_KillOp(false)}><span>-</span></button><span>{p1_KillOp}</span><button className="pointsBtn" onClick={() => adjustP1_KillOp(true)}><span>+</span></button></td>
            <td><button className="pointsBtn" onClick={() => adjustP2_KillOp(false)}><span>-</span></button><span>{p2_KillOp}</span><button className="pointsBtn" onClick={() => adjustP2_KillOp(true)}><span>+</span></button></td>
          </tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr>
            <td>Victory Points</td>
            <td>Victory Points</td>
          </tr>
          <tr>
            <td style={{ fontSize: 2.25 + 'em' }}><span>{p1_CritOp + p1_TacOp + p1_KillOp}</span></td>
            <td style={{ fontSize: 2.25 + 'em' }}><span>{p2_CritOp + p2_TacOp + p2_KillOp}</span></td>
          </tr>
        </tbody>
      </table>
      <button className="disclaimerBtn" style={{ marginTop: 10 + 'px' }} onClick={resetTable}><span style={{ color: 'white' }}>RESET</span></button>
      <br />
      <button className="disclaimerBtn" style={{ marginTop: 10 + 'px' }} onClick={toggleKillOp}><span style={{ color: 'white' }}>SHOW KILL OP</span></button>
      {killOpShown &&
        <KillOpsTable />
      }
    </>
  );
};

export default TrackerTable;