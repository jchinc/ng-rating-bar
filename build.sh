rm -rf tmp
rm -rf dist
rm -rf build

# VARIABLES
# Transpila a javascript mediandte NGC. En windows no funciona ./node_modules/.bin/ngc
# Se tiene 2 opciones:
#   1.- Utilizar la ruta origen del NGC: ./node_modules/@angular/compiler-cli/src/main.js
#       NGC="node ./node_modules/@angular/compiler-cli/src/main.js"
#   2.- NO utilizar el comando "node" sino sólo ./node_modules/.bin/ngc directamente.
#       NGC="./node_modules/.bin/ngc"
NGC="node ./node_modules/@angular/compiler-cli/src/main.js"
#rsync -a --exclude=*.js build/ dist
# Copia los archivos de definición. Para windows no se tiene nativamente el comando rsync
GULP="node ./node_modules/gulp/bin/gulp.js"
# Bundler
ROLLUP="node ./node_modules/rollup/bin/rollup"

$GULP copy-ts
$GULP transpile-inline

$NGC -p ./tsconfig-esm2015.json
$ROLLUP -c rollup-esm2015.conf.js

# Copia el archivo package.json que formará parte de las fuentes a distribuir.
#cp ./src/package.json ./dist/package.json