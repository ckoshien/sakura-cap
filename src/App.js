import React from 'react';
import { Router, Route, Switch } from 'react-router'
import './App.css';
import SakuraNavbar from './SakuraNavbar';
import Main from './Main'
import history from './history'
import Game from './Game'
import { qualifying_game_data,tournament_game_data } from './Data';

class App extends React.Component {
  componentWillMount(){
    window.prerenderReady = false;
  }
  componentDidMount(){
    window.prerenderReady = true;
  }

  render(){
    
    return (
      <div>
        <SakuraNavbar/>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/qualifying/:group/:game_number" 
              render={
                props => <Game data={qualifying_game_data} {...props} />}
            />
            <Route exact path="/tournament/:group/:game_number" 
              render={
                props => <Game data={tournament_game_data} {...props} />}
            />
          </Switch>
        </Router>
        <footer>
        </footer>
      </div>
        
    );
  }
}

export default App;
