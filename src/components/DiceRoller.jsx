import { useState } from 'react';

const DiceRoller = () => {
  const diceImageSrcs = [
    "https://raw.githubusercontent.com/jackmadethat/killteam/30719b7cb34a24ee3be913a3c8c13c46b4a72b55/src/img/dice/Dice_1.svg",
    "https://raw.githubusercontent.com/jackmadethat/killteam/30719b7cb34a24ee3be913a3c8c13c46b4a72b55/src/img/dice/Dice_2.svg",
    "https://raw.githubusercontent.com/jackmadethat/killteam/30719b7cb34a24ee3be913a3c8c13c46b4a72b55/src/img/dice/Dice_3.svg",
    "https://raw.githubusercontent.com/jackmadethat/killteam/30719b7cb34a24ee3be913a3c8c13c46b4a72b55/src/img/dice/Dice_4.svg",
    "https://raw.githubusercontent.com/jackmadethat/killteam/30719b7cb34a24ee3be913a3c8c13c46b4a72b55/src/img/dice/Dice_5.svg",
    "https://raw.githubusercontent.com/jackmadethat/killteam/30719b7cb34a24ee3be913a3c8c13c46b4a72b55/src/img/dice/Dice_6.svg",
  ];
  const scatterDiceImageSrcs = [
    "https://raw.githubusercontent.com/jackmadethat/killteam/e9cf675b7f634345986cbd39ae2a28a06e95d057/src/img/dice/Scatter_1.svg",
    "https://raw.githubusercontent.com/jackmadethat/killteam/e9cf675b7f634345986cbd39ae2a28a06e95d057/src/img/dice/Scatter_2.svg",
    "https://raw.githubusercontent.com/jackmadethat/killteam/e9cf675b7f634345986cbd39ae2a28a06e95d057/src/img/dice/Scatter_2.svg",
    "https://raw.githubusercontent.com/jackmadethat/killteam/e9cf675b7f634345986cbd39ae2a28a06e95d057/src/img/dice/Scatter_2.svg",
    "https://raw.githubusercontent.com/jackmadethat/killteam/e9cf675b7f634345986cbd39ae2a28a06e95d057/src/img/dice/Scatter_2.svg",
    "https://raw.githubusercontent.com/jackmadethat/killteam/e9cf675b7f634345986cbd39ae2a28a06e95d057/src/img/dice/Scatter_1.svg",
  ];
  const D3ImageSrcs = [
    "https://raw.githubusercontent.com/jackmadethat/killteam/b1786f2b70ad4473c09c3a27187b2714e0e06a10/src/img/dice/D3_1.svg",
    "https://raw.githubusercontent.com/jackmadethat/killteam/b1786f2b70ad4473c09c3a27187b2714e0e06a10/src/img/dice/D3_2.svg",
    "https://raw.githubusercontent.com/jackmadethat/killteam/b1786f2b70ad4473c09c3a27187b2714e0e06a10/src/img/dice/D3_3.svg",
    "https://raw.githubusercontent.com/jackmadethat/killteam/b1786f2b70ad4473c09c3a27187b2714e0e06a10/src/img/dice/D3_1.svg",
    "https://raw.githubusercontent.com/jackmadethat/killteam/b1786f2b70ad4473c09c3a27187b2714e0e06a10/src/img/dice/D3_2.svg",
    "https://raw.githubusercontent.com/jackmadethat/killteam/b1786f2b70ad4473c09c3a27187b2714e0e06a10/src/img/dice/D3_3.svg",
  ];
  const diceImages = diceImageSrcs.map((src, index) => ({ src, value: index + 1, type: 'd6' }));
  const scatterDiceImages = scatterDiceImageSrcs.map((src, index) => ({ src, value: index + 1, type: 'scatter' }));
  const D3DiceImages = D3ImageSrcs.map((src, index) => ({ src, value: index + 1, type: 'd3' }));
  const [dice, setDice] = useState([
    { ...diceImages[Math.floor(Math.random() * diceImages.length)], id: 0, top: 0, left: 0, state: 'blank' },
    { ...diceImages[Math.floor(Math.random() * diceImages.length)], id: 1, top: 0, left: 0, state: 'blank' },
  ]);
  const [goalVal, setGoalVal] = useState(0);
  const [canRoll, setCanRoll] = useState(true);
  const directions = ['up', 'down', 'left', 'right'];
  const nudgeAmount = 12;

  const addD6 = () => {
    const randomDice = diceImages[Math.floor(Math.random() * diceImages.length)];
    const newDice = [...dice, { ...randomDice, id: dice.length, top: 0, left: 0 }];
    setDice(newDice);
  };

  const addD3 = () => {
    const randomDice = D3DiceImages[Math.floor(Math.random() * D3DiceImages.length)];
    const newDice = [...dice, { ...randomDice, id: dice.length, top: 0, left: 0, state: 'blank' }];
    setDice(newDice);
  };

  const addScatter = () => {
    const randomDice = scatterDiceImages[Math.floor(Math.random() * scatterDiceImages.length)];
    const newDice = [...dice, { ...randomDice, id: dice.length, top: 0, left: 0, state: 'blank' }];
    setDice(newDice);
  };

  const removeDie = (type) => {
    const index = [...dice].reverse().findIndex(die => die.type === type);
    if (index !== -1) {
      setDice(dice.filter((_, i) => i !== dice.length - 1 - index));
    }
  };

  const adjustValue = (add) => {
    setGoalVal(prevGoalVal => Math.min(6, Math.max(0, prevGoalVal + (add ? 1 : -1))));
  };

  const rollDice = () => {
    setDice(dice.map((die) => {
      const direction = directions[Math.floor(Math.random() * directions.length)];
      let top = die.top;
      let left = die.left;

      switch (direction) {
        case 'up':
          top -= Math.floor(Math.random() * nudgeAmount) + 1;
          break;
        case 'down':
          top += Math.floor(Math.random() * nudgeAmount) + 1;
          break;
        case 'left':
          left -= Math.floor(Math.random() * nudgeAmount) + 1;
          break;
        case 'right':
          left += Math.floor(Math.random() * nudgeAmount) + 1;
          break;
      }

      let newValue, newSrc;
      switch (die.type) {
        case 'd6':
          newValue = Math.floor(Math.random() * 6) + 1;
          newSrc = diceImages.find(img => img.value === newValue).src;
          break;
        case 'd3':
          newValue = Math.floor(Math.random() * 3) + 1;
          newSrc = D3DiceImages.find(img => img.value === newValue).src;
          break;
        case 'scatter':
          newValue = Math.floor(Math.random() * 6) + 1;
          newSrc = scatterDiceImages.find(img => img.value === newValue).src;
          break;
        default:
          newValue = die.value;
          newSrc = die.src;
      }

      return { 
        ...die, 
        value: newValue,
        src: newSrc,
        rotation: Math.floor(Math.random() * 360 - 180),
        top,
        left,
        state: 'none'
      };
    }));
  };

  const startCycle = () => {
    const cycle = setInterval(rollDice, 50); // Green number sets pace of animation
    const nextCycle = () => {
      clearInterval(cycle);
      stage_02();
    }
    setTimeout(nextCycle, 1000); // Next stage called after running stage for 1 second
    const stage_02 = () => {
      const cycle = setInterval(rollDice, 100);
      const nextCycle = () => {
        clearInterval(cycle);
        stage_03();
      }
      setTimeout(nextCycle, 1000);
    }
    const stage_03 = () => {
      const cycle = setInterval(rollDice, 175);
      const endCycle = () => {
        clearInterval(cycle);
        setTimeout(finishRoll, 500);
      }
      setTimeout(endCycle, 1000);
    }
  }

  const animateDice = () => {
    if (canRoll && dice.length > 0) {
      setCanRoll(false);
      setDice(dice.map((die) => ({ ...die, state: 'blank', top: 0, left: 0, rotation: 0 })));
      startCycle();
    }
  }

  const finishRoll = () => {
    setCanRoll(true);
    setDice(prevDice => prevDice.map((die) => {
      if (die.type === 'scatter' || goalVal == 0) {
        return { ...die, state: 'blank' };
      }
      return { ...die, state: die.value >= goalVal ? 'selected' : 'not-selected' };
    }));
  }

  return (
    <div className="sectionContent" id="diceroller">
        <button className="disclaimerBtn" style={{ marginRight: 7 + 'px' }}><span style={{ color: 'white' }} onClick={() => removeDie('d6')}>REMOVE D6</span></button>
        <button className="disclaimerBtn" style={{ marginTop: 25 + 'px', marginLeft: 7 + 'px' }}><span style={{ color: 'white' }} onClick={addD6}>ADD D6</span></button>
        <br />
        <button className="disclaimerBtn" style={{ marginRight: 7 + 'px' }}><span style={{ color: 'white' }} onClick={() => removeDie('d3')}>REMOVE D3</span></button>
        <button className="disclaimerBtn" style={{ marginTop: 5 + 'px', marginLeft: 7 + 'px' }}><span style={{ color: 'white' }} onClick={addD3}>ADD D3</span></button>
        <br />
        <button className="disclaimerBtn" style={{ marginRight: 7 + 'px' }}><span style={{ color: 'white' }} onClick={() => removeDie('scatter')}>REMOVE SCATTER</span></button>
        <button className="disclaimerBtn" style={{ marginTop: 5 + 'px', marginLeft: 7 + 'px' }}><span style={{ color: 'white' }} onClick={addScatter}>ADD SCATTER</span></button>
        <table className="trackerTable" style={{ marginTop: 10 + 'px', maxWidth: 200 + 'px' }}>
          <thead>
          <tr>
            <th style={{ fontSize: 1.25 + 'em' }}><b>Value to Beat</b></th>
          </tr>
        </thead>
          <tbody>
            <tr>
              <td><button className="pointsBtn" onClick={() => adjustValue(false)}><span>-</span></button><span style={{ fontSize: 1.5 + 'em' }}>{goalVal}</span><button className="pointsBtn" onClick={() => adjustValue(true)}><span>+</span></button></td>
            </tr>
          </tbody>
        </table>
        <div className="diceBox">
          {dice.map((die, index) => (
            <img
              key={die.id}
              src={die.src}
              className={`diceImg ${die.type}`}
              style={{ 
                transform: `rotate(${die.rotation}deg)`,
                position: 'relative',
                top: `${die.top}px`,
                left: `${die.left}px`,
                backgroundColor: die.state === 'selected' ? 'rgba(0, 128, 0, 0.4)' : die.state === 'not-selected' ? 'rgba(128, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0)'
              }}
            />
          ))}
        </div>
        <button className="disclaimerBtn"><span style={{ color: 'white', paddingLeft: 30 + 'px', paddingRight: 30 + 'px' }} onClick={animateDice}>ROLL</span></button>
    </div>
  )
}

export default DiceRoller