const Grenades = () => {
  return (
    <div className="sectionContent" id="grenades">

        <h3>Utility Grenades</h3>
        <p>When you select this equipment, select two utility grenades (2 smoke, 2 stun, or 1 smoke and 1 stun). Each selection is a unique action your operatives can perform, limited by the number you choose.</p>

        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">SMOKE GRENADE</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> Place one of your smoke grenade markers within 6" of this operative. It must be visible to this operative or set on vantage terrain or a terrain feature visible to this operative. The marker creates a 1" horizontally and vertically unlimited smoke area from it (but not below it).</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> While an operative is wholly within a smoke area, it is considered obscured to operatives more than 2" away from it and vice versa. Additionally, when an operative shoots at an enemy operative that is wholly within a smoke area, the Piercing rule is ignored unless both operatives are within 2" of each other.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> In the Ready Step of the next Strategy Phase, roll a D3. Remove that smoke grenade marker once a number of activations equal to the result of that D3 is completed, or at the end of the turning point (whichever occurs first).</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action while within the control range of an enemy operative, or if the total number of times your kill team can perform it has been reached.</li>
            </ul>
        </div>

        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/utilitygrenades-example-1.png" className="imgGraphic" style={{ marginTop: 20 + 'px', marginBottom: 30 + 'px' }} />
        </figure>

        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">STUN GRENADE</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> Select an enemy operative within 6" of this operative and visible to it. That operative and each other operative within 1" of it makes a stun check. To make a stun check, roll a D6: if the result is 3+, subtract 1 from its APL stat until the end of its next activation.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action while within control range of an enemy operative, or if you have reached the total number of times your kill team can perform it.</li>
            </ul>
        </div>

        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/utilitygrenades-example-2.png" className="imgGraphic" />
        </figure>

        <h3>Explosive Grenades</h3>
        <p>The forces of the 41st Millennium utilise a wide range of offensive grenades, from simple fragmentation grenades to plasma and gravitic concussion grenades, and even more exotic devices employed to pierce enemy armour.</p>
        <p>When you select this equipment, select two explosive grenades (2 frag, 2 krak, or 1 frag and 1 krak). Each selection is a unique action your operatives can perform, limited by the number you choose.</p>
        
        <table className="weaponTable" style={{ maxWidth: 500 + 'px' }}>
            <tbody>
                <tr>
                    <th>NAME</th>
                    <th>ATK</th>
                    <th>HIT</th>
                    <th>DMG</th>
                </tr>
                <tr>
                    <td><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/shoot.svg" className="svgImg" alt="Shoot" /> Frag Grenade</td>
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

        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/explosivegrenades-example-1.png" className="imgGraphic" />
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
                    <td><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/shoot.svg" className="svgImg" alt="Shoot" /> Krak Grenade</td>
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
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/explosivegrenades-example-2.png" className="imgGraphic" />
        </figure>
    </div>
  )
}

export default Grenades
