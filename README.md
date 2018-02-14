# rating-bar
Angular component for rating functionality

{
    "compilerOptions": {
        // Formato o tipo de modulos que se utilizan en el código.
        "module": "es2015",
        // Algoritmo utilizado para la resolución de modulos dependencias (import).
        "moduleResolution": "node",
        // Opciones para considerar como válidos la utilización de decoradores: @Module, @Component, etc...
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        // Evita utilizar variables sin tipo, en dado caso que se desee utilizar sin tipo se tendrá que indicar como tipo "any".
        "noImplicitAny": true,
        // Indica que se generarán los correspondientes archivos de definición de tipos: .d.ts
        "declaration": true,
        // Versión de javascript en la que se compilará el código typescript.
        "target": "es5",
        // Directorio de destino de la compilación.
        "outDir": "dist",
        // Para incluir en la compilación ciertas funciones u operadores.
        "lib": [
            "es2015", // Map, Promise, ...
            "dom" // Console, Node
        ]
    },
    // Archivos a compilar.
    "files": [
        // En éste caso con indicar el archivo principal todos los archivos utilizados se compilarán.
        "index.ts"
    ],
    "angularCompilerOptions": {
        // Se requieren para compilación AOT en la implementación de la librería (cliente).
        "strictMetadataEmit": true,
        // Evita generar los archivos .ngfactory.ts
        "skipTemplateCodegen": true,
        // Evita generar los archivos .ngsummary.json
        "enableSummariesForJit": false
    }
}