import React from 'react';
import { useState } from 'react';

import './App.css';

import GamePadComponent from './components/gamepad.component';
import WSConnectComponent from './components/ws-connect.component';

import { GamePad } from './interfaces/gamepad.interface';
import { Coordinates } from './interfaces/coordinates.interface';

import { getStickStyle } from './functions/app.functions';

function App() {
	const [gamepad, setGamepad] = useState({} as GamePad);
	const [leftStickStyle, setLeftStickStyle] = useState({} as React.CSSProperties);
	const [rightStickStyle, setRightStickStyle] = useState({} as React.CSSProperties);
	const [isConnected, setIsConnected] = useState(false);
	const messageEvent = (message: MessageEvent) => {
		const parsedMessage = JSON.parse(message.data);
		const parsedLeftStick = parsedMessage.thumbsticks.left;
		const parsedRightStick = parsedMessage.thumbsticks.right;
		const leftStickStyle = getStickStyle(parsedLeftStick as Coordinates, 30);
		const rightStickStyle = getStickStyle(parsedRightStick as Coordinates, 30);
		setRightStickStyle(rightStickStyle)
		setLeftStickStyle(leftStickStyle)
		setGamepad(parsedMessage)
	}
  return (
  	<div>
  		<WSConnectComponent
  			buttonChange={setIsConnected}
  			messenger={messageEvent}
  			isConnected={isConnected}>
  		</WSConnectComponent>
  		{
  			isConnected &&
  			<GamePadComponent
  				gamepad={gamepad}
  				leftStick={leftStickStyle}
  				rightStick={rightStickStyle}>
  			</GamePadComponent>
  		}
  	</div>
  );
}

export default App;
