import React from 'react';
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
import SakuraNavbar from './SakuraNavbar';
import {Tabs, TabList, Tab, TabPanel} from 'react-bootstrap'
import Summary from './Summary';

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
        <SakuraNavbar/>
        <Tabs>
          <Tab title="大会概要" eventKey={0}>
            <Summary/>
          </Tab>
          <Tab title="予選A" eventKey={1}>
            <div className='brown'>1日目:予選</div>
            <div className='purple'>Aリーグ</div>
            {leagueA}
          </Tab>
          <Tab title="予選B" eventKey={2}>
            <div className='brown'>1日目:予選</div>
            <div className='purple'>Bリーグ</div>
            {leagueB}
          </Tab>
          <Tab title="予選C" eventKey={3}>
            <div className='brown'>1日目:予選</div>
            <div className='purple'>Cリーグ</div>
            {leagueC}
          </Tab>
          <Tab title="予選D" eventKey={4}>
            <div className='brown'>1日目:予選</div>
            <div className='purple'>Dリーグ</div>
            {leagueD}
          </Tab>
          <Tab title="決勝T" eventKey={5}>
            <div className='brown'>2日目</div>
            <div className='sakura'>決勝トーナメント</div>
            <div
              style={{
                margin:5
              }}
            >
              <a href='https://the-tournament.jp/tournaments/9uJs6wG4sz0b8JWwF43q'>
              結果(THE TOURNAMENT)
              <img 
              style={{
                width:'99%'
              }}
              src={'/tournament.png'}/>
              </a>
              
            </div>
            <div className='sakura'>表彰状</div>
            <img 
              style={{
                width:'99%'
              }}
              src={'/awards/1.png'}/>
              <img 
              style={{
                width:'99%'
              }}
              src={'/awards/2.png'}/>
              <img 
              style={{
                width:'99%'
              }}
              src={'/awards/3.png'}/>
              <img 
              style={{
                width:'99%'
              }}
              src={'/awards/4.png'}/>
              Powered By <a href='https://hyou.show/'>WEB表彰</a>
          </Tab>
        </Tabs>
      </div>
        
    );
  }
}

export default App;
