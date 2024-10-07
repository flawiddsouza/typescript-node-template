import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylisticJs from '@stylistic/eslint-plugin-js'

export default [
    {
        plugins: {
            '@stylistic/js': stylisticJs
        }
    },
    {
        files: [
            '**/*.{js,mjs,cjs,ts}'
        ]
    },
    {
        languageOptions: {
            globals: globals.node
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            '@stylistic/js/indent': ['error', 4],
            '@stylistic/js/quotes': ['error', 'single'],
        }
    }
]
