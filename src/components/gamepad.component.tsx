import React from 'react';

import '../gamepad.css'

import { GamePad } from '../interfaces/gamepad.interface';

function GamePadComponent({ gamepad, leftStick, rightStick, children }: { gamepad: GamePad, leftStick: React.CSSProperties, rightStick: React.CSSProperties, children: never[]}) {
  return (
		<div>
			<div className="col">
	  		<span>Left Joystick</span>
	  		<div className="joystick-area">
	  			<div className="joystick" style={leftStick}></div>
	  		</div>
	  	</div>
	  	<div className="col">
	  		<span>Right Joystick</span>
	  		<div className="joystick-area">
	  			<div className="joystick" style={rightStick}></div>
	  		</div>
	  	</div>
	  	<div className="col">
	  		<span>A</span>
	  		<div className={`a-button ${gamepad?.buttons?.a ? 'pressed' : 'not-pressed'}`}></div>
	  	</div>
	  	<div className="col">
	  		<span>B</span>
	  		<div className={`b-button ${gamepad?.buttons?.b ? 'pressed' : 'not-pressed'}`}></div>
	  	</div>
	  	<div className="col">
	  		<span>Y</span>
	  		<div className={`y-button ${gamepad?.buttons?.y ? 'pressed' : 'not-pressed'}`}></div>
	  	</div>
	  	<div className="col">
	  		<span>X</span>
	  		<div className={`x-button ${gamepad?.buttons?.x ? 'pressed' : 'not-pressed'}`}></div>
	  	</div>
		</div>
  );
}

export default GamePadComponent;