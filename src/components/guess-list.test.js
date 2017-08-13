import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list.js';

describe('<GuessList />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessList />);
	});

	it('Renders guesses', () => {
		const guesses = [1, 2, 3];
		const wrapper = shallow(<GuessList guesses={guesses} />);
		const items = wrapper.find('li');
		expect(items.length).toEqual(guesses.length);
		guesses.forEach((guess, index) => {
			expect(items.at(index).text()).toEqual(guess.toString());
		});
	});
});