import React, { useState, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import {
	components,
	MultiValueGenericProps,
	MultiValueProps,
	OnChangeValue,
	Props,
} from 'react-select';
import {
	SortableContainer,
	SortableContainerProps,
	SortableElement,
	SortEndHandler,
	SortableHandle,
} from 'react-sortable-hoc';
import * as ItemsApi from '@easy-whatsapp/api/items';

function arrayMove( array, from, to ) {
	const slicedArray = array.slice();
	slicedArray.splice(
		to < 0 ? array.length + to : to,
		0,
		slicedArray.splice( from, 1 )[ 0 ]
	);
	return slicedArray;
}

const SortableMultiValue = SortableElement( ( props ) => {
	// this prevents the menu from being opened/closed when the user clicks
	// on a value to begin dragging it. ideally, detecting a click (instead of
	// a drag) would still focus the control and toggle the menu, but that
	// requires some magic with refs that are out of scope for this example
	const onMouseDown = ( e ) => {
		e.preventDefault();
		e.stopPropagation();
	};
	const innerProps = { ...props.innerProps, onMouseDown };
	return <components.MultiValue { ...props } innerProps={ innerProps } />;
} );

const SortableMultiValueLabel = SortableHandle( ( props ) => (
	<components.MultiValueLabel { ...props } />
) );

const SortableSelect = SortableContainer( AsyncSelect );

export default function MultiSelectSort( {
	items,
	type,
	onChange,
	cacheOptions = false,
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
					updateSelect( options[ 0 ] );
				} else {
					updateSelect( options );
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

	const onSortEnd = ( { oldIndex, newIndex } ) => {
		const newValue = arrayMove( selectedOption, oldIndex, newIndex );
		updateSelect( newValue );
	};

	return (
		<SortableSelect
			useDragHandle
			// react-sortable-hoc props:
			axis="xy"
			onSortEnd={ onSortEnd }
			distance={ 4 }
			// small fix for https://github.com/clauderic/react-sortable-hoc/pull/352:
			getHelperDimensions={ ( { node } ) => node.getBoundingClientRect() }
			// react-select props:
			isMulti
			value={ selectedOption }
			onChange={ updateSelect }
			components={ {
				// @ts-ignore We're failing to provide a required index prop to SortableElement
				MultiValue: SortableMultiValue,
				MultiValueLabel: SortableMultiValueLabel,
			} }
			closeMenuOnSelect={ false }
			cacheOptions={ cacheOptions }
			loadOptions={ ( search ) =>
				ItemsApi.searchItems( { type, search } )
			}
		/>
	);
}
