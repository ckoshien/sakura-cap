import React from 'react';
import { Router, Route, Switch } from 'react-router'
import './index.scss';
import SakuraNavbar from './SakuraNavbar';
import Main from './Main'
import history from './history'
import Game from './Game'
import { qualifying_game_data,tournament_game_data } from './Data';
import GoogleAds from 'react-google-ads';
import SakuraFlurry from './SakuraFlurry';

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
        <SakuraFlurry/>
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
        {/* <GoogleAds
          client="ca-pub-6455792541973521"
          //slot="1903562094"
          className="adsbygoogle"
        data-adtest="on"
        format="auto"
        //style={{ width: "auto", height: 100 }}
        /> */}
        </footer>
      </div>
        
    );
  }
}

export default App;
