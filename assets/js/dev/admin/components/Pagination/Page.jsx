import React from 'react';

export default function Page( {
	isCurrent = false,
	pageKey,
	onClick,
	children,
	className = '',
} ) {
	if ( isCurrent ) {
		className += ' current';
	}

	return (
		<button className={ className } onClick={ () => onClick() }>
			{ pageKey === 'prev' && (
				<span className="dashicons dashicons-arrow-left-alt2" />
			) }
			{ children }
			{ pageKey === 'next' && (
				<span className="dashicons dashicons-arrow-right-alt2" />
			) }
		</button>
	);
}
