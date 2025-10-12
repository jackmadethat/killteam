function TerrainBasics() {
  return (
    <div className="sectionContent" id="terrainBasics">
        <p>A terrain feature is composed of different parts, each of which is a type of terrain (one part can be more than one type). If you are using a terrain feature from a specific killzone, the type of each part of that terrain feature will be specified. If you are using a terrain feature from a killzone of your own creation, you must specify the type of each part of that terrain feature before the battle. The most common types of terrain are below, but some killzones have their own types.</p>
        <h3>Heavy</h3>
        <p>Larger terrain is Heavy. It can obscure operatives.</p>
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/terrain-heavy-1.png" className="imgGraphic" />
            <p><em>It’s good to have a mixture of Light and Heavy terrain in your killzone, as some other rules interact with each type differently.</em></p>
        </figure>
        <h3>Light</h3>
        <p>Smaller terrain is Light. It doesn’t have any additional rules, but other rules interact with it differently (e.g., Vantage terrain).</p>
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/terrain-light-1.png" className="imgGraphic" />
        </figure>
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/terrain-light-2.png" className="imgGraphic" />
        </figure>
        <h3>Blocking</h3>
        <p>Blocking terrain is usually attributed to gaps between or underneath a terrain feature. Visibility cannot be drawn through such gaps, and for the purposes of cover and obscured, the gaps are intervening like the terrain around it.</p>
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/terrain-blocking-1.png" className="imgGraphic" />
            <p>The gap under this pipe is blocking terrain.</p>
            <p><em>Technically, Blocking terrain isn’t actually physical terrain, but rather the gaps operatives shouldn’t be able to see through. Blocking terrain is rare, but it exists for the necessary instances.</em></p>
        </figure>
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/terrain-blocking-2.png" className="imgGraphic" />
            <p>The door’s viewpoint or the broken vent is blocking terrain.</p>
        </figure>
        <h3>Vantage</h3>
        <p>Vantage terrain is the upper levels of the killzone—areas operatives can be placed upon above the game board. If terrain is not Vantage terrain, then operatives can move over it, but they cannot finish a move or be set up on it. Vantage terrain is also Light terrain. Vantage terrain has the following main features.</p>
        <ul>
            <li>Firstly, whenever an operative on Vantage terrain is shooting an operative that has an Engage order, its ranged weapon has the Accurate 1 weapon rule if the target operative is at least 2" lower than it, or Accurate 2 if the target operative is at least 4" lower than it.</li>
            <li>Secondly, whenever you are selecting a valid target for an operative on Vantage terrain, operatives at least 2" lower than that operative with a Conceal order cannot use Light terrain for cover. Whilst this can allow such operatives to be targeted (assuming they’re visible), it doesn’t remove their cover save, and the defender can retain it as a critical success instead, or retain one additional cover save.</li>
            <li>Thirdly, for the purposes of obscured, ignore Heavy terrain connected to Vantage terrain the active operative or the intended target is on.</li>
        </ul>
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/terrain-vantage-1.png" className="imgGraphic" />
            <em>
                <p>As Vantage terrain is also Light, an operative on Vantage terrain will often be in cover from operatives lower than them — imagine them crouching down to gain a cover save or avoid being a valid target.</p>
                <p>An operative on Vantage terrain can target an operative with a Conceal order that’s 2” lower than them and only in cover from Light terrain.</p><p>If an operative is obstructed from moving across Vantage terrain by enemy operatives or other terrain features, it can move around these obstructions (without dropping off) so long as part of its base is always on the Vantage terrain.</p>
            </em>
        </figure>
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/terrain-vantage-2.png" className="imgGraphic" alt="Vantage terrain" />
            <p>Operative B has a Conceal order and is in cover from Light terrain, but since operative A is on Vantage terrain and at least 2” higher, operative B is a valid target.</p>
        </figure>
        <h3>Accessible</h3>
        <p>Operatives can move through Accessible terrain (this takes precedence over Bases, and Terrain and Movement), but it counts as an additional 1" to do so. Only the centre of an operative’s base needs to move through Accessible terrain, so base sizes are irrelevant.</p>
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/terrain-accessible-1.png" className="imgGraphic" alt="Accessible terrain" />
            <p>The door is accessible terrain.</p>
        </figure>
        <h3>Insignificant</h3>
        <p>Insignificant terrain is usually very small. For the purposes of climbing and dropping, ignore it.</p>
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/terrain-insignificant-1.png" className="imgGraphic" alt="Insignificant terrain" />
            <p>Small piles of rubble are insignificant terrain.</p>
            <p><em>An operative can move over and across Insignificant terrain without going up and down.</em></p>
        </figure>
        <h3>Exposed</h3>
        <p>Exposed terrain is usually very small, or terrain with large gaps that operatives shouldn’t be able to take cover behind.</p>
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/terrain-exposed-1.png" className="imgGraphic" alt="Exposed terrain" />
            <p>This ladder and these hanging chains are exposed terrain.</p>
            <p><em>It’s particularly important to identify Insignificant and Exposed terrain before the battle, to prevent misunderstandings later on.</em></p>
        </figure>
        <h3>Ceiling</h3>
        <p>Operatives with a round base of 50mm or less, or an oval base of 60x35mm, can move underneath Ceiling terrain regardless of the operative’s height (this takes precedence over Terrain and Movement on pg 56). The operative must still finish the action in a location it can be placed.</p>
        <h3>Gallowdark</h3>
        <p>Killzone: Gallowdark uses a 606mm x 703mm game board with a 6x7 grid system for setting up. It has 4x short walls with hatchway and pillars and 2x each other terrain feature specified on page 109. It also has 8x left and 8x right pillars, and 30x pillar caps to complete terrain configuration. Note that some mission maps use less than this.</p>
        <h3>Gallowdark Wall</h3>
        <p>A Gallowdark wall terrain feature is Heavy and Wall terrain. Some walls include a hatchway, which is explained separately on page 69.</p>
        <p><b>Wall terrain:</b></p>
        <ul>
            <li>Operatives cannot move over or through Wall terrain (this takes precedence over all other rules).</li>
            <li>Visibility cannot be determined over or through Wall terrain.</li>
            <li>Other than to areas of the killzone (centre of the killzone, drop zones, etc.), distances cannot be measured over or through Wall terrain; they must be measured around it using the shortest possible route.</li>
            <li>For the purposes of cover and obscured, only the corners and ends of Wall terrain can intervene, unless the active operative has passed it (see examples on pages 67-68).</li>
        </ul>
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/walls-example-1.png" className="imgGraphic" />
            <p>Operative A would usually be within 3” of operative B, but as distances cannot be measured over or through Wall terrain, it must be measured around the Gallowdark wall. This would make operative A more than 3” from operative B.</p>
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
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/walls-example-6.png" className="imgGraphic" />
            <p>As the hatchway is open, an end of the wall is intervening. It’s more than 1” from both operatives, therefore operative B is obscured.</p>
        </figure>
        <h3>Condensed Environment</h3>
        <p>Weapons with the Blast, Torrent and/or x” Devastating (i.e. Devastating with a distance requirement) weapon rule also have the Lethal 5+ weapon rule (pg. 111).</p>
    </div>
  )
}

export default TerrainBasics
