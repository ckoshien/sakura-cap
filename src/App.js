import React from 'react';
import logo from './logo.svg';
import './App.css';
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

class App extends React.Component {
  render(){
    let leagueA=(
      <div>
          <Table columns={league_a_columns} 
              keyField={'name'}
              data={league_a_data}/>
      </div>
    )
    let leagueB=(
      <div>
          <Table columns={league_b_columns} 
              keyField={'name'}
              data={league_b_data}/>
      </div>
    )
    let leagueC=(
      <div>
          <Table columns={league_c_columns} 
              keyField={'name'}
              data={league_c_data}/>
      </div>
    )
    let leagueD=(
      <div>
          <Table columns={league_d_columns} 
              keyField={'name'}
              data={league_d_data}/>
      </div>
    )
    return (
      <div>
        <nav>
          <span
            style={{
                backgroundColor:'#f8bbd0',
                color:'aliceblue',
                padding:3,
                width:10
              }}>桜</span>咲く
          <span
            style={{
              backgroundColor:'#ba68c8',
              color:'aliceblue',
              padding:3,
              width:10
            }}
          >佐</span>倉
          <span
            style={{
              backgroundColor:'#5d4037',
              color:'aliceblue',
              padding:3,
              width:10
            }}
          >蓋</span>ざんまい
        </nav>
        <span
            style={{
              fontSize:12,
              paddingLeft:20,
              position:'absolute',
              right:5,
              top:10
            }}
          >
            非公式特設サイト
          </span>
        <div
            style={{
              backgroundColor:'#5d4037',
              color: '#f5f5f5',
              border:'solid 1px',
              borderColor:'#f5f5f5',
              borderRadius: '5px 5px 5px 5px',
              verticalAlign: 'top',
              fontSize: 13.5,
              padding: '7px 10px 7px 10px',
              margin: 5
            }}
          >予選</div>
          <div
            style={{
              backgroundColor:'#ab47bc',
              color: '#f5f5f5',
              border:'solid 1px',
              borderColor:'#f5f5f5',
              borderRadius: '5px 5px 5px 5px',
              verticalAlign: 'top',
              fontSize: 13.5,
              padding: '7px 10px 7px 10px',
              margin: 7
            }}
          >Aリーグ</div>
        {leagueA}
        <div
            style={{
              backgroundColor:'#ab47bc',
              color: '#f5f5f5',
              border:'solid 1px',
              borderColor:'#f5f5f5',
              borderRadius: '5px 5px 5px 5px',
              verticalAlign: 'top',
              fontSize: 13.5,
              padding: '7px 10px 7px 10px',
              margin: 7
            }}
          >Bリーグ</div>
        {leagueB}
        <div
            style={{
              backgroundColor:'#ab47bc',
              color: '#f5f5f5',
              border:'solid 1px',
              borderColor:'#f5f5f5',
              borderRadius: '5px 5px 5px 5px',
              verticalAlign: 'top',
              fontSize: 13.5,
              padding: '7px 10px 7px 10px',
              margin: 7
            }}
          >Cリーグ</div>
        {leagueC}
        <div
            style={{
              backgroundColor:'#ab47bc',
              color: '#f5f5f5',
              border:'solid 1px',
              borderColor:'#f5f5f5',
              borderRadius: '5px 5px 5px 5px',
              verticalAlign: 'top',
              fontSize: 13.5,
              padding: '7px 10px 7px 10px',
              margin: 7
            }}
          >Dリーグ</div>
        {leagueD}
        <div
            style={{
              backgroundColor:'#f8bbd0',
              color: '#444444',
              border:'solid 1px',
              borderColor:'#f5f5f5',
              borderRadius: '5px 5px 5px 5px',
              verticalAlign: 'top',
              fontSize: 13.5,
              padding: '7px 10px 7px 10px',
              margin: 7
            }}
          >決勝トーナメント</div>
          <div
            style={{
              margin:5
            }}
          >
            <a href='https://the-tournament.jp/tournaments/9uJs6wG4sz0b8JWwF43q'>
            結果(THE TOURNAMENT)
            </a>
            <img 
            style={{
              width:'99%'
            }}
            src={'/tournament.png'}/>
          </div>
      </div>
    );
  }
}

export default App;
