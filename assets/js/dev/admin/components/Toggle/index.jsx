import React from 'react';

export default function Toggle( { value, onChange } ) {
	return (
		<div
			className={
				( value ? 'asnp-bg-green-500 ' : 'asnp-bg-gray-300 ' ) +
				'asnp-w-12 asnp-h-6 asnp-flex asnp-items-center asnp-rounded-full asnp-p-1 asnp-duration-300 asnp-cursor-pointer'
			}
			aria-checked={ value.toString() }
			onClick={ () => onChange( ! value ) }
		>
			<div
				className={
					( value ? 'asnp-translate-x-5 ' : '' ) +
					'asnp-bg-white asnp-w-5 asnp-h-5 asnp-rounded-full asnp-shadow-md asnp-transform asnp-duration-300'
				}
			></div>
		</div>
	);
}
