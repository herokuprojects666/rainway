// Tests a uri to see if it is potentially valid
export const isValidWebsocketUri = (uri: string): boolean => {
	return /((?:ws)|(?:wss)){1}(?::\/\/)[A-Za-z0-9./]+/.test(uri);
}
