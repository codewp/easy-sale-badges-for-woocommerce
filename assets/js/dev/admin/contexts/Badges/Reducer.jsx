import * as BadgeApi from '@easy-sale-badges/api/badge';

export const Action = {
	SET_ITEMS: 'badge/setItems',
	ADD_ITEM: 'badge/addItem',
	UPDATE_ITEM: 'badge/updateItem',
	DELETE_ITEM: 'badge/deleteItem',
	SET_IS_LOADING: 'badge/setIsLoading',
	SET_LOADED: 'badge/setLoaded',
};

export const fetchItems = async ( dispatch ) => {
	try {
		dispatch( {
			type: Action.SET_IS_LOADING,
			payload: true,
		} );
		let response = await BadgeApi.getItems();
		if ( response && response.items ) {
			dispatch( {
				type: Action.SET_ITEMS,
				payload: response.items,
			} );
			dispatch( {
				type: Action.SET_LOADED,
				payload: true,
			} );
		}
		return dispatch( {
			type: Action.SET_IS_LOADING,
			payload: false,
		} );
	} catch ( error ) {
		dispatch( {
			type: Action.SET_IS_LOADING,
			payload: false,
		} );
		console.log( error.message );
	}
};

export const fetchItemsIfNeeded = async ( state, dispatch, args = {} ) => {
	if ( shouldFetchItems( state, args ) ) {
		return await fetchItems( dispatch );
	}
};

export const shouldFetchItems = ( state, args ) => {
	if ( ! state || state.isLoading ) {
		return false;
	}

	if ( ! state.loaded || args.force ) {
		return true;
	}

	return false;
};

export const initialState = {
	isLoading: false,
	items: [],
	loaded: false,
};

export const Reducer = ( state, action ) => {
	switch ( action.type ) {
		case Action.SET_ITEMS:
			return { ...state, items: action.payload };

		case Action.ADD_ITEM:
			if ( state.items.length ) {
				let index = -1;
				for ( let i = 0, max = state.items.length; i < max; i++ ) {
					if ( state.items[ i ].id == action.payload.id ) {
						index = i;
						break;
					}
				}
				if ( 0 <= index ) {
					let items = [ ...state.items ];
					items[ index ] = action.payload;
					return {
						...state,
						items,
					};
				}
			}

			return {
				...state,
				items: [ ...state.items, action.payload ],
			};

		case Action.UPDATE_ITEM:
			if ( state.items.length ) {
				let index = -1;
				for ( let i = 0, max = state.items.length; i < max; i++ ) {
					if ( state.items[ i ].id == action.payload.id ) {
						index = i;
						break;
					}
				}
				if ( 0 <= index ) {
					let items = [ ...state.items ];
					items[ index ] = action.payload;
					return {
						...state,
						items,
					};
				}
			}
			return state;

		case Action.DELETE_ITEM:
			return {
				...state,
				items: state.items.filter(
					( item ) => item.id != action.payload
				),
			};

		case Action.SET_IS_LOADING:
			return { ...state, isLoading: action.payload };

		case Action.SET_LOADED:
			return { ...state, loaded: action.payload };

		default:
			return state;
	}
};

export default Reducer;
