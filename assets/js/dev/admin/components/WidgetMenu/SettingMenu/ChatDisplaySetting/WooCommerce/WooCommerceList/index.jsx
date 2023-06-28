import React from 'react';
import { __ } from '@wordpress/i18n';
import ItemSelect from '../../../../../ItemSelect';
import { XIcon } from '@heroicons/react/solid';

const types = {
	products: __( 'Products', 'asnp-easy-whatsapp' ),
	excluded_products: __( 'Excluded Products', 'asnp-easy-whatsapp' ),
	categories: __( 'Categories', 'asnp-easy-whatsapp' ),
	excluded_categories: __( 'Excluded Categories', 'asnp-easy-whatsapp' ),
	tags: __( 'Tags', 'asnp-easy-whatsapp' ),
	excluded_tags: __( 'Excluded Tags', 'asnp-easy-whatsapp' ),
};

const WooCommerceList = ( { item, onDelete, onChange } ) => {
	return (
		<div>
			<div className="asnp-flex asnp-relative">
				<span className="asnp-ml-2 asnp-w-[18rem] asnp-text-justify">
					{ types[ item.type ] }
				</span>
				<div className="asnp-flex">
					<div className="asnp-right-1 asnp-top-1 asnp-absolute">
						<div
							className="asnp-cursor-pointer"
							onClick={ onDelete }
							title={ __( 'Delete', 'asnp-easy-whatsapp' ) }
						>
							<XIcon className="asnp-h-4 asnp-w-4" color="red" />
						</div>
					</div>
				</div>
			</div>
			<div className="asnp-w-[20rem] asnp-ml-2 asnp-my-2 asnp-itemselect">
				<ItemSelect
					items={ item.items }
					type={ item.type }
					onChange={ onChange }
				/>
			</div>
		</div>
	);
};

export default WooCommerceList;
