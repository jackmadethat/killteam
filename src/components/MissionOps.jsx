function MissionOps() {
  return (
    <div className="sectionContent" id="critops">

      <div className="missionGrid">
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
                  <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> One objective marker the active operative controls is secured by your Kill Team until the enemy Kill Team secures that objective marker.</li>
                  <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action during the first turning point, or while within control range of an enemy operative.</li>
              </ul>
          </div>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
          <p>At the end of each turning point after the first:</p>
          <ul>
            <li>If any objective markers are secured by your Kill Teamm you score 1VP.</li>
            <li>If more objective markers are secured by your Kill Team than your opponent's Kill Team, you score 1VP.</li>
          </ul>
        </div>

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
                  <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> One objective marker the active operative controls is looted.</li>
                  <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action during the first turning point, while within control range of an enemy operative, or if that objective marker has already been looted during this turning point.</li>
              </ul>
          </div>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
          <p>Whenever a friendly operative performs the <b>LOOT</b> action, you score 1VP (to a maximum of 2VP per turning point).</p>
        </div>

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
                  <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> One objective marker the active operative controls is transmitting until the start of the next turning point.</li>
                  <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action during the first turning point, or while within control range of an enemy operative.</li>
              </ul>
          </div>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
          <p>At the end of each turning point after the first:</p>
          <ul>
            <li>If friendly operatives control any transmitting objective markers, you score 1VP.</li>
            <li>If friendly operatives control more transmitting objective markers than enemy operatives do, you score 1VP.</li>
          </ul>
        </div>

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
                  <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> Remove all of your opponent's Upload points (if any) from an objective marker the active operative controls.</li>
                  <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> Then that same objective marker gains 1 of your Upload points, unless it's already gained 1 of your Upload points during this turning point, of you've scored from that objective marker.</li>
                  <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action during the first turning point, or while within control range of an enemy operative.</li>
              </ul>
          </div>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
          <p>At the end of each turning point after the first, you can score from any objective markers that have 1 or more of your Upload points. For each that you do, remove all of the Upload points from it - you score the same number as VP. You can only score from each objective marker once. Friendly operatives don't have to control an objective marker to score from it.</p>
        </div>

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
                  <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> One objective marker the active operative controls gains 1 Intel point.</li>
                  <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action during the first turning point, while within control range of an enemy operative, or if that objective marker has already gained an Intel point during this turning point.</li>
              </ul>
          </div>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>ADDITIONAL RULES</h3>
          <p>In each turning point after the first, the <b>PICK UP MARKER</b> action can be performed upon each objective marker that has at least 1 Intel point. If performed, that marker cannot gain any more Intel points.</p>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
          <p>At the end of the fourth turning point, for each objective marker friendly operatives control, you score VP equal to its Intel points (ie. 1 objective marker = 1VP, 2 markers = 2VP, etc.)</p>
        </div>

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
                  <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> One objective marker the active operative controls is searched. If it's the last objective marker to be searched, that marker becomes the extraction objective marker.</li>
                  <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action during the first turning point, while within control range of an enemy operative, or if that objective marker has already been searched.</li>
              </ul>
          </div>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>ADDITIONAL RULES</h3>
          <p>The <b>PICK UP MARKER</b> action can be performed upon the extraction objective marker. While an operative is carrying that marker, worsen the Hit stat of it's weapons by 1, it cannot be removed and set up again more than 6" away, and it cannot perform <b>CHARGE</b> or <b>DASH</b> actions.</p>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
          <p>Whenever a friendly operative performs the <b>SEARCH</b> action, you score 1VP if it's the <em>first</em> or <em>third</em> objective marker to be searched, or 2VP if it's the <em>second</em>.</p>
          <p>At the end of each turning point after the first, if friendly operatives control the extraction objective marker, you score 1VP or 2VP if it's the fourth turning point.</p>
        </div>

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
                  <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> If the active operative controls the objective marker wholly within your opponent's territory, that marker is sabotaged.</li>
                  <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action during the first turning point, while within control range of an enemy operative, or if that objective marker has already been sabotaged during this turning point.</li>
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
                  <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> One surged objective marker the active operative controls is rerouted.</li>
                  <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action during the first turning point, while within control range of an enemy operative, or if that objective marker has already been rerouted.</li>
              </ul>
          </div>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>ADDITIONAL RULES</h3>
          <p>As a <b>STRATEGIC GAMBIT</b> in each turning point after the first, one player selects one objective marker to be surged until the start of the next turning point (not one that has previously surged). The player who doesn't have initiative selects first, alternating players each turning point thereafter.</p>

          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
          <p>Whenever a friendly operative performs the <b>REROUTE POWER</b> action, you score 1VP</p>
          <p>At the end of each turning point after the first: If a friendly operative controls the surged objective marker, you score 1VP; if friendly operatives control more objective markers than enemy operatives do, you score 1VP.</p>
          <p>You can score a maximum of 2VP from this Tac Op per turning point.</p>
        </div>

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
                  <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> One objective marker the active operative controls gains 1 of your Objective points.</li>
                  <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action during the first turning point, while within control range of an enemy operative, or if that objective marker has already gained 1 of your Objective points this turning point.</li>
              </ul>
          </div>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
          <p>At the end of the fourth turning point:</p>
          <ul>
            <li>For each objective marker that has at least 1 of your Objective points, you score 1VP, or 2VP if that objective marker is wholly within your opponent's territory.</li>
            <li>For each objective marker that has more of your Objective points than your opponent's, you score 1VP.</li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default MissionOps
