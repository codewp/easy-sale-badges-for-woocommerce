import { __ } from '@wordpress/i18n';

export const defaultSettings = {
	showLabel: 1,
	singlePosition: 'before_single_item_images',
	loopPosition: 'woocommerce_product_get_image',
	singleCustomHooks: '',
	loopCustomHooks: '',
	showBadgeProductPage: '',
	singleContainer: '',
	timerPosition: 'outOfImage',
};
export const PLUGIN_URL = saleBadgeData.pluginUrl;
export const IMAGES_URL = `${ PLUGIN_URL }assets/images/`;

let serverTime, initialLocalTime;

export const initTimes = () => {
	serverTime = new Date( saleBadgeData.now );
	initialLocalTime = Date.now();
};

export const getNow = () => {
	return new Date( serverTime.getTime() + ( Date.now() - initialLocalTime ) );
};

export const getRemainingTime = ( toDate ) => {
	const currentServerTime = getNow();

	return toDate.getTime() - currentServerTime.getTime();
};

export const customColor = [
	'rgb(255, 148, 148)',
	'rgb(177, 178, 255)',
	'rgb(170, 196, 255)',
	'rgb(96, 150, 180)',
	'rgb(129, 91, 91)',
	'rgb(255, 255, 255)',
	'rgb(96, 153, 102)',
	'rgb(64, 81, 59)',
	'rgb(133, 88, 111)',
	'rgb(142, 195, 176)',
	'rgb(32, 82, 149)',
	'rgb(20, 66, 114)',
	'rgb(177, 178, 255)',
	'rgb(255, 135, 135)',
	'rgb(188, 226, 158)',
	'rgb(100, 92, 187)',
	'rgb(183, 196, 207)',
	'rgb(229, 186, 115)',
];

