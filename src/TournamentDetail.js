import React from 'react';
import { JCBLSCORE } from './Data';

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
                  <td><a href={JCBLSCORE+'/game/detail/391'}><b>3</b> - 1</a></td>
                  <td>神奈総</td>
                </tr>
                <tr>
                  <td>第2試合</td>
                  <td>世田谷</td>
                  <td><a href={JCBLSCORE+'/game/detail/416'}>1 - <b>2</b></a></td>
                  <td>横国B</td>
                </tr>
                <tr>
                  <td>第3試合</td>
                  <td>蓋世</td>
                  <td><a href={JCBLSCORE+'/game/detail/417'}><b>10</b> - 2</a></td>
                  <td>蓋鯱</td>
                </tr>
                <tr>
                  <td>第4試合</td>
                  <td>千葉工大</td>
                  <td><a href={JCBLSCORE+'/game/detail/418'}>0 - <b>13</b></a></td>
                  <td>京都大</td>
                </tr>
                <tr>
                  <td>第5試合</td>
                  <td>奈良</td>
                  <td><a href={JCBLSCORE+'/game/detail/419'}><b>10</b> - 0</a></td>
                  <td>学習院</td>
                </tr>
                <tr>
                  <td>第6試合</td>
                  <td>横国A</td>
                  <td><a href={JCBLSCORE+'/game/detail/420'}>0 - <b>5</b></a></td>
                  <td>関西連合</td>
                </tr>
                <tr>
                  <td>第7試合</td>
                  <td>一橋B</td>
                  <td><a href={JCBLSCORE+'/game/detail/421'}>7 - <b>16</b></a></td>
                  <td>北大</td>
                </tr>
            
                <tr>
                  <td rowSpan={4} className='brown'>準々決勝</td>
                  <td>第1試合</td>
                  <td>明治</td>
                  <td><a href={JCBLSCORE+'/game/detail/422'}><b>3</b> - 0</a></td>
                  <td>横国B</td>
                </tr>
                <tr>
                  <td>第2試合</td>
                  <td>蓋世</td>
                  <td><a href={JCBLSCORE+'/game/detail/423'}>5 - <b>8</b></a></td>
                  <td>京大</td>
                </tr>
                <tr>
                  <td>第3試合</td>
                  <td>奈良</td>
                  <td><a href={JCBLSCORE+'/game/detail/424'}><b>2</b> - 1</a></td>
                  <td>関西連合</td>
                </tr>
                <tr>
                  <td>第4試合</td>
                  <td>北大</td>
                  <td><a href={JCBLSCORE+'/game/detail/425'}><b>6</b> - 1</a></td>
                  <td>一橋A</td>
                </tr>
              
                <tr>
                  <td rowSpan={2} className='purple'>準決勝</td>
                  <td>第1試合</td>
                  <td>明治</td>
                  <td><a href={JCBLSCORE+'/game/detail/426'}><b>7</b> - 3</a></td>
                  <td>京大</td>
                </tr>
                <tr>
                  <td>第2試合</td>
                  <td>奈良</td>
                  <td><a href={JCBLSCORE+'/game/detail/427'}>5 - <b>6</b></a></td>
                  <td>北大</td>
                </tr>
                <tr>
                  <td>3位決定戦</td>
                  <td></td>
                  <td>京大</td>
                  <td><a href={JCBLSCORE+'/game/detail/428'}>6 - <b>7</b></a></td>
                  <td>奈良</td>
                </tr>
                <tr>
                  <td className='sakura'>決勝</td>
                  <td></td>
                  <td>明治</td>
                  <td><a href={JCBLSCORE+'/game/detail/429'}><b>14</b> - 6</a></td>
                  <td>北大</td>
                </tr>
                
              </tbody>
            </table>
          </div>
    )
  }
}