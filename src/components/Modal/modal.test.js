import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from './index';

test('renders success message', () => {
	const root = document.createElement("div");
	ReactDOM.render(<Modal status={{
		"isOut": false,
		"isKilled": false,
		"isRingDemolished": true,
		"iteration": 10
	}} tryAgain={(x) => (x)} />, root);
	
	const finalMessage = root.querySelector('span').textContent;
	expect(finalMessage).toBe('Congrats! Ring is destroyed at iteration 11');
});

test('renders outside the map message', () => {
	const root = document.createElement("div");
	ReactDOM.render(<Modal status={{
		"isOut": true,
		"isKilled": false,
		"isRingDemolished": false,
		"iteration": 5
	}} tryAgain={(x) => (x)} />, root);
	
	const finalMessage = root.querySelector('span').textContent;
	expect(finalMessage).toBe('Falls out of the map at iteration: 6');
});

test('renders nothing found message', () => {
	const root = document.createElement("div");
	ReactDOM.render(<Modal status={{
		"isOut": false,
		"isKilled": false,
		"isRingDemolished": false,
		"iteration": 5
	}} tryAgain={(x) => (x)} />, root);
	
	const finalMessage = root.querySelector('span').textContent;
	expect(finalMessage).toBe('Nothing is found');
});
test('renders is Dead message', () => {
	const root = document.createElement("div");
	ReactDOM.render(<Modal status={{
		"isOut": false,
		"isKilled": true,
		"isRingDemolished": false,
		"iteration": 5
	}} tryAgain={(x) => (x)} />, root);
	
	const finalMessage = root.querySelector('span').textContent;
	expect(finalMessage).toBe('Orc found, Frodo is dead at iteration: 6');
});
