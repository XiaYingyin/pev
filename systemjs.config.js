System.config({
    transpiler: 'typescript',
    typescriptOptions: {
        emitDecoratorMetadata: true,
        target: "ES5",
        module: "commonjs"
    },
    map: {
        '@angular': 'node_modules/@angular',
        'rxjs'    : 'node_modules/rxjs',
        'lodash': 'node_modules/lodash',
        'moment': 'node_modules/moment',
        'highlight.js': 'node_modules/highlight.js/lib/'
    },
    paths: {
        'node_modules/@angular/*': 'node_modules/@angular/*/bundles'
    },
    meta: {
        '@angular/*': {'format': 'cjs'},
        'typescript': {"exports": "ts"}
    },
    packages: {
        'app'                              : {main: 'main', defaultExtension: 'ts'},
        'rxjs'                             : {main: 'Rx'},
        '@angular/core'                    : {main: 'core.umd.min.js'},
        '@angular/common'                  : {main: 'common.umd.min.js'},
        '@angular/compiler'                : {main: 'compiler.umd.min.js'},
        '@angular/router'                  : {main: 'router.umd.min.js'},
        '@angular/forms'                  : {main: 'forms.umd.min.js'},
        '@angular/platform-browser'        : {main: 'platform-browser.umd.min.js'},
        '@angular/platform-browser-dynamic': {main: 'platform-browser-dynamic.umd.min.js'},
        'lodash'                            : {main: 'index.js', defaultExtension:'js'},
        'moment'                             : {main: 'moment.js', defaultExtension: 'js'},
        'highlight.js'                      : {main: 'index.js', defaultExtension: 'js'}
    }
});