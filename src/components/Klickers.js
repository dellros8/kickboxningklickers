import React, { Component } from 'react';
import '../App.css';
import { Link, Redirect } from 'react-router-dom';

class Klickers extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.state.klickers

    this.incrBlue = this.incrBlue.bind(this)
    this.decrBlue = this.decrBlue.bind(this)
    this.penaltyIncrBlue = this.penaltyIncrBlue.bind(this)
    this.penaltyDecrBlue = this.penaltyDecrBlue.bind(this)

    this.incrRed = this.incrRed.bind(this)
    this.decrRed = this.decrRed.bind(this)
    this.penaltyIncrRed = this.penaltyIncrRed.bind(this)
    this.penaltyDecrRed = this.penaltyDecrRed.bind(this)

    this.roundReport = this.roundReport.bind(this)

  }

  incrBlue() {
    this.setState({
      blue: {
        klicker: this.state.blue.klicker + 1,
        penalty: this.state.blue.penalty
      }
    })
  }
  decrBlue() {
    if (this.state.blue.klicker > 0) {
      this.setState({
        blue: {
          klicker: this.state.blue.klicker - 1,
          penalty: this.state.blue.penalty
        }
      })
    }
  }
  penaltyIncrBlue() {
    this.setState({
      blue: {
        klicker: this.state.blue.klicker,
        penalty: this.state.blue.penalty + 1
      }
    })
  }
  penaltyDecrBlue() {
    if (this.state.blue.penalty > 0) {
      this.setState({
        blue: {
          klicker: this.state.blue.klicker,
          penalty: this.state.blue.penalty - 1
        }
      })
    }
  }


  incrRed() {
    this.setState({
      red: {
        klicker: this.state.red.klicker + 1,
        penalty: this.state.red.penalty
      }
    })
  }
  decrRed() {
    if (this.state.red.klicker > 0) {
      this.setState({
        red: {
          klicker: this.state.red.klicker - 1,
          penalty: this.state.red.penalty
        }
      })
    }
  }
  penaltyIncrRed() {
    this.setState({
      red: {
        klicker: this.state.red.klicker,
        penalty: this.state.red.penalty + 1
      }
    })
  }
  penaltyDecrRed() {
    if (this.state.red.penalty > 0) {
      this.setState({
        red: {
          klicker: this.state.red.klicker,
          penalty: this.state.red.penalty - 1
        }
      })
    }
  }

  componentWillUnmount() {
    this.props.klickersUpdater(this.state)
  }

  roundReport() {
    if (window.confirm(`Vill du skicka rond ${this.state.rond} till protokollet?`)) {
      this.setState(this.props.state.klickers)
      if(this.state.rond === 3) {
        this.setState({redirect: true})
      }
      this.props.roundReport(this.state)
    }
  }


  render() {

    if (this.state.redirect === true) {
      return <Redirect to='/' />
    }

    return (
      <div className="klickersBody">
        <Link to="/" className="toProtokollLink">
            <i>Protokoll</i>
            <img alt="arrow" src={require("../images/arrow.png")}></img>
        </Link>

        <div className="redSideKlickers">
          <div className="flexcenter">
            <p className="pointsCount">{this.state.red.klicker.toString()}</p>
            <div className="klickers">
              <div className="klickerIncr red" onClick={this.incrRed}>
              <img src={require("../images/plus.svg")} alt="plus"></img>
              </div>
              <div className="klickerDecr red" onClick={this.decrRed}>
              <img src={require("../images/minus.svg")} alt="minus"></img>
              </div>
            </div>
            <div className="penaltyWrapper">
              <p>Poängavdrag</p>
              <p style={{ marginBottom: "5px", marginTop: "5px" }}>{this.state.red.penalty.toString()}</p>
              <div className="penaltyKlickers">
                <div className="penalityKlicker" onClick={this.penaltyIncrRed}>+</div>
                <div className="penalityKlicker" onClick={this.penaltyDecrRed}>-</div>
              </div>
            </div>
          </div>
        </div>

        <div className="middlePageKlickers">
          <h1>Rond {this.state.rond}</h1>
          <div className="roundDoneButton" onClick={this.roundReport}>Rond klar</div>
        </div>

        <div className="blueSideKlickers">
          <div className="flexcenter">
            <p className="pointsCount">{this.state.blue.klicker.toString()}</p>
            <div className="klickers">
              <div className="klickerIncr blue" onClick={this.incrBlue}>
              <img src={require("../images/plus.svg")} alt="plus"></img>
              </div>
              <div className="klickerDecr blue" onClick={this.decrBlue}>
              <img src={require("../images/minus.svg")} alt="minus"></img>
              </div>
            </div>
            <div className="penaltyWrapper">
              <p>Poängavdrag</p>
              <p style={{ marginBottom: "5px", marginTop: "5px" }}>{this.state.blue.penalty.toString()}</p>
              <div className="penaltyKlickers">
                <div className="penalityKlicker" onClick={this.penaltyIncrBlue}>+</div>
                <div className="penalityKlicker" onClick={this.penaltyDecrBlue}>-</div>
              </div>
            </div>
          </div>
        </div>



      </div>
    );
  }
}

export default Klickers;
