const Mission_Swarm = () => {
  return (
    <div className="sectionContent" id="considerations">

        <div style={{ marginBottom: 40 + 'px' }}></div>

        <table className="weaponTable dataCard">
            <tbody>
                <tr>
                    <th>BLADED XENOGAUNT</th>
                    <th>APL<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/apl.svg" className="svgImg" alt="APL" />2</th>
                    <th>MOV<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/move.svg" className="svgImg" alt="Move" />7"</th>
                    <th>SAV<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/save.svg" className="svgImg" alt="Save" />5+</th>
                    <th>WND<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/wounds.svg" className="svgImg" alt="Wounds" />7</th>
                </tr>
                <tr>
                    <td colspan="5">
                        <table className="weaponTable weaponStats">
                            <tbody>
                                <tr>
                                    <th>NAME</th>
                                    <th>ATK</th>
                                    <th>HIT</th>
                                    <th>DMG</th>
                                    <th>WEAPON RULES</th>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: 5 + 'px' }}><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/attack.svg" className="svgImg" alt="Attack" /> Talons</td>
                                    <td>4</td>
                                    <td>4+</td>
                                    <td>2/4</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" className="datacardAdditionalRules">
                        <b>Behavior</b>:<br />
                        <ol>
                            <li><b>Fight</b></li>
                            <li><b>Charge</b> the closes player operative via the shortest possible route</li>
                            <li><b>Reposition</b> towards the closest player operative via the shortest possible route</li>
                            <li><b>Dash</b> towards the closest player operative via the shortest possible route</li>
                        </ol>
                    </td>
                    <td colspan="3" className="datacardAdditionalRules">
                    </td>
                </tr>
                <tr>
                  <td colspan="5"><div className="actionLine" style={{ width: 100 + '%' }}></div></td>
                </tr>
                <tr>
                    <td colspan="4" className="datacardKeywords" style={{ paddingLeft: 10 + 'px' }}><span><b style={{ fontSize: 1.185 + 'em' }}>XENOS</b><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/skull.svg" className="svgImg blackIcon" /></span>, BRAWLER, ORGANIC, MINORIS</td>
                    <td colspan="5" style={{ textAlign: 'right' }}><span className="baseSize">40</span></td>
                </tr>
                <tr>
                    
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Mission_Swarm
