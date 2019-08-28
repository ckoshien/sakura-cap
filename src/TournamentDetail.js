import React from 'react';

export default class TournamentDetail extends React.Component{
  render(){
    return(
      <div
            style={{
              fontSize:16,
              padding:10,
              textAlign:'center',
              maxWidth:650
          }}
          >
            <table className='table'>
              <tbody>
                <tr>
                  <td rowSpan={7}>1回戦</td>
                  <td>第1試合</td>
                  <td>明治</td>
                  <td><b>3</b> - 1</td>
                  <td>神奈総</td>
                </tr>
                <tr>
                  <td>第2試合</td>
                  <td>世田谷</td>
                  <td><a href={'/tournament/first/2'}>1 - <b>2</b></a></td>
                  <td>横国B</td>
                </tr>
                <tr>
                  <td>第3試合</td>
                  <td>蓋世</td>
                  <td><a href={'/tournament/first/3'}><b>10</b> - 2</a></td>
                  <td>蓋鯱</td>
                </tr>
                <tr>
                  <td>第4試合</td>
                  <td>千葉工大</td>
                  <td>0 - <b>13</b></td>
                  <td>京都大</td>
                </tr>
                <tr>
                  <td>第5試合</td>
                  <td>奈良</td>
                  <td><b>10</b> - 0</td>
                  <td>学習院</td>
                </tr>
                <tr>
                  <td>第6試合</td>
                  <td>横国A</td>
                  <td><a href={'/tournament/first/6'}>0 - <b>5</b></a></td>
                  <td>関西連合</td>
                </tr>
                <tr>
                  <td>第7試合</td>
                  <td>一橋B</td>
                  <td>7 - <b>16</b></td>
                  <td>北大</td>
                </tr>
            
                <tr>
                  <td rowSpan={4} className='brown'>準々決勝</td>
                  <td>第1試合</td>
                  <td>明治</td>
                  <td><b>3</b> - 0</td>
                  <td>横国B</td>
                </tr>
                <tr>
                  <td>第2試合</td>
                  <td>蓋世</td>
                  <td><a href={'/tournament/quaterfinals/2'}>5 - <b>8</b></a></td>
                  <td>京大</td>
                </tr>
                <tr>
                  <td>第3試合</td>
                  <td>奈良</td>
                  <td><b>2</b> - 1</td>
                  <td>関西連合</td>
                </tr>
                <tr>
                  <td>第4試合</td>
                  <td>北大</td>
                  <td><b>6</b> - 1</td>
                  <td>一橋A</td>
                </tr>
              
                <tr>
                  <td rowSpan={2} className='purple'>準決勝</td>
                  <td>第1試合</td>
                  <td>明治</td>
                  <td><b>7</b> - 3</td>
                  <td>京大</td>
                </tr>
                <tr>
                  <td>第2試合</td>
                  <td>奈良</td>
                  <td>5 - <b>6</b></td>
                  <td>北大</td>
                </tr>
                <tr>
                  <td>3位決定戦</td>
                  <td></td>
                  <td>京大</td>
                  <td>6 - <b>7</b></td>
                  <td>奈良</td>
                </tr>
                <tr>
                  <td className='sakura'>決勝</td>
                  <td></td>
                  <td>明治</td>
                  <td><b>14</b> - 6</td>
                  <td>北大</td>
                </tr>
                
              </tbody>
            </table>
          </div>
    )
  }
}