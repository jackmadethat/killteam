function KillOps() {
  return (
    <div className="sectionContent" id="killops">

      <div>
        <p>You start without a kill grade. As enemy operatives are incapacitated, your kill grade goes up until it reaches 5.</p>
        <ul>
          <li>Whenever you move to a new kill grade, you score 1VP.</li>
          <li>At the end of the fourth turning point, if your kill grade is higher than your opponent's, you score 1VP.</li>
        </ul>
        <p>The table below shows how many enemy operatives must be incapacitated to reach each kill grade. The row you use is determined by the starting number of enemy operatives.</p>
        <table className="killOptable">
          <thead>
            <tr>
              <th colspan="2" rowspan="2" className="topLeftCell"></th>
              <th colspan="6" className="headerCell" style={{ height: 40 + 'px' }}>KILL GRADE</th>
            </tr>
            <tr style={{ height: 40 + 'px'}}>
              <th className="boxCell">1</th>
              <th className="boxCell">2</th>
              <th className="boxCell">3</th>
              <th className="boxCell">4</th>
              <th className="boxCell">5</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="10" className="sidewaysCell headerCell" style={{ width: 22 + 'px' }}><span style={{ margin: 55 + 'px' }}><b>STARTING NUMBER OF ENEMY OPERATIVES</b></span></td>
              <td data-row="1" className="boxCell">5</td>
              <td data-row="1">1</td>
              <td data-row="1">2</td>
              <td data-row="1">3</td>
              <td data-row="1">4</td>
              <td data-row="1">5</td>
            </tr>
            <tr>
              <td data-row="2" className="boxCell">6</td>
              <td data-row="2">1</td>
              <td data-row="2">2</td>
              <td data-row="2">4</td>
              <td data-row="2">5</td>
              <td data-row="2">6</td>
            </tr>
            <tr data-row="3">
              <td data-row="3" className="boxCell">7</td>
              <td data-row="3">1</td>
              <td data-row="3">3</td>
              <td data-row="3">4</td>
              <td data-row="3">6</td>
              <td data-row="3">7</td>
            </tr>
            <tr data-row="4">
              <td data-row="4" className="boxCell">8</td>
              <td data-row="4">2</td>
              <td data-row="4">3</td>
              <td data-row="4">5</td>
              <td data-row="4">6</td>
              <td data-row="4">8</td>
            </tr>
            <tr data-row="5">
              <td data-row="5" className="boxCell">9</td>
              <td data-row="5">2</td>
              <td data-row="5">4</td>
              <td data-row="5">5</td>
              <td data-row="5">7</td>
              <td data-row="5">9</td>
            </tr>
            <tr data-row="6">
              <td data-row="6" className="boxCell">10</td>
              <td data-row="6">2</td>
              <td data-row="6">4</td>
              <td data-row="6">6</td>
              <td data-row="6">8</td>
              <td data-row="6">10</td>
            </tr>
            <tr data-row="7">
              <td data-row="7" className="boxCell">11</td>
              <td data-row="7">2</td>
              <td data-row="7">4</td>
              <td data-row="7">7</td>
              <td data-row="7">9</td>
              <td data-row="7">11</td>
            </tr>
            <tr data-row="8">
              <td data-row="8" className="boxCell">12</td>
              <td data-row="8">2</td>
              <td data-row="8">5</td>
              <td data-row="8">7</td>
              <td data-row="8">10</td>
              <td data-row="8">12</td>
            </tr>
            <tr data-row="9">
              <td data-row="9" className="boxCell">13</td>
              <td data-row="9">3</td>
              <td data-row="9">5</td>
              <td data-row="9">8</td>
              <td data-row="9">10</td>
              <td data-row="9">13</td>
            </tr>
            <tr data-row="10">
              <td data-row="10" className="boxCell">14</td>
              <td data-row="10">3</td>
              <td data-row="10">6</td>
              <td data-row="10">8</td>
              <td data-row="10">11</td>
              <td data-row="10">14</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default KillOps
