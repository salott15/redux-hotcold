import React from 'react';
import {shallow} from 'enzyme';

import GuessSection from './guess-section.js'

describe('<GuessSection />', () => {
	it('Should render without crashing', () => {
		shallow(<GuessSection />);
	});

	it('Should render feedback', () => {
		const feedback = 'Example feedback';
		const wrapper = shallow(<GuessSection feedback={feedback} />);
		expect(wrapper.contains(feedback)).toEqual(true);
	});
});