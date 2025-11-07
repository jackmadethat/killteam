export const TacOpsData = [
  {
    archetype: 'Infiltration',
    id: 1,
    content: 
      <div className="missionOp">
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/48d4ad031e87e40d199dc26b31ccb329d1f021aa/src/img/Archetype_Infil.svg" className="archetype" />
        <h3 className="opTitleTac" style={{ backgroundColor: '#4d4d4d' }}><span className="tacOpType">Infiltration</span><br />SURVEILLANCE</h3>
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
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> The active operative has gathered surveillance.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> An operative cannot perform this action while it has an engage order. It must be wholly within your opponent's territory to perform this action, and there must be an enemy operative that's a valid target for it.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> An operative cannot perform this action during the first turning point or while within control range of an enemy operative.
                </li>
            </ul>
        </div>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <ul>
          <li>Once per turning point after the first, if a friendly operative performs the <b>SURVEILLANCE</b> action, you score 1VP.</li>
          <li>At the end of each turning point after the first, if a friendly operative that performed the <b>SURVEILLANCE</b> action during that turning point, is in the killzone and has a conceal order, you score 1VP.</li>
        </ul>
      </div>
  },
  {
    archetype: 'Infiltration',
    id: 2,
    content: 
      <div className="missionOp">
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/48d4ad031e87e40d199dc26b31ccb329d1f021aa/src/img/Archetype_Infil.svg" className="archetype" />
        <h3 className="opTitleTac" style={{ backgroundColor: '#4d4d4d' }}><span className="tacOpType">Infiltration</span><br />WIRETAP</h3>
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
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> Place one of your Wiretap mission markers within the active operative's control range. In the ready step of the next Strategy Phase, remove that marker.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> An operative cannot perform this action during the first turning point, while within control range of an enemy operative, during an activation in which it was set up, or if a friendly operative has already performed this action during the turning point.
                </li>
            </ul>
        </div>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <ul>
          <li>Once per turning point after the first, whenever an enemy operative starts or ends an activation within 2" of your Wiretap mission markers, you score 1VP.</li>
          <li>At the end of each turning point after the first, if any enemy operatives with an engage order are within 2" of any of your Wiretap mission markers, you score 1VP.</li>
        </ul>
      </div>
  },
  {
    archetype: 'Infiltration',
    id: 3,
    content: 
      <div className="missionOp">
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/48d4ad031e87e40d199dc26b31ccb329d1f021aa/src/img/Archetype_Infil.svg" className="archetype" />
        <h3 className="opTitleTac" style={{ backgroundColor: '#4d4d4d' }}><span className="tacOpType">Infiltration</span><br />IMPLANT</h3>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
        <p>When you first score VP from this Tac Op.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>ADDITIONAL RULES</h3>
        <p>Whenever a friendly operative is fighting, when you would resolve an attack die, you can implant the enemy operative instead of striking or blocking (then discard that die).</p>
        <p>Whenever a friendly operative is shooting an enemy operative within 6" of it, when you would resolve an attack die, you can implant the enemy operative instead of inflict damage with that die (then discard that die).</p>
        <p>Each operative can only be implanted once and cannot be implanted during the first turning point.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <ul>
          <li>Once per turning point after the first, if you implant an enemy operative, you score 1VP.</li>
          <li>At the end of each turning point after the first, if any implanted enemy operatives are in the killzone, you score 1VP.</li>
        </ul>
      </div>
  },
  {
    archetype: 'Infiltration',
    id: 4,
    content: 
      <div className="missionOp">
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/48d4ad031e87e40d199dc26b31ccb329d1f021aa/src/img/Archetype_Infil.svg" className="archetype" />
        <h3 className="opTitleTac" style={{ backgroundColor: '#4d4d4d' }}><span className="tacOpType">Infiltration</span><br />STEAL INTELLIGENCE</h3>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
        <p>The first time an enemy operative is incapacitated.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>ADDITIONAL RULES</h3>
        <p>Whenever an enemy operative is incapacitated, before it’s removed from the killzone, place one of your Intelligence mission markers within its control range.</p>
        <p>Friendly operatives can perform the <b>Pick Up Marker</b> action on your Intelligence mission markers, and for the purposes of that action’s conditions, ignore the first Intelligence mission marker the active operative is carrying. In other words, each friendly operative can carry up to two Intelligence mission markers, or one and one other marker.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <ul>
          <li>At the end of each turning point after the first, if any friendly operatives are carrying any of your Intelligence mission markers, you score 1VP.</li>
          <li>At the end of the battle, for each of your Intelligence mission markers friendly operatives are carrying, you score 1VP.</li>
        </ul>
      </div>
  },
  {
    archetype: 'Infiltration',
    id: 5,
    content: 
      <div className="missionOp">
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/48d4ad031e87e40d199dc26b31ccb329d1f021aa/src/img/Archetype_Infil.svg" className="archetype" />
        <h3 className="opTitleTac" style={{ backgroundColor: '#4d4d4d' }}><span className="tacOpType">Infiltration</span><br />TRACK ENEMY</h3>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
        <p>The first time you score VP from this op.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>ADDITIONAL RULES</h3>
        <p>An enemy operative is being tracked if it’s a valid target for a friendly operative within 6" of it. That friendly operative must have a Conceal order, cannot be a valid target for the enemy operative it’s attempting to track, and cannot be within control range of enemy operatives.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <p>At the end of each turning point after the first:</p>
        <ul>
          <li>If one enemy operative is being tracked, you score 1VP, or 2VP instead if it’s the fourth turning point.</li>
          <li>If two or more enemy operatives are being tracked, you score 2VP.</li>
        </ul>
        <p>You cannot score more than 2VP from this op per turning point.</p>
      </div>
  },
  {
    archetype: 'Infiltration',
    id: 6,
    content: 
      <div className="missionOp">
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/48d4ad031e87e40d199dc26b31ccb329d1f021aa/src/img/Archetype_Infil.svg" className="archetype" />
        <h3 className="opTitleTac" style={{ backgroundColor: '#4d4d4d' }}><span className="tacOpType">Infiltration</span><br />SIEZE DEFENCES</h3>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
        <p>In the Target Reveal step of any Turning Point.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>ADDITIONAL RULES</h3>
        <p>Friendly operatives control a barricade if the total APL of friendly operatives within 1" of it is greater than that of enemy operatives.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <ul>
          <li>At the end of any Turning Point, if you control an opponent's barricade, you score 1VP.</li>
          <li>If you achieve the first condition at the end of any subsequent Turning Points, you score 1VP.</li>
        </ul>
        <p>You cannot score more than 2VP from this op per turning point.</p>
      </div>
  },
  {
    archetype: 'Recon',
    id: 1,
    content: 
      <div className="missionOp">
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/48d4ad031e87e40d199dc26b31ccb329d1f021aa/src/img/Archetype_Recon.svg" className="archetype" style={{ marginTop: -1 + 'px' }} />
        <h3 className="opTitleTac" style={{ backgroundColor: '#348300' }}><span className="tacOpType">Recon</span><br />CONFIRM KILL</h3>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
        <p>The first time an enemy operative is incapacitated.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>ADDITIONAL RULES</h3>
        <p>Whenever an enemy operative is incapacitated, before it's removed from the killzone, place one of your Confirm Kill mission markers within it's control range.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <ul>
          <li>At the end of each turning point after the first, if a friendly operative controls one of your Confirm Kill mission markers, that marker is not contested by enemy operatives and no enemy operatives are within are within the friendly operative's control range, you can remove that mission marker to score 1VP or 2VP if it was placed for an enemy operative with a Wounds state of 12 or more.</li>
        </ul>
        <p>You can score a maximum of 2VP from this Tac Op per turning point.</p>
      </div>
  },
  {
    archetype: 'Recon',
    id: 2,
    content: 
      <div className="missionOp">
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/48d4ad031e87e40d199dc26b31ccb329d1f021aa/src/img/Archetype_Recon.svg" className="archetype" style={{ marginTop: -1 + 'px' }} />
        <h3 className="opTitleTac" style={{ backgroundColor: '#348300' }}><span className="tacOpType">Recon</span><br />PLANT BEACONS</h3>
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
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> Place one of your Beacon mission markers:
                  <ul style={{ marginLeft: -35 + 'px' }}>
                    <li>Within the active operative's control range</li>
                    <li>More than 4" from your drop zone</li>
                    <li>More than 6" from your other Beacon mission markers</li>
                    <li>With no part of it underneath Vantage terrain</li>
                  </ul>
                </li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> An operative cannot perform this action during the first turning point, while within control range of an enemy operative, or during an activation in which it was set up.
                </li>
            </ul>
        </div>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <ul>
          <li>Once per turning point after the first, whenever one of your Beacon mission markers is placed wholly within your territory, you score 1VP.</li>
          <li>Once per turning point after the first, whenever one of your Beacon mission markers is placed wholly within your opponent's territory, you score 1VP.</li>
        </ul>
      </div>
  },
  {
    archetype: 'Recon',
    id: 3,
    content: 
      <div className="missionOp">
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/48d4ad031e87e40d199dc26b31ccb329d1f021aa/src/img/Archetype_Recon.svg" className="archetype" style={{ marginTop: -1 + 'px' }} />
        <h3 className="opTitleTac" style={{ backgroundColor: '#348300' }}><span className="tacOpType">Recon</span><br />RECOVER ITEMS</h3>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
        <p>At the start of set up, before equipment is placed.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>ADDITIONAL RULES</h3>
        <p>When revealed, your opponent places one of your Item mission markers on the centreline and one within 2" of your territory. You then place one more than 6" from your territory. All of your Item mission markers must be more than 2" from other markers (including other Item mission markers). Your operatives can perform the <b>PICK UP MARKER</b> action on your Item mission markers after the first turning point.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <ul>
          <li>At the end of the fourth turning point, for each of your Item mission markers that both the <b>PICK UP MARKER</b> action has been performed upon and a friendly operative controls, you score 2VP. Markers do not need to be carried to score, but each of them must have been carried by a friendly operative at some point during the battle.</li>
        </ul>
      </div>
  },
  {
    archetype: 'Recon',
    id: 4,
    content: 
      <div className="missionOp">
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/48d4ad031e87e40d199dc26b31ccb329d1f021aa/src/img/Archetype_Recon.svg" className="archetype" style={{ marginTop: -1 + 'px' }} />
        <h3 className="opTitleTac" style={{ backgroundColor: '#348300' }}><span className="tacOpType">Recon</span><br />RETRIEVAL</h3>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
        <p>The first time you score VP from this Op.</p>
        <h3 className="opSubHeading">MISSION ACTION</h3>
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">RETRIEVE</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> If the active operative controls an objective marker that hasn’t been searched by friendly operatives, that operative is now carrying one of your Retrieval mission markers and that objective marker has been searched by friendly operatives. Friendly operatives can perform the <b>Pick Up Marker</b> action on your Retrieval mission markers.
                </li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> An operative cannot perform this action during the first turning point, or while within control range of an enemy operative.
                </li>
            </ul>
        </div>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <ul>
          <li>The first time each objective marker is searched by friendly operatives, you score 1VP.</li>
          <li>At the end of the battle, for each of your Retrieval mission markers friendly operatives are carrying, you score 1VP.</li>
        </ul>
      </div>
  },
  {
    archetype: 'Recon',
    id: 5,
    content: 
      <div className="missionOp">
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/48d4ad031e87e40d199dc26b31ccb329d1f021aa/src/img/Archetype_Recon.svg" className="archetype" style={{ marginTop: -1 + 'px' }} />
        <h3 className="opTitleTac" style={{ backgroundColor: '#348300' }}><span className="tacOpType">Recon</span><br />SCOUT ENEMY MOVEMENT</h3>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
        <p>The first time a friendly operative performs the <b>Scout</b> action.</p>
        <h3 className="opSubHeading">MISSION ACTION</h3>
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">SCOUT</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> Select one ready enemy operative visible to and more than 6" from the active operative. That enemy operative is now monitored until the Ready step of the next Strategy phase.
                </li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> An operative cannot perform this action while it has an Engage order, during the first turning point, or while within control range of an enemy operative.
                </li>
            </ul>
        </div>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <ul>
          <li>At the end of each turning point after the first, for each monitored enemy operative that’s visible to friendly operatives, you score 1VP. Note that it doesn’t have to be a friendly operative that performed the <b>Scout</b> action.</li>
        </ul>
        <p>You cannot score more than 2VP from this op per turning point.</p>
      </div>
  },
  {
    archetype: 'Recon',
    id: 6,
    content: 
      <div className="missionOp">
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/48d4ad031e87e40d199dc26b31ccb329d1f021aa/src/img/Archetype_Recon.svg" className="archetype" style={{ marginTop: -1 + 'px' }} />
        <h3 className="opTitleTac" style={{ backgroundColor: '#348300' }}><span className="tacOpType">Recon</span><br />SECURE VANTAGE</h3>
        <p className="enviroNote">NOT USABLE IN CLOSE QUARTERS</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
        <p>In the Target Reveal step of any Turning Point after the first.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>ADDITIONAL RULES</h3>
        <p>Friendly operatives control a Vantage Point if the total APL of friendly operatives on it is greater than that of enemy operatives.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <ul>
          <li>At the end of any Turning Point, if you control a Vantage Point that is more than 3" from your drop zone, you score 1VP.</li>
          <li>If you achieve the first condition with a different vantage point at the end of any subsequent Turning Points, you score 1VP.</li>
        </ul>
      </div>
  },
  {
    archetype: 'Seek & Destroy',
    id: 1,
    content: 
      <div className="missionOp">
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/48d4ad031e87e40d199dc26b31ccb329d1f021aa/src/img/Archetype_SeekDestroy.svg" className="archetype" style={{ marginTop: -2 + 'px' }} />
        <h3 className="opTitleTac" style={{ backgroundColor: '#962222' }}><span className="tacOpType">SEEK & DESTROY</span><br />STORM OBJECTIVES</h3>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
        <p>When you first score VP from this Op.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>ADDITIONAL RULES</h3>
        <p>At the end of each friendly operative's activation, if it controls an objective marker than enemy operatives controlled at the start of that activation or that's wholly within your opponent's territory, and that objective marker is not contested by enemy operatives, that objective marker is stormed by friendly operatives this turning point.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <ul>
          <li>Once per turning point after the first, if an objective marker is stormed by a friendly operative this turning point, you score 1VP.</li>
          <li>At the end of each turning point after the first, if friendly operatives control an objective marker that was stormed by friendly operatives this turning point, you score 1VP.</li>
        </ul>
      </div>
  },
  {
    archetype: 'Seek & Destroy',
    id: 2,
    content: 
      <div className="missionOp">
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/48d4ad031e87e40d199dc26b31ccb329d1f021aa/src/img/Archetype_SeekDestroy.svg" className="archetype" style={{ marginTop: -2 + 'px' }} />
        <h3 className="opTitleTac" style={{ backgroundColor: '#962222' }}><span className="tacOpType">SEEK & DESTROY</span><br />CHAMPION</h3>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
        <p>When you select your first Champion.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>ADDITIONAL RULES</h3>
        <p>As a <b>STRATEGIC GAMBIT</b> in each turning point after the first, you can select one friendly operative to be your Champion for the duration of the turning point.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <ul>
          <li>In each turning point after the first, whenever your Champion incapacitates an enemy operative you score 1VP or 2VP if that enemy operative has a Wounds state of 12 or more. In either case, you can gain a maximum of 2VP per turning point with this Tac Op.</li>
        </ul>
      </div>
  },
  {
    archetype: 'Seek & Destroy',
    id: 3,
    content: 
      <div className="missionOp">
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/48d4ad031e87e40d199dc26b31ccb329d1f021aa/src/img/Archetype_SeekDestroy.svg" className="archetype" style={{ marginTop: -2 + 'px' }} />
        <h3 className="opTitleTac" style={{ backgroundColor: '#962222' }}><span className="tacOpType">SEEK & DESTROY</span><br />OVERRUN</h3>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
        <p>When you first score VP from this Op.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <ul>
          <li>Once per turning point after the first, if an enemy operative is incapacitated by a friendly operative, and that friendly operative is wholly within your opponent's territory when it does so, you score 1VP.</li>
          <li>At the end of each turning point after the first, if the total APL stat of friendly operatives that both fulfilled the above condition that turning point (regardless of scoring you the VP) and are still wholly within your opponent's territory is 3 or more, you score 1VP.</li>
        </ul>
      </div>
  },
  {
    archetype: 'Seek & Destroy',
    id: 4,
    content: 
      <div className="missionOp">
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/48d4ad031e87e40d199dc26b31ccb329d1f021aa/src/img/Archetype_SeekDestroy.svg" className="archetype" style={{ marginTop: -2 + 'px' }} />
        <h3 className="opTitleTac" style={{ backgroundColor: '#962222' }}><span className="tacOpType">SEEK & DESTROY</span><br />HEADHUNTER</h3>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
        <p>When an enemy <b>LEADER</b> operative is incapacitated.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <ul>
          <li>When an enemy <b>LEADER</b> operative is incapacitated, you score 2VP.</li>
          <li>If it's the first or second Turning Point, you score an additional 1VP.</li>
        </ul>
      </div>
  },
  {
    archetype: 'Seek & Destroy',
    id: 5,
    content: 
      <div className="missionOp">
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/48d4ad031e87e40d199dc26b31ccb329d1f021aa/src/img/Archetype_SeekDestroy.svg" className="archetype" style={{ marginTop: -2 + 'px' }} />
        <h3 className="opTitleTac" style={{ backgroundColor: '#962222' }}><span className="tacOpType">SEEK & DESTROY</span><br />ROB & RANSACK</h3>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
        <p>When an enemy operative is incapacitated by a friendly operative within its control range, and that friendly operative is more than 3" from other enemy operatives.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <ul>
          <li>When this Tac Op is revealed, you score 1VP.</li>
          <li>At the end of the battle, if you achieved the first condition and that friendly operative has not been incapacitated, you score 1VP.</li>
        </ul>
      </div>
  },
  {
    archetype: 'Seek & Destroy',
    id: 6,
    content: 
      <div className="missionOp">
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/48d4ad031e87e40d199dc26b31ccb329d1f021aa/src/img/Archetype_SeekDestroy.svg" className="archetype" style={{ marginTop: -2 + 'px' }} />
        <h3 className="opTitleTac" style={{ backgroundColor: '#962222' }}><span className="tacOpType">SEEK & DESTROY</span><br />EXECUTIONER</h3>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
        <p>In the Target Reveal step of any turning point.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>ADDITIONAL RULES</h3>
        <p>When you reveal this Tac Op, select one friendly operative to be your Executioner. At the end of each Target Reveal step, select one enemy operative to be executed for the Turning Point.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <ul>
          <li>If you achieve the first condition in any subsequent Turning Points, you score 1VP.</li>
          <li>At the battle's end, if your Executioner is not incapacitated, you score 1VP.</li>
        </ul>
      </div>
  },
  {
    archetype: 'Security',
    id: 1,
    content: 
      <div className="missionOp">
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/48d4ad031e87e40d199dc26b31ccb329d1f021aa/src/img/Archetype_Security.svg" className="archetype" style={{ marginTop: -1 + 'px' }} />
        <h3 className="opTitleTac" style={{ backgroundColor: '#222766ff' }}><span className="tacOpType">Security</span><br />CONTAIN</h3>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
        <p>When you first score VP from this Op.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <p>At the end of each turning point after the first:</p>
        <ul>
          <li>If there are no enemy operatives wholly within your territory, you score 1VP.</li>
          <li>If there are no enemy operatives whilly within 6" of your drop zone, you score 1VP.</li>
        </ul>
      </div>
  },
  {
    archetype: 'Security',
    id: 2,
    content: 
      <div className="missionOp">
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/48d4ad031e87e40d199dc26b31ccb329d1f021aa/src/img/Archetype_Security.svg" className="archetype" style={{ marginTop: -1 + 'px' }} />
        <h3 className="opTitleTac" style={{ backgroundColor: '#222766ff' }}><span className="tacOpType">Security</span><br />SECURE CENTRE</h3>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
        <p>When you first score VP from this Op.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <p>At the end of each turning point after the first:</p>
        <ul>
          <li>If the total APL stat of friendly operatives within 3" of the centre of the killzone is greater than that of enemy operatives, you score 1VP.</li>
          <li>If the total APL stat of friendly operatives on the centreline but more than 3" from the centre of the killzone is greater than that of enemy operatives, you score 1VP.</li>
        </ul>
      </div>
  },
  {
    archetype: 'Security',
    id: 3,
    content: 
      <div className="missionOp">
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/48d4ad031e87e40d199dc26b31ccb329d1f021aa/src/img/Archetype_Security.svg" className="archetype" style={{ marginTop: -1 + 'px' }} />
        <h3 className="opTitleTac" style={{ backgroundColor: '#222766ff' }}><span className="tacOpType">Security</span><br />ESCORT OPERATIVE</h3>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
        <p>The Target Reveal step of the first or second Turning Point.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <p>Select one friendly operative. At the end of the battle:</p>
        <ul>
          <li>If that friendly operative is not incapacitated, you score 1VP.</li>
          <li>If that friendly operative is wholly within your opponent's territory, you score 1VP.</li>
          <li>If that friendly operative is within 6" of your opponent's killzone edge, you score 1VP.</li>
          <li>If other friendly operatives are within that friendly operative's control range, gain 1VP (Max. 3VP).</li>
        </ul>
      </div>
  },
  {
    archetype: 'Security',
    id: 4,
    content: 
      <div className="missionOp">
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/48d4ad031e87e40d199dc26b31ccb329d1f021aa/src/img/Archetype_Security.svg" className="archetype" style={{ marginTop: -1 + 'px' }} />
        <h3 className="opTitleTac" style={{ backgroundColor: '#222766ff' }}><span className="tacOpType">Security</span><br />HOLD THEM BACK</h3>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
        <p>The Target Reveal step of any Turning Point after the first.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <ul>
          <li>At the end of any Turning Point, if there are no enemy operatives wholly within your territory, you score 1VP.</li>
          <li>If you achieve the first condition at the end of any subsequent Turning Points, you score 1VP.</li>
        </ul>
      </div>
  },
  {
    archetype: 'Security',
    id: 5,
    content: 
      <div className="missionOp">
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/48d4ad031e87e40d199dc26b31ccb329d1f021aa/src/img/Archetype_Security.svg" className="archetype" style={{ marginTop: -1 + 'px' }} />
        <h3 className="opTitleTac" style={{ backgroundColor: '#222766ff' }}><span className="tacOpType">Security</span><br />SIEZE GROUND</h3>
        <p className="enviroNote">NOT USABLE IN CLOSE QUARTERS</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
        <p>The Target Reveal step of the first turning point. Select one terrain feature that is more than 3" from your drop zone and includes any parts with the Heavy trait. Friendly operatives control that terrain feature if the total APL of friendly operatives within of it is greater than that of enemy operatives within it.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <ul>
          <li>At the end of the battle, if friendly operatives control that terrain feature, you score 1VP.</li>
          <li>If you achieve the first condition, there are no enemy operatives within 1" of that terrain feature, and the total APL of the friendly operatives that control it is 4 or more, you score 1VP.</li>
        </ul>
      </div>
  },
  {
    archetype: 'Security',
    id: 6,
    content: 
      <div className="missionOp">
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/48d4ad031e87e40d199dc26b31ccb329d1f021aa/src/img/Archetype_Security.svg" className="archetype" style={{ marginTop: -1 + 'px' }} />
        <h3 className="opTitleTac" style={{ backgroundColor: '#222766ff' }}><span className="tacOpType">Security</span><br />TAKE GROUND</h3>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>REVEAL</h3>
        <p>When you first score VP from this Op.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>ADDITIONAL RULES</h3>
        <p>An operative contests a stronghold terrain feature it's wholly within. An operative contests all other terrain features within their control range, or while underneath a terrain feature's Vantage terrian. Friendly operatives control each such terrain feature if the total APL stat of those contesting it is greater than that of enemy operatives.</p>
        <h3 className="opSubHeading" style={{ marginBottom: -10 + 'px' }}>VICTORY POINTS</h3>
        <p>At the end of each turning point after the first:</p>
        <ul>
          <li>If <b>Killzone: Volkus</b> - If friendly operatives control any stronghold terrain features within your opponent's territory, you score 2VP; for each ruin (large or small) terrain feature within your opponent's territory that friendly operatives control, you score 1VP.</li>
          <li>If <b>Killzone: Gallowdark</b> - For each access point that's on the centreline or within your opponent's territory that friendly operatives control, you score 1VP.</li>
          <li>If <b>any other killzone</b> - For each terrain feature with Heavy terrain within your opponent's territoy that friendly operatives control, you score 1VP.</li>
        </ul>
      </div>
  },
];