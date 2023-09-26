import React, { useState, useEffect } from 'react';
import { getNow } from '../../utils/constants';

const CurrentServerTime = () => {
	const [ now, setNow ] = useState( getNow() );

	useEffect( () => {
		const interval = setInterval( () => {
			setNow( new Date( now.getTime() + 1000 ) );
		}, 1000 );

		return () => {
			clearInterval( interval );
		};
	}, [ now ] );

	const fromatedDate = () => {
		return (
			now.toDateString() +
			' ' +
			now.getHours().toString().padStart( 2, '0' ) +
			':' +
			now.getMinutes().toString().padStart( 2, '0' ) +
			':' +
			now.getSeconds().toString().padStart( 2, '0' )
		);
	};

	return (
		<span className="asnp-current-time asnp-ml-4 asnp-text-gray-500 asnp-text-base asnp-underline asnp-italic">
			{ fromatedDate() }
		</span>
	);
};

export default CurrentServerTime;
