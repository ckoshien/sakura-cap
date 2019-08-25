import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-bootstrap";
import Summary from "./Summary";
import Table from './Table';
import {
  league_a_columns,
  league_a_data,
  league_b_columns,
  league_b_data,
  league_c_columns,
  league_c_data,
  league_d_columns,
  league_d_data
} from './Data'

export default class Main extends React.Component {
  render() {
    let leagueA = (
      <div>
        <Table
          columns={league_a_columns}
          keyField={"name"}
          data={league_a_data}
        />
      </div>
    );
    let leagueB = (
      <div>
        <Table
          columns={league_b_columns}
          keyField={"name"}
          data={league_b_data}
        />
      </div>
    );
    let leagueC = (
      <div>
        <Table
          columns={league_c_columns}
          keyField={"name"}
          data={league_c_data}
        />
      </div>
    );
    let leagueD = (
      <div>
        <Table
          columns={league_d_columns}
          keyField={"name"}
          data={league_d_data}
        />
      </div>
    );
    return (
      <Tabs>
        <Tab title="決勝T" eventKey={0}>
          <div className="brown">2日目</div>
          <div className="sakura">決勝トーナメント</div>
          <div
            style={{
              margin: 5
            }}
          >
            <a href="https://the-tournament.jp/tournaments/9uJs6wG4sz0b8JWwF43q">
              結果(THE TOURNAMENT)
            </a>
            <img
              style={{
                width: "95%"
              }}
              src={"/tournament.png"}
            />
          </div>
          <div
            style={{
              fontSize:16,
              padding:10,
              textAlign:'center'
          }}
          >
            <table className='table'>
              <tbody>
                <tr>
                  <td rowSpan={7}>1回戦</td>
                  <td>第1試合</td>
                  <td>明治</td>
                  <td>3-1</td>
                  <td>神奈総</td>
                </tr>
                <tr>
                  <td>第2試合</td>
                  <td>世田谷</td>
                  <td><a href={'/tournament/first/2'}>1-2</a></td>
                  <td>横国B</td>
                </tr>
                <tr>
                  <td>第3試合</td>
                  <td>蓋世</td>
                  <td><a href={'/tournament/first/3'}>10-2</a></td>
                  <td>蓋鯱</td>
                </tr>
                <tr>
                  <td>第4試合</td>
                  <td>千葉工大</td>
                  <td>0-13</td>
                  <td>京都大</td>
                </tr>
                <tr>
                  <td>第5試合</td>
                  <td>奈良</td>
                  <td>10-0</td>
                  <td>学習院</td>
                </tr>
                <tr>
                  <td>第6試合</td>
                  <td>横国A</td>
                  <td><a href={'/tournament/first/6'}>0-5</a></td>
                  <td>関西連合</td>
                </tr>
                <tr>
                  <td>第7試合</td>
                  <td>一橋B</td>
                  <td>7-16</td>
                  <td>北大</td>
                </tr>
            
                <tr>
                  <td rowSpan={4} className='brown'>準々決勝</td>
                  <td>第1試合</td>
                  <td>明治</td>
                  <td>3-0</td>
                  <td>横国B</td>
                </tr>
                <tr>
                  <td>第2試合</td>
                  <td>蓋世</td>
                  <td><a href={'/tournament/quaterfinals/2'}>5-8</a></td>
                  <td>京大</td>
                </tr>
                <tr>
                  <td>第3試合</td>
                  <td>奈良</td>
                  <td>2-1</td>
                  <td>関西連合</td>
                </tr>
                <tr>
                  <td>第4試合</td>
                  <td>北大</td>
                  <td>6-1</td>
                  <td>一橋A</td>
                </tr>
              
                <tr>
                  <td rowSpan={2} className='purple'>準決勝</td>
                  <td>第1試合</td>
                  <td>明治</td>
                  <td>7-3</td>
                  <td>京大</td>
                </tr>
                <tr>
                  <td>第2試合</td>
                  <td>奈良</td>
                  <td>5-6</td>
                  <td>北大</td>
                </tr>
                <tr>
                  <td>3位決定戦</td>
                  <td></td>
                  <td>京大</td>
                  <td>6-7</td>
                  <td>奈良</td>
                </tr>
                <tr>
                  <td className='sakura'>決勝</td>
                  <td></td>
                  <td>明治</td>
                  <td>14-6</td>
                  <td>北大</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </Tab>

        <Tab title="予選A/B" eventKey={1}>
          <div className="brown">1日目:予選</div>
          <div className="purple">Aリーグ</div>
          {leagueA}
          <div className="purple">Bリーグ</div>
          {leagueB}
        </Tab>

        <Tab title="予選C/D" eventKey={3}>
          <div className="brown">1日目:予選</div>
          <div className="purple">Cリーグ</div>
          {leagueC}
          <div className="purple">Dリーグ</div>
          {leagueD}
        </Tab>
        <Tab title="大会概要" eventKey={4}>
          <Summary />
        </Tab>
      </Tabs>
    );
  }
}
