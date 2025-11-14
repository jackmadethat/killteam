const Grenades = () => {
  return (
    <div className="sectionContent" id="grenades">

        <h3>Utility Grenades</h3>
        <p>When you select this equipment, select two utility grenades (2 smoke, 2 stun, or 1 smoke and 1 stun). Each selection is a unique action your operatives can perform, limited by the number you choose.</p>

        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/equipment/Equipment_SmokeGrenade.svg" className="imgGraphic roundToken" />
        </figure>        
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">SMOKE GRENADE</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" /> Place one of your smoke grenade markers within 6" of this operative. It must be visible to this operative or set on vantage terrain or a terrain feature visible to this operative. The marker creates a 1" horizontally and vertically unlimited smoke area from it (but not below it).</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" /> While an operative is wholly within a smoke area, it is considered obscured to operatives more than 2" away from it and vice versa. Additionally, when an operative shoots at an enemy operative that is wholly within a smoke area, the Piercing rule is ignored unless both operatives are within 2" of each other.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" /> In the Ready step of the next Strategy Phase, roll a D3. Remove that smoke grenade marker once a number of activations equal to the result of that D3 is completed, or at the end of the turning point (whichever occurs first).</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/no.svg" className="svgImg" /> An operative cannot perform this action while within the control range of an enemy operative, or if the total number of times your kill team can perform it has been reached.</li>
            </ul>
        </div>

        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/equipment/Equipment_StunGrenade.svg" className="imgGraphic roundToken" />
        </figure>
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">STUN GRENADE</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" /> Select an enemy operative within 6" of this operative and visible to it. That operative and each other operative within 1" of it makes a stun check. To make a stun check, roll a D6: if the result is 3+, subtract 1 from its APL stat until the end of its next activation.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/no.svg" className="svgImg" /> An operative cannot perform this action while within control range of an enemy operative, or if you have reached the total number of times your kill team can perform it.</li>
            </ul>
        </div>

        <h3>Explosive Grenades</h3>
        <p>When you select this equipment, select two explosive grenades (2 frag, 2 krak, or 1 frag and 1 krak). Each selection is a ranged weapon your operatives can use as a Shoot action, limited by the number you choose.</p>
        
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/equipment/Equipment_FragGrenade.svg" className="imgGraphic roundToken" />
        </figure>
        <table className="weaponTable" style={{ maxWidth: 500 + 'px' }}>
            <tbody>
                <tr>
                    <th>NAME</th>
                    <th>ATK</th>
                    <th>HIT</th>
                    <th>DMG</th>
                </tr>
                <tr>
                    <td><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/shoot.svg" className="svgImg" alt="Shoot" /> Frag Grenade</td>
                    <td>4</td>
                    <td>4+</td>
                    <td>2/4</td>
                </tr>
            </tbody>
        </table>
        <table className="weaponRulesTable" style={{ maxWidth: 500 + 'px' }}>
            <tbody>
                <tr>
                    <th>WEAPON RULES</th>
                </tr>
                <tr>
                    <td>Range 6", Blast 2", Saturate</td>
                </tr>
            </tbody>
        </table>
        <div style={{ marginTop: 50 + 'px' }}></div>
        
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/equipment/Equipment_KrakGrenade.svg" className="imgGraphic roundToken" />
        </figure>
        <table className="weaponTable" style={{ maxWidth: 500 + 'px' }}>
            <tbody>
                <tr>
                    <th>NAME</th>
                    <th>ATK</th>
                    <th>HIT</th>
                    <th>DMG</th>
                </tr>
                <tr>
                    <td><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/shoot.svg" className="svgImg" alt="Shoot" /> Krak Grenade</td>
                    <td>4</td>
                    <td>4+</td>
                    <td>4/5</td>
                </tr>
            </tbody>
        </table>
        <table className="weaponRulesTable" style={{ maxWidth: 500 + 'px' }}>
            <tbody>
                <tr>
                    <th>WEAPON RULES</th>
                </tr>
                <tr>
                    <td>Range 6", Piercing 1, Saturate</td>
                </tr>
            </tbody>
        </table>

        <h3>Grenade Rules</h3>
        <p>Grenades are a Universal equipment option so any operative can use them (limited by the number that the player selects and availability detailed in your kill team's rules), Utility grenades as an action and Explosive grenades as a ranged weapon. You do not need to nominate which operative is carrying which grenade ahead of time, you only need to track the number of grenades team-wide. The exception to this is operatives with the Grenadier type, which have different grenade rules and limitations.</p>
        <p className="indentNote"><em>As an equipment option, selected grenades, either Utility or Explosive, represent 2 grenades of that type.</em></p>
        <p>Explosive grenades, due to being a ranged weapon, require a <em>valid target</em> to use, while utility grenades can be thrown anywhere within their range.</p>

        <h3>Advanced Grenade Rules</h3>
        <ul>
            <li><b>Point Targeting</b>: All grenades can be thrown at specific locations rather than requiring valid targets.</li>
            <li><b>Ricochet</b>: Grenades can be thrown at walls to bounce them around corners. Angles must be approximated in a realistic way, bounces are limited to 1 per grenade throw, and the grenade can't travel further than it's maximum range.</li>
            <li><b>Breaching</b>: Explosive grenades can be thrown at doors (and hatchways, etc) to blow the door out. From that point on, the door is open and can't be closed.</li>
            <li><b>Destructive</b>: If a Ladder, Light Barricade or Portable Barricade falls under a frag grenade's blast range, it is destroyed and removed from the killzone.</li>
            <li><b>Lobbing</b>: Grenades can be thrown 50% further than their maximum range (for example, if the grenade has a range of 6" it can be lobbed 9", as 50% of 6 is 3). When lobbing a grenade, nominate the desired location then roll a scatter dice and a d3; the grenade lands at a distance equal to the value of the d3 in inches away from the desired location and in the direction the scatter dice is pointing.</li>
        </ul>
        <br />
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/ScatterDice.jpg" className="imgGraphic" style={{ maxWidth: 200 + 'px' }} />
            <p>Scatter dice. If the die lands on the crosshair, the throw is accurate and the grenade lands on target.</p>
        </figure>
    </div>
  )
}

export default Grenades
