const TerrainMovement = () => {
  return (
      <div className="sectionContent" id="terrainMovement">
          <p>Operatives cannot move through terrain — they must move around, climb over or drop/jump off it.</p>
          <p className="indentNote"><em>Agents must end a move in a location where they can be placed; they cannot end mid-climb, jump, or drop. If that is not possible, they cannot begin the move.</em></p>
          
          <h3>Climbing</h3>
          <p>An operative must be within 1” horizontally and 3” vertically of terrain that’s visible to them to climb it. Each climb is treated as a minimum of 2” vertically (e.g. a 1” distance is treated as 2”).</p>
          
          <h3>Dropping</h3>
          <p>Operatives drop down when they move off terrain or after they’ve jumped. Ignore 2” of vertical distance that they drop during each action. This means a vertical drop of 2” or less is ignored. If they drop multiple times during an action, only 2” total is ignored, not 2” from each drop.</p>
          
          <h3>Jumping</h3>
          <p>Operatives can jump from Vantage terrain higher than 2” from the killzone floor when they move off it. You can move them up to 4” horizontally from the edge when they jump, done like any other move except in one straight-line increment. The operative must then drop or climb from there. When jumping from a terrain feature, if there is a rampart at the edge you would jump from, you must climb it first before doing so, but still jump from the level of the Vantage terrain. When jumping to a terrain feature, you can ignore its height difference of 1” or less, including its rampart (if any). However, when jumping from a terrain feature, if it has a rampart, you must climb it first.</p>
          <p className="indentNote"><em>Jumping means agents can move across gaps up to 4" wide and over things that are below them.</em></p>
          <figure>
              <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/jumping-1.png" className="imgGraphic" />
              <p>The operative moves up 4” until it’s above the highest point it must climb over. It moves across 2” until its base is fully past the rampart, then drops down for 0” (as the drop is less than 2”).</p>
              <p style={{ paddingLeft: 5 + '%', paddingRight: 10 + '%' }}><em>Remember that increments are rounded up, so if the operative moves 3.5”, this is treated as 4”</em></p>
          </figure>
          <figure>
              <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/jumping-2.png" className="imgGraphic" />
              <p>The operative moves across 2” until it’s fully off the ledge, then drops down for 2” (a 4” distance, but the first 2” is ignored). The operative could also jump off the terrain, moving 4” from one edge before it drops down.</p>
          </figure>
          <figure>
              <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/jumping-3.png" className="imgGraphic" />
              <p>The operative moves up for 2” (a 1” distance, but treated as the minimum 2”) until it’s above the highest point it must climb over. It moves across 3” until its base is fully past the terrain feature, then drops down for 0” (as the drop is less than 2”).</p>
          </figure>
      </div>
  )
}

export default TerrainMovement
