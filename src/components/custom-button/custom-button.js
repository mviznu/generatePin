import React from 'react';

import './custom-button.scss'

const CustomButton = (props) => (
    <button id={props.selectId} className={props.buttonState ? "submit-button-" + props.buttonState : "submit-button-enabled"} onClick={props.clicked} disabled={props.buttonState === "enabled" ? false : true}>{props.title}</button>
)

export default CustomButton;