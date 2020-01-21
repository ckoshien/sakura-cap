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
import TournamentEast from "./TournamentEast";

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
        <Tab title="概要" eventKey={0}>
          <div className="game_card">
            <img src={'/img/2nd-cap-festa.jpg'}/>
          </div>
          
        </Tab>
        <Tab title="東ブロック" eventKey={1}>
          <div className="brown">日程</div>
          <div
            style={{
              paddingLeft:20
            }}
          >2020年3月23日(月)
          <br/>横浜市平沼記念体育館</div>
          <div className="sakura">組み合わせ</div>
          <div
            style={{
              margin: 5
            }}
          >
            <a href="https://the-tournament.jp/tournaments/tSv0unsilh2gOODrZbRt">
              組み合わせ(THE TOURNAMENT)
            </a>
            <img
              style={{
                width: "95%"
              }}
              src={"/img/tournament.png"}
            />
          </div>
          <TournamentEast/>
          
          
        </Tab>
        <Tab title="西ブロック(準備中)" eventKey={2} disabled></Tab>

        {/* <Tab title="大会概要" eventKey={4}>
          <Summary />
        </Tab> */}
      </Tabs>
    );
  }
}
