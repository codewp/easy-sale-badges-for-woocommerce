#!/bin/sh

# Check for required version
WPCLI_VERSION=`wp cli version | cut -f2 -d' '`
if [ ${WPCLI_VERSION:0:1} -lt "2" -o ${WPCLI_VERSION:0:1} -eq "2" -a ${WPCLI_VERSION:2:1} -lt "1" ]; then
	echo WP-CLI version 2.1.0 or greater is required to make JSON translation files
	exit
fi

# Make the JSON files
wp i18n make-pot ./ languages/asnp-easy-sale-badge.pot --exclude=assets/js/dev/*,build/*
# Make admin script json file.
echo "Generating translation json files..."
cp ./languages/asnp-easy-sale-badge.pot ./languages/asnp-easy-sale-badge.po
wp i18n make-json languages --no-purge
rm ./languages/asnp-easy-sale-badge.po
