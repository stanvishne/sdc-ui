import React from 'react';
import {storiesOf} from '@storybook/react';

import Colors from './Colors.stories.js';
import Typography from './Typography.stories.js';
import Checkboxes from './Checkbox.stories.js';
import Input from './Input.stories.js';
import Icons from './SVGIcon.stories.js';
import Tiles from './Tiles.stories.js';
import Tabs from './Tabs.stories.js';
import Form from './Form.stories.js';
import Radios from './Radio.stories.js';
import RadioGroups from './RadioGroup.stories.js';
import Modals from './Modal.stories.js';

import DefaultButtons from './buttons/DefaultButtons.stories.js';
import OutlineButtons from './buttons/OutlineButtons.stories.js';
import OutlineRoundedButtons from './buttons/OutlineRoundedButtons.stories.js';
import LinkButtons from './buttons/LinkButtons.stories.js';


storiesOf('Colors', module)
	.add('Color Palette', () => <Colors />);

storiesOf('Typography', module)
	.add('Typography', () => <Typography />);

storiesOf('Buttons', module)
	.add('Default', () => <DefaultButtons />)
	.add('Outline', () => <OutlineButtons />)
	.add('Rounded Outline', () => <OutlineRoundedButtons />)
	.add('Link', () => <LinkButtons />);

storiesOf('Checkboxes', module)
	.add('Checkboxes', () => <Checkboxes />);

storiesOf('Input Fields', module)
	.add('Input Text', () => <Input />);


storiesOf('Icons', module)
	.add('SVG Icons', () => <Icons />);

storiesOf('Radios', module)
	.add('Radio Buttons', () => <Radios />)
	.add('Radio Button Groups', () => <RadioGroups />);

storiesOf('Tabs', module)
	.add('Tabs', () => <Tabs />);

storiesOf('Tiles', module)
	.add('Tiles', () => <Tiles />);

storiesOf('Form Example', module)
	.add('Form Example', () => <Form/>);

storiesOf('Modals', module)
	.add('Modal examples', () => <Modals/>);