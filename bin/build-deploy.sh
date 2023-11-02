#!/bin/sh

PLUGIN_SLUG="easy-sale-badges-for-woocommerce"
PROJECT_PATH=$(pwd)
BUILD_PATH="${PROJECT_PATH}/build"
DEST_PATH="$BUILD_PATH/$PLUGIN_SLUG"

# echo "Generating build directory..."
# rm -rf "$BUILD_PATH"
# mkdir -p "$DEST_PATH"

echo "Remove vendor directory contents..."
rm -rf "${PROJECT_PATH}/vendor/*"

echo "Installing PHP and JS dependencies..."
npm install
composer install --no-dev || exit "$?"

echo "Running JS Build..."
npm run build || exit "$?"

echo "Generating i18n..."
npm run i18n || exit "$?"

# echo "Syncing files..."
# rsync -rc --exclude-from="$PROJECT_PATH/.distignore" "$PROJECT_PATH/" "$DEST_PATH/" --delete --delete-excluded

echo "Deploy Build done!"
