import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count.js'

describe('<GuessCount />', () => {
	it('Should render without crashing', () => {
		shallow(<GuessCount />);
	});

	it('Should render the count', () => {
		const count = 5;
		const wrapper = shallow(<GuessCount count={count} />);
		expect(wrapper.text()).toEqual('Guess #${count}!');
	});
});