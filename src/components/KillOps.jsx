import KillOpsTable from "./KillOpsTable"

const KillOps = () => {
  return (
    <div className="sectionContent" id="killops">
      <p>The Kill Op awards each player VP for incapacitating enemy operatives, as detailed in the table below. This is always active for both players. Each player can score a <em>maximum of 6VP total for the entire game</em> from the Kill Op: up to 5 for incapacitating enemy operatives, plus a bonus VP for ending the game with a higher kill grade than their opponent. The Kill Op can be selected as a player's Primary Op.</p>
      <p>This table shows how many enemy operatives must be incapacitated to reach each kill grade. The row you use is determined by the starting number of enemy operatives.</p>
      <KillOpsTable />
    </div>
  )
}

export default KillOps
