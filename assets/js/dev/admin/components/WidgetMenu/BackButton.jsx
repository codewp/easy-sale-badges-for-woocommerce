import React, { useContext } from 'react';
import { DropContext } from './context/DropContext';
import { ArrowLeftIcon } from '@heroicons/react/solid';

const BackButton = ( props ) => {
	const [ activeMenu, setActiveMenu ] = useContext( DropContext );

	return (
		<div className="asnp-flex asnp-mb-6 asnp-h-8 asnp-w-full asnp-items-center ">
			<button
				className="asnp-h-8 asnp-w-10  asnp-bg-gray-200 asnp-cursor-pointer asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600 group-hover:asnp-from-green-400 group-hover:asnp-to-blue-600 hover:asnp-text-white"
				onClick={ () =>
					props.goToMenu && setActiveMenu( props.goToMenu )
				}
			>
				<span className="asnp-w-full asnp-relative asnp-px-1 asnp-py-1 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
					<ArrowLeftIcon className="asnp-h-5 asnp-w-5 " />
				</span>
			</button>
			<div className="asnp-w-full asnp-flex asnp-justify-start asnp-pb-2 asnp-ml-2">
				<h1>{ props.children }</h1>
			</div>
		</div>
	);
};

export default BackButton;
