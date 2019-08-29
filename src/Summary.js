import React from "react";
import { team_data, team_columns } from "./Data";
import Table from "./Table";

export default class Summary extends React.Component {
  render() {
    return (
      <div
        style={{
          padding: 10
        }}
      >
        <div className='brown'>第1回キャップ野球全国大会<br/>
        ～桜咲く佐倉蓋ざんまい～</div>
        <div
          style={{
            padding: 5
          }}
        >
          
            <div className='purple'>主催</div>
            <div
               style={{
                paddingLeft: 20
              }}
            >
              一橋大学キャップ投げ倶楽部
            </div>
            
            <div className='purple'>開催日時</div>
            <div
              style={{
                paddingLeft: 20
              }}
            >2019年08月17日(土)、18日(日)</div>
            <div className='purple'>場所</div>
            <div
              style={{
                paddingLeft: 20
              }}
            >
              <a href="http://shimintaiikukan.shiteikanri-sakura.jp/top.html">
                佐倉市民体育館
              </a>
            </div>
            <div className='purple'>参加チーム一覧</div>
            <div>
              <Table
                columns={team_columns}
                keyField={"name"}
                data={team_data}
              />
            </div>
            <div className="sakura">MVP</div>
            <div
              style={{
                padding:10
              }}
             //className='react-bootstrap-table'
             >
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>タイトル</th>
                    <th>チーム名/選手名</th>
                    <th>防御率</th>
                    <th>勝利</th>
                    <th>奪三振</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan={5}>総合MVP/投手MVP</td>
                    <td rowSpan={5}>明治/鈴木</td>
                    <td>0.75</td>
                    <td>5勝</td>
                    <td>46</td>
                  </tr>
                  <tr>
                    <th>イニング</th>
                    <th>被安打</th>
                    <th>与四球</th>
                    
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>2</td>
                    <td>12</td>
                    
                  </tr>
                  <tr>
                    <th>打率</th>
                    <th>打点</th>
                    <th>四球</th>
                  </tr>
                  <tr>
                    <td>0.269<br/>(26-7)</td>
                    <td>5</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td rowSpan={2}>野手MVP</td>
                    <td rowSpan={2}>明治/田川</td>
                    <th>打率</th>
                    <th>打点</th>
                    <th>四球</th>
                  </tr>
                  <tr>
                    <td>0.565<br/>(23-13)</td>
                    <td>8</td>
                    <td>9</td>
                  </tr>
                </tbody>
              </table>
            </div>           
            <div className="sakura">
              表彰状 Powered By <a href="https://hyou.show/">WEB表彰</a>
            </div>
            <img
              style={{
                width: "95%"
              }}
              src={"/awards/1.png"}
            />
            <img
              style={{
                width: "95%"
              }}
              src={"/awards/2.png"}
            />
            <img
              style={{
                width: "95%"
              }}
              src={"/awards/3.png"}
            />
            <img
              style={{
                width: "95%"
              }}
              src={"/awards/4.png"}
            />
        </div>
      </div>
    );
  }
}
