import { Coordinates } from './coordinates.interface';

export interface GamePad {
	buttons: {
		a: boolean;
		b: boolean;
		y: boolean;
		x: boolean;
	},
	thumbsticks: {
		left: Coordinates;
		right: Coordinates;
	}
};
