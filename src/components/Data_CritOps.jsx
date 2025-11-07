export const CritOpsData = [
  {
    id: 1,
    content: 
      <div className="missionOp">
        <h3 className="opTitle">SECURE</h3>
        <h3 className="opSubHeading">MISSION ACTION</h3>
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">SECURE</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> One objective marker the active operative controls is secured by your Kill Team until the enemy Kill Team secures that objective marker.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> An operative cannot perform this action during the first turning point, or while within control range of an enemy operative.</li>
            </ul>
        </div>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <p>At the end of each turning point after the first:</p>
        <ul>
          <li>If any objective markers are secured by your Kill Teamm you score 1VP.</li>
          <li>If more objective markers are secured by your Kill Team than your opponent's Kill Team, you score 1VP.</li>
        </ul>
      </div>
  },
  {
    id: 2,
    content: 
      <div className="missionOp">
        <h3 className="opTitle">LOOT</h3>
        <h3 className="opSubHeading">MISSION ACTION</h3>
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">LOOT</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> One objective marker the active operative controls is looted.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> An operative cannot perform this action during the first turning point, while within control range of an enemy operative, or if that objective marker has already been looted during this turning point.</li>
            </ul>
        </div>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <p>Whenever a friendly operative performs the <b>LOOT</b> action, you score 1VP (to a maximum of 2VP per turning point).</p>
      </div>
  },
  {
    id: 3,
    content: 
      <div className="missionOp">
        <h3 className="opTitle">TRANSMISSION</h3>
        <h3 className="opSubHeading">MISSION ACTION</h3>
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">INITIATE TRANSMISSION</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> One objective marker the active operative controls is transmitting until the start of the next turning point.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> An operative cannot perform this action during the first turning point, or while within control range of an enemy operative.</li>
            </ul>
        </div>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <p>At the end of each turning point after the first:</p>
        <ul>
          <li>If friendly operatives control any transmitting objective markers, you score 1VP.</li>
          <li>If friendly operatives control more transmitting objective markers than enemy operatives do, you score 1VP.</li>
        </ul>
      </div>
  },
  {
    id: 4,
    content: 
      <div className="missionOp">
        <h3 className="opTitle">UPLOAD</h3>
        <h3 className="opSubHeading">MISSION ACTION</h3>
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">UPLOAD</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> Remove all of your opponent's Upload points (if any) from an objective marker the active operative controls.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> Then that same objective marker gains 1 of your Upload points, unless it's already gained 1 of your Upload points during this turning point, of you've scored from that objective marker.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> An operative cannot perform this action during the first turning point, or while within control range of an enemy operative.</li>
            </ul>
        </div>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <p>At the end of each turning point after the first, you can score from any objective markers that have 1 or more of your Upload points. For each that you do, remove all of the Upload points from it - you score the same number as VP. You can only score from each objective marker once. Friendly operatives don't have to control an objective marker to score from it.</p>
      </div>
  },
  {
    id: 5,
    content: 
      <div className="missionOp">
        <h3 className="opTitle">INTEL</h3>
        <h3 className="opSubHeading">MISSION ACTION</h3>
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">COMPILE INTEL</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> One objective marker the active operative controls gains 1 Intel point.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> An operative cannot perform this action during the first turning point, while within control range of an enemy operative, or if that objective marker has already gained an Intel point during this turning point.</li>
            </ul>
        </div>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>ADDITIONAL RULES</h3>
        <p>In each turning point after the first, the <b>PICK UP MARKER</b> action can be performed upon each objective marker that has at least 1 Intel point. If performed, that marker cannot gain any more Intel points.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <p>At the end of the fourth turning point, for each objective marker friendly operatives control, you score VP equal to its Intel points (ie. 1 objective marker = 1VP, 2 markers = 2VP, etc.)</p>
      </div>
  },
  {
    id: 6,
    content: 
      <div className="missionOp">
        <h3 className="opTitle">EXTRACTION</h3>
        <h3 className="opSubHeading">MISSION ACTION</h3>
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">SEARCH</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> One objective marker the active operative controls is searched. If it's the last objective marker to be searched, that marker becomes the extraction objective marker.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> An operative cannot perform this action during the first turning point, while within control range of an enemy operative, or if that objective marker has already been searched.</li>
            </ul>
        </div>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>ADDITIONAL RULES</h3>
        <p>The <b>PICK UP MARKER</b> action can be performed upon the extraction objective marker. While an operative is carrying that marker, worsen the Hit stat of it's weapons by 1, it cannot be removed and set up again more than 6" away, and it cannot perform <b>CHARGE</b> or <b>DASH</b> actions.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <p>Whenever a friendly operative performs the <b>SEARCH</b> action, you score 1VP if it's the <em>first</em> or <em>third</em> objective marker to be searched, or 2VP if it's the <em>second</em>.</p>
        <p>At the end of each turning point after the first, if friendly operatives control the extraction objective marker, you score 1VP or 2VP if it's the fourth turning point.</p>
      </div>
  },
  {
    id: 7,
    content: 
      <div className="missionOp">
        <h3 className="opTitle">SABOTAGE</h3>
        <h3 className="opSubHeading">MISSION ACTION</h3>
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">SABOTAGE</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> If the active operative controls the objective marker wholly within your opponent's territory, that marker is sabotaged.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> An operative cannot perform this action during the first turning point, while within control range of an enemy operative, or if that objective marker has already been sabotaged during this turning point.</li>
            </ul>
        </div>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <p>Whenever a friendly operative performs the <b>SABOTAGE</b> action, you score 1VP.</p>
        <p>At the end of each turning point after the first, you score 1VP for each of the following that friendly operatives control:</p>
        <ul>
          <li>The objective marker wholly within your territory (unless it's been sabotaged this turning point).</li>
          <li>The objective marker on the centreline.</li>
        </ul>
        <p>You can score a maximum of 2VP from this Tac Op per turning point.</p>
      </div>
  },
  {
    id: 8,
    content: 
      <div className="missionOp">
        <h3 className="opTitle">POWER SURGE</h3>
        <h3 className="opSubHeading">MISSION ACTION</h3>
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">REROUTE POWER</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> One surged objective marker the active operative controls is rerouted.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> An operative cannot perform this action during the first turning point, while within control range of an enemy operative, or if that objective marker has already been rerouted.</li>
            </ul>
        </div>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>ADDITIONAL RULES</h3>
        <p>As a <b>STRATEGIC GAMBIT</b> in each turning point after the first, one player selects one objective marker to be surged until the start of the next turning point (not one that has previously surged). The player who doesn't have initiative selects first, alternating players each turning point thereafter.</p>

        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <p>Whenever a friendly operative performs the <b>REROUTE POWER</b> action, you score 1VP</p>
        <p>At the end of each turning point after the first: If a friendly operative controls the surged objective marker, you score 1VP; if friendly operatives control more objective markers than enemy operatives do, you score 1VP.</p>
        <p>You can score a maximum of 2VP from this Tac Op per turning point.</p>
      </div>
  },
  {
    id: 9,
    content: 
      <div className="missionOp">
        <h3 className="opTitle">COORDINATES</h3>
        <h3 className="opSubHeading">MISSION ACTION</h3>
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">INPUT COORDINATES</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> One objective marker the active operative controls gains 1 of your Objective points.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> An operative cannot perform this action during the first turning point, while within control range of an enemy operative, or if that objective marker has already gained 1 of your Objective points this turning point.</li>
            </ul>
        </div>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <p>At the end of the fourth turning point:</p>
        <ul>
          <li>For each objective marker that has at least 1 of your Objective points, you score 1VP, or 2VP if that objective marker is wholly within your opponent's territory.</li>
          <li>For each objective marker that has more of your Objective points than your opponent's, you score 1VP.</li>
        </ul>
      </div>
  },
  {
    id: 10,
    content: 
      <div className="missionOp">
        <h3 className="opTitle">ORB</h3>
        <h3 className="opSubHeading">MISSION ACTION</h3>
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">MOVE ORB</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> If the active operative controls the objective marker that has the Orb token, move that token as follows: 
                <ul style={{ marginLeft: -35 + 'px' }}>
                  <li>If the centre objective marker has it, move it to either player’s objective marker (your choice)</li>
                  <li>If a player’s objective marker has it, move it to the centre objective marker</li>
                </ul>
                </li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> An operative cannot perform this action during the first turning point, while within control range of an enemy operative, or if it doesn’t control the objective marker that has the Orb token. </li>
            </ul>
        </div>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>ADDITIONAL RULES</h3>
        <p>At the start of the battle, the centre objective marker has the Orb token. </p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <p>At the end of each turning point after the first, for each objective marker that friendly operatives control that doesn’t have the Orb token, you score 1VP.</p>
      </div>
  },
  {
    id: 11,
    content: 
      <div className="missionOp">
        <h3 className="opTitle">STAKE CLAIM</h3>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>ADDITIONAL RULES</h3>
        <p>At the start of the Gambit step of each Strategy phase after the first, starting with the player with initiative, each player must select both one objective marker and one of the following claims for that turning point:</p>
        <ul>
          <li>Friendly operatives will control that objective marker at the end of this turning point</li>
          <li>Enemy operatives won’t contest that objective marker at the end of this turning point</li>
        </ul>
        <p>Each player cannot select each objective marker more than once per battle (so they must select each objective marker once during the battle).</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <p>If friendly operatives control more objective markers than enemy operatives do, you score 1VP.</p>
        <p>If your selected claim is true, you score 1VP.</p>
      </div>
  },
  {
    id: 12,
    content: 
      <div className="missionOp">
        <h3 className="opTitle">ENERGY CELLS</h3>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>ADDITIONAL RULES</h3>
        <p>Operatives can perform the Pick Up Marker action upon each objective marker in the following turning points: 
          <ul>
            <li><b>2</b>, but you must spend an <b>additional 2AP</b> (that action cannot be free and its AP cannot be reduced)</li>
            <li><b>3</b>, but you must spend an <b>additional 1AP</b> (that action cannot be free and its AP cannot be reduced)</li>
            <li><b>4</b> (as normal)</li>
          </ul>
        </p>
        <p>Whenever an operative is carrying an objective marker, that operative cannot be removed and set up again more than 6" away.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <p>At the end of each turning point, if friendly operatives control more objective markers than enemy operatives do, you score 1VP.</p>
        <p>At the end of the battle, for each objective marker friendly operatives are carrying, you score 1VP.</p>
      </div>
  },
  {
    id: 13,
    content: 
      <div className="missionOp">
        <h3 className="opTitle">DOWNLOAD</h3>
        <h3 className="opSubHeading">MISSION ACTION</h3>
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">DOWNLOAD</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> One centre or opponent's objective marker the active operative controls is downloaded.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> An operative cannot perform this action during the first or second turning point, while within control range of an enemy operative, or if that objective marker has already been downloaded during the battle. </li>
            </ul>
        </div>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <p>At the end of each turning point after the first, if friendly operatives control more objective markers than enemy operatives do, you score 1VP. Ignore downloaded objective markers when determining this.</p>
        <p>Whenever a friendly operative performs the Download action during the third turning point, you score 1VP.</p>
        <p>Whenever a friendly operative performs the Download action during the fourth turning point, you score 2VP.</p>
      </div>
  },
  {
    id: 14,
    content: 
      <div className="missionOp">
        <h3 className="opTitle">DATA</h3>
        <h3 className="opSubHeading">MISSION ACTIONS</h3>
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">COMPILE DATA</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> One objective marker the active operative controls gains 1 Data point. Use a dice as a token to keep track of Data points at that objective marker.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> An operative cannot perform this action during the first turning point, while within control range of an enemy operative, or if that objective marker has already gained a Data point during this turning point.</li>
            </ul>
        </div>
        <div className="actionLine" style={{ marginTop: 10 + 'px' }}></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">SEND DATA</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> Remove all Data points from an objective marker the active operative controls.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> An operative cannot perform this action during the first, second or third turning point, while within control range of an enemy operative, or if that objective marker doesn’t have any Data points to remove.</li>
            </ul>
        </div>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <p>At the end of the second and third turning point, if friendly operatives have performed more <b>COMPILE DATA</b> actions during that turning point than enemy operatives have, you score 1VP.</p>
        <p>Whenever a friendly operative performs the <b>SEND DATA</b> action, you score a number of VP equal to the number of Data points removed.</p>
      </div>
  },
  {
    id: 15,
    content: 
      <div className="missionOp">
        <h3 className="opTitle">REBOOT</h3>
        <h3 className="opSubHeading">MISSION ACTION</h3>
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">REBOOT</p>
                <p className="actionCost"><b>2AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> One inert objective marker the active operative controls is no longer inert.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> An operative cannot perform this action during the first turning point, or while within control range of an enemy operative.</li>
            </ul>
        </div>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>ADDITIONAL RULES</h3>
        <p>When setting up the battle, after setting up objective markers, number each objective marker 1–3.</p>
        <p>At the start of the Gambit step of each Strategy phase, each player secretly selects one objective marker by putting a number of dice in their hand that matches that marker’s number, then reveal simultaneously:</p>
          <ul>
            <li>If both players selected the same one, that objective marker is inert during this turning point</li>
            <li>If not, the objective marker that neither player selected is inert during this turning point</li>
          </ul>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <p>At the end of each turning point after the first, for each objective marker friendly operatives control, you score 1VP. Ignore inert objective markers when determining this.</p>
      </div>
  },
]