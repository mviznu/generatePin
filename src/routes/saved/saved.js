import React, { Component } from 'react';
import { connect } from "react-redux";
import { deletePin, updatePinName } from "../../store/actions/index";

import './saved.scss';
import CustomButton from './../../components/custom-button/custom-button';
import Constants from './../../static/constants';
import Messages from './../../static/messages.json';

class Saved extends Component {
    state = {
        pinTableRows: this.props.pins
    }

    handleFieldChange = (index, e) => {
        let tempState = { ...this.state };
        let i;
        for (i in tempState.pinTableRows) {
            if (i !== index) {
                if (tempState.pinTableRows[i][Constants.indexOne] === e.target.value) {
                    alert(Messages.pinAlreadyExists);
                    return false;
                }
            }
        }
        tempState.pinTableRows[index][Constants.indexOne] = e.target.value;
        this.setState(tempState);
        this.props.updatePinName(tempState.pinTableRows[index]);
    }

    onDeleteClick = (rowData) => {
        this.props.deletePin(rowData);
        let tempState = { ...this.state };
        tempState.pinTableRows = tempState.pinTableRows.filter(item => item !== rowData);
        this.setState(tempState);
    }

    render() {
        return (
            <section className="page-saved">
                <div className="page-header">
                    <span>{Constants.savedPage}</span>
                </div>
                {this.state.pinTableRows.length !== Constants.indexZero ?
                    <React.Fragment>
                        <div className="table-display">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>PIN NAME</th>
                                        <th>PIN1</th>
                                        <th>PIN2</th>
                                        <th>PIN3</th>
                                        <th>PIN4</th>
                                        <th>PIN5</th>
                                        <th>ACTIONS</th>
                                    </tr>
                                    {this.state.pinTableRows.map((data, index) =>
                                        <tr key={index}>
                                            <td style={{display: "none"}}>
                                                <input type="hidden" value={data[Constants.indexZero]} />
                                            </td>
                                            <td>
                                                <input type="text" value={data[Constants.indexOne]} 
                                                onChange={(e) => this.handleFieldChange(index,e)} />
                                            </td>
                                            <td>{data[Constants.indexTwo]}</td>
                                            <td>{data[Constants.indexThree]}</td>
                                            <td>{data[Constants.indexFour]}</td>
                                            <td>{data[Constants.indexFive]}</td>
                                            <td>{data[Constants.indexSix]}</td>
                                            <td>
                                                <CustomButton selectId="deleteId" title="Delete" buttonState="enabled" clicked={() => this.onDeleteClick(data)} />
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <div className="table-display">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>PIN NAME</th>
                                        <th>PIN1</th>
                                        <th>PIN2</th>
                                        <th>PIN3</th>
                                        <th>PIN4</th>
                                        <th>PIN5</th>
                                    </tr>
                                    <tr>
                                        <td colSpan="6">
                                            {Messages.noSavedPinFound}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </React.Fragment>
                }
            </section>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deletePin: pin => dispatch(deletePin(pin)),
        updatePinName: pinItem => dispatch(updatePinName(pinItem))
    };
}

const mapStateToProps = state => {
    return { pins: state.savedPins };
};

export default connect(mapStateToProps, mapDispatchToProps)(Saved);