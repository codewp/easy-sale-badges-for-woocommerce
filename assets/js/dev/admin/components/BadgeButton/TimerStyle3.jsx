import React from 'react';
import { __ } from '@wordpress/i18n';

const TimerStyle3 = ( { badge, timer } ) => {
	return (
		<div className="asnp-esb-productBadgeOutTimerStyleOn3">
			<div
				className="asnp-esb-timerStyle3Div"
				style={ {
					color: badge.bgColorTimer,
				} }
			>
				<div
					className="asnp-esb-timerStyle3Cont"
					style={ {
						padding: `${ badge.paddingTimerStyle }px`,
					} }
				>
					<div
						className="asnp-esb-timerDateStyle3"
						style={ {
							fontSize: `${ badge.fontSizeLabelTimerStyle1 }px`,
							color: badge.textColor,
						} }
					>
						{ timer.days }
					</div>
				</div>
				<div
					style={ {
						fontSize: `${ badge.fontSizeLabelTimerStyle1 }px`,
						display: 'flex',
						alignItems: 'center',
						fontWeight: '700',
					} }
				>
					{ __( ':', 'easy-sale-badges-for-woocommerce-pro' ) }
				</div>
				<div
					className="asnp-esb-timerStyle3Cont"
					style={ {
						padding: `${ badge.paddingTimerStyle }px`,
					} }
				>
					<div
						className="asnp-esb-timerDateStyle3"
						style={ {
							fontSize: `${ badge.fontSizeLabelTimerStyle1 }px`,
						} }
					>
						{ timer.hours }
					</div>
				</div>
				<div
					style={ {
						fontSize: `${ badge.fontSizeLabelTimerStyle1 }px`,
						display: 'flex',
						alignItems: 'center',
						fontWeight: '700',
					} }
				>
					{ __( ':', 'easy-sale-badges-for-woocommerce-pro' ) }
				</div>
				<div
					className="asnp-esb-timerStyle3Cont"
					style={ {
						padding: `${ badge.paddingTimerStyle }px`,
					} }
				>
					<div
						className="asnp-esb-timerDateStyle3"
						style={ {
							fontSize: `${ badge.fontSizeLabelTimerStyle1 }px`,
						} }
					>
						{ timer.minutes }
					</div>
				</div>
				<div
					style={ {
						fontSize: `${ badge.fontSizeLabelTimerStyle1 }px`,
						display: 'flex',
						alignItems: 'center',
						fontWeight: '700',
					} }
				>
					{ __( ':', 'easy-sale-badges-for-woocommerce-pro' ) }
				</div>
				<div
					className="asnp-esb-timerStyle3Cont"
					style={ {
						padding: `${ badge.paddingTimerStyle }px`,
					} }
				>
					<div
						className="asnp-esb-timerDateStyle3"
						style={ {
							fontSize: `${ badge.fontSizeLabelTimerStyle1 }px`,
						} }
					>
						{ timer.seconds }
					</div>
				</div>
			</div>
		</div>
	);
};

export default TimerStyle3;
