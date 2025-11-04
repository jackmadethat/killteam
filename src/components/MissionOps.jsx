import { CritOpsData } from './Data_CritOps'

const MissionOps = () => {
  return (
    <div className="sectionContent" id="critops">
      <p style={{ marginBottom: 40 + 'px' }}>The Crit Op is the primary mission for the game, it tells you how you score points from objectives and applies exactly the same to both players. You can randomly determine which crit op to use, or you and your opponent can agree on one. Each crit op will tell you how to score it. Each player can score a maximum of 6VP total (for the entire game) from the crit op.</p>

      <div className="missionGrid">
      {CritOpsData.map((item) => (
        <div key={item.id}>{item.content}</div>
      ))}
      </div>
    </div>
  )
}

export default MissionOps
