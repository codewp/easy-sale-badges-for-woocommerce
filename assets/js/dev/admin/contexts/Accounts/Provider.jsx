import React, { createContext, useReducer, useEffect } from 'react';
import { initialState, Reducer, fetchItemsIfNeeded } from './Reducer';

export const AccountsContext = createContext();

export const AccountsContextProvider = ( { children } ) => {
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
		<AccountsContext.Provider
			value={ {
				state,
				getItem,
				dispatch,
			} }
		>
			{ children }
		</AccountsContext.Provider>
	);
};
