import React, { useState, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import * as ItemsApi from '@easy-sale-badges/api/items';

export default function ItemsSelect( {
	items,
	type,
	onChange,
	isMulti = true,
	cacheOptions = true,
	isClearable = true,
	disabled = false,
} ) {
	const [ selectedOption, setSelectedOption ] = useState( null );

	useEffect( () => {
		if ( items === selectedOption ) {
			return;
		}

		if ( ! items ) {
			if ( null !== selectedOption ) {
				setSelectedOption( null );
			}
			return;
		}

		if (
			! Array.isArray( items ) &&
			'object' === typeof items &&
			null != items.value
		) {
			setSelectedOption( items );
			return;
		} else if (
			Array.isArray( items ) &&
			items.length &&
			'object' === typeof items[ 0 ] &&
			null != items[ 0 ].value
		) {
			setSelectedOption( items );
			return;
		}

		// It should be proceed after object type check.
		if ( ! items.length ) {
			if ( null !== selectedOption ) {
				setSelectedOption( null );
			}
			return;
		}

		const fetchItems = async () => {
			let options = await ItemsApi.getItems( { type, items } );
			if ( options && options.length ) {
				if ( ! isMulti ) {
					setSelectedOption( options[ 0 ] );
				} else {
					setSelectedOption( options );
				}
			}
		};
		fetchItems();
	}, [ items ] );

	const updateSelect = ( selected ) => {
		setSelectedOption( selected );
		if ( items !== selected ) {
			onChange( selected );
		}
	};

	return (
		<AsyncSelect
			className="!asnp-w-[20rem]"
			value={ selectedOption }
			onChange={ updateSelect }
			isMulti={ isMulti }
			cacheOptions={ cacheOptions }
			loadOptions={ ( search ) =>
				ItemsApi.searchItems( { type, search } )
			}
			isClearable={ isClearable }
			isDisabled={ disabled }
		/>
	);
}
