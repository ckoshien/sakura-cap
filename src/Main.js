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
          <div className="brown">1回戦</div>
          <div
            style={{
              fontSize:16,
              padding:10,
              textAlign:'center'
          }}
          >
            <div>明治 3-1 神奈総</div>
            <div>世田谷 <a href={'/tournament/first/2'}>1-2</a> 横国B</div>
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
