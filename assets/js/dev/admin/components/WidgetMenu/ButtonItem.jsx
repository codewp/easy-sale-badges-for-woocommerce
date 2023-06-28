import React, { useContext } from 'react';
import { DropContext } from './context/DropContext';

const ButtonItem = ( props ) => {
	const [ activeMenu, setActiveMenu ] = useContext( DropContext );

	return (
		<button
			className="asnp-h-14 asnp-w-full asnp-my-2  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600 group-hover:asnp-from-green-400 group-hover:asnp-to-blue-600 hover:asnp-text-white  "
			onClick={ () => props.goToMenu && setActiveMenu( props.goToMenu ) }
		>
			<span className="asnp-w-full asnp-relative asnp-px-5 asnp-py-4 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
				<span className=" asnp-float-left">{ props.leftIcon }</span>
				{ props.children }
				<span className="asnp-float-right asnp-items-center ">
					{ props.rightIcon }
				</span>
			</span>
		</button>
	);
};

export default ButtonItem;
