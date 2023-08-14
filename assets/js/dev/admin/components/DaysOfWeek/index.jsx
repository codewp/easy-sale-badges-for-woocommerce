import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const daysOfWeek = [
	{ value: 'Saturday', label: 'Saturday' },
	{ value: 'Sunday', label: 'Sunday' },
	{ value: 'Monday', label: 'Monday' },
	{ value: 'Tuesday', label: 'Tuesday' },
	{ value: 'Wednesday', label: 'Wednesday' },
	{ value: 'Thursday', label: 'Thursday' },
	{ value: 'Friday', label: 'Friday' },
];

export default function DaysOfWeekSelect( {
	value,
	onChange,
	isMulti = true,
	isClearable = true,
	disabled = false,
} ) {
	const [ selectedOption, setSelectedOption ] = useState( value );

	useEffect( () => {
		setSelectedOption( value );
	}, [ value ] );

	const updateSelect = ( selected ) => {
		setSelectedOption( selected );
		if ( onChange ) {
			onChange( selected );
		}
	};

	return (
		<Select
			className="!asnp-w-[20rem]"
			value={ selectedOption }
			onChange={ updateSelect }
			isMulti={ isMulti }
			options={ daysOfWeek }
			isClearable={ isClearable }
			isDisabled={ disabled }
		/>
	);
}
