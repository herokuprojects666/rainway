import React from 'react';
import { Coordinates } from '../interfaces/coordinates.interface';

export const getStickStyle = (coordinates: Coordinates, maxOffset: number): React.CSSProperties => {
		const shiftDown = coordinates.y > 0;
		const shiftRight = coordinates.x > 0;
		const horizontalOffset = Math.abs(coordinates.x) * maxOffset;
		const verticalOffset = Math.abs(coordinates.y) * maxOffset;
		const style: React.CSSProperties = {};
		if (shiftRight) {
			style.left = `${horizontalOffset}px`;
		} else {
			style.right = `${horizontalOffset}px`;
		}
		if (shiftDown) {
			style.top = `${verticalOffset}px`;
		} else {
			style.bottom = `${verticalOffset}px`;
		}
		return style;
}