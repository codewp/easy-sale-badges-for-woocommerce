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

/**
 * Get theme specific styles.
 *
 * @returns {object|null}
 */
export const getThemeStyles = () => {
	const stylesheet =
		'undefined' !== typeof saleBadgeData.stylesheet
			? saleBadgeData.stylesheet
			: '';
	const template =
		'undefined' !== typeof saleBadgeData.template
			? saleBadgeData.template
			: '';

	if ( ! stylesheet.length && ! template.length ) {
		return null;
	}

	const styles = {
		avada: {
			timer: {
				padding: '2px',
			},
		},
		betheme: {
			timer: {
				padding: '6px 15px',
			},
		},
	};

	if ( 'undefined' !== typeof styles[ stylesheet ] ) {
		return styles[ stylesheet ];
	}

	if ( 'undefined' !== typeof styles[ template ] ) {
		return styles[ template ];
	}

	return null;
};

