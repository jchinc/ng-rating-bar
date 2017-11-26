import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'dist/index.js',
    output: {
        file: 'dist/bundles/ng-rating-bar.umd.js',
        name: 'ng.rating.bar',
        format: 'umd',
        sourcemap: true,
        globals: {
            '@angular/core': 'ng.core',
            'rxjs/Subject': 'Rx'
        }
    },
    plugins: [
        resolve(
            { modulesOnly: true}
        )
    ]
}