function DoorsHatchways() {
  return (
    <div className="sectionContent" id="doors">
        <h3>Door/Hatchway</h3>
        <p>A door or hatchway has two statuses: closed and open. It has two parts — an access point and a door/hatch — and their terrain types depend upon the status. Operatives can perform the <b>Operate Door/Hatch</b> mission action to change its status. Doors and hatchways begin the battle closed.</p>
        <p><em>As an open door’s access point is Exposed terrain, the walls either side of it must be used for cover and obscuring instead of the access point.</em></p>
        <p>Operate Door/Hatch</p>
        <p>1APL</p>
        <ul>
            <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" />Open or close a door/hatchway that’s access point is within the operative’s control range.</li>
            <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" />An operative can perform this action during a <b>Dash</b> or <b>Reposition</b> action, and any remaining move distance can be used after it does so.</li>
            <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" />An operative cannot perform this action while within control range of an enemy operative, or if that door/hatchway is open and its access point is within an enemy operative’s control range.</li>
        </ul>
        <p><em>Opening a door/hatchway can cause the operative to be within control range of an enemy operative, in which case its Dash or Reposition action would immediately end (unless it has rules that allow it to move within control range of an enemy operative).</em></p>
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/walls-hatchway-1.png" className="imgGraphic" />
            <p>Closed</p>
            <p>While a door/hatchway is closed:</p>
            <ul>
                <li>Its door/hatch must be fully shut.</li>
                <li>The access point and hatch are Heavy and Wall terrain.</li>
            </ul>
        </figure>
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/walls-hatchway-2.png" className="imgGraphic" />
            <p>Open</p>
            <p>While a door/hatchway is open:</p>
            <ul>
                <li>Its door/hatch must be fully open (it cannot be ajar).</li>
                <li>Its access point is Accessible, Insignificant and Exposed terrain.</li>
                <li>Its door/hatch is Heavy and Wall terrain, and the gap directly underneath it is Blocking terrain.</li>
            </ul>
            <p><em>If operatives would prevent the door/hatch from fully opening or closing, temporarily remove them from the killzone, open or close the door/hatch, then return the operatives as close as possible to their original location. If an operative is within an enemy operative’s control range before a door/hatch is opened, it must be returned there.</em></p>
        </figure>
        <h3>Door Fight</h3>
        <p>1APL</p>
        <ul>
            <li>
                <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> Fight with the active operative
            </li>
            <li>
                <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> In the Select Enemy Operative step, instead select an enemy operative within 2” of, and on the other side of, an open door/hatchway’s access point the active operative is touching. For the duration of that action, those operatives are treated as being within each other’s control range.
            </li>
            <li>
                <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> This action is treated as a <b>Fight</b> action. An operative cannot perform this action while within control range of an enemy operative, or if its base isn’t touching an open door/hatchway’s access point.
            </li>
        </ul>
        <p><em>This action allows an operative to fight across an open door/hatchway — useful if the enemy is obstructing it and preventing your operatives from moving through.</em></p>
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/hatchwayfight-example-1.png" className="imgGraphic" />
            <p>Operative A’s base is touching an open door/hatchway’s access point. It can perform the <b>Door Fight</b> action to fight against either operative B or C.</p>
        </figure>
    </div>
  )
}

export default DoorsHatchways
