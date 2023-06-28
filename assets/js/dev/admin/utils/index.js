/**
 * Convert value to a boolean value.
 *
 * @param {string | number | boolean} value
 *
 * @returns {boolean}
 */
export const toBool = ( value ) => {
	if ( 'boolean' === typeof value ) {
		return value;
	} else if ( 'number' === typeof value ) {
		return 1 === value;
	}

	return (
		'1' === value ||
		'true' === value.toLowerCase() ||
		'yes' === value.toLowerCase() ||
		'enabled' === value.toLowerCase() ||
		'on' === value.toLowerCase()
	);
};

/**
 * Is the given file an image.
 *
 * @param {object} file
 *
 * @returns {boolean}
 */
export const isImage = ( file ) => {
	return file.type.match( /^image\// );
};
