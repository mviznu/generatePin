import React, { Component } from 'react';
import { connect } from "react-redux";
import { addPin } from "../../store/actions/index";

import './generate.scss';
import CustomButton from './../../components/custom-button/custom-button';
import Constants from './../../static/constants';
import Messages from './../../static/messages.json';

class Generate extends Component {

  state = {
    isGeneratePinSaved: true,
    pinItems: [null, null, null, null, null, null, null]
  }

  onGenerateClick = () => {
    let tempState = { ...this.state };
    tempState.isGeneratePinSaved = false;
    for (let i = Constants.indexTwo; i < tempState.pinItems.length; i++) {
      do {
        tempState.pinItems[i] = this.getRandomNum(Constants.indexFour);
      }
      while (this.hasRepeatingdigits(tempState.pinItems[i]) || this.hasThreeAscDesCheck(tempState.pinItems[i]));
    }
    this.setState(tempState);
  }

  getRandomNum = (length) => {
    let randomNum = (Math.pow(10, length).toString().slice(length - 1) +
      Math.floor((Math.random() * Math.pow(10, length)) + 1).toString()).slice(-length);
    return randomNum;
  }

  hasRepeatingdigits = (number) => {
    return (Constants.con2DigitPatt).test(number);
  }

  hasThreeAscDesCheck = (number) => {
    return (Constants.con3AscDes).test(number);
  }

  onSaveClick = () => {
    let isPinCombinationNotExist = this.checkpinCombinationExists(this.props.pins, this.state.pinItems);
    if (isPinCombinationNotExist) {
      let tempState = { ...this.state };
      let counter = this.props.pins.length;
      if (this.props.pins.length > Constants.indexZero) {
        tempState.pinItems[Constants.indexZero] = counter;
        tempState.pinItems[Constants.indexOne] = "pin" + counter;
      } else {
        tempState.pinItems[Constants.indexZero] = counter;
        tempState.pinItems[Constants.indexOne] = "pin" + counter;
      }
      this.props.addPin(tempState.pinItems);
      tempState.isGeneratePinSaved = true;
      tempState.pinItems = this.preArrayDefaultValues();
      this.setState(tempState);
    } else {
      alert(Messages.pinCombinationAlreadyExist);
    }

  }

  checkpinCombinationExists = (savedPins, generatedPins) => {
    for (let i of savedPins) {
      let counter = 0, pinSameCounter = 0;
      for (let j of i) {
        counter++;
        if (counter > Constants.indexOne) {
          if (j === generatedPins[j]) {
            pinSameCounter++;
          }
        }
      }
      if (pinSameCounter === Constants.indexFive) {
        return false;
      }
    }
    return true;
  }

  preArrayDefaultValues = () => {
    let items = [null, null, null, null, null, null, null];
    return items;
  }

  render() {
    return (
      <section className="page-generate">
        <div className="page-header">
          <span>{Constants.generatePage}</span>
        </div>
        <div className="field-area">
          {this.state.pinItems.map((Data, index) => {
            let pinIndex = index + Constants.indexOne;
            let pinName = "pin" + pinIndex;
            if (index !== Constants.indexZero && index !== Constants.indexOne) {
              return (
                <input key={pinIndex} id={pinName} type="number" value={Data || ""} readOnly disabled/>
              )
            } else {
              return null;
            }
          })}
        </div>
        <div className="display-box">
          <CustomButton selectId="generateId" title="Generate" buttonState="enabled" clicked={this.onGenerateClick} />
          <CustomButton title="Save" buttonState={this.state.isGeneratePinSaved ? "disabled" : "enabled"} clicked={this.onSaveClick} />
        </div>
      </section>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addPin: pin => dispatch(addPin(pin))
  };
}

const mapStateToProps = state => {
  return { pins: state.savedPins };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Generate);