export const SVGADVANCED2 = ( b ) => {
	return (
		<svg
			className="asnp-esb-svg1"
			width="135"
			height="142"
			viewBox="0 0 135 142"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M67.5 141.44C58.3874 141.44 49.548 139.57 41.2232 135.881C33.1853 132.317 25.9671 127.222 19.7691 120.728C13.571 114.234 8.70276 106.672 5.30544 98.2503C1.78517 89.5284 0 80.2673 0 70.72C0 61.1726 1.78517 51.9116 5.30544 43.1897C8.70731 34.7683 13.571 27.2059 19.7691 20.7121C25.9671 14.2184 33.1853 9.11792 41.2232 5.55855C49.548 1.87034 58.3874 0 67.5 0C76.6126 0 85.452 1.87034 93.7768 5.55855C101.815 9.1227 109.033 14.2184 115.231 20.7121C121.429 27.2059 126.297 34.7683 129.695 43.1897C133.215 51.9116 135 61.1726 135 70.72C135 80.2673 133.215 89.5284 129.695 98.2503C126.293 106.672 121.429 114.234 115.231 120.728C109.033 127.222 101.815 132.322 93.7768 135.881C85.452 139.57 76.6126 141.44 67.5 141.44Z"
				fill={ `${ b }` }
			/>
			<path
				d="M68.347 9.53781C69.0028 10.1151 69.0848 11.1362 68.5383 11.8233C67.9873 12.5103 67.0127 12.5962 66.3569 12.0236C65.7011 11.4463 65.6192 10.4253 66.1656 9.7382C66.7167 9.05113 67.6912 8.96049 68.347 9.53781Z"
				fill="white"
			/>
			<path
				d="M68.347 129.412C69.0028 129.989 69.0848 131.01 68.5383 131.697C67.9873 132.384 67.0127 132.47 66.3569 131.897C65.7011 131.32 65.6192 130.299 66.1656 129.612C66.7167 128.925 67.6912 128.839 68.347 129.412Z"
				fill="white"
			/>
			<path
				d="M11.1392 67.8524C11.7949 68.4298 11.8769 69.4508 11.3304 70.1379C10.7794 70.825 9.80483 70.9108 9.14904 70.3383C8.49326 69.761 8.4113 68.7399 8.95778 68.0529C9.50427 67.3658 10.4834 67.2751 11.1392 67.8524Z"
				fill="white"
			/>
			<path
				d="M12.6875 56.8976C13.3433 57.4749 13.4253 58.496 12.8788 59.183C12.3278 59.8701 11.3532 59.956 10.6974 59.3834C10.0416 58.8061 9.95968 57.785 10.5062 57.098C11.0527 56.4109 12.0318 56.3203 12.6875 56.8976Z"
				fill="white"
			/>
			<path
				d="M13.2022 82.2808C13.3843 83.154 12.856 84.0224 12.0226 84.2132C11.1893 84.4041 10.3604 83.8506 10.1783 82.9774C9.9961 82.1043 10.5244 81.2359 11.3578 81.0451C12.1957 80.8542 13.02 81.4077 13.2022 82.2808Z"
				fill="white"
			/>
			<path
				d="M17.9976 96.0794C18.1797 96.9526 17.6515 97.8209 16.8181 98.0118C15.9847 98.2026 15.1558 97.6492 14.9737 96.776C14.7915 95.9029 15.3198 95.0345 16.1532 94.8436C16.9911 94.648 17.8154 95.2015 17.9976 96.0794Z"
				fill="white"
			/>
			<path
				d="M26.2313 109.969C26.4134 110.842 25.8852 111.71 25.0518 111.901C24.2184 112.092 23.3895 111.538 23.2074 110.665C23.0252 109.792 23.5535 108.924 24.3869 108.733C25.2203 108.537 26.0491 109.091 26.2313 109.969Z"
				fill="white"
			/>
			<path
				d="M38.0399 120.227C38.2221 121.1 37.6938 121.968 36.8604 122.159C36.027 122.35 35.1982 121.797 35.016 120.923C34.8338 120.05 35.3621 119.182 36.1955 118.991C37.0335 118.796 37.8577 119.349 38.0399 120.227Z"
				fill="white"
			/>
			<path
				d="M52.3123 127.274C52.4944 128.147 51.9661 129.016 51.1328 129.206C50.2994 129.397 49.4705 128.844 49.2884 127.971C49.1062 127.098 49.6345 126.229 50.4679 126.038C51.3013 125.847 52.1301 126.401 52.3123 127.274Z"
				fill="white"
			/>
			<path
				d="M15.9346 45.3129C16.5904 45.8902 16.6723 46.9113 16.1258 47.5984C15.5748 48.2854 14.6002 48.3713 13.9445 47.7987C13.2887 47.2214 13.2067 46.2004 13.7532 45.5133C14.2997 44.8262 15.2788 44.7356 15.9346 45.3129Z"
				fill="white"
			/>
			<path
				d="M21.5861 34.8399C22.2419 35.4173 22.3239 36.4383 21.7774 37.1254C21.2264 37.8125 20.2518 37.8983 19.596 37.3258C18.9402 36.7485 18.8583 35.7274 19.4048 35.0403C19.9512 34.3485 20.9303 34.2626 21.5861 34.8399Z"
				fill="white"
			/>
			<path
				d="M28.4218 26.3089C29.0775 26.8862 29.1595 27.9072 28.613 28.5943C28.062 29.2814 27.0874 29.3673 26.4316 28.7947C25.7759 28.2174 25.6939 27.1963 26.2404 26.5093C26.7914 25.8222 27.7705 25.7315 28.4218 26.3089Z"
				fill="white"
			/>
			<path
				d="M37.5253 18.3885C38.1811 18.9659 38.2631 19.9869 37.7166 20.674C37.1655 21.3611 36.1909 21.447 35.5352 20.8744C34.8794 20.2971 34.7974 19.276 35.3439 18.5889C35.8904 17.9019 36.8695 17.8112 37.5253 18.3885Z"
				fill="white"
			/>
			<path
				d="M47.5897 13.3644C48.2455 13.9417 48.3275 14.9628 47.781 15.6498C47.23 16.3369 46.2554 16.4228 45.5996 15.8502C44.9438 15.2729 44.8619 14.2519 45.4083 13.5648C45.9594 12.8777 46.9385 12.7918 47.5897 13.3644Z"
				fill="white"
			/>
			<path
				d="M57.9684 10.473C58.6242 11.0503 58.7061 12.0714 58.1596 12.7584C57.6086 13.4455 56.634 13.5314 55.9783 12.9588C55.3225 12.3815 55.2405 11.3605 55.787 10.6734C56.338 9.98632 57.3126 9.89566 57.9684 10.473Z"
				fill="white"
			/>
			<path
				d="M123.865 67.8524C123.21 68.4298 123.128 69.4508 123.674 70.1379C124.225 70.825 125.2 70.9108 125.855 70.3383C126.511 69.761 126.593 68.7399 126.047 68.0529C125.496 67.3658 124.517 67.2751 123.865 67.8524Z"
				fill="white"
			/>
			<path
				d="M122.317 56.8976C121.661 57.4749 121.579 58.496 122.126 59.183C122.677 59.8701 123.651 59.956 124.307 59.3834C124.963 58.8061 125.045 57.785 124.498 57.098C123.947 56.4109 122.968 56.3203 122.317 56.8976Z"
				fill="white"
			/>
			<path
				d="M121.798 82.2808C121.616 83.154 122.144 84.0224 122.977 84.2132C123.811 84.4041 124.64 83.8506 124.822 82.9774C125.004 82.1043 124.476 81.2359 123.642 81.0451C122.809 80.8542 121.98 81.4077 121.798 82.2808Z"
				fill="white"
			/>
			<path
				d="M117.002 96.0794C116.82 96.9526 117.349 97.8209 118.182 98.0118C119.015 98.2026 119.844 97.6492 120.026 96.776C120.208 95.9029 119.68 95.0345 118.847 94.8436C118.009 94.648 117.185 95.2015 117.002 96.0794Z"
				fill="white"
			/>
			<path
				d="M108.769 109.969C108.587 110.842 109.115 111.71 109.948 111.901C110.782 112.092 111.61 111.538 111.793 110.665C111.975 109.792 111.446 108.924 110.613 108.733C109.78 108.537 108.951 109.091 108.769 109.969Z"
				fill="white"
			/>
			<path
				d="M96.9601 120.227C96.7779 121.1 97.3062 121.968 98.1396 122.159C98.973 122.35 99.8018 121.797 99.984 120.923C100.166 120.05 99.6378 119.182 98.8044 118.991C97.9711 118.8 97.1422 119.349 96.9601 120.227Z"
				fill="white"
			/>
			<path
				d="M82.6877 127.274C82.5056 128.147 83.0338 129.016 83.8672 129.206C84.7006 129.397 85.5294 128.844 85.7116 127.971C85.8938 127.098 85.3655 126.229 84.5321 126.038C83.6987 125.847 82.8699 126.401 82.6877 127.274Z"
				fill="white"
			/>
			<path
				d="M119.065 45.3129C118.41 45.8902 118.328 46.9113 118.874 47.5984C119.425 48.2854 120.4 48.3713 121.056 47.7987C121.711 47.2214 121.793 46.2004 121.247 45.5133C120.7 44.8262 119.721 44.7356 119.065 45.3129Z"
				fill="white"
			/>
			<path
				d="M113.418 34.8399C112.763 35.4173 112.681 36.4383 113.227 37.1254C113.778 37.8125 114.753 37.8983 115.408 37.3258C116.064 36.7485 116.146 35.7274 115.6 35.0403C115.049 34.3485 114.07 34.2626 113.418 34.8399Z"
				fill="white"
			/>
			<path
				d="M106.578 26.3089C105.922 26.8862 105.84 27.9073 106.387 28.5943C106.938 29.2814 107.913 29.3673 108.568 28.7947C109.224 28.2174 109.306 27.1964 108.76 26.5093C108.209 25.8222 107.234 25.7316 106.578 26.3089Z"
				fill="white"
			/>
			<path
				d="M97.4792 18.3885C96.8235 18.9659 96.7415 19.9869 97.288 20.674C97.839 21.3611 98.8136 21.447 99.4693 20.8744C100.125 20.2971 100.207 19.276 99.6606 18.5889C99.1096 17.9019 98.1305 17.8112 97.4792 18.3885Z"
				fill="white"
			/>
			<path
				d="M87.4103 13.3644C86.7545 13.9417 86.6725 14.9628 87.219 15.6498C87.77 16.3369 88.7446 16.4228 89.4004 15.8502C90.0562 15.2729 90.1381 14.2519 89.5917 13.5648C89.0406 12.8777 88.0661 12.7918 87.4103 13.3644Z"
				fill="white"
			/>
			<path
				d="M77.0316 10.473C76.3758 11.0503 76.2938 12.0714 76.8403 12.7584C77.3914 13.4455 78.3659 13.5314 79.0217 12.9588C79.6775 12.3815 79.7595 11.3605 79.213 10.6734C78.662 9.98632 77.6874 9.89566 77.0316 10.473Z"
				fill="white"
			/>
		</svg>
	);
};

