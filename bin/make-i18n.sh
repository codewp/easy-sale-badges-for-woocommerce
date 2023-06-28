#!/usr/bin/env bash

# Check for required version
WPCLI_VERSION=`wp cli version | cut -f2 -d' '`
if [ ${WPCLI_VERSION:0:1} -lt "2" -o ${WPCLI_VERSION:0:1} -eq "2" -a ${WPCLI_VERSION:2:1} -lt "1" ]; then
	echo WP-CLI version 2.1.0 or greater is required to make JSON translation files
	exit
fi

# Make the JSON files
wp i18n make-pot ./ languages/asnp-easy-whatsapp.pot
# Make admin script json file.
echo "Generating admin translation json file..."
wp i18n make-pot ./assets/js/admin/admin/ languages/pot-file.pot --include="index.js" --domain=asnp-easy-whatsapp
cp ./languages/pot-file.pot ./languages/po-file.po
wp i18n make-json languages --no-purge
cp ./languages/po-file-*.json ./languages/asnp-easy-whatsapp-locale-asnp-whatsapp-admin.json
rm ./languages/po-file*.po && rm ./languages/pot-file*.pot && rm ./languages/po-file*.json
# Make whatsapp script json file.
echo "Generating whatsapp translation json file..."
wp i18n make-pot ./assets/js/whatsapp/ languages/pot-file.pot --include="index.js" --domain=asnp-easy-whatsapp
cp ./languages/pot-file.pot ./languages/po-file.po
wp i18n make-json languages --no-purge
cp ./languages/po-file-*.json ./languages/asnp-easy-whatsapp-locale-asnp-easy-whatsapp.json
rm ./languages/po-file*.po && rm ./languages/pot-file*.pot && rm ./languages/po-file*.json
