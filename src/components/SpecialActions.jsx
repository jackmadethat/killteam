const SpecialActions = () => {
  return (
    <div className="sectionContent" id="universalActions">
        <p>Special Actions are custom, homebrew actions that aren't used in competitive or tournament play. As such, the use of Special Actions is discretionary and should be agreed upon before a game begins. Special Actions are subject to the same rules and conditions as Universal Actions (view the Universal Actions section for a detailed explanation of how actions work) unless specified otherwise. They can be used by any operative if the operative and action's rules allow.</p>
        <p>Special Actions are intended to provide more dynamic behavior options for operatives without compromising game balance. Despite this, the inclusion of Special Actions can be game-changing depending on other actions and operative rules. Consider the effects of Special Actions to have the lowest precedence.</p>
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">SCALE WALL</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> If the active operative is within control range of a wall or barricade that isn't capped with a ceiling and is less than 4" tall, remove it from the killzone and replace it within control range of the other side of the wall or barricade and no further than 2" from it's closest relative position.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action to change elevation; the start and end position of the operative must be the same level, even if this level is above the killzone floor.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action while within control range of an enemy operative, or during the same activation in which it performed the <b>Fall Back</b> or <b>Charge</b> action.</li>
            </ul>
        </div>
        <p className="indentNote"><em>This action cannot be used in killzones with an implied ceiling such as Tomb World and Gallowdark.</em></p>
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">BREACH</p>
                <p className="actionCost"><b>2AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> If the active operative can perform an <b>Operate Door/Hatch</b> action, the operative can instead perform a <b>Breach</b> action. When breaching, the door or hatch is destroyed and will remain open for the remainder of the game. Any enemy operatives on the other side of the door are pushed back 2" and have -1 APL in their next activation.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action while within control range of an enemy operative, or during the same activation in which it performed the <b>Reposition</b>, <b>Fall Back</b> or <b>Charge</b> action.</li>
            </ul>
        </div>
        <p className="indentNote"><em>The <b>Breach</b> action is akin to kicking in the door or bursting through it somehow, creating a shock-and-awe effect.</em></p>
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">POUNCE</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> The active operative engages their jump pack, wings, strong legs, rocket boots, or other form of propulsion move up to their full movement distance in an unobstructed straight line from their current position.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> When performing this action, the operative cannot travel through open doors or hatchways, cannot not travel over heavy terrain (but can travel over light terrain), and loses 2" of distance for every 1" of elevation change.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> This action can only be performed by operatives with the means to do so, such as those with jump packs, wings, etc..</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot end this action within control range of an enemy operative.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action while within control range of an enemy operative, or during the same activation in which it performed the <b>Fall Back</b> or <b>Charge</b> action.</li>
            </ul>
        </div>
        <p className="indentNote"><em>Pouncing is useful for operatives to quickly traverse the killzone, and can be a key action for highly maneuverable kill teams such as Vespid Stingwings, or custom, homebrew kill teams like Space Marines with Assault Packs.</em></p>
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">KNOCK BACK</p>
                <p className="actionCost"><b>0AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> When defending against an enemy operative's <b>Fight</b> action, and before the attack rolls, both players roll 1d6. If the defending player rolls higher than the attacking player, the attacking operative is knocked out of the control range of the defending operative, moving directly backwards if possible, and the <b>Fight</b> action is cancelled. If the attacking player rolls higher than the defending player, their weapon's Hit stat is improved by 2.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> This action can only be performed by an operative that is defending from a <b>Fight</b> action.</li>
            </ul>
        </div>
        <p className="indentNote"><em><b>Knock Back</b> is a high-risk action that can either save or doom an operative.</em></p>
    </div>
  )
}

export default SpecialActions
