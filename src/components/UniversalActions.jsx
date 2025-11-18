const UniversalActions = () => {
  return (
    <div className="sectionContent" id="universalActions">
        <p>Actions have effects (<img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" />) and conditions (<img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/no.svg" className="svgImg" />). <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/no.svg" className="svgImg" /> are conditions that must be fulfilled for the operative to perform that action, whilst <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" /> are effects when an operative is performing that action, including any requirements when doing so. There are four different types of actions: universal, unique, mission and free.</p>
        <ul>
            <li><b>Universal actions</b> are the most common actions you will use and can be performed by all operatives unless specified otherwise. The main universal actions can be found below.</li>
            <li><b>Unique actions</b> are rarer actions in your kill team’s rules. Only specified operatives can perform them.</li>
            <li><b>Mission actions</b> are specific to the mission or killzone you are playing. If there are any, they will be in your mission pack, killzone rules or the equipment you’ve selected.</li>
            <li>
                <b>Free actions</b> can only be performed when another rule specifies, and the following rules apply:
                <ul>
                    <li>The conditions of the action must be met.</li>
                    <li>It does not cost the operative any additional AP to perform the action.</li>
                    <li>The operative would still count as performing the action for all other rules purposes. For example, if it performed the action during its activation, it wouldn’t be able to perform it again during that activation.</li>
                </ul>
            </li>
        </ul>
        <p>Operatives can only perform each action once per activation unless their faction rules specify otherwise. For example, chapters with the ASTARTES keyword can <b>Shoot</b> and <b>Fight</b> twice.</p>
        <p className="indentNote"><em>If an operative performs a free action outside of their activation, it does not prevent them from performing that action during their activation, or vice versa.</em></p>
        
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">REPOSITION</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" /> Move the active operative no more than it's Move stat to a location it can be placed. This must be done in one or more straight-line increments, and increments are always rounded up to the nearest inch.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/no.svg" className="svgImg" /> It cannot move within control range of an enemy operative, unless one or more other friendly operatives are already within control range of that enemy operative, in which case it can move within control range of that enemy operative but cannot finish the move there.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/no.svg" className="svgImg" /> An operative cannot perform this action while within control range of an enemy operative, or during the same activation in which it performed the <b>Fall Back</b> or <b>Charge</b> action.</li>
            </ul>
        </div>
        <p className="indentNote"><em>Moving in increments allows for greater precision and clarity.</em></p>
        <figure>
            <div className="diagramDiv">
                <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/operativediagrams/OperativeDiagram_Reposition_01.svg" className="imgGraphic diagramClipFix" />
            </div>
            <p>The operative has a Move stat of 6”. It first moves in a straight-line increment of 2” to clear the corner of a wall. It then moves in a straight-line increment of 4” — the remaining distance it can move without exceeding its Move stat.</p>
            <p><em>These movements are made in straight-line increments, instead of curving around the corner.</em></p>
        </figure>
        <figure>
            <div className="diagramDiv">
                <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/operativediagrams/OperativeDiagram_Reposition_02.svg" className="imgGraphic diagramClipFix" />
            </div>
            <p>The operative first moves in a straight-line increment of 0.5” to clear the corner of a wall, but as increments are rounded up, this is treated as 1”. It then moves in a straight-line increment of 2.75”, but again, this is rounded up to 3”. It has moved 4” in total.</p>
        </figure>

        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">DASH</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" /> Move like a <b>Reposition</b> action, except the active operative can't move more than 3” or climb, but it can drop and jump.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/no.svg" className="svgImg" /> An operative cannot perform this action while within control range of an enemy operative, or during the same activation in which it performed the <b>Charge</b> action.</li>
            </ul>
        </div>
        <p className="indentNote"><em>Since operatives cannot perform the same action more than once in their activation, Dash actions are the way operatives can move a greater distance.</em></p>
        
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">FALL BACK</p>
                <p className="actionCost"><b>2AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" /> Move like a <b>Reposition</b> action, except the active operative can move within control range of an enemy operative, but cannot finish the move there.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/no.svg" className="svgImg" /> An operative cannot perform this action unless an enemy operative is within its control range and it cannot perform this action during the same activation in which it performed the <b>Reposition</b> or <b>Charge</b> action.</li>
            </ul>
        </div>
        <p className="indentNote"><em>If an operative is activated within the control range of an enemy operative, the Fall Back action is a way to withdraw. It costs 2AP, so most operatives will not be able to perform more actions in that activation.</em></p>
        
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">CHARGE</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" /> Move like a <b>Reposition</b> action, except the active operative can move an additional 2”.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" /> It can move, and must finish the move, within control range of an enemy operative. If it moves within control range of an enemy operative that no other friendly operatives are within control range of, it cannot leave that operative’s control range.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/no.svg" className="svgImg" /> An operative cannot perform this action while it has a Conceal order, if it’s already within control range of an enemy operative, or during the same activation in which it performed the <b>Reposition</b>, <b>Dash</b> or <b>Fall Back</b> action.</li>
            </ul>
        </div>
        <p className="indentNote"><em>Charge actions allow operatives to effectively pin down enemies, but since they need to be in an engagement order to do so, they may become vulnerable to enemy shooting.</em></p>
        
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">PICK UP MARKER</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" /> Remove a marker the active operative controls that the <b>Pick Up</b> Marker action can be performed upon. That operative is now carrying, contesting and controlling that marker.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/no.svg" className="svgImg" /> An operative cannot perform this action while within control range of an enemy operative, or while it’s already carrying a marker.</li>
            </ul>
        </div>
        <p className="indentNote"><em>If the <b>Pick Up</b> Marker action can be performed on a marker, it will be specified elsewhere, such as in your mission pack.</em></p>
        
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">PLACE MARKER</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" /> Place a marker the active operative is carrying within its control range.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" /> If an operative carrying a marker is incapacitated (see damage on pg 47), it must perform this action before being removed from the killzone, but does so for 0AP. This takes precedence over all rules that prevent it from doing so.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/no.svg" className="svgImg" /> An operative cannot perform this action during the same activation in which it already performed the <b>Pick Up Marker</b> action (unless incapacitated).</li>
            </ul>
        </div>
        <p className="indentNote"><em>Similarly, if there is any marker carried by the operative, it will be specified elsewhere.</em></p>
    
    </div>
  )
}

export default UniversalActions
