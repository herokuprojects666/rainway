import React from 'react';
import { useState } from 'react';

import '../ws-connect.css';

import { URIState } from '../interfaces/uri-state.interface';

import { isValidWebsocketUri } from '../functions/ws-connect.functions';

function WSConnectComponent({isConnected, children, buttonChange, messenger}: {isConnected: boolean, children: never[], buttonChange: (isConnected: boolean) => void, messenger: (event: MessageEvent) => void }) {
	const [errorMessage, setErrorMessage] = useState('');
	const [uriState, setUriState] = useState<URIState>();
	const [ws, setWS] = useState<WebSocket>();
	return (
		<div className="ws-connect">
			<button
				disabled={!isConnected}
				onClick={() => {
					const socket = ws as WebSocket;
					socket.close();
					buttonChange(!isConnected);
				}
			}>{'Disconnect'}
			</button>
			<button
				disabled={isConnected || !uriState?.isValid}
				onClick={() => {
					// It looks like ws connections with a port beyond some max range causes an error to be thrown. Example uri that throws an error: ws://localhost:87659.
					try {
						const state = uriState as URIState;
						const newSocket = new WebSocket(state.uri);
						// We don't receive any sort of useful meta when a connection fails so just propagate a generic error in this case
						newSocket.onerror = () => {
							setErrorMessage('Experienced an error trying initialize Websocket');
						}
						newSocket.onopen = () => {
							newSocket.onmessage = messenger;
							buttonChange(!isConnected);
							setErrorMessage('');
						}
						setWS(newSocket);
					} catch {
						setErrorMessage('Unknown error thrown while trying to initialize Websocket');
					}
				}
			}>{'Connect'}
			</button>
			<input
				disabled={isConnected}
				placeholder="Enter gamepad server URI"
				onChange={ (event: React.ChangeEvent<HTMLInputElement>) => {
					const uri = event.target.value
					const state = {
						isValid: isValidWebsocketUri(uri),
						uri
					}
					setUriState(state);
				}
			}/>
			{
				errorMessage && <span className="server-error">{errorMessage}</span>
			}
		</div>
	)
}

export default WSConnectComponent
