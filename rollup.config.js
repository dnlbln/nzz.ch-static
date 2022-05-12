import path from 'path'
import html from '@rollup/plugin-html';
import livereload from 'rollup-plugin-livereload';
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'
import { createContentWidthQElement, createFullwidthQElement, getHtml, createSubtitle, createParagraph  } from './index.js';

// Which nzz layout to use?
const LAYOUT = process.env.LAYOUT;

const builtCssFilename = 'bundle';

function getHtmlOptions() {
    return {
        fileName: 'index.html',
        template: function (options) {
            return getHtml({
                // These 3 options are the most important. Without them the static website will not function.
                layout: LAYOUT, // Type of layout.
                builtCssFilename, // Name of built js file. Will be appended at the end of the body tag.
                builtJsFilename: options.files.js[0].fileName, // Name of the built css file. Will be the last included css file in the head.
                content: `
                    ${createSubtitle('Test Subtitle')}
                    ${createParagraph('Test paragraph')}
                    ${createFullwidthQElement('test-id')}
                    ${createContentWidthQElement('test-id-2')}
                `,

                // Other options.
                author: 'Max Musterman',
                lead: 'Test lead.',
                title: 'Test title',

                customCssLinks: [
                    'https://service.sophie.nzz.ch/bundle/sophie-q@^1,sophie-input@^1,sophie-font@^1,sophie-color@^1,sophie-viz-color@^1,sophie-legend@^1.css',
                ],

                // Will be appended at the end of the body, but before the built js file for the app.
                customJsLinks: [
                    'https://cdn.polyfill.io/v2/polyfill.min.js?features=Map,URL,Promise,fetch,URLSearchParams,Array.prototype.find,Array.prototype.findIndex,Object.entries,Array.prototype.includes,CustomEvent,Array.from,String.prototype.startsWith&flags=gated&unknown=polyfill'
                ],
            });
        },
    };
}

export default {
    input: 'test/test.js',
    output: {
        sourcemap: false,
        format: 'iife',
        name: `test.App`,
        file: `build-test/bundle.js`,
    },
    plugins: [
        del({ targets: 'build-test/*' }),

        {
            name: 'watch-external',
            buildStart() {
                this.addWatchFile(path.resolve(__dirname, 'test/test.css'))
            }
        },

        copy({
            targets: [
                { src: 'test/test.css', dest: 'build-test/', rename: 'bundle.css' },
            ]
        }),

        // Generate the index.html file.
        html(getHtmlOptions()),

        livereload({watch: ['build-test', 'src/**/*', 'test/**/*']}),
    ],
    watch: {
        clearScreen: false,
    },
    onwarn: function (warning, warn) {
        if (warning.code === 'CIRCULAR_DEPENDENCY') return;
        warn(warning);
    },
};
