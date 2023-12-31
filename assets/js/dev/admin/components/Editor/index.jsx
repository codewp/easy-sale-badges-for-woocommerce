import React from 'react';
import { Editor, EditorState, RichUtils, getDefaultKeyBinding } from 'draft-js';
import 'draft-js/dist/Draft.css';
import './RichEditor.css';
import { convertFromHTML, convertToHTML } from 'draft-convert';

export default function MyEditor( props ) {
	const [ editorState, setEditorState ] = React.useState( () =>
		EditorState.createWithContent( convertFromHTML( props.text ) )
	);
	const editor = React.useRef( null );

	const updateText = ( state ) => {
		setEditorState( state );
		props.onChange(
			props.data,
			convertToHTML( state.getCurrentContent() )
		);
	};

	function focusEditor() {
		editor.current.focus();
	}

	const handleKeyCommand = ( command, state ) => {
		const newState = RichUtils.handleKeyCommand( state, command );
		if ( newState ) {
			updateText( newState );
			return true;
		}
		return false;
	};

	const mapKeyToEditorCommand = ( e ) => {
		if ( e.keyCode === 9 /* TAB */ ) {
			const newEditorState = RichUtils.onTab(
				e,
				editorState,
				4 /* maxDepth */
			);
			if ( newEditorState !== editorState ) {
				updateText( newEditorState );
			}
			return;
		}
		return getDefaultKeyBinding( e );
	};

	const toggleBlockType = ( blockType ) => {
		updateText( RichUtils.toggleBlockType( editorState, blockType ) );
	};

	const toggleInlineStyle = ( inlineStyle ) => {
		updateText( RichUtils.toggleInlineStyle( editorState, inlineStyle ) );
	};

	// If the user changes block type before entering any text, we can
	// either style the placeholder or hide it. Let's just hide it now.
	let className = 'RichEditor-editor';
	var contentState = editorState.getCurrentContent();
	if ( ! contentState.hasText() ) {
		if ( contentState.getBlockMap().first().getType() !== 'unstyled' ) {
			className += ' RichEditor-hidePlaceholder';
		}
	}
	const handleReturn = ( e ) => {
		if ( 13 === e.keyCode ) {
			updateText( RichUtils.insertSoftNewline( editorState ) );
			return true;
		}
		return false;
	};
	return (
		<div className="RichEditor-root">
			<BlockStyleControls
				editorState={ editorState }
				onToggle={ toggleBlockType }
			/>
			<InlineStyleControls
				editorState={ editorState }
				onToggle={ toggleInlineStyle }
			/>
			<div className={ className } onClick={ focusEditor }>
				<Editor
					handleReturn={ handleReturn }
					blockStyleFn={ getBlockStyle }
					customStyleMap={ styleMap }
					editorState={ editorState }
					handleKeyCommand={ handleKeyCommand }
					keyBindingFn={ mapKeyToEditorCommand }
					onChange={ updateText }
					placeholder="Tell a story..."
					ref={ editor }
					spellCheck={ true }
				/>
			</div>
		</div>
	);
}
const styleMap = {
	CODE: {
		backgroundColor: 'rgba(0, 0, 0, 0.05)',
		fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
		fontSize: 16,
		padding: 2,
	},
};

function getBlockStyle( block ) {
	switch ( block.getType() ) {
		case 'blockquote':
			return 'RichEditor-blockquote';
		default:
			return null;
	}
}

const BLOCK_TYPES = [
	{ label: 'H1', style: 'header-one' },
	{ label: 'H2', style: 'header-two' },
	{ label: 'H3', style: 'header-three' },
	{ label: 'H4', style: 'header-four' },
	{ label: 'H5', style: 'header-five' },
	{ label: 'H6', style: 'header-six' },
	{ label: 'Blockquote', style: 'blockquote' },
	{ label: 'UL', style: 'unordered-list-item' },
	{ label: 'OL', style: 'ordered-list-item' },
	{ label: 'Code Block', style: 'code-block' },
];

const BlockStyleControls = ( props ) => {
	const { editorState } = props;
	const selection = editorState.getSelection();
	const blockType = editorState
		.getCurrentContent()
		.getBlockForKey( selection.getStartKey() )
		.getType();

	return (
		<div className="RichEditor-controls">
			{ BLOCK_TYPES.map( ( type ) => (
				<StyleButton
					key={ type.label }
					active={ type.style === blockType }
					label={ type.label }
					onToggle={ props.onToggle }
					style={ type.style }
				/>
			) ) }
		</div>
	);
};

var INLINE_STYLES = [
	{ label: 'Bold', style: 'BOLD' },
	{ label: 'Italic', style: 'ITALIC' },
	{ label: 'Underline', style: 'UNDERLINE' },
	{ label: 'Monospace', style: 'CODE' },
];

const InlineStyleControls = ( props ) => {
	const currentStyle = props.editorState.getCurrentInlineStyle();

	return (
		<div className="RichEditor-controls">
			{ INLINE_STYLES.map( ( type ) => (
				<StyleButton
					key={ type.label }
					active={ currentStyle.has( type.style ) }
					label={ type.label }
					onToggle={ props.onToggle }
					style={ type.style }
				/>
			) ) }
		</div>
	);
};

function StyleButton( props ) {
	const onToggle = ( e ) => {
		e.preventDefault();
		props.onToggle( props.style );
	};
	let className = 'RichEditor-styleButton';
	if ( props.active ) {
		className += ' RichEditor-activeButton';
	}

	return (
		<span className={ className } onMouseDown={ onToggle }>
			{ props.label }
		</span>
	);
}
