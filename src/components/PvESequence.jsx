const PvESequence = () => {
  return (
    <div className="sectionContent" id="pveSequence">
      <p>Kill Team can be played alone or cooperatively with another player versus procedurally-managed non-player operatives (NPOs). NPOs have their own rules regarding stats and behavior, so they require minimal micro-management and provide a functional 'CPU' side.</p>
      <p>For co-op games, unless specified otherwise, the players select a kill team to share, splitting it evenly or alternating operative selection until every operative is allocated to a player. Some solo and PvE games use a single operative per player, others may use a whole kill team per player; refer to your chosen mission's rules for details.</p>
      <ol>
        <li>Setup Mission & Killzone
          <ul>
            <br /><li>Select a Kill Team for the battle</li>
            <li>Select the killzone and setup terrain</li>
            <li>Select the mission/Crit Op and setup objective markers
              <p className="indentNote"><em>Some single-player and co-op missions specify special rules for NPOs. Refer to your mission rules for details.</em></p>
            </li>
            <li>Roll for initiative, both for the player(s) and non-player side
              <p className="indentNote"><em>If the non-player wins initiative, it always chooses to keep it.</em></p>
            </li>
          </ul>
        </li>
        <li>Setup Operatives & Equipment
          <ul>
            <br /><li>Players select their operatives and equipment options</li>
            <li>Player gains 2 Command Points (CP), NPO gains none for the duration of the game</li>
            <li>No Tac Op is selected</li>
            <li>Set up appropriate equipment terrian for NPOs, the player team, then set up operatives with a conceal order</li>
          </ul>
          <p className="indentNote"><em>When playing a co-op mission, players still act as one 'side', so don't double up on CP or equipment selections, manage them as a team.</em></p>
        </li>
        <li>Scouting
          <ul><br />
            <li>Skip the scouting step</li><br />
          </ul>
        </li>
        <li>Start Battle
          <ul>
            <br /><li>First Turning Point (TP) initiative is decided with a roll-off</li>
            <li>Turning points function in the same fashion as a PvP game, but NPOs don't gain CP or use gambits unless the mission calls for it.</li><br />
          </ul>
        </li>
        <li>Resolve Battle
          <ul><br />
            <li>The battle ends when the mission's Victory condition is met (win) or all player operatives are incapacitated (loss).</li>
          </ul>
        </li>
      </ol>
      <h3>NPO Behavior</h3>
      <p>When making decisions for NPOs, you may choose to use the <em>threat principle</em>: choose the worst option for the player. This can determine which NPO activates, how it moves, how it shoots, how it fights, as well as how to resolve their dice, etc. Alternatively, you may choose to use <em>action priorities</em> for NPOs based on their type.</p>
      <h3 style={{ fontSize: 1.2 + 'em' }}><em><b>Threat Principle:</b></em></h3>
      <ol style={{ fontSize: 0.9 + 'em' }}>
        <li><b>Activation Priority</b><br /><br />Select the ready NPO that:<br />
          <ol><br />
            <li>Can perform a <b>Fight</b> or <b>Shoot</b> action (as determined by it's behavior)and is the most threatening to do so (e.g. is more likely to incapacitate a friendly operative), using their best weapon to incapacitate a player's operative</li>
            <li>Is <b>not in cover</b> from player operatives</li>
            <li>Is <b>closest to</b> a player operative</li>
          </ol><br />
        </li>
        <li><b>Reposition or Dash Action</b><br /><br />NPOs move <b>to cover</b> where they have a <b>valid target</b>. If there are multiple potential cover locations with valid targets, choose the best one for <b>Shoot</b>.<br />
        </li><br />
        <li><b>Shoot Action</b><br /><br />If there are multiple valid Shoot targets, pick one that fulfils the most of these conditions:
          <ul><br />
            <li>Is <b>not obscured</b></li>
            <li>Is <b>not in cover</b></li>
            <li>Is <b>in control range</b> of an objective marker</li>
            <li>Is <b>closest</b></li>
            <li>Is <b>wounded</b></li>
            <li>Is <b>ready</b></li>
          </ul><br />
        </li>
        <li><b>Fight Action</b><br /><br />If there are multiple valid Fight targets, pick one that fulfils the most of these conditions:
          <ul><br />
            <li>Is <b>wounded</b> or more likely to be incapacitated</li>
            <li>Is <b>in control range</b> of an objective marker</li>
            <li>Is <b>ready</b></li>
          </ul>
        </li>
      </ol>
      <h3 style={{ fontSize: 1.2 + 'em' }}><em><b>Action Priority:</b></em></h3>
      <ul style={{ fontSize: 0.9 + 'em' }}>
        <li><b>All Brawlers</b>
          <p>The NPO will move towards the enemy to fight them, but will seek cover on the way. The NPO will perform an action if (listed by priority):</p>
          <p>If the NPO can <b>Fight</b> or <b>Charge</b>, give the engage order and do:</p>
          <ol>
            <li><b>Fight</b></li>
            <li><b>Charge</b> the closest player operative</li>
          </ol>
          <p>If the NPO cannot <b>Fight</b> or <b>Charge</b>, give the conceal order and do:</p>
          <ol>
            <li><b>Reposition</b> towards nearest enemy (prefer <b>cover</b>, can <b>Dash</b> afterwards)</li>
            <li><b>Dash</b> towards the closest player operative (preferring <b>cover</b>)</li>
          </ol>
        </li><br />
        <li><b>All Marksmen</b>
          <p>The NPO will move to an ideal position to shoot player operatives. The NPO will perform an action if (listed by priority):</p>
          <p>If the NPO can <b>Shoot</b>, give the engage order and perform it's shoot action using conditions listed above or your best judgement, choosing the worst target for the player. Otherwise, give the conceal order, then do:</p>
          <ol>
            <li><b>Fall Back</b> to <b>cover</b> if possible, where a valid target is not <b>obscured</b>. If not, to the nearest visible objective marker</li>
            <li><b>Reposition</b> to <b>cover</b> if possible, where a valid target is not <b>obscured</b>. If not, to the nearest visible objective marker (it can also <b>Dash</b>)</li>
          </ol>
        </li>
      </ul>
      <h3>NPO Types</h3>
      <table className="weaponTable dataCard" style={{ minHeight: 100 + 'px' }}>
        <tbody>
          <tr>
            <th>BRAWLER: TROOPER</th>
            <th>APL<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/apl.svg" className="svgImg" alt="APL" />2</th>
            <th>MOV<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/move.svg" className="svgImg" alt="Move" />6"</th>
            <th>SAV<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/save.svg" className="svgImg" alt="Save" />5+</th>
            <th>WND<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/wounds.svg" className="svgImg" alt="Wounds" />7</th>
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
                      <td><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/attack.svg" className="svgImg" alt="Attack" /> Melee Weapon</td>
                      <td>4</td>
                      <td>4+</td>
                      <td>3/4</td>
                      <td>Ceaseless</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          <tr>
            <td colspan="5" className="datacardAdditionalRules"></td>
          </tr>
          <tr>
            <td colspan="5" style={{ textAlign: 'right' }}><span className="baseSize">32</span></td>
          </tr>
        </tbody>
      </table>

      <table className="weaponTable dataCard" style={{ minHeight: 100 + 'px' }}>
        <tbody>
          <tr>
            <th>BRAWLER: TOUGH</th>
            <th>APL<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/apl.svg" className="svgImg" alt="APL" />2</th>
            <th>MOV<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/move.svg" className="svgImg" alt="Move" />6"</th>
            <th>SAV<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/save.svg" className="svgImg" alt="Save" />4+</th>
            <th>WND<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/wounds.svg" className="svgImg" alt="Wounds" />10</th>
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
                      <td><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/attack.svg" className="svgImg" alt="Attack" /> Melee Weapon</td>
                      <td>4</td>
                      <td>4+</td>
                      <td>4/5</td>
                      <td>Ceaseless</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          <tr>
            <td colspan="5" className="datacardAdditionalRules"></td>
          </tr>
          <tr>
            <td colspan="5" style={{ textAlign: 'right' }}><span className="baseSize">32</span></td>
          </tr>
        </tbody>
      </table>

      <table className="weaponTable dataCard" style={{ minHeight: 100 + 'px' }}>
        <tbody>
          <tr>
            <th>BRAWLER: HEAVY</th>
            <th>APL<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/apl.svg" className="svgImg" alt="APL" />3</th>
            <th>MOV<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/move.svg" className="svgImg" alt="Move" />6"</th>
            <th>SAV<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/save.svg" className="svgImg" alt="Save" />3+</th>
            <th>WND<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/wounds.svg" className="svgImg" alt="Wounds" />14</th>
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
                      <td><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/attack.svg" className="svgImg" alt="Attack" /> Melee Weapon</td>
                      <td>5</td>
                      <td>3+</td>
                      <td>4/5</td>
                      <td>Ceaseless</td>
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
            <td colspan="5" className="datacardAdditionalRules">This operative can perform two <b>Fight</b> actions per activation.</td>
          </tr>
          <tr>
            <td colspan="5" style={{ textAlign: 'right' }}><span className="baseSize">40</span></td>
          </tr>
        </tbody>
      </table>

      <table className="weaponTable dataCard" style={{ minHeight: 100 + 'px' }}>
        <tbody>
          <tr>
            <th>MARKSMAN: TROOPER</th>
            <th>APL<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/apl.svg" className="svgImg" alt="APL" />2</th>
            <th>MOV<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/move.svg" className="svgImg" alt="Move" />6"</th>
            <th>SAV<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/save.svg" className="svgImg" alt="Save" />5+</th>
            <th>WND<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/wounds.svg" className="svgImg" alt="Wounds" />7</th>
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
                      <td><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/shoot.svg" className="svgImg" alt="Shoot" /> Firearm</td>
                      <td>4</td>
                      <td>4+</td>
                      <td>2/3</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/shoot.svg" className="svgImg" alt="Shoot" /> Special Weapon*</td>
                      <td>4</td>
                      <td>4+</td>
                      <td>4/5</td>
                      <td>Piercing 1</td>
                    </tr>
                    <tr>
                      <td><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/attack.svg" className="svgImg" alt="Attack" /> Melee Weapon</td>
                      <td>3</td>
                      <td>4+</td>
                      <td>2/3</td>
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
            <td colspan="5" className="datacardAdditionalRules">*Only 1 in 3 of this operative type can have this weapon.</td>
          </tr>
          <tr>
            <td colspan="5" style={{ textAlign: 'right' }}><span className="baseSize">32</span></td>
          </tr>
        </tbody>
      </table>

      <table className="weaponTable dataCard" style={{ minHeight: 100 + 'px' }}>
        <tbody>
          <tr>
            <th>MARKSMAN: WARRIOR</th>
            <th>APL<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/apl.svg" className="svgImg" alt="APL" />2</th>
            <th>MOV<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/move.svg" className="svgImg" alt="Move" />6"</th>
            <th>SAV<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/save.svg" className="svgImg" alt="Save" />4+</th>
            <th>WND<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/wounds.svg" className="svgImg" alt="Wounds" />8</th>
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
                      <td><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/shoot.svg" className="svgImg" alt="Shoot" /> Firearm</td>
                      <td>4</td>
                      <td>4+</td>
                      <td>2/3</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/attack.svg" className="svgImg" alt="Attack" /> Melee Weapon</td>
                      <td>3</td>
                      <td>4+</td>
                      <td>2/3</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          <tr>
            <td colspan="5" className="datacardAdditionalRules"></td>
          </tr>
          <tr>
            <td colspan="5" style={{ textAlign: 'right' }}><span className="baseSize">32</span></td>
          </tr>
        </tbody>
      </table>

      <table className="weaponTable dataCard" style={{ minHeight: 100 + 'px' }}>
        <tbody>
          <tr>
            <th>MARKSMAN: HEAVY</th>
            <th>APL<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/apl.svg" className="svgImg" alt="APL" />3</th>
            <th>MOV<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/move.svg" className="svgImg" alt="Move" />6"</th>
            <th>SAV<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/save.svg" className="svgImg" alt="Save" />3+</th>
            <th>WND<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/wounds.svg" className="svgImg" alt="Wounds" />14</th>
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
                      <td><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/shoot.svg" className="svgImg" alt="Shoot" /> Firearm</td>
                      <td>4</td>
                      <td>3+</td>
                      <td>3/4</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/attack.svg" className="svgImg" alt="Attack" /> Melee Weapon</td>
                      <td>4</td>
                      <td>3+</td>
                      <td>3/4</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          <tr>
            <td colspan="5" className="datacardAdditionalRules">This operative can perform two <b>Shoot</b> actions per activation.</td>
          </tr>
          <tr>
            <td colspan="5" style={{ textAlign: 'right' }}><span className="baseSize">40</span></td>
          </tr>
        </tbody>
      </table>

      <h3>Missions: Joint Operations</h3>
      <p>The following are example missions designed for co-op or single-player games. Place terrain and other details at your discretion, or in accordance with specific killzone rulesets.</p>
      <p>You can find more solo/co-op missions in the Missions section (6.0)</p>
      
      <h3><em>Breach</em></h3>
      <p>An enemy facility has been identified as a vital command post, supply base or other strategic asset that must be eliminated. With your operatives assembled, you must now secure entrance to the site.</p>
      <div className="mapGrid">
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/39af57cdc7abb37e3e13096a408731afd62629c4/src/img/JointOps_Breach.svg" className="mapImage" style={{ maxWidth: 600 + 'px' }} />
      </div>
      <b>Mission Rule</b>
      <ul>
        <li><b>NPOs</b>: Any combination of NPOs with a combined wounds stat of up to 90. Set them up with a conceal order wholly within the NPO Deployment Zone and spread out in cover.</li>
      </ul>
      <b>Victory Condition</b>
      <ul>
        <li><b>Win</b>: If all NPOs are incapacitated, the battle ends with a player victory.</li>
        <li><b>Lose</b>: If all player operatives are incapacitated or the game exceeds 4 turning points, the battle ends with a player defeat.</li>
      </ul>

      <h3><em>Sabotage</em></h3>
      <p>Having forced passage into the enemy facility, it now falls to your operatives to locate and sabotage key systems and strategic assets while eleminating the waves of the enemy soldiers rushing to defend them.</p>
      <div className="mapGrid">
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/39af57cdc7abb37e3e13096a408731afd62629c4/src/img/JointOps_Sabotage.svg" className="mapImage" style={{ maxWidth: 600 + 'px' }} />
      </div>
      <b>Mission Rule</b>
      <ul>
        <li><b>NPOs</b>: Any combination of NPOs with a combined wounds stat of up to 90. Set them up with a conceal order wholly within the NPO Deployment Zone and spread out in cover.</li>
        <li><b>Reinforcements</b>: Each strategy phase, if half of the NPOs are incapacitated, they call in reinforcements as a Strategic Gambit. Randomly select two incapacitated NPOs (excluding Heavy NPOs) or one incapacitated Heavy NPO. Set them up with a conceal order and in cover (if possible) within 3" of a reinforcement marker.</li>
      </ul>
      <b>Victory Condition</b>
      <ul>
        <li><b>Win</b>: If all NPOs are incapacitated or all objective markers are sabotaged, the battle ends with a player victory.</li>
        <li><b>Lose</b>: If all player operatives are incapacitated or the game exceeds 4 turning points, the battle ends with a player defeat.</li>
      </ul>
      <div className="actionLine"></div>
      <div className="actionDiv">
        <div className="titleBlock">
          <p className="actionName">SABOTAGE</p>
          <p className="actionCost"><b>1AP</b></p>
        </div>
        <ul>
          <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" /> One objective marker the active operative controls is sabotaged.</li>
          <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/no.svg" className="svgImg" /> An operative cannot perform this action during the first turning point, while within control range of an enemy operative, or if that objective marker has already been sabotaged.</li>
        </ul>
      </div>

      <h3><em>Escape</em></h3>
      <p>The facility burns. Vital enemy assets have been annihilated thanks to your operatives’ efforts. With vengeful foes closing in from all sides, now is the time to make good your escape.</p>
      <div className="mapGrid">
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/39af57cdc7abb37e3e13096a408731afd62629c4/src/img/JointOps_Escape.svg" className="mapImage" style={{ maxWidth: 600 + 'px' }} />
      </div>
      <b>Mission Rule</b>
      <ul>
        <li><b>NPOs</b>: Any combination of NPOs with a combined wounds stat of up to 77. Set them up with a conceal order wholly within the NPO Deployment Zone and spread out in cover.</li>
        <li><b>Reinforcements</b>: Each strategy phase, if half of the NPOs are incapacitated, they call in reinforcements as a Strategic Gambit. Randomly select two incapacitated NPOs (excluding Heavy NPOs) or one incapacitated Heavy NPO. Set them up with a conceal order and in cover (if possible) within 6" of a killzone edge and more than 6" from friendly operatives.</li>
      </ul>
      <b>Victory Condition</b>
      <ul>
        <li><b>Win</b>: If all player operatives escape within 4 turning points, the battle ends with a player victory.</li>
        <li><b>Lose</b>: If all player operatives are incapacitated or the game exceeds 4 turning points, the battle ends with a player defeat.</li>
      </ul>
      <div className="actionLine"></div>
      <div className="actionDiv">
        <div className="titleBlock">
          <p className="actionName">ESCAPE</p>
          <p className="actionCost"><b>0AP</b></p>
        </div>
        <ul>
          <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" /> The player’s operatives can move wholly over the NPO’s killzone edge (this takes precedence over bases and the edge of the killzone) Any that do so have escaped - remove them from the killzone.</li>
        </ul>
      </div>

    </div>
  )
}

export default PvESequence
