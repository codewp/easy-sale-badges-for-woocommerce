import React, { Fragment, useState } from 'react';
import { __ } from '@wordpress/i18n';
import ExcludedPages from './ExcludedPages/index';
import SpecificPages from './SpecificPages/index';

const Pages = ( props ) => {
	return (
		<div className="asnp-mt-2 asnp-flex asnp-flex-col">
			<label className="asnp-inline-flex asnp-items-center">
				<input
					type="radio"
					className="asnp-form-radio"
					name="pages"
					value="allPages"
					checked={ 'allPages' == props.pagesType }
					onChange={ ( e ) => {
						props.onChange( 'pagesType', e.target.value );
					} }
				/>
				<span className="asnp-ml-2">
					{ __( 'All pages', 'asnp-easy-whatsapp' ) }
				</span>
			</label>
			<label className="asnp-inline-flex asnp-items-center asnp-mt-1">
				<input
					type="radio"
					className="asnp-form-radio"
					name="pages"
					value="excludedPages"
					checked={ 'excludedPages' == props.pagesType }
					onChange={ ( e ) => {
						props.onChange( 'pagesType', e.target.value );
					} }
				/>
				<span className="asnp-ml-2">
					{ __( 'Excluded Pages', 'asnp-easy-whatsapp' ) }
				</span>
			</label>
			<label className="asnp-inline-flex asnp-items-center asnp-mt-1">
				<input
					type="radio"
					className="asnp-form-radio"
					name="pages"
					value="specificPages"
					checked={ 'specificPages' == props.pagesType }
					onChange={ ( e ) => {
						props.onChange( 'pagesType', e.target.value );
					} }
				/>
				<span className="asnp-ml-2">
					{ __( 'Specific Pages', 'asnp-easy-whatsapp' ) }
				</span>
			</label>
			<label className="asnp-inline-flex asnp-items-center asnp-mt-1">
				<input
					type="radio"
					className="asnp-form-radio"
					name="pages"
					value="allWoocommerceProducts"
					checked={ 'allWoocommerceProducts' == props.pagesType }
					onChange={ ( e ) => {
						props.onChange( 'pagesType', e.target.value );
					} }
				/>
				<span className="asnp-ml-2">
					{ __( 'All WooCommerce Products', 'asnp-easy-whatsapp' ) }
				</span>
			</label>
			<label className="asnp-inline-flex asnp-items-center asnp-mt-1">
				<input
					type="radio"
					className="asnp-form-radio"
					name="pages"
					value="woocommerceProducts"
					checked={ 'woocommerceProducts' == props.pagesType }
					onChange={ ( e ) => {
						props.onChange( 'pagesType', e.target.value );
					} }
				/>
				<span className="asnp-ml-2">
					{ __(
						'Specific WooCommerce Products',
						'asnp-easy-whatsapp'
					) }
				</span>
			</label>
			{ 'excludedPages' === props.pagesType && (
				<ExcludedPages
					addExludedPageUrl={ props.addExludedPageUrl }
					deleteExludedPageUrl={ props.deleteExludedPageUrl }
					excludedPagesUrl={ props.excludedPagesUrl }
					updateExcludedPagesUrl={ props.updateExcludedPagesUrl }
				/>
			) }
			{ 'specificPages' === props.pagesType && (
				<SpecificPages
					pagesUrl={ props.pagesUrl }
					addPagesUrl={  props.addPagesUrl }
					deletePageUrl={  props.deletePageUrl }
					updatePagesUrl={  props.updatePagesUrl }
				/>
			) }
		</div>
	);
};

export default Pages;
