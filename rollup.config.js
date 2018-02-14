export default {
    input: 'build/index.js',
    output: {
        file: 'dist/bundles/ng-rating-bar.umd.js',
        name: 'ratingBar',
        format: 'umd',
        sourcemap: true,
        // Librerías externas que se usan en la librería.
        globals: {
            '@angular/core': 'ng.core'
        }
    },
    // Para evitar que las librerías externas utilizadas se intenten compilar como parte de la librería.
    // Considerarlos tal cual, como externas.
    external: [
        '@angular/core'
    ]
}