export const SVGADVANCED3 = ( m, s ) => {
	return (
		<svg
			className="asnp-esb-svg2"
			width="201"
			height="201"
			viewBox="0 0 201 201"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12.2796 86.187C11.5283 86.187 10.8168 85.75 10.3798 85.0143L1.80153 70.596C1.29225 69.7392 1.22724 68.6271 1.62816 67.6967C2.02908 66.762 2.8237 66.1822 3.70138 66.1822H196.544C197.421 66.1822 198.216 66.762 198.617 67.6967C199.018 68.6314 198.953 69.7435 198.444 70.596L189.865 85.0143C189.428 85.75 188.717 86.187 187.965 86.187H12.2796Z"
				fill={ `${ s }` }
			/>
			<path
				d="M199.722 67.013C199.105 65.5807 197.887 64.6893 196.544 64.6893H130.15H58.6418H3.70137C2.35775 64.6893 1.13693 65.5807 0.522914 67.013C-0.0947194 68.4453 0.0100218 70.1502 0.79019 71.4614L9.36842 85.8797C10.0366 87.0048 11.1274 87.6755 12.2796 87.6755H58.6454H130.154H187.969C189.121 87.6755 190.212 87.0048 190.88 85.8797L199.455 71.4614C200.239 70.1502 200.34 68.4453 199.722 67.013ZM197.429 69.7305L188.85 84.1488C188.648 84.4907 188.316 84.6941 187.965 84.6941H130.15H58.6418H12.2796C11.9293 84.6941 11.597 84.4907 11.3947 84.1488L2.81645 69.7305C2.30357 68.8694 2.81646 67.6707 3.70137 67.6707H58.6418H130.15H196.544C197.429 67.6707 197.942 68.8694 197.429 69.7305Z"
				fill="#414042"
			/>
			<path
				d="M187.969 85.7585H12.2796C11.6403 85.7585 11.0407 85.3864 10.6687 84.7633L2.09048 70.3449C1.66067 69.618 1.60287 68.679 1.94239 67.8871C2.28191 67.0952 2.95733 66.6062 3.69776 66.6062H196.54C197.284 66.6062 197.956 67.0995 198.295 67.8871C198.635 68.679 198.581 69.6223 198.147 70.3449L189.569 84.7633C189.208 85.3864 188.605 85.7585 187.969 85.7585ZM3.70138 68.7352C3.62192 68.7352 3.56052 68.7785 3.5244 68.865C3.48828 68.9516 3.49189 69.0338 3.53884 69.1117L12.1171 83.53C12.1532 83.5906 12.2146 83.6296 12.2796 83.6296H187.969C188.034 83.6296 188.092 83.5906 188.132 83.53L196.71 69.1117C196.757 69.0338 196.76 68.9516 196.724 68.865C196.688 68.7785 196.627 68.7352 196.547 68.7352H3.70138Z"
				fill="white"
			/>
			<path
				d="M26.5321 110.584C25.7808 110.584 25.0692 110.147 24.6322 109.411L16.054 94.9928C15.5447 94.136 15.4797 93.0239 15.8806 92.0936C16.2815 91.1589 17.0761 90.579 17.9538 90.579H182.291C183.169 90.579 183.963 91.1589 184.364 92.0936C184.765 93.0283 184.7 94.1404 184.191 94.9928L175.613 109.411C175.176 110.147 174.468 110.584 173.713 110.584H26.5321Z"
				fill={ `${ s }` }
			/>
			<path
				d="M185.47 91.4098C184.852 89.9775 183.635 89.0861 182.291 89.0861H130.15H58.6419H17.9539C16.6103 89.0861 15.3895 89.9775 14.7755 91.4098C14.1578 92.8422 14.2626 94.5471 15.0428 95.8583L23.621 110.277C24.2892 111.402 25.38 112.072 26.5322 112.072H58.6455H130.154H173.72C174.872 112.072 175.963 111.402 176.631 110.277L185.21 95.8583C185.986 94.5471 186.087 92.8422 185.47 91.4098ZM183.176 94.1317L174.598 108.55C174.396 108.892 174.063 109.095 173.713 109.095H130.15H58.6419H26.5286C26.1782 109.095 25.8459 108.892 25.6436 108.55L17.0654 94.1317C16.5525 93.2706 17.0654 92.0719 17.9503 92.0719H58.6383H130.146H182.288C183.176 92.0719 183.689 93.2662 183.176 94.1317Z"
				fill="#414042"
			/>
			<path
				d="M173.717 110.16H26.5321C25.8928 110.16 25.2932 109.788 24.9212 109.165L16.343 94.7462C15.9132 94.0192 15.8554 93.0802 16.1949 92.2883C16.5344 91.4964 17.2098 91.0074 17.9503 91.0074H182.288C183.032 91.0074 183.703 91.5008 184.043 92.2883C184.382 93.0802 184.328 94.0235 183.895 94.7462L175.317 109.165C174.955 109.788 174.352 110.16 173.717 110.16ZM17.9539 93.1364C17.8744 93.1364 17.813 93.1797 17.7769 93.2663C17.7408 93.3528 17.7444 93.435 17.7914 93.5129L26.3696 107.931C26.4057 107.996 26.4671 108.031 26.5321 108.031H173.717C173.782 108.031 173.839 107.992 173.879 107.931L182.457 93.5129C182.504 93.435 182.508 93.3528 182.472 93.2663C182.436 93.1797 182.374 93.1364 182.295 93.1364H17.9539Z"
				fill="white"
			/>
			<path
				d="M41.5395 134.985C40.7882 134.985 40.0767 134.548 39.6397 133.812L31.0614 119.394C30.5521 118.537 30.4871 117.43 30.888 116.495C31.289 115.56 32.0836 114.98 32.9613 114.98H167.284C168.161 114.98 168.956 115.56 169.357 116.495C169.758 117.43 169.693 118.542 169.184 119.394L160.605 133.812C160.168 134.548 159.46 134.985 158.706 134.985H41.5395Z"
				fill={ `${ s }` }
			/>
			<path
				d="M170.462 115.811C169.845 114.379 168.627 113.487 167.284 113.487H130.15H58.6418H32.9613C31.6176 113.487 30.3968 114.379 29.7828 115.811C29.1652 117.243 29.2699 118.948 30.0501 120.26L38.6283 134.678C39.2965 135.803 40.3873 136.474 41.5395 136.474H58.6454H130.154H158.713C159.865 136.474 160.956 135.803 161.624 134.678L170.199 120.26C170.979 118.948 171.08 117.243 170.462 115.811ZM168.169 118.529L159.59 132.947C159.388 133.289 159.056 133.492 158.706 133.492H130.146H58.6418H41.5359C41.1855 133.492 40.8532 133.289 40.651 132.947L32.0727 118.529C31.5598 117.668 32.0727 116.469 32.9576 116.469H58.6382H130.146H167.28C168.169 116.469 168.682 117.668 168.169 118.529Z"
				fill="#414042"
			/>
			<path
				d="M158.709 134.557H41.5395C40.9002 134.557 40.3006 134.185 39.9286 133.562L31.3504 119.143C30.9205 118.416 30.8628 117.477 31.2023 116.685C31.5418 115.893 32.2172 115.4 32.9577 115.4H167.28C168.024 115.4 168.696 115.893 169.036 116.681C169.375 117.473 169.321 118.416 168.887 119.139L160.309 133.557C159.948 134.185 159.345 134.557 158.709 134.557ZM32.9613 117.533C32.8818 117.533 32.8204 117.577 32.7843 117.663C32.7482 117.75 32.7518 117.832 32.7987 117.91L41.377 132.328C41.4131 132.389 41.4745 132.428 41.5395 132.428H158.709C158.774 132.428 158.832 132.389 158.872 132.328L167.45 117.91C167.497 117.832 167.5 117.75 167.464 117.663C167.428 117.577 167.367 117.533 167.287 117.533H32.9613Z"
				fill="white"
			/>
			<path
				d="M141.856 150.582C164.905 122.968 164.905 78.1964 141.856 50.5821C118.807 22.9679 81.4364 22.9679 58.3872 50.5822C35.3379 78.1964 35.3379 122.968 58.3872 150.582C81.4364 178.196 118.807 178.196 141.856 150.582Z"
				fill={ `${ m }` }
			/>
			<path
				d="M155.65 72.4783C152.616 63.88 148.271 56.1603 142.737 49.5309C137.204 42.9016 130.76 37.696 123.584 34.0611C116.154 30.2964 108.258 28.3881 100.124 28.3881C91.9904 28.3881 84.0984 30.2964 76.6651 34.0611C69.4883 37.696 63.0447 42.9016 57.5113 49.5309C51.9779 56.1603 47.6328 63.88 44.5988 72.4783C41.4564 81.3794 39.8636 90.8387 39.8636 100.584C39.8636 110.329 41.4564 119.784 44.5988 128.689C47.6328 137.287 51.9779 145.007 57.5113 151.636C63.0447 158.266 69.4883 163.471 76.6651 167.106C84.0948 170.871 91.9904 172.779 100.124 172.779C108.258 172.779 116.15 170.871 123.584 167.106C130.76 163.471 137.204 158.266 142.737 151.636C148.271 145.007 152.616 137.287 155.65 128.689C158.792 119.788 160.385 110.329 160.385 100.584C160.389 90.8387 158.796 81.3794 155.65 72.4783ZM100.124 169.802C68.2169 169.802 42.3486 138.81 42.3486 100.584C42.3486 62.3569 68.2169 31.3652 100.124 31.3652C132.032 31.3652 157.9 62.3569 157.9 100.584C157.9 138.81 132.032 169.802 100.124 169.802Z"
				fill="#414042"
			/>
			<path
				d="M100.124 170.867C67.7763 170.867 41.4601 139.338 41.4601 100.584C41.4601 61.8289 67.7763 30.3007 100.124 30.3007C132.472 30.3007 158.789 61.8289 158.789 100.584C158.789 139.338 132.472 170.867 100.124 170.867ZM100.124 32.4297C68.7551 32.4297 43.2371 63.0016 43.2371 100.584C43.2371 138.166 68.7551 168.738 100.124 168.738C131.494 168.738 157.012 138.166 157.012 100.584C157.012 63.0016 131.49 32.4297 100.124 32.4297Z"
				fill="white"
			/>
		</svg>
	);
};
export const SVGADVANCED4 = ( m, s ) => {
	return (
		<svg
			className="asnp-esb-svg3"
			width="150"
			height="200"
			viewBox="0 0 250 200"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M242.24 136.34C203.03 130.76 163.52 127.97 124.02 127.97C84.52 127.97 45.01 130.76 5.79999 136.34C9.19999 128.92 12.72 121.52 16.34 114.14C11 107.89 5.55 101.7 0 95.55C41.13 89.7 82.58 86.77 124.02 86.77C165.47 86.77 206.91 89.7 248.05 95.55C242.5 101.7 237.05 107.89 231.7 114.14C235.32 121.52 238.84 128.92 242.24 136.34Z"
				fill={ `${ s }` }
			/>
			<path
				d="M221.02 118.97C156.57 111.6 91.48 111.6 27.02 118.97C34.24 123.02 41.35 127.16 48.36 131.39C98.7 126.83 149.35 126.83 199.69 131.39C206.69 127.16 213.8 123.02 221.02 118.97Z"
				fill={ `${ s }` }
			/>
			<path
				d="M124.02 185.67C116.14 185.67 109.71 175.37 102.43 173.42C94.91 171.4 84.2 177.03 77.61 173.22C70.93 169.35 70.49 157.22 65.07 151.79C59.64 146.36 47.52 145.92 43.65 139.24C39.83 132.65 45.46 121.94 43.44 114.42C41.49 107.14 31.19 100.72 31.19 92.83C31.19 84.95 41.49 78.52 43.44 71.24C45.46 63.72 39.83 53.01 43.65 46.42C47.52 39.74 59.65 39.3 65.07 33.88C70.49 28.45 70.93 16.33 77.61 12.45C84.2 8.63 94.91 14.26 102.43 12.25C109.71 10.3 116.13 0 124.02 0C131.91 0 138.33 10.3 145.61 12.25C153.13 14.27 163.84 8.64 170.43 12.46C177.11 16.33 177.55 28.46 182.98 33.89C188.41 39.32 200.53 39.75 204.4 46.44C208.22 53.03 202.59 63.74 204.61 71.26C206.56 78.54 216.86 84.96 216.86 92.85C216.86 100.74 206.56 107.16 204.61 114.44C202.59 121.96 208.22 132.67 204.4 139.26C200.53 145.94 188.4 146.38 182.97 151.81C177.55 157.24 177.11 169.36 170.42 173.23C163.83 177.05 153.12 171.42 145.6 173.43C138.33 175.37 131.9 185.67 124.02 185.67Z"
				fill={ `${ m }` }
			/>
			<path
				d="M35.24 92.84C35.24 85.3 45.23 79.18 47.09 72.22C49.01 65.03 43.47 54.74 47.12 48.44C50.82 42.05 62.53 41.73 67.72 36.54C72.9 31.35 73.23 19.64 79.62 15.94C85.92 12.3 96.21 17.83 103.4 15.91C110.35 14.05 116.48 4.06 124.01 4.06C131.55 4.06 137.67 14.06 144.63 15.91C151.83 17.83 162.12 12.29 168.42 15.94C174.81 19.64 175.13 31.35 180.32 36.54C185.5 41.72 197.22 42.05 200.92 48.44C204.56 54.74 199.03 65.03 200.95 72.22C202.81 79.17 212.8 85.3 212.8 92.84C212.8 100.38 202.8 106.5 200.95 113.46C199.03 120.66 204.57 130.94 200.92 137.24C197.22 143.63 185.51 143.95 180.32 149.14C175.14 154.33 174.81 166.04 168.42 169.74C162.12 173.38 151.83 167.84 144.64 169.77C137.69 171.63 131.56 181.62 124.02 181.62C116.48 181.62 110.36 171.62 103.41 169.77C96.21 167.85 85.92 173.38 79.62 169.74C73.23 166.04 72.91 154.33 67.72 149.14C62.53 143.95 50.82 143.63 47.12 137.24C43.48 130.94 49.02 120.65 47.09 113.46C45.23 106.5 35.24 100.38 35.24 92.84Z"
				fill={ `${ m }` }
			/>
			<path
				d="M49.6 92.84C49.6 51.74 82.92 18.43 124.01 18.43C165.11 18.43 198.43 51.75 198.43 92.84C198.43 133.94 165.11 167.26 124.01 167.26C82.92 167.25 49.6 133.94 49.6 92.84Z"
				fill="white"
			/>
			<path
				d="M55.85 92.84C55.85 55.19 86.37 24.67 124.02 24.67C161.68 24.67 192.19 55.19 192.19 92.84C192.19 130.49 161.68 161.01 124.02 161.01C86.37 161.01 55.85 130.49 55.85 92.84Z"
				fill={ `${ m }` }
			/>
			<path
				d="M221.02 118.97C156.57 111.6 91.48 111.6 27.02 118.97C25.46 105.33 23.9 91.68 22.34 78.04C89.91 70.31 158.13 70.31 225.71 78.04C224.14 91.68 222.58 105.32 221.02 118.97Z"
				fill={ `${ s }` }
			/>
		</svg>
	);
};

