function Guard() {
  return (
    <div className="sectionContent" id="guard">
        <h3>On Guard</h3>
        <p>1AP</p>
        <ul>
            <li>
                <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> The operative is on guard (see below) until any of the following are true:
                <ul>
                    <li>It performs any action, moves or is set up.</li>
                    <li>An enemy operative ends an action within its control range and you don’t interrupt that activation (see below).</li>
                    <li>Its order is changed.</li>
                    <li>It’s the start of the next turning point.</li>
                </ul>
            </li>
            <li>
                <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> This action is treated as a <b>Shoot</b> action. An operative cannot perform this action while it has a Conceal order, or while it’s within control range of an enemy operative.
            </li>
        </ul>
        <p>Once during each enemy operative’s activation, after that enemy operative performs an action, you can interrupt that activation and select one friendly operative on guard to perform the <b>Fight</b> or <b>Shoot</b> action for free (including actions that are treated as such, e.g. <b>Hatchway Fight</b> opposite).</p>
        <p>That friendly operative can even perform the <b>Shoot</b> action while within control range of an enemy operative (this takes precedence over the normal <b>Shoot</b> action conditions). This is known as a point-blank shot and has the following additional rules while your operative is doing it:</p>
        <ul>
            <li>Target the enemy operative within your operative’s control range (even if it wouldn’t normally be a valid target).</li>
            <li>Worsen the Hit stat of your operative’s weapons by 1.</li><li>Until the end of the interrupted enemy operative’s activation, your operative cannot retaliate.</li>
        </ul>
        <p><em>Determine the target as normal for these actions. This means you don’t have to target the operative you interrupted.</em></p>
        <p><em><b>Guard</b> is a powerful action that allows an operative to attack later, at the opportune moment. It can change the dynamic of the game, so try to avoid enemy operatives on guard, or consider how best to utilise it yourself. Use the token above to indicate any operatives that are on guard.</em></p>
    </div>
  )
}

export default Guard
