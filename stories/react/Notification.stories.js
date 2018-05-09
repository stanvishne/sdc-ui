import React from 'react';
import Examples from './utils/Examples.js';
import Notification from '../../src/react/Notification.js';

let examples = {
	Success: {
		jsx: <Notification title='Title' message='message' type='success' />
	},
	Warning: {
		jsx: <Notification title='Title' message='message' type='warn' />
	},
	Info: {
		jsx: <Notification title='Title' message='message' type='info' />
	},
	Error: {
		jsx: <Notification title='Title' message='message' type='error' />
	}

};

const Notifications = () => <Examples examples={examples} />

export default Notifications;
