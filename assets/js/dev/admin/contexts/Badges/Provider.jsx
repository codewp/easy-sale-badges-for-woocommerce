import React, { createContext, useReducer, useEffect } from 'react';
import { initialState, Reducer, fetchItemsIfNeeded } from './Reducer';

export const BadgesContext = createContext();

export const BadgesContextProvider = ( { children } ) => {
	const [ state, dispatch ] = useReducer( Reducer, initialState );

	useEffect( () => {
		fetchItemsIfNeeded( state, dispatch );
	}, [] );

	const getItem = ( id ) => {
		if ( ! state || ! state.items || ! state.items.length ) {
			return null;
		}

		let find = state.items.find( ( item ) => item.id == id );
		return find || null;
	};

	return (
		<BadgesContext.Provider
			value={ {
				state,
				getItem,
				dispatch,
			} }
		>
			{ children }
		</BadgesContext.Provider>
	);
};
