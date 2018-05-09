import React from 'react';
import PropTypes from 'prop-types';
import SVGIcon from './SVGIcon';

const Notification = ({ title, message, type }) => {
	return (
		<div className='sdc-notification' >
			<div className={`sdc-notification__wrapper type-${type}`}>
				<div className='sdc-notification__content'>
					<div className='sdc-nitification__icon_container'>
						<SVGIcon name='check' className='sdc-notification_svg-icon' />
					</div>
					<div className='sdc-notification__message'>
						<div className='sdc-notification__title'>
							{title}
						</div>
						<div className='sdc-notification__text'>
							{message}
						</div>
					</div>
				</div>
			</div>
		</div>
	);

};

Notification.propTypes = {
	title: PropTypes.string,
	message: PropTypes.string,
	type: PropTypes.string
};

export default Notification;