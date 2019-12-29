import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { TouchableOpacity } from 'react-native'

class Protokoll extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.state.protokoll
  }

  unregSW() {

    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      for (let registration of registrations) {
        registration.unregister()
      }
    });

    window.location.reload(true);

    alert("reload and unregister sw");
  }


  render() {
    let isZeroOne = function() {
      if (this.state.red.roundOne.points > 0) {
        return true
      } else {
        return false
      }
    }
    let isZeroTwo = function() {
      if (this.state.red.roundTwo.points > 0) {
        return true
      } else {
        return false
      }
    }
    let isZeroThree = function() {
      if (this.state.red.roundThree.points > 0) {
        return true
      } else {
        return false
      }
    }


    var nbsp = String.fromCharCode(160)

    return (
      <div className="protokollBody">
        <div className="blueSideProtocol">
          <h2 style={{ color: "red" }}>Röd</h2>
          <div className="redScoresTable">
          <div>
              <p><i>Klickers</i></p>
              <p><i>{isZeroOne && this.state.red.roundOne.klickers === 0 ? "0" : this.state.red.roundOne.klickers || nbsp}</i></p>
              <p><i>{isZeroTwo && this.state.red.roundTwo.klickers === 0 ? "0" : this.state.red.roundTwo.klickers || nbsp}</i></p>
              <p><i>{isZeroThree && this.state.red.roundThree.klickers === 0 ? "0" : this.state.red.roundThree.klickers || nbsp}</i></p>
              <p><i>{this.state.red.klickersTotal || nbsp}</i></p>
            </div>

            <div>
              <p>Poäng</p>
              <p>{this.state.red.roundOne.points || nbsp}</p>
              <p>{this.state.red.roundTwo.points || nbsp}</p>
              <p>{this.state.red.roundThree.points || nbsp}</p>
            </div>

            <div>
              <p>Poängavdrag</p>
              <p>{this.state.red.roundOne.penalty || nbsp}</p>
              <p>{this.state.red.roundTwo.penalty || nbsp}</p>
              <p>{this.state.red.roundThree.penalty || nbsp}</p>
              <p><strong>Totalt:</strong></p>
              {this.state.red.winner === true ? <p className="redWinner">VINNARE</p> : null}
            </div>

            <div>
              <p>Summa</p>
              <p>{this.state.red.roundOne.sum || nbsp}</p>
              <p>{this.state.red.roundTwo.sum || nbsp}</p>
              <p>{this.state.red.roundThree.sum || nbsp}</p>
              <p>{this.state.red.total}</p>
            </div>
          </div>
        </div>
        <div className="middlePageProtocol">
          <button className="newMatch" onClick={this.props.protokollUpdater}>Ny Match</button>
          <h2>&nbsp;</h2>
          <p><strong>Rond</strong></p>
          <p><strong>1</strong></p>
          <p><strong>2</strong></p>
          <p><strong>3</strong></p>
        </div>
        <div className="blueSideProtocol">
          <h2 style={{ color: "blue" }}>Blå</h2>
          <div className="blueScoresTable">
            <div>
              <p>Poäng</p>
              <p>{this.state.blue.roundOne.points || nbsp}</p>
              <p>{this.state.blue.roundTwo.points || nbsp}</p>
              <p>{this.state.blue.roundThree.points || nbsp}</p>
            </div>

            <div>
              <p>Poängavdrag</p>
              <p>{this.state.blue.roundOne.penalty || nbsp}</p>
              <p>{this.state.blue.roundTwo.penalty || nbsp}</p>
              <p>{this.state.blue.roundThree.penalty || nbsp}</p>
              <p><strong>Totalt:</strong></p>
              {this.state.blue.winner === true ? <p className="blueWinner">VINNARE</p> : null}
            </div>

            <div>
              <p>Summa</p>
              <p>{this.state.blue.roundOne.sum || nbsp}</p>
              <p>{this.state.blue.roundTwo.sum || nbsp}</p>
              <p>{this.state.blue.roundThree.sum || nbsp}</p>
              <p>{this.state.blue.total}</p>
            </div>

            <div>
              <p><i>Klickers</i></p>
              <p><i>{isZeroOne && this.state.blue.roundOne.klickers === 0 ? "0" : this.state.blue.roundOne.klickers || nbsp}</i></p>
              <p><i>{isZeroTwo && this.state.blue.roundTwo.klickers === 0 ? "0" : this.state.blue.roundTwo.klickers || nbsp}</i></p>
              <p><i>{isZeroThree && this.state.blue.roundThree.klickers === 0 ? "0" : this.state.blue.roundThree.klickers || nbsp}</i></p>
              <p><i>{this.state.blue.klickersTotal || nbsp}</i></p>
            </div>
          </div>
        </div>
        <Link to="/klickers" className="toKlickersLink">
            <i>Klickers</i>
            <img alt="arrow" src={require("../images/arrow.png")}></img>
        </Link>
        
      </div>
    );
  }
}

export default Protokoll;
