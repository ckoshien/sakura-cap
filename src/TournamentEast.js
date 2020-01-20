import React from "react";
import { JCBLSCORE } from "./Data";

export default class TournamentEast extends React.Component {
  render() {
    return (
      <div
        style={{
          fontSize: 16,
          padding: 10,
          textAlign: "center",
          maxWidth: 400
        }}
      >
        <div
          style={{
            //width: "100vw"
          }}
        >
          <div className="brown">一回戦</div>
          <div className="game_card">
            <img src={"/img/tournament/east/1.jpg"} />
          </div>
          <div className="game_card">
            <img src={"/img/tournament/east/2.jpg"} />
          </div>
          <div className="game_card">
            <img src={"/img/tournament/east/3.jpg"} />
          </div>
          <div className="game_card">
            <img src={"/img/tournament/east/4.jpg"} />
          </div>
          <div className="game_card">
            <img src={"/img/tournament/east/5.jpg"} />
          </div>
          <div className="game_card">
            <img src={"/img/tournament/east/6.jpg"} />
          </div>
        </div>

        <div className="brown">準々決勝</div>
        <div className="game_card">
          <img src={"/img/tournament/east/7.jpg"} />
        </div>
        <div className="game_card">
          <img src={"/img/tournament/east/unknown.jpg"}  />
        </div>
        <div className="game_card">
          <img src={"/img/tournament/east/unknown.jpg"}  />
        </div>
        <div className="game_card">
          <img src={"/img/tournament/east/10.jpg"}  />
        </div>
        <div className="purple">準決勝</div>
        <div className="game_card">
          <img src={"/img/tournament/east/unknown.jpg"}  />
        </div>
        <div className="game_card">
          <img src={"/img/tournament/east/unknown.jpg"}  />
        </div>
        {/* <tr>
                  <td>3位決定戦</td>
                  <td></td>
                  <td>京大</td>
                  <td><a href={JCBLSCORE+'/game/detail/428'}>6 - <b>7</b></a></td>
                  <td>奈良</td>
                </tr> */}

        <div className="sakura">決勝</div>
        <div className="game_card">
          <img src={"/img/tournament/east/unknown.jpg"}  />
        </div>
          
      </div>
    );
  }
}
