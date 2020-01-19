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
                  <td rowSpan={6}>1回戦</td>
                  <td>第1試合</td>
                  <td>横国A</td>
                  <td> - </td>
                  <td>蓋世</td>
                </tr>
                <tr>
                  <td>第2試合</td>
                  <td>学習院</td>
                  <td> - </td>
                  <td>秋田CTC</td>
                </tr>
                <tr>
                  <td>第3試合</td>
                  <td>チビダーズ</td>
                  <td> - </td>
                  <td>横国B</td>
                </tr>
                <tr>
                  <td>第4試合</td>
                  <td>一橋A</td>
                  <td> - </td>
                  <td>埼玉CAP</td>
                </tr>
                <tr>
                  <td>第5試合</td>
                  <td>明治・日大A</td>
                  <td> - </td>
                  <td>市立浦和</td>
                </tr>
                <tr>
                  <td>第6試合</td>
                  <td>明治・日大B</td>
                  <td> - </td>
                  <td>一橋B</td>
                </tr>
            
                <tr>
                  <td rowSpan={4} className='brown'>準々決勝</td>
                  <td>第1試合</td>
                  <td>世田谷</td>
                  <td> - </td>
                  <td></td>
                </tr>
                <tr>
                  <td>第2試合</td>
                  <td></td>
                  <td> - </td>
                  <td></td>
                </tr>
                <tr>
                  <td>第3試合</td>
                  <td></td>
                  <td> - </td>
                  <td></td>
                </tr>
                <tr>
                  <td>第4試合</td>
                  <td></td>
                  <td> - </td>
                  <td>北大</td>
                </tr>
              
                <tr>
                  <td rowSpan={2} className='purple'>準決勝</td>
                  <td>第1試合</td>
                  <td></td>
                  <td> - </td>
                  <td></td>
                </tr>
                <tr>
                  <td>第2試合</td>
                  <td></td>
                  <td> - </td>
                  <td></td>
                </tr>
                {/* <tr>
                  <td>3位決定戦</td>
                  <td></td>
                  <td>京大</td>
                  <td><a href={JCBLSCORE+'/game/detail/428'}>6 - <b>7</b></a></td>
                  <td>奈良</td>
                </tr> */}
                <tr>
                  <td className='sakura'>決勝</td>
                  <td></td>
                  <td></td>
                  <td> - </td>
                  <td></td>
                </tr>
                
              </tbody>
            </table>
          </div>
    )
  }
}