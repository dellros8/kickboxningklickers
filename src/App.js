import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Protokoll from './components/Protokoll';
import Klickers from './components/Klickers';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      klickers: {
        blue: {
          klicker: 0,
          penalty: 0
        },
        red: {
          klicker: 0,
          penalty: 0
        },
        rond: 1,
        redirect: false
      },
      protokoll: {
        red: {
          winner: false,
          total: "",
          klickersTotal: "",
          roundOne: {
            klickers: "",
            points: "",
            penalty: "",
            sum: "",
          },
          roundTwo: {
            klickers: "",
            points: "",
            penalty: "",
            sum: "",
          },
          roundThree: {
            klickers: "",
            points: "",
            penalty: "",
            sum: "",
          },
        },
        blue: {
          winner: false,
          total: "",
          klickersTotal: "",
          roundOne: {
            klickers: "",
            points: "",
            penalty: "",
            sum: "",
          },
          roundTwo: {
            klickers: "",
            points: "",
            penalty: "",
            sum: "",
          },
          roundThree: {
            klickers: "",
            points: "",
            penalty: "",
            sum: "",
          },
        }
      }
    }
    this.protokollUpdater = this.protokollUpdater.bind(this)
    this.klickersUpdater = this.klickersUpdater.bind(this)
    this.roundReport = this.roundReport.bind(this)
  }

  protokollUpdater(state) {
    if(window.confirm("Vill du rensa protokollet och börja ny match?")) {
      window.location.reload()
    }
  }

  klickersUpdater(state) {
    state.redirect = false
    this.setState({ klickers: state })
  }

  roundReport(state) {
    let fullState = Object.assign({}, this.state);

    let redKlicks = state.red.klicker;
    let blueKlicks = state.blue.klicker;

    var difference = Math.abs(redKlicks - blueKlicks);

    let pointsLoss = null;

    if (difference >= 3) {
      pointsLoss = 1
    }
    if (difference >= 6) {
      pointsLoss = 2
    }
    if (difference >= 9) {
      pointsLoss = 3
    }


    if (fullState.klickers.rond === 1) {
      fullState.protokoll = {        red: {          winner: false,          total: "",          roundOne: {            points: "",            penalty: "",            sum: "",          },          roundTwo: {            points: "",            penalty: "",            sum: "",          },          roundThree: {            points: "",            penalty: "",            sum: "",          },        },        blue: {          winner: false,          total: "",          roundOne: {            points: "",            penalty: "",            sum: "",          },          roundTwo: {            points: "",            penalty: "",            sum: "",          },          roundThree: {            points: "",            penalty: "",            sum: "",          },        }      }

      if (redKlicks > blueKlicks && difference >= 3) {
        fullState.protokoll.red.roundOne.points = 10
        fullState.protokoll.red.roundOne.sum = 10 - state.red.penalty

        fullState.protokoll.blue.roundOne.points = 10 - pointsLoss
        fullState.protokoll.blue.roundOne.sum = 10 - state.blue.penalty - pointsLoss
      } else if (blueKlicks > redKlicks && difference >= 3) {

        fullState.protokoll.red.roundOne.points = 10 - pointsLoss
        fullState.protokoll.red.roundOne.sum = 10 - state.red.penalty - pointsLoss

        fullState.protokoll.blue.roundOne.points = 10
        fullState.protokoll.blue.roundOne.sum = 10 - state.blue.penalty
      } else {
        fullState.protokoll.red.roundOne.points = 10
        fullState.protokoll.red.roundOne.sum = 10 - state.red.penalty

        fullState.protokoll.blue.roundOne.points = 10
        fullState.protokoll.blue.roundOne.sum = 10 - state.blue.penalty
      }
      
      fullState.protokoll.red.roundOne.penalty = state.red.penalty
      fullState.protokoll.blue.roundOne.penalty = state.blue.penalty
      fullState.protokoll.red.roundOne.klickers = redKlicks
      fullState.protokoll.blue.roundOne.klickers = blueKlicks

    }

    if (fullState.klickers.rond === 2) {
      if (redKlicks > blueKlicks && difference >= 3) {
        
          fullState.protokoll.red.roundTwo.points = 10
          fullState.protokoll.red.roundTwo.sum = 10 - state.red.penalty

          fullState.protokoll.blue.roundTwo.points = 10 - pointsLoss
          fullState.protokoll.blue.roundTwo.sum = 10 - state.blue.penalty - pointsLoss
        
      } else if (blueKlicks > redKlicks && difference >= 3) {
        
          fullState.protokoll.red.roundTwo.points = 10 - pointsLoss
          fullState.protokoll.red.roundTwo.sum = 10 - state.red.penalty - pointsLoss

          fullState.protokoll.blue.roundTwo.points = 10
          fullState.protokoll.blue.roundTwo.sum = 10 - state.blue.penalty
        
      } else {
        fullState.protokoll.red.roundTwo.points = 10
        fullState.protokoll.red.roundTwo.sum = 10 - state.red.penalty

        fullState.protokoll.blue.roundTwo.points = 10
        fullState.protokoll.blue.roundTwo.sum = 10 - state.blue.penalty
      }

      fullState.protokoll.red.roundTwo.penalty = state.red.penalty
      fullState.protokoll.blue.roundTwo.penalty = state.blue.penalty
      fullState.protokoll.red.roundTwo.klickers = redKlicks
      fullState.protokoll.blue.roundTwo.klickers = blueKlicks
    }

    if (fullState.klickers.rond === 3) {
      if (redKlicks > blueKlicks && difference >= 3) {
          fullState.protokoll.red.roundThree.points = 10
          fullState.protokoll.red.roundThree.sum = 10 - state.red.penalty

          fullState.protokoll.blue.roundThree.points = 10 - pointsLoss
          fullState.protokoll.blue.roundThree.sum = 10 - state.blue.penalty - pointsLoss
      } else if (blueKlicks > redKlicks && difference >= 3) {
          fullState.protokoll.red.roundThree.points = 10 - pointsLoss
          fullState.protokoll.red.roundThree.sum = 10 - state.red.penalty - pointsLoss

          fullState.protokoll.blue.roundThree.points = 10
          fullState.protokoll.blue.roundThree.sum = 10 - state.blue.penalty
      } else {
        fullState.protokoll.red.roundThree.points = 10
        fullState.protokoll.red.roundThree.sum = 10 - state.red.penalty

        fullState.protokoll.blue.roundThree.points = 10
        fullState.protokoll.blue.roundThree.sum = 10 - state.blue.penalty
      }

      fullState.protokoll.red.roundThree.penalty = state.red.penalty
      fullState.protokoll.blue.roundThree.penalty = state.blue.penalty
      fullState.protokoll.red.roundThree.klickers = redKlicks
      fullState.protokoll.blue.roundThree.klickers = blueKlicks

      fullState.protokoll.red.total = fullState.protokoll.red.roundOne.sum + fullState.protokoll.red.roundTwo.sum + fullState.protokoll.red.roundThree.sum
      fullState.protokoll.blue.total = fullState.protokoll.blue.roundOne.sum + fullState.protokoll.blue.roundTwo.sum + fullState.protokoll.blue.roundThree.sum

      fullState.klickers.rond = 1
      
      // set klickers total
      let redKlickersTotal = fullState.protokoll.red.roundOne.klickers + fullState.protokoll.red.roundTwo.klickers + fullState.protokoll.red.roundThree.klickers 
      let blueKlickersTotal = fullState.protokoll.blue.roundOne.klickers + fullState.protokoll.blue.roundTwo.klickers + fullState.protokoll.blue.roundThree.klickers 
      fullState.protokoll.red.klickersTotal = redKlickersTotal;
      fullState.protokoll.blue.klickersTotal = blueKlickersTotal;

      // declare winner

      if (fullState.protokoll.blue.total > fullState.protokoll.red.total) {
        fullState.protokoll.blue.winner = true
      } else if (fullState.protokoll.red.total > fullState.protokoll.blue.total) {
        fullState.protokoll.red.winner = true
      } else if (fullState.protokoll.red.total === fullState.protokoll.blue.total) {
        if (blueKlickersTotal > redKlickersTotal) {
          fullState.protokoll.blue.winner = true
        } else if (redKlickersTotal > blueKlickersTotal) {
          fullState.protokoll.red.winner = true
        } else if (redKlickersTotal === blueKlickersTotal) {
          // handle no winner
        }
      }


    } else {
      fullState.klickers.rond = fullState.klickers.rond + 1
    }

    fullState.klickers.blue = {
      klicker: 0,
      penalty: 0
    };
    fullState.klickers.red = {
      klicker: 0,
      penalty: 0
    };
    fullState.redirect = false

    this.setState(fullState)
  }

  render() {
    return (
      <HashRouter>
        <Route exact path="/" render={props => <Protokoll {...props} protokollUpdater={this.protokollUpdater} state={this.state} />} />
        <Route exact path="/klickers" render={props => <Klickers {...props} klickersUpdater={this.klickersUpdater} roundReport={this.roundReport} state={this.state} />} />
      </HashRouter>
    );
  }
}

export default App;