export default function BadgeCssandAdv( badge ) {
	let badgeIcon = '';
	let badgeIconOne = '';
	let badgeIconTwo = '';
	let bdgeAdvanced = '';
	let badgeTimerDiv = '';
	let badgeTimerCont = '';
	let TimerDate = '';
	let Label = '';

	switch ( badge.badgeStyles ) {
		case 'badge1':
			badgeIcon = `background: ${ badge.badgeColor };
			top: 0px;
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right: ${ badge.badgePositionX == 'right' ? '0px' : '' };
            height: ${ badge.heightBadge }px;
			width: ${ badge.widthBadge }px;
			position: absolute;
			opacity: ${ badge.opacity };
			text-align: center;
            text-shadow: none;
			`;
			break;
		case 'badge2':
			badgeIcon = `
			text-align: center;
			display: inline-block;
			position: absolute;
			opacity: ${ badge.opacity };
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right: ${ badge.badgePositionX == 'right' ? '0px' : '' };
			top: 0px;
			height: ${ badge.heightBadge }px;
			width: ${ badge.widthBadge }px;
			background:  ${ badge.badgeColor };
			border-radius: 3px;
			&::before {
				border-left-color: transparent !important;
				display: inline-block;
				content: '';
				position: absolute;
				right: ${ badge.badgePositionX == 'right' ? 'auto' : '-20px' };
				left: ${ badge.badgePositionX == 'right' ? '-20px' : '' };
				top: 0;
				border: 9px solid transparent;
				border-width: 15px 15px;
				border-color: ${ badge.badgeColor };
				transform: ${
					badge.badgePositionX == 'right'
						? 'rotate(0)'
						: 'rotate(180deg)'
				};
			}
		`;
			break;
		case 'badge3':
			badgeIcon = `
			position: absolute;
			background: ${ badge.badgeColor };
			text-align: center;
			border-radius: 3px;
			opacity: ${ badge.opacity };
			top: 0px;
			left: 0px;
            height:  ${ badge.heightBadge }px;
			width: ${ badge.widthBadge }px;
			line-height: 30px;
			color: #fff;
			&::after {
				content: '';
				position: absolute;
				bottom: 0px;
				transform: ${
					badge.badgePositionX == 'right'
						? 'skew( -1055deg )'
						: 'skew( -15deg )'
				};
				right: ${ badge.badgePositionX == 'right' ? 'auto' : '-10px' };
				left: ${ badge.badgePositionX == 'right' ? '-10px' : '' };
				width: 20px;
				height: 100%;
				background: ${ badge.badgeColor };
				border-radius: ${
					badge.badgePositionX == 'right'
						? '3px 0px 0px 3px'
						: '0 3px 3px 0'
				};
			}
		`;
			break;
		case 'badge4':
			badgeIcon = `
			border-radius: 3px;
			padding: 0px 15px;
			position: absolute;
			opacity: ${ badge.opacity };
			display: inline-block;
			background: ${ badge.badgeColor };
			top: 0px;
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right: ${ badge.badgePositionX == 'right' ? '0px' : '' };
			height:  ${ badge.heightBadge }px;
			width: ${ badge.widthBadge }px;
			line-height: 30px;
			box-sizing: border-box;
			border-bottom-right-radius: '1px !important';
			border-top-right-radius: '1px !important';
			&::before {
				position: absolute;
				right: ${ badge.badgePositionX == 'right' ? 'auto' : '-14px' };
				left: ${ badge.badgePositionX == 'right' ? '-14px' : '' };
				top: 0px;
				border-top-left-radius: ${ badge.badgePositionX == 'right' ? '0px' : '1px' };
				border-bottom-left-radius: ${ badge.badgePositionX == 'right' ? '0px' : '1px' };
				border-top-right-radius: ${ badge.badgePositionX == 'right' ? '1px' : '' };
				border-bottom-right-radius: ${ badge.badgePositionX == 'right' ? '1px' : '' };
				content: '';
				display: block;
				width: 0;
				height: 0;
				border-top: 15px solid transparent;
				border-left: ${
					badge.badgePositionX == 'right'
						? 'none'
						: `15px solid ${ badge.badgeColor }`
				};
				border-bottom: 15px solid transparent;
				border-right: ${
					badge.badgePositionX == 'right'
						? `15px solid ${ badge.badgeColor }`
						: ''
				};
			}
			&::after {
				display: block;
				content: '';
				position: absolute;
				background: #ffffff;
				width: 7px;
				height: 7px;
				border-radius: 10px;
				right: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
				left: ${ badge.badgePositionX == 'right' ? '0px' : '' };
				top: calc( 100% / 2 - 4px );
			}
		`;
			break;
		case 'badge5':
			badgeIcon = `
				position: absolute;
				display: block;
				width: ${ badge.widthBadge }px;
				height: ${ badge.widthBadge }px;
				text-align: center;
				opacity: ${ badge.opacity };
				overflow: hidden;
				z-index: 10;
				transform: ${
					( badge.badgePositionY == 'bottom' &&
						badge.badgePositionX == 'left' &&
						`rotateZ(270deg) !important` ) ||
					( badge.badgePositionY == 'bottom' &&
						badge.badgePositionX == 'right' &&
						`rotateZ(90deg) !important` )
				};
			`;
			badgeIconOne = `
				background: ${ badge.badgeColor };
				position: absolute;
				text-align: center;
				z-index: 12;
				transform:${
					badge.badgePositionX == 'right'
						? 'rotate(45deg)'
						: `rotate(315deg)`
				} ;
				width: ${ badge.widthBadge * 1.5 }px;
				left: ${
					badge.badgePositionX == 'right'
						? ''
						: `-${ badge.widthBadge / 2.4 }px`
				};
				right: ${
					badge.badgePositionX == 'right'
						? `-${ badge.widthBadge / 2.22 }px`
						: ''
				};
				top: ${ badge.widthBadge / 7 }px ;

			`;
			break;
		case 'badge6':
			badgeIcon = `
			position: absolute;
			height: ${ badge.widthBadge }px;
			margin: 0;
			padding: 0;
			opacity: ${ badge.opacity };
			text-align: center;
			top: 0px;
			right: ${ badge.badgePositionX == 'right' ? '0px' : 'auto' };
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			width: ${ badge.widthBadge }px;
			font-weight: 400;
			border-radius: 0;
			box-sizing: border-box;
			transform: ${
				( badge.badgePositionY == 'bottom' &&
					badge.badgePositionX == 'left' &&
					`rotateZ(270deg) !important` ) ||
				( badge.badgePositionY == 'bottom' &&
					badge.badgePositionX == 'right' &&
					`rotateZ(90deg) !important` )
			};


		`;
			badgeIconOne = `
			position: absolute;
			z-index: 14;
			top: 4.02px;
			transform: ${
				badge.badgePositionX == 'right'
					? 'rotate(45deg)'
					: 'rotate(315deg)'
			} ;
			width: ${ badge.widthBadge * 1.5 }px !important;
			text-align: center;
			display: block;
			left: ${ badge.badgePositionX == 'right' ? '0px' : 'auto' };
			right: ${ badge.badgePositionX == 'right' ? '' : '0px' };
		`;
			badgeIconTwo = `width: 0;
		    height: 0;
		    border-right:${
				badge.badgePositionX == 'right'
					? `${ badge.widthBadge }px solid ${ badge.badgeColor }`
					: 'none'
			} ;
		    border-bottom:${ badge.widthBadge }px solid transparent;
			border-left:${
				badge.badgePositionX == 'right'
					? ''
					: `${ badge.widthBadge }px solid  ${ badge.badgeColor }`
			} ;
		    z-index: 12;
		    display: block;`;
			break;
		case 'badge7':
			badgeIcon = `
			background: ${ badge.badgeColor };
			position: absolute;
			z-index: 99;
			top: 0px;
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right:${ badge.badgePositionX == 'right' ? '0px' : '' };
			height: ${ badge.widthBadge }px;
			width: ${ badge.widthBadge }px;
			border-radius: 3px;
			text-align: center;`;
			badgeIconOne = `
			transform: translateY(-50%);
			position: relative;
			line-height: 16px;
			top: 50%;
			z-index: 1;
			display: block;
			`;
			break;
		case 'badge8':
			badgeIcon = `
			background: ${ badge.badgeColor };
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right:${ badge.badgePositionX == 'right' ? '0px' : '' };
			height: ${ badge.widthBadge }px;
			width: ${ badge.widthBadge }px;
            position: absolute;
            z-index: 99;
            top: 0px;
            left: 0px;
            border-radius: 50% !important;
            text-align: center;`;
			badgeIconOne = `
			transform: translateY(-50%);
			position: relative;
			line-height: 16px;
			top: 50%;
			z-index: 1;
			display: block;
			`;
			break;
		case 'badge9':
			badgeIcon = `
			display: block;
			height: ${ badge.widthBadge / 1.66 }px !important;
			width: ${ badge.widthBadge }px;
			background: ${ badge.badgeColor };
			position: absolute;
			z-index: 1;
			opacity: ${ badge.opacity };
			top: 0px;
			left: 0px;
			transform: translate3d(0, 0, 0);
			border-top-right-radius: 3px;
			border-top-left-radius: 3px;
			text-align: center;
			&::after {
			border-top: ${ badge.widthBadge / 4 }px solid ${ badge.badgeColor } !important;
			border-right: ${ badge.widthBadge / 2 }px solid transparent !important;
			border-left: ${ badge.widthBadge / 2 }px solid transparent !important;
			top: ${ badge.widthBadge / 1.66 }px !important;
			content: "";
			width: 0;
			height: 0;
			position: absolute;
			left: 0;
			}
			`;
			badgeIconOne = `
			transform: translateY(-50%);
			position: relative;
			line-height: 16px;
			top: 50%;
			z-index: 1;
			display: block;
			`;
			break;
		case 'badge10':
			badgeIcon = `
			display: block;
			height: ${ badge.widthBadge / 1.083 }px !important;
			width: ${ badge.widthBadge }px;
			background: ${ badge.badgeColor };
			position: absolute;
			z-index: 1;
			opacity: ${ badge.opacity };
			top: 0px;
			left: 0px;
			text-align: center;
			border-radius: 3px 3px ${ badge.widthBadge / 2.38 }px ${
				badge.widthBadge / 2.38
			}px !important;
			`;
			badgeIconOne = `
			transform: translateY(-50%);
			position: relative;
			line-height: 16px;
			top: 50%;
			z-index: 1;
			display: block;
			`;
			break;
		case 'badge11':
			badgeIcon = `
			display: block;
			height: ${ badge.heightBadge }px;
			width: 100%;
			background: ${ badge.badgeColor };
			position: absolute;
			z-index: 1;
			top: 0px;
			left: 0px;
			line-height: 30px;
			vertical-align: middle;
			text-align: center;
			text-shadow: none;
			border-radius: 0px;
			`;
			badgeIconOne = `
			transform: translateY(-50%);
			position: relative;
			line-height: 16px;
			top: 50%;
			z-index: 1;
			display: block;
			`;
			break;
		case 'badge12':
			badgeIcon = `
			display: inline-block;
			padding: 0px 7px;
			text-align: center;
			position: relative;
			font-size: 14px;
			font-weight: 400;
			opacity: ${ badge.opacity };
			background: ${ badge.badgeColor };
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '12px' };
			right: ${ badge.badgePositionX == 'right' ? '12px' : 'auto' };
			height:  30px !important;
			width: ${ badge.widthBadge }px;
			line-height: 30px !important;
			transform: rotate(-20deg) skew(-20deg, 10deg) !important;
			top:${ badge.badgePositionY == 'bottom' ? 'auto' : '15px' } ;
			bottom:${ badge.badgePositionY == 'bottom' ? '15px' : '' } ;
			&::before {
				content: "";
                width: 0;
                height: 27px;
                display: block;
				position: absolute;
                border-style: solid;
                border-width: 5px;
                z-index: -1;
				background: ${ badge.badgeColor } !important;
                border-color: ${ badge.badgeColor } !important;
				transform: translateZ(-10px) !important;
				left: -7px;
                top: 8px;
			}
			&::after {
				right: -5px;
				top: -5px;
				content: "";
				width: 0;
				height: 26px;
				display: block;
				position: absolute;
				border-style: solid;
				border-width: 5px;
				z-index: -1;
				transform: translateZ(-10px) !important;
				background: ${ badge.badgeColor } !important;
                border-color: ${ badge.badgeColor } !important;
			}
		`;
			break;
		case 'badge13':
			badgeIcon = `
			text-align: center;
			display: inline-block;
			position: absolute;
			opacity: ${ badge.opacity };
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right: ${ badge.badgePositionX == 'right' ? '0px' : '' };
			line-height: ${ badge.lineHeightText * 1.66 }px !important;
			top: 0px;
			height: ${ badge.heightBadge * 1.5 }px;
			width: ${ badge.widthBadge }px;
			background:  ${ badge.badgeColor };
			border-radius: 3px;
			&::before {
				border-left-color: transparent !important;
				display: inline-block;
				content: '';
				position: absolute;
				top:${ badge.heightBadge * 1.47 }px;
				border: 9px solid transparent;
				right: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
				left: ${ badge.badgePositionX == 'right' ? '0px' : '0px' };
				border-width: 25px 25px;
				z-index:-1;
				border-color: ${ badge.badgeColor };
				transform: ${
					badge.badgePositionX == 'right'
						? 'rotate(270deg)'
						: 'rotate(270deg)'
				};
				};
			}
		`;
			break;
		default:
			badgeIcon = `padding: 0 15px;
			top: 0px;
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right: ${ badge.badgePositionX == 'right' ? '0px' : '' };
			height: ${ badge.heightBadge }px;
			width: ${ badge.widthBadge }px;
			opacity: ${ badge.opacity };
			background: ${ badge.badgeColor };`;
	}

	switch ( badge.badgeAdv ) {
		case 'bdgAdvanced1':
			bdgeAdvanced = (
				<svg
					className="asnp-esb-svg1"
					width="94"
					height="101"
					viewBox="0 0 94 101"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M85.0357 7.89259C63.8562 14.5349 46.91 0 46.91 0C46.91 0 29.9638 14.5349 8.78433 7.89259C-2.00019 18.2728 -12.0121 76.002 46.91 100.09C105.826 76.002 95.8137 18.2728 85.0357 7.89259Z"
						fill={ `${ badge.mainBg }` }
					/>
					<path
						d="M46.91 93.5128C19.4455 81.4656 10.4011 62.1704 7.68057 47.9156C4.92114 33.4523 7.95327 20.5845 11.1672 14.7628C14.1019 15.3749 17.0886 15.6875 20.0818 15.6875C20.0818 15.6875 20.0818 15.6875 20.0883 15.6875C32.1194 15.6875 41.8067 10.7318 46.91 7.44326C52.0133 10.7318 61.7006 15.6875 73.7317 15.6875C76.7249 15.6875 79.7116 15.3749 82.6463 14.7628C85.8603 20.5845 88.8924 33.4458 86.1329 47.9156C83.419 62.1704 74.3745 81.4721 46.91 93.5128Z"
						stroke="#EBEBEB"
						strokeWidth="4"
						strokeMiterlimit="10"
					/>
				</svg>
			);
			badgeIconOne = `
			position: relative;
            letter-spacing: 0.52px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            text-align: center;
            font-size: 14px;
			opacity: ${ badge.opacityImg };
	        top:${ badge.badgePositionY == 'bottom' ? '36px' : '23px' } ;
			left: ${ badge.badgePositionX == 'right' ? '5px' : '13px' };
			`;
			badgeIconTwo = `
			background: ${ badge.secondBg };
			display: block;
			padding: 0px 5px;
			z-index: 1;
			width: 72px;
			margin-top:10px;
			line-height: 20px;
			text-transform: uppercase;
			&::before {
				content: '';
				position: absolute;
				width: 0;
				height: 0;
				top: 5px;
				border-width: 10px 6px;
				border-style: solid;
                z-index: -1;
                border-color:${ badge.secondBg } ${ badge.secondBg } ${ badge.secondBg } transparent !important;
				left: -11px;
			}
			&::after {
				content: '';
                position: absolute;
                width: 0;
                height: 0;
                top: 5px;
	            right: -11px;
                border-width: 10px 6px;
                border-style: solid;
                border-color:${ badge.secondBg } transparent ${ badge.secondBg } ${ badge.secondBg }  !important;
			`;
			break;
		case 'bdgAdvanced2':
			bdgeAdvanced = SVGADVANCED2( badge.mainBg );
			badgeIconOne = `
			position: relative;
            letter-spacing: 0.52px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            text-align: center;
            font-size: 14px;
			opacity: ${ badge.opacityImg };
			top:${ badge.badgePositionY == 'bottom' ? '36px' : '28px' } ;
			left: ${ badge.badgePositionX == 'right' ? '' : '13px' };
			`;
			badgeIconTwo = `
			background: ${ badge.secondBg };
			display: block;
			padding: 0px 5px;
			z-index: 1;
			height: 22px;
			width: 80px;
			margin-top:5px;
			line-height: 20px;
			text-transform: uppercase;
			&::before {
				content: '';
				position: absolute;
				width: 0;
				height: 0;
				top: 0px;
				border-width: 10px 6px;
				border-style: solid;
                z-index: -1;
                border-color:${ badge.secondBg } ${ badge.secondBg } ${ badge.secondBg } transparent !important;
				left: -11px;
			}
			&::after {
				content: '';
                position: absolute;
                width: 0;
                height: 0;
                top: 0px;
	            right: -11px;
                border-width: 10px 6px;
                border-style: solid;
                border-color:${ badge.secondBg } transparent ${ badge.secondBg } ${ badge.secondBg }  !important;
			`;
			break;
		case 'bdgAdvanced3':
			bdgeAdvanced = SVGADVANCED3( badge.mainBg, badge.secondBg );
			badgeIconOne = `
			position: relative;
            letter-spacing: 0.52px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            text-align: center;
            font-size: 14px;
			opacity: ${ badge.opacityImg };
	        top:${ badge.badgePositionY == 'bottom' ? '30px' : '23px' } ;
			right: ${ badge.badgePositionX == 'right' ? '30px' : '' };
			`;
			badgeIconTwo = `
			display: block;
			padding: 2px 5px;
			z-index: 1;
			height: 30px;
			width: 118px;
			margin-top: 5px;
			line-height: 20px;
			text-transform: uppercase;
			`;
			break;
		case 'bdgAdvanced4':
			bdgeAdvanced = SVGADVANCED4( badge.mainBg, badge.secondBg );
			badgeIconOne = `
			position: relative;
            letter-spacing: 0.52px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            text-align: center;
            font-size: 14px;
			opacity: ${ badge.opacity };
			top:${ badge.badgePositionY == 'bottom' ? '49px' : '42px' } ;
			right: ${ badge.badgePositionX == 'right' ? '30px' : '' };
			`;
			badgeIconTwo = `
			display: block;
			padding-left: 30px;
			padding-top: 2px;
			z-index: 1;
			height: 30px;
			width: 118px;
			line-height: 20px;
			text-transform: uppercase;
			`;
			break;
	}

	switch ( badge.badgeTimer ) {
		case 'timer1':
			badgeTimerDiv = `
			display: grid;
			height: 59px;
			gap: 5px;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			color: ${ badge.textColor };
			opacity: ${ badge.opacity };
			background: ${ badge.bgColorTimer };
			border-radius: 10px;
			`;
			badgeTimerCont = `
			display: inline-block;
			`;
			TimerDate = `
			display: block;
			font-weight: 700;
			text-shadow: 0px 2px 1px rgba(0,0,0,0.15);
			`;
			Label = `
			display: block;
			font-weight: 400;
			font-size: 10px;
			line-height: 11px;
			text-shadow: 0px 2px 1px rgba(0,0,0,0.15);`;
			break;
		case 'timer2':
			badgeTimerDiv = `
			display: grid;
			gap: 5px;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			color: ${ badge.textColor };
			opacity: ${ badge.opacity };
			`;
			badgeTimerCont = `
			display: inline-block;
			width: 66px;
			border: 2px solid ${ badge.bgColorTimer };
			border-radius: 12px;
			`;
			TimerDate = `
			display: block;
			font-weight: 700;
			text-shadow: 0px 2px 1px rgba(0,0,0,0.15);
			`;
			Label = `
			display: block;
			font-weight: 400;
			font-size: 10px;
			line-height: 11px;
			text-shadow: 0px 2px 1px rgba(0,0,0,0.15);`;
			break;
		case 'timer3':
			badgeTimerDiv = `
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			gap:5px;
			color: ${ badge.textColor };
			opacity: ${ badge.opacity };
			`;
			badgeTimerCont = `
			display: inline-block;
			width: 70px;
			border-radius: 50%;
			background: ${ badge.bgColorTimer };

			`;
			TimerDate = `
			display: block;
			font-weight: 700;
			text-shadow: 0px 2px 1px rgba(0,0,0,0.15);
			`;
			Label = `
			display: block;
			font-weight: 400;
			font-size: 10px;
			line-height: 11px;
			text-shadow: 0px 2px 1px rgba(0,0,0,0.15);`;
			break;
		case 'timer4':
			badgeTimerDiv = `
			display: grid;
			gap: 5px;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			color: ${ badge.textColor };
			opacity: ${ badge.opacity };
			`;
			badgeTimerCont = `
			display: inline-block;
			width: 70px;
			border: 2px solid ${ badge.bgColorTimer };
			border-radius: 50%;
			`;
			TimerDate = `
			display: block;
			font-weight: 700;
			text-shadow: 0px 2px 1px rgba(0,0,0,0.15);
			`;
			Label = `
			display: block;
			font-weight: 400;
			font-size: 10px;
			line-height: 11px;
			text-shadow: 0px 2px 1px rgba(0,0,0,0.15);`;
			break;
		case 'timer5':
			badgeTimerDiv = `
			display: grid;
			color: ${ badge.textColor };
			opacity: ${ badge.opacity };
			background: ${ badge.bgColorTimer };
			border-radius: 10px;
			`;
			badgeTimerCont = `
			display: inline-block;
			width: 60px;
			`;
			TimerDate = `
			display: block;
			font-weight: 700;
			text-shadow: 0px 2px 1px rgba(0,0,0,0.15);
			`;
			Label = `
			display: block;
			font-weight: 400;
			font-size: 10px;
			line-height: 11px;
			text-shadow: 0px 2px 1px rgba(0,0,0,0.15);`;
			break;
		case 'timer6':
			badgeTimerDiv = `
			display: grid;
			gap: 5px;
			color: ${ badge.textColor };
			opacity: ${ badge.opacity };
			`;
			badgeTimerCont = `
			display: inline-block;
			width: 64px;
			border: 2px solid ${ badge.bgColorTimer };
			border-radius: 10px;
			`;
			TimerDate = `
			display: block;
			font-weight: 700;
			text-shadow: 0px 2px 1px rgba(0,0,0,0.15);
			`;
			Label = `
			display: block;
			font-weight: 400;
			font-size: 10px;
			line-height: 11px;
			text-shadow: 0px 2px 1px rgba(0,0,0,0.15);`;
			break;
		case 'timer7':
			badgeTimerDiv = `
			display: grid;
			gap: 5px;
			color: ${ badge.textColor };
			opacity: ${ badge.opacity };
			`;
			badgeTimerCont = `
			display: inline-block;
			width: 70px;
			background: ${ badge.bgColorTimer };
			border-radius: 50%;
			`;
			TimerDate = `
			display: block;
			font-weight: 700;
			text-shadow: 0px 2px 1px rgba(0,0,0,0.15);
			`;
			Label = `
			display: block;
			font-weight: 400;
			font-size: 10px;
			line-height: 11px;
			text-shadow: 0px 2px 1px rgba(0,0,0,0.15);`;
			break;
		case 'timer8':
			badgeTimerDiv = `
			display: grid;
			gap: 5px;
			color: ${ badge.textColor };
			opacity: ${ badge.opacity };
			`;
			badgeTimerCont = `
			display: inline-block;
			width: 70px;
			border: 2px solid ${ badge.bgColorTimer };
			border-radius: 50%;
			`;
			TimerDate = `
			display: block;
			font-weight: 700;
			text-shadow: 0px 2px 1px rgba(0,0,0,0.15);
			`;
			Label = `
			display: block;
			font-weight: 400;
			font-size: 10px;
			line-height: 11px;
			text-shadow: 0px 2px 1px rgba(0,0,0,0.15);`;
			break;
		default:
			badgeTimerDiv = '';
			badgeTimerCont = '';
			TimerDate = '';
			Label = '';
	}

	return {
		badgeIcon,
		badgeIconOne,
		badgeIconTwo,
		bdgeAdvanced,
		badgeTimerDiv,
		badgeTimerCont,
		TimerDate,
		Label,
	};
}
