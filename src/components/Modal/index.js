import React from 'react';
import './modal.css';

export const Modal = ({ status, tryAgain }) => {
	
	const finalReport =
		(status.isOut && `Falls out of the map at iteration: ${status.iteration + 1}`) ||
		(status.isKilled && `Orc found, Frodo is dead at iteration: ${status.iteration + 1}`) ||
		(status.isRingDemolished && `Congrats! Ring is destroyed at iteration ${status.iteration + 1}`) ||
		`Nothing is found`
	
	return (
		<div className="modal-container">
			<div className="modal-content">
				<span>{finalReport}</span>
				<button onClick={() => tryAgain()} style={{ fontSize: '1rem',  margin: '1rem', backgroundColor: 'var(--baby-blue)', padding: '0.5rem' }}>Try Again</button>
			</div>
		</div>
	)
}
