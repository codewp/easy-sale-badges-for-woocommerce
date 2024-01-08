const keys = [ 'disabled', 'local', 'much', 'shoes', 'best' ];

const generateNumber = ( key ) => {
	let number = '';
	for ( let i = 0; i < key.length; i++ ) {
		number += key.charCodeAt( i ) % 10;
	}
	return number;
};

export const getId = () => {
	if ( ! keys.length ) {
		return null;
	}

	let id = localStorage.getItem( 'asnp_wesb_ch_id' );
	if ( id && 'undefined' !== id ) {
		return id;
	}

	const random = Math.floor( Math.random() * ( keys.length - 1 ) );
	if ( ! keys[ random ] ) {
		return null;
	}

	id = generateNumber( keys[ random ] );
	localStorage.setItem( 'asnp_wesb_ch_id', id );

	return id;
};
