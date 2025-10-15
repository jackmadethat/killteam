function MissionOps() {
  return (
    <div className="sectionContent" id="gameSequence">
      <h3>Critical Ops</h3>

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

      <h3>Tactical Ops</h3>

      <div className="missionGrid">
        <div className="missionOp">
          <h3 className="opTitleTac" style={{ backgroundColor: '#4d4d4d' }}><span className="tacOpType">INFILTRATION</span><br />SURVEILLANCE</h3>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
          <p>The first time a friendly operative performs the <b>SURVEILLANCE</b> action.</p>
          <h3 className="opSubHeading">MISSION ACTION</h3>
          <div className="actionLine"></div>
          <div className="actionDiv">
              <div className="titleBlock">
                  <p className="actionName">SURVEILLANCE</p>
                  <p className="actionCost"><b>1AP</b></p>
              </div>
              <ul>
                  <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> The active operative has gathered surveillance.</li>
                  <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action while it has an engage order. It must be wholly within your opponent's territory to perform this action, and there must be an enemy operative that's a valid target for it.</li>
                  <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action during the first turning point or while within control range of an enemy operative.</li>
              </ul>
          </div>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
          <p>Once per turning point after the first, if a friendly operative performs the <b>SURVEILLANCE</b> action, you score 1VP.</p>
          <p>At the end of each turning point after the first, if a friendly operative that performed the <b>SURVEILLANCE</b> action during that turning point, is in the killzone and has a conceal order, you score 1VP.</p>
        </div>

        <div className="missionOp">
          <h3 className="opTitleTac" style={{ backgroundColor: '#4d4d4d' }}><span className="tacOpType">INFILTRATION</span><br />WIRETAP</h3>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
          <p>The first time a friendly operative performs the <b>WIRETAP</b> action.</p>
          <h3 className="opSubHeading">MISSION ACTION</h3>
          <div className="actionLine"></div>
          <div className="actionDiv">
              <div className="titleBlock">
                  <p className="actionName">WIRETAP</p>
                  <p className="actionCost"><b>1AP</b></p>
              </div>
              <ul>
                  <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> Place one of your Wiretap mission markers within the active operative's control range. In the ready step of the next Strategy Phase, remove that marker.</li>
                  <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action during the first turning point, while within control range of an enemy operative, during an activation in which it was set up, or if a friendly operative has already performed this action during the turning point.</li>
              </ul>
          </div>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
          <p>Once per turning point after the first, whenever an enemy operative starts or ends an activation within 2" of your Wiretap mission markers, you score 1VP.</p>
          <p>At the end of each turning point after the first, if any enemy operatives with an engage order are within 2" of any of your Wiretap mission markers, you score 1VP.</p>
        </div>

        <div className="missionOp">
          <h3 className="opTitleTac" style={{ backgroundColor: '#4d4d4d' }}><span className="tacOpType">INFILTRATION</span><br />IMPLANT</h3>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
          <p>When you first score VP from this Tac Op.</p>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>ADDITIONAL RULES</h3>
          <p>Whenever a friendly operative is fighting, when you would resolve an attack die, you can implant the enemy operative instead of striking or blocking (then discard that die).</p>
          <p>Whenever a friendly operative is shooting an enemy operative within 6" of it, when you would resolve an attack die, you can implant the enemy operative instead of inflict damage with that die (then discard that die).</p>
          <p>Each operative can only be implanted once and cannot be implanted during the first turning point.</p>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
          <p>Once per turning point after the first, if you implant an enemy operative, you score 1VP.</p>
          <p>At the end of each turning point after the first, if any implanted enemy operatives are in the killzone, you score 1VP.</p>
        </div>

        <div className="missionOp">
          <h3 className="opTitleTac" style={{ backgroundColor: '#348300' }}><span className="tacOpType">RECON</span><br />CONFIRM KILL</h3>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
          <p>The first time an enemy operative is incapacitated.</p>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>ADDITIONAL RULES</h3>
          <p>Whenever an enemy operative is incapacitated, before it's removed from the killzone, place one of your Confirm Kill mission markers within it's control range.</p>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
          <p>At the end of each turning point after the first, if a friendly operative controls one of your Confirm Kill mission markers, that marker is not contested by enemy operatives and no enemy operatives are within are within the friendly operative's control range, you can remove that mission marker to score 1VP or 2VP if it was placed for an enemy operative with a Wounds state of 12 or more.</p>
          <p>You can score a maximum of 2VP from this Tac Op per turning point.</p>
        </div>

        <div className="missionOp">
          <h3 className="opTitleTac" style={{ backgroundColor: '#348300' }}><span className="tacOpType">RECON</span><br />PLANT BEACONS</h3>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
          <p>The first time a friendly operative performs the <b>PLANT BEACON</b> action.</p>
          <h3 className="opSubHeading">MISSION ACTION</h3>
          <div className="actionLine"></div>
          <div className="actionDiv">
              <div className="titleBlock">
                  <p className="actionName">PLANT BEACON</p>
                  <p className="actionCost"><b>1AP</b></p>
              </div>
              <ul>
                  <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> Place one of your Beacon mission markers:
                    <ul>
                      <li>Within the active operative's control range</li>
                      <li>More than 4" from your drop zone</li>
                      <li>More than 6" from your other Beacon mission markers</li>
                      <li>With no part of it underneath Vantage terrain</li>
                    </ul>
                  </li>
                  <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action during the first turning point, while within control range of an enemy operative, or during an activation in which it was set up.</li>
              </ul>
          </div>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
          <p>Once per turning point after the first, whenever one of your Beacon mission markers is placed wholly within your territory, you score 1VP.</p>
          <p>Once per turning point after the first, whenever one of your Beacon mission markers is placed wholly within your opponent's territory, you score 1VP.</p>
        </div>

        <div className="missionOp">
          <h3 className="opTitleTac" style={{ backgroundColor: '#348300' }}><span className="tacOpType">RECON</span><br />RECOVER ITEMS</h3>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
          <p>At the start of set up, before equipment is placed.</p>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>ADDITIONAL RULES</h3>
          <p>When revealed, your opponent places one of your Item mission markers on the centreline and one within 2" of your territory. You then place one more than 6" from your territory. All of your Item mission markers must be more than 2" from other markers (including other Item mission markers). Your operatives can perform the <b>PICK UP MARKER</b> action on your Item mission markers after the first turning point.</p>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
          <p>At the end of the fourth turning point, for each of your Item mission markers that both the <b>PICK UP MARKER</b> action has been performed upon and a friendly operative controls, you score 2VP. Markers do not need to be carried to score, but each of them must have been carried by a friendly operative at some point during the battle.</p>
        </div>

        <div className="missionOp">
          <h3 className="opTitleTac" style={{ backgroundColor: '#962222' }}><span className="tacOpType">SEEK & DESTROY</span><br />STORM OBJECTIVES</h3>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
          <p>When you first score VP from this Op.</p>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>ADDITIONAL RULES</h3>
          <p>At the end of each friendly operative's activation, if it controls an objective marker than enemy operatives controlled at the start of that activation or that's wholly within your opponent's territory, and that objective marker is not contested by enemy operatives, that objective marker is stormed by friendly operatives this turning point.</p>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
          <p>Once per turning point after the first, if an objective marker is stormed by a friendly operative this turning point, you score 1VP.</p>
          <p>At the end of each turning point after the first, if friendly operatives control an objective marker that was stormed by friendly operatives this turning point, you score 1VP.</p>
        </div>

        <div className="missionOp">
          <h3 className="opTitleTac" style={{ backgroundColor: '#962222' }}><span className="tacOpType">SEEK & DESTROY</span><br />CHAMPION</h3>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
          <p>When you select your first Champion.</p>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>ADDITIONAL RULES</h3>
          <p>As a <b>STRATEGIC GAMBIT</b> in each turning point after the first, you can select one friendly operative to be your Champion for the duration of the turning point.</p>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
          <p>In each turning point after the first, whenever your Champion incapacitates an enemy operative you score 1VP or 2VP if that enemy operative has a Wounds state of 12 or more. In either case, you can gain a maximum of 2VP per turning point with this Tac Op.</p>
        </div>

        <div className="missionOp">
          <h3 className="opTitleTac" style={{ backgroundColor: '#962222' }}><span className="tacOpType">SEEK & DESTROY</span><br />OVERRUN</h3>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
          <p>When you first score VP from this Op.</p>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
          <p>Once per turning point after the first, if an enemy operative is incapacitated by a friendly operative, and that friendly operative is whilly within your opponent's territory when it does so, you score 1VP.</p>
          <p>At the end of each turning point after the first, if the total APL stat of friendly operatives that both fulfilled the above condition that turning point (regardless of scoring you the VP) and are still wholly within your opponent's territory is 3 or more, you score 1VP.</p>
        </div>

        <div className="missionOp">
          <h3 className="opTitleTac" style={{ backgroundColor: '#222766ff' }}><span className="tacOpType">SECURITY</span><br />CONTAIN</h3>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
          <p>When you first score VP from this Op.</p>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
          <p>At the end of each turning point after the first:</p>
          <ul>
            <li>If there are no enemy operatives wholly within your territory, you score 1VP.</li>
            <li>If there are no enemy operatives whilly within 6" of your drop zone, you score 1VP.</li>
          </ul>
        </div>

        <div className="missionOp">
          <h3 className="opTitleTac" style={{ backgroundColor: '#222766ff' }}><span className="tacOpType">SECURITY</span><br />SECURE CENTRE</h3>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
          <p>When you first score VP from this Op.</p>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
          <p>At the end of each turning point after the first:</p>
          <ul>
            <li>If the total APL stat of friendly operatives within 3" of the centre of the killzone is greater than that of enemy operatives, you score 1VP.</li>
            <li>If the total APL stat of friendly operatives on the centreline but more than 3" from the centre of the killzone is greater than that of enemy operatives, you score 1VP.</li>
          </ul>
        </div>

        <div className="missionOp">
          <h3 className="opTitleTac" style={{ backgroundColor: '#222766ff' }}><span className="tacOpType">SECURITY</span><br />TAKE GROUND</h3>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
          <p>When you first score VP from this Op.</p>
          <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
          <p>At the end of each turning point after the first:</p>
          <ul>
            <li>If <b>Killzone: Volkus</b> - If friendly operatives control any stronghold terrain features within your opponent's territory, you score 2VP; for each ruin (large or small) terrain feature within your opponent's territory that friendly operatives control, you score 1VP.</li>
            <li>If <b>Killzone: Gallowdark</b> - For each access point that's on the centreline or within your opponent's territory that friendly operatives control, you score 1VP.</li>
            <li>If <b>any other killzone</b> - For each terrain feature with Heavy terrain within your opponent's territoy that friendly operatives control, you score 1VP.</li>
          </ul>
          <p>AN operative contests a stronghold terrain feature it's wholly within. An operative contests all other terrain features within their control range, or while underneath a terrain feature's Vantage terrian. Friendly operatives control each such terrain feature if the total APL stat of those contesting it is greater than that of enemy operatives.</p>
        </div>
      </div>

      <h3>Kill Ops</h3>
      <div>

        <p>You start without a kill grade. As enemy operatives are incapacitated, your kill grade goes up until it reaches 5.</p>
        <ul>
          <li>Whenever you move to a new kill grade, you score 1VP.</li>
          <li>At the end of the fourth turning point, if your kill grade is higher than your opponent's, you score 1VP.</li>
        </ul>
        <p>The table below shows how many enemy operatives must be incapacitated to reach each kill grade. The row you use is determined by the starting number of enemy operatives.</p>
        <table className="killOptable">
          <thead>
            <tr>
              <th colspan="2" rowspan="2" className="topLeftCell"></th>
              <th colspan="6" className="headerCell" style={{ height: 40 + 'px' }}>KILL GRADE</th>
            </tr>
            <tr style={{ height: 40 + 'px'}}>
              <th className="boxCell">1</th>
              <th className="boxCell">2</th>
              <th className="boxCell">3</th>
              <th className="boxCell">4</th>
              <th className="boxCell">5</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="10" className="sidewaysCell headerCell" style={{ width: 22 + 'px' }}><span style={{ margin: 55 + 'px' }}><b>STARTING NUMBER OF ENEMY OPERATIVES</b></span></td>
              <td data-row="1" className="boxCell">5</td>
              <td data-row="1">1</td>
              <td data-row="1">2</td>
              <td data-row="1">3</td>
              <td data-row="1">4</td>
              <td data-row="1">5</td>
            </tr>
            <tr>
              <td data-row="2" className="boxCell">6</td>
              <td data-row="2">1</td>
              <td data-row="2">2</td>
              <td data-row="2">4</td>
              <td data-row="2">5</td>
              <td data-row="2">6</td>
            </tr>
            <tr data-row="3">
              <td data-row="3" className="boxCell">7</td>
              <td data-row="3">1</td>
              <td data-row="3">3</td>
              <td data-row="3">4</td>
              <td data-row="3">6</td>
              <td data-row="3">7</td>
            </tr>
            <tr data-row="4">
              <td data-row="4" className="boxCell">8</td>
              <td data-row="4">2</td>
              <td data-row="4">3</td>
              <td data-row="4">5</td>
              <td data-row="4">6</td>
              <td data-row="4">8</td>
            </tr>
            <tr data-row="5">
              <td data-row="5" className="boxCell">9</td>
              <td data-row="5">2</td>
              <td data-row="5">4</td>
              <td data-row="5">5</td>
              <td data-row="5">7</td>
              <td data-row="5">9</td>
            </tr>
            <tr data-row="6">
              <td data-row="6" className="boxCell">10</td>
              <td data-row="6">2</td>
              <td data-row="6">4</td>
              <td data-row="6">6</td>
              <td data-row="6">8</td>
              <td data-row="6">10</td>
            </tr>
            <tr data-row="7">
              <td data-row="7" className="boxCell">11</td>
              <td data-row="7">2</td>
              <td data-row="7">4</td>
              <td data-row="7">7</td>
              <td data-row="7">9</td>
              <td data-row="7">11</td>
            </tr>
            <tr data-row="8">
              <td data-row="8" className="boxCell">12</td>
              <td data-row="8">2</td>
              <td data-row="8">5</td>
              <td data-row="8">7</td>
              <td data-row="8">10</td>
              <td data-row="8">12</td>
            </tr>
            <tr data-row="9">
              <td data-row="9" className="boxCell">13</td>
              <td data-row="9">3</td>
              <td data-row="9">5</td>
              <td data-row="9">8</td>
              <td data-row="9">10</td>
              <td data-row="9">13</td>
            </tr>
            <tr data-row="10">
              <td data-row="10" className="boxCell">14</td>
              <td data-row="10">3</td>
              <td data-row="10">6</td>
              <td data-row="10">8</td>
              <td data-row="10">11</td>
              <td data-row="10">14</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default MissionOps
