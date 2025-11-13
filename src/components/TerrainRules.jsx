import { useState } from 'react'

const TerrainRules = () => {
  const [visible_OceanRig, setVisible_OceanRig] = useState(false);
  const [visible_Ruins, setVisible_Ruins] = useState(false);
  const [visible_Dungeon, setVisible_Dungeon] = useState(false);
  const [visible_Sprawl, setVisible_Sprawl] = useState(false);
  const [visible_Octarius, setVisible_Octarius] = useState(false);
  const [visible_Open, setVisible_Open] = useState(false);

  const toggleOceanRig = () => {
    setVisible_OceanRig(!visible_OceanRig);
  };

  const toggleRuins = () => {
    setVisible_Ruins(!visible_Ruins);
  };

  const toggleDungeon = () => {
    setVisible_Dungeon(!visible_Dungeon);
  };

  const toggleSprawl = () => {
    setVisible_Sprawl(!visible_Sprawl);
  };

  const toggleOctarius = () => {
    setVisible_Octarius(!visible_Octarius);
  };

  const toggleOpen = () => {
    setVisible_Open(!visible_Open);
  };

  return (
    <div className="sectionContent" id="terrainRules">
        <p style={{ marginBottom: 10 + 'px' }}>Different killzones have different rules, terrain types, and features.<br /><br />
        <em>Click on a sub-heading below to see various killzone-specific rules.</em></p>

        <h2 className="subHeading hovered" style={{ fontSize: 1.3 + 'em', marginLeft: 2 + '%' }} onClick={toggleOpen}>Open</h2>
        <div className="weaponLine" style={{ marginBottom: 20 + 'px', marginLeft: 1 + '%' }}></div>
        {visible_Open &&
            <>
            </>
        }

        <h2 className="subHeading hovered" style={{ fontSize: 1.3 + 'em', marginLeft: 2 + '%' }} onClick={toggleOceanRig}>Ocean Rig</h2>
        <div className="weaponLine" style={{ marginBottom: 20 + 'px', marginLeft: 1 + '%' }}></div>
        {visible_OceanRig &&
            <>
            </>
        }

        <h2 className="subHeading hovered" style={{ fontSize: 1.3 + 'em', marginLeft: 2 + '%' }} onClick={toggleDungeon}>Dungeon</h2>
        <div className="weaponLine" style={{ marginBottom: 20 + 'px', marginLeft: 1 + '%' }}></div>
        {visible_Dungeon &&
            <>
            </>
        }

        <h2 className="subHeading hovered" style={{ fontSize: 1.3 + 'em', marginLeft: 2 + '%' }} onClick={toggleRuins}>Ruins</h2>
        <div className="weaponLine" style={{ marginBottom: 20 + 'px', marginLeft: 1 + '%' }}></div>
        {visible_Ruins &&
            <>
                <h3>Ruined Structures</h3>
                <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/Terrain_Ruins_01.png" className="imgGraphic pngIMG" style={{ maxWidth: 500 + 'px' }} />
                <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/Terrain_Ruins_02.png" className="imgGraphic pngIMG" style={{ maxWidth: 500 + 'px' }} />
                <p>Ruined Structures are mixed terrain with light, heavy and vantage elements and may include doors. There are also hatchways in the vantage elements that can be accessed vertically, both upwards and downwards, using the <b>Operate Hatchway</b> action.</p>
                <p>Operatives can climb up and drop down through open hatchways.</p>
                <div className="actionLine"></div>
                <div className="actionDiv">
                    <div className="titleBlock">
                        <p className="actionName">OPERATE HATCHWAY</p>
                        <p className="actionCost"><b>1AP</b></p>
                    </div>
                    <ul>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> Open or close a hatch that’s access point is within the operative’s control range.</li>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> An operative can perform this action during a <b>Dash</b> or <b>Reposition</b> action, and any remaining move distance can be used after it does so.</li>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action while within control range of an enemy operative, or if that hatchway is open and its access point is within an enemy operative’s control range.</li>
                    </ul>
                </div>
                <p>While a hatch is <b>closed</b>:</p>
                <ul style={{ textAlign: 'left' }}>
                    <li>Its hatch must be fully shut.</li>
                    <li>The access point and hatch itself are Heavy and Ceiling terrain.</li>
                </ul>
                <p>While a hatch is <b>open</b>:</p>
                <ul style={{ textAlign: 'left' }}>
                    <li>Its hatch must be fully open (it cannot be ajar).</li>
                    <li>Its access point is Accessible, Insignificant and Exposed terrain.</li>
                    <li>Its door is Heavy and Ceiling terrain, and the gap directly underneath it is Blocking terrain.</li>
                </ul>
                <h3>Scrap Piles</h3>
                <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/Terrain_Scrap.png" className="imgGraphic pngIMG" style={{ maxWidth: 500 + 'px' }} />
                <p>An operative cannot climb over a Scrap Pile. Instead it must perform an action to navigate through and around a Scrap Pile.</p>
                <div className="actionLine"></div>
                <div className="actionDiv">
                    <div className="titleBlock">
                        <p className="actionName">SCRAMBLE REPOSITION</p>
                        <p className="actionCost"><b>1AP</b></p>
                    </div>
                    <ul>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> An operative can perform this action while within control range of a Scrap Pile. Remove this operative from the killzone then set it up within control range of the Scrap Pile it started within range of for this action. It cannot be setup within control range of enemy operatives.</li>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action if it is within control range of an enemy operative. This action is treated as a <b>Reposition</b> action.</li>
                    </ul>
                </div>
                <br />
                <div className="actionLine"></div>
                <div className="actionDiv">
                    <div className="titleBlock">
                        <p className="actionName">SCRAMBLE CHARGE</p>
                        <p className="actionCost"><b>1AP</b></p>
                    </div>
                    <ul>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> An operative can perform this action while within control range of a Scrap Pile. Remove this operative from the killzone then set it up within control range of the Scrap Pile it started within range of for this action. It must be setup within control range of at least 1 enemy operative after being placed.</li>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action if it is within control range of an enemy operative and/or if it has a conceal order. This action is treated as a <b>Charge</b> action, however, an operative can still perform the <b>Dash</b> action before or after a <b>Scramble Charge</b>.</li>
                    </ul>
                </div>
            </>
        }

        <h2 className="subHeading hovered" style={{ fontSize: 1.3 + 'em', marginLeft: 2 + '%' }} onClick={toggleSprawl}>Sprawl</h2>
        <div className="weaponLine" style={{ marginBottom: 20 + 'px', marginLeft: 1 + '%' }}></div>
        {visible_Sprawl &&
            <>
            </>
        }

        {/*
        <h2 className="textCenter subHeading hovered" style={{ fontSize: 1.3 + 'em' }} onClick={toggleOceanRig}><em>Bheta-Decima</em></h2>
        <div className="weaponLine" style={{ marginBottom: 20 + 'px' }}></div>
        {visible_OceanRig &&
            <>
                <p>Killzone: Bheta-Decima has 2x short gantries, 4x medium gantries, 2x long gantries, 1x thermometric condenser (the big round piece) and 9 miscellaneous markers.</p>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/OceanRigTerrain.JPG" className="imgGraphic" />
                </figure>
                
                <h3>Gantry</h3>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/gantry-example-1.png" className="imgGraphic" style={{ maxWidth: 500 + 'px' }} />
                </figure>
                <ul>
                    <li>Gantry floors are Accessible and Vantage terrain.</li>
                    <li>Gantry pillars are Heavy terrain.</li>
                    <li>Gantry terrain features come in three sizes: long, medium, and short. When they are connected (i.e., their gantry floors are touching each other), they are treated as the same terrain.</li>
                </ul>
                <h3>Thermometric Condenser</h3>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/condenser-example-1.png" className="imgGraphic" />
                </figure>
                <ul>
                    <li>The roof is Accessible and Vantage terrain.</li>
                    <li>The inner-ledge of the roof is Exposed and Insignificant terrain: ignore the slight difference in height between the outer and inner area of the roof.</li>
                    <li>The battlements on the roof are Light terrain.</li>
                    <li>All other parts of it are Heavy terrain.</li>
                </ul>
                <h3>Hazardous Areas</h3>
                <p>Killzone: Bheta-Decima has the following additional rules that use hazardous areas marked on the game board.</p>
                <h3>Restricted Movement</h3>
                <p>No part of an operative’s base can be touching a hazardous area.</p>
                <p className="indentNote"><em>Lurking predators stop operatives from venturing too close to the ocean, while strong currents and toxic water prevent them from entering it.</em></p>
                <h3>Restricted Targeting</h3>
                <p>When selecting a valid target for an operative on the killzone floor, an intended target on the killzone floor is not a valid target if 4” of hazardous area is between them.</p>
                <p>When selecting a valid target for an operative on Vantage terrain, an intended target on the killzone floor is not a valid target if the footprint of a gantry is between them. The same is also true in reverse (an operative on the killzone floor to an intended target on Vantage terrain). However, in both cases, ignore the footprint of gantry terrain features the operative or the intended target is on or in.</p>
                <p className="indentNote"><em>Relentless waves, sea mist, and industrial smog make it harder for operatives to see targets over the ocean’s surface.</em></p>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/targeting-example-1.png" className="imgGraphic" style={{ maxWidth: 500 + 'px' }} />
                    <p>In both cases, use targeting lines to determine if a hazardous area or the footprint of a gantry is between them.</p>
                    <p style={{ paddingLeft: 5 + '%', paddingRight: 10 + '%' }}><em>Restricted targeting only matters if one or more of the operatives in question are on the killzone floor; if they are both on Vantage terrain, it has no effect.</em></p>
                </figure>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/targeting-example-2.png" className="imgGraphic" />
                    <p>A gantry’s footprint is the gantry itself, plus the area underneath it.</p>
                </figure>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/targeting-example-3.png" className="imgGraphic" />
                    <p>4” of hazardous area is between operatives A and B, therefore operative B is not a valid target (and neither would operative A be in reverse).</p>
                </figure>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/targeting-example-4.png" className="imgGraphic" />
                    <p>The footprint of a gantry is between operatives A and B, therefore operative B is not a valid target (and neither would operative A be in reverse). Note that the left gantry is ignored when determining this, as operative A is on it.</p>
                </figure>
            </>
        }

        <h2 className="textCenter subHeading hovered" style={{ fontSize: 1.3 + 'em' }} onClick={toggleSprawl}><em>Sprawl</em></h2>
        <div className="weaponLine" style={{ marginBottom: 20 + 'px' }}></div>
        {visible_Sprawl &&
            <>
                <p>Killzone: Sprawl uses a 606mm x 703mm game board with a 6x7 grid system for setting up. It has 4x short walls with hatchway and pillars and 2x each other terrain feature. It also has 8x left and 8x right pillars, and 30x pillar caps to complete terrain configuration. Note that some mission maps use less than this.</p>
                
                <h3>Sprawl Wall</h3>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/Sprawl-esceno.png" className="imgGraphic" />
                    <p>A Sprawl wall terrain feature is Heavy and Wall terrain. Some walls include a hatchway.</p>
                </figure>
                <p><b>Wall terrain:</b></p>
                <ul>
                    <li>Operatives cannot move over or through Wall terrain (this takes precedence over all other rules).</li>
                    <li>Visibility cannot be determined over or through Wall terrain.</li>
                    <li>Other than to areas of the killzone (centre of the killzone, drop zones, etc.), distances cannot be measured over or through Wall terrain; they must be measured around it using the shortest possible route.</li>
                    <li>For the purposes of cover and obscured, only the corners and ends of Wall terrain can intervene, unless the active operative has passed it.</li>
                </ul>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/walls-example-1.png" className="imgGraphic" style={{ maxWidth: 500 + 'px' }} />
                    <p>Operative A would usually be within 3” of operative B, but as distances cannot be measured over or through Wall terrain, it must be measured around the Sprawl wall. This would make operative A more than 3” from operative B.</p>
                </figure>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/walls-example-2.png" className="imgGraphic" />
                    <p>Operative B is not in cover as a corner or end of the wall is not intervening. Note that minor parts of the wall that protrude do not make a corner or end alone; it must be the main structure of the wall that turns a corner or ends, as shown in the following diagrams.</p>
                </figure>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/walls-example-3.png" className="imgGraphic" />
                    <p>A corner of the wall is intervening, therefore operative B is in cover.</p>
                </figure>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/walls-example-4.png" className="imgGraphic" />
                    <p>Operative A has passed the corner of the wall, therefore it’s not intervening and operative B is not in cover. Note that if operative A was wholly on the left side of the dotted black line, the wall would be intervening and operative B would be in cover.</p>
                </figure>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/walls-example-5.png" className="imgGraphic" />
                    <p>An end of the wall is intervening, therefore operative B is in cover.</p>
                </figure>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/walls-example-6.png" className="imgGraphic" style={{ maxWidth: 500 + 'px' }} />
                    <p>As the hatchway is open, an end of the wall is intervening. It’s more than 1” from both operatives, therefore operative B is obscured.</p>
                </figure>
            </>
        }

        <h2 className="textCenter subHeading hovered" style={{ fontSize: 1.3 + 'em' }} onClick={toggleMixed}><em>Mixed</em></h2>
        <div className="weaponLine" style={{ marginBottom: 20 + 'px' }}></div>
        {visible_Mixed &&
            <>
                <p>Killzone: Mixed uses a mix of standing wall structures, taller building structures, barricades and boxes. Additionally, the map may contain doors, hatches and breach points.</p>
                <h3>Structures</h3>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/MixedTerrain_01.JPG" className="imgGraphic" />
                    <p>Similar to the structural terrain in Ruins, Mixed structures include vantage terrain and a mix of light and heavy terrain, as well as doors, holes and windows that can affect visibility and traversal.</p>
                </figure>
                <h3>Walls</h3>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/MixedTerrain_02.JPG" className="imgGraphic" />
                    <p>Walls, similar to that used in Sprawl and Tomb World, can contain doors, hatchways, breachpoints, and act as heavy terrain.</p>
                </figure>
                <h3>Smaller Features</h3>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/MixedTerrain_03.JPG" className="imgGraphic" />
                    <p>Small walls, barricades and obstacles that are scattered about the killzone. As a gameplay option, players can manually place these features (taking turns) at the start of the game independent of their selected equipment options.</p>
                </figure>
            </>
        }

        <h2 className="textCenter subHeading hovered" style={{ fontSize: 1.3 + 'em' }} onClick={toggleOctarius}><em>Octarius</em></h2>
        <div className="weaponLine" style={{ marginBottom: 20 + 'px' }}></div>
        {visible_Octarius &&
            <>
                <p>Killzone: Octarius uses 4x Ramshackle Walls, 3x Ramshackle Barricades, 3x Scrap Piles and 1x Oil Pump.</p>
                <h3>Ramshackle Wall</h3>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/OctariusTerrain.JPG" className="imgGraphic" />
                    <p>Ramshackle Walls are mixed terrain with light, heavy and vantage elements and may include doors. There are also hatchways in the vantage elements that can be accessed vertically, both upwards and downwards, using the Operate Hatchway action.</p>
                </figure>
                <h3>Scrap Piles</h3>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/OctariusTerrain2.JPG" className="imgGraphic" />
                    <p>An operative cannot climb over a Scrap Pile. Instead it must perform an action to navigate through and around a Scrap Pile.</p>
                </figure>
                <br />
                <div className="actionLine"></div>
                <div className="actionDiv">
                    <div className="titleBlock">
                        <p className="actionName">SCRAMBLE REPOSITION</p>
                        <p className="actionCost"><b>1AP</b></p>
                    </div>
                    <ul>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> An operative can perform this action while within control range of a Scrap Pile. Remove this operative from the killzone then set it up within control range of the Scrap Pile it started within range of for this action. It cannot be setup within control range of enemy operatives.</li>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action if it is within control range of an enemy operative. This action is treated as a <b>Reposition</b> action.</li>
                    </ul>
                </div>
                <br />
                <div className="actionLine"></div>
                <div className="actionDiv">
                    <div className="titleBlock">
                        <p className="actionName">SCRAMBLE CHARGE</p>
                        <p className="actionCost"><b>1AP</b></p>
                    </div>
                    <ul>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> An operative can perform this action while within control range of a Scrap Pile. Remove this operative from the killzone then set it up within control range of the Scrap Pile it started within range of for this action. It must be setup within control range of at least 1 enemy operative after being placed.</li>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action if it is within control range of an enemy operative and/or if it has a conceal order. This action is treated as a <b>Charge</b> action, however, an operative can still perform the <b>Dash</b> action before or after a <b>Scramble Charge</b>.</li>
                    </ul>
                </div>
            </>
        }

        <h2 className="textCenter subHeading hovered" style={{ fontSize: 1.3 + 'em' }} onClick={toggleDungeon}><em>Tomb World</em></h2>
        <div className="weaponLine" style={{ marginBottom: 20 + 'px' }}></div>
        {visible_Dungeon &&
            <>
                <p>Killzone: Tomb World uses a 606mm x 703mm game board with a 6x7 grid system for setting up. It has 1x sarcophagus, 4x debris and 2x each other terrain feature. It also has 16x half pillars to complete terrain configuration. Note that some mission maps use less than this.</p>
                
                <h3>Tomb World Wall</h3>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/tomb-world-walls-1.png" className="imgGraphic" />
                    <p>A Tomb World wall terrain feature is Heavy and Wall terrain. Some walls include a hatchway or a breach point.</p>
                </figure>
                <p>Wall terrain:</p>
                <ul>
                    <li>Operatives cannot move over or through Wall terrain (this takes precedence over all other rules).</li>
                    <li>Visibility cannot be determined over or through Wall terrain.</li>
                    <li>Other than to areas of the killzone (centre of the killzone, drop zones, etc.), distances cannot be measured over or through Wall terrain; they must be measured around it using the shortest possible route.</li>
                    <li>For the purposes of cover and obscured, only the corners and ends of Wall terrain can intervene, unless the active operative has passed it.</li>
                </ul>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/tw-walls-example-1.png" className="imgGraphic" style={{ maxWidth: 500 + 'px' }} /> 
                    Operative A would usually be within 3” of operative B, but as distances cannot be measured over or through Wall terrain, it must be measured around the Tomb World wall. This would make operative A more than 3” from operative B.
                </figure>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/tw-walls-example-2.png" className="imgGraphic" /> 
                    Operative B is not in cover as a corner or end of the wall is not intervening. Note that minor parts of the wall that protrude do not make a corner or end alone; it must be the main structure of the wall that turns a corner or ends, as shown in the following diagrams.
                </figure>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/tw-walls-example-3.png" className="imgGraphic" /> 
                    A corner of the wall is intervening, therefore operative B is in cover.
                </figure>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/tw-walls-example-4.png" className="imgGraphic" /> 
                    Operative A has passed the corner of the wall, therefore it’s not intervening and operative B is not in cover. Note that if operative A was wholly on the left side of the dotted black line, the wall would be intervening and operative B would be in cover.
                </figure>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/tw-walls-example-5.png" className="imgGraphic" /> 
                    An end of the wall is intervening, therefore operative B is in cover.
                </figure>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/tw-walls-example-6.png" className="imgGraphic" /> 
                    As the hatchway is open, an end of the wall is intervening. It’s more than 1” from both operatives, therefore operative B is obscured.
                </figure>
                <h3>Breach Point</h3>
                <p>A breach point has two statuses: closed and open. It has two parts - an access point and a breach wall- and their terrain types depend upon the breach point’s status. Breach points begin the battle closed. To open a breach point, operatives can perform the Breach mission action (at which point it cannot be closed again).</p>
                <div className="actionLine"></div>
                <div className="actionDiv">
                    <div className="titleBlock">
                        <p className="actionName">BREACH</p>
                        <p className="actionCost"><b>2AP</b></p>
                    </div>
                    <ul>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> Open a closed breach point with an access point within the operative’s control range.</li>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> An operative that has the word(s) “breach marker”, “grenadier” or “mine” on its datacard, or has a weapon with the Piercing 2 or Piercing Crits 2 weapon rule (excluding weapons that have the Blast or Torrent weapon rule) can perform this action for 1 less AP (to a minimum of 1AP), but it cannot do so during an activation/counteraction in which it performed the Charge or Shoot action (or vice versa).</li>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> Roll one D6 separately for each operative that’s on the other side of the access point and has that access point within its control range: on a 4+, subtract 1 from that operative’s APL stat until the end of its next activation and inflict damage on it equal to the dice result halved (rounding up).</li>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action while within control range of an operative, or if that breach point is open.</li>
                    </ul>
                </div>
                <p>The elite operatives that form kill teams are specially equipped to overcome all manner of barriers. Some draw upon esoteric traits and adaptable skills to inventively force a route to their target. From point-blank firepower and atomic destabilisers to bio-acids and raw strength fuelled by faith, operatives have a variety of methods at their disposal to breach weak points. The forces involved can result in extreme damage, with whizzing debris and violent shock waves hitting those unlucky enough to be on the other side.</p>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/tw-breachpoint-1.png" className="imgGraphic" />
                    <div>Closed</div>
                    <p>While a breach point is closed:</p>
                    <ul style={{ textAlign: 'left' }}>
                        <li>Its breach wall must be within its access point.</li>
                        <li>The access point and breach wall are Heavy and Wall terrain.</li>
                    </ul>
                </figure>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/tw-breachpoint-2.png" className="imgGraphic" />
                    <div>Open</div>
                    <p>While a breach point is open:</p>
                    <ul style={{ textAlign: 'left' }}>
                        <li>Its breach wall must be removed from the killzone.</li>
                        <li>Its access point is Accessible and Insignificant terrain.</li>
                        <li>Its access point is also Exposed terrain. This means the walls either side of it must be used for cover and obscuring instead.</li>
                    </ul>
                </figure>
                <h3>Teleport pad</h3>
                <p>A teleport pad is Exposed, Insignificant and Vantage. Only one operative can be on it at once, and while an operative is on it, that operative cannot touch the killzone floor (in other words, an operative can’t be both on the teleport pad and on the killzone floor).</p>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/tw-teleport_pad-1.png" className="imgGraphic" />
                </figure>
                <p>From the start of the second turning point, whenever a friendly operative on a teleport pad performs the <b>Charge</b>, <b>Fall Back</b> or <b>Reposition</b> action, you can teleport it. If you do, don’t move it. Instead, remove it from the killzone and set it back up on the other teleport pad. It must still fulfil all other requirements of that action, otherwise it cannot teleport (e.g. if it’s the <b>Charge</b> action, the operative must finish that action within control range of an enemy operative). If another operative is on the other teleport pad when an operative teleports, swap them around (if it’s an enemy operative, its controlling player sets it up).</p>
                <h3>Sarcophagus and debris (light terrain)</h3>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/tw-lightrubble-example-1.png" className="imgGraphic" />
                    <p>This is Light terrain.</p>
                </figure>
            </>
        }

        <h2 className="textCenter subHeading hovered" style={{ fontSize: 1.3 + 'em' }} onClick={toggleRuins}><em>Ruins</em></h2>
        <div className="weaponLine" style={{ marginBottom: 20 + 'px' }}></div>
        {visible_Ruins &&
            <>
                <p>Killzone: Ruins has 2x strongholds, 2x large ruins, 2x small ruins, 2x heavy rubble, and 3x light rubble.</p>
                
                <h3>Stronghold</h3>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/stronghold-example-1.png" className="imgGraphic" />
                </figure>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/stronghold-example-2.png" className="imgGraphic" />
                </figure>
                <ul style={{ textAlign: 'left' }}>
                    <li><b>A</b> The upper level(s) of a stronghold terrain feature is Ceiling and Vantage terrain.</li>
                    <li><b>B</b> The door is Accessible and Heavy terrain.</li>
                    <li><b>C</b> The fire steps are Vantage, Insignificant, and Exposed terrain.</li>
                    <li><b>D</b> The broken vent is Blocking terrain.</li>
                    <li><b>E</b> The three barrel containers on Stronghold A are Blocking and Heavy terrain.</li>
                    <li><b>F</b> The small broken ramparts on the edge of the Vantage terrain of Stronghold A are Insignificant and Exposed terrain and Ceiling.</li>
                    <li><b>G</b> The gap on the lower Vantage terrain of Stronghold B is Accessible terrain.</li>
                    <li><b>H</b> You cannot have more than one friendly operative on the highest upper level of Stronghold B at once, and that operative must be placed on one side or the other of that level, it cannot be placed in the middle (this means an enemy operative cannot be prevented from moving onto or being set up on the other side). If an operative’s base is too big to be placed there, it must move (or be set up) on as far as possible (otherwise it cannot complete that move), then place it to one side instead and treat it as being there. Hold it as far on that level as possible when it matters for checking other rules (e.g. control range, visibility, distance to other operatives, etc.). This takes precedence over the rules for bases and being in a location it can be placed.</li>
                    <li>All other parts of it are Heavy terrain.</li>
                    <li>For the purposes of control range, ignore the door and parts of this terrain feature less than 2” high when determining visibility.</li>
                </ul>
                
                <h3>Large Ruin</h3>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/largeruin-example-1.png" className="imgGraphic" />
                </figure>
                <ul style={{ textAlign: 'left' }}>
                    <li><b>A</b> The upper level of a large ruin terrain feature is Ceiling and Vantage terrain. For the purposes of intervening and targeting lines, treat this level as the same height as the first upper level of a stronghold terrain feature.</li>
                    <li><b>B</b> The upper rampart is Light terrain.</li>
                    <li><b>C</b> The door is Accessible and Heavy terrain.</li>
                    <li><b>D</b> The door’s viewpoint is Blocking terrain.</li>
                    <li><b>E</b> Unbroken windows are Barred and Heavy terrain.
                        <p><strong>Barred terrain:</strong> Visibility cannot be drawn through this terrain unless the operative or what they’re trying to see is horizontally within 1” of it.</p>
                    </li>
                    <li>All other parts of it are Heavy terrain.</li>
                </ul>
                <h3>Small Ruin</h3>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/smallruin-example-1.png" className="imgGraphic" />
                    <p>This is Heavy terrain.</p>
                </figure>
                <h3>Heavy Rubble</h3>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/heavyrubble-example-1.png" className="imgGraphic" />
                    <p>This is Heavy terrain.</p>
                </figure>
                <h3>Light Rubble</h3>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/lightrubble-example-1.png" className="imgGraphic" />
                    <p>This is Light terrain.</p>
                </figure>
                <h3>Condensed Stronghold</h3>
                <p>Whenever an operative is shooting with a weapon that has the Blast, Torrent and/or x” Devastating (i.e., Devastating with a distance requirement) weapon rule, it also has the Lethal 5+ weapon rule if the target is wholly within a stronghold terrain feature and on the killzone floor or a fire step.</p>
                <p className="indentNote"><em>The Condensed Stronghold rule always relates to the target’s location, so if the primary target is wholly within a stronghold, but the secondary target isn’t, then this rule doesn’t apply to that secondary target.</em></p>
                <h3>Garrisoned Stronghold</h3>
                <p>When an operative wholly within a stronghold terrain feature is retaliating against an operative that isn’t, the defender resolves first (this takes precedence over the normal fight resolution order).</p>
            </>
        }
        */}
    </div>
  )
}

export default TerrainRules
