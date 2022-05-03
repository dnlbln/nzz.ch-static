const fs = require('fs');
const path = require('path');

let html = '';

function getHtml(options = {}) {
    const {
        author,
        title,
        lead,
        content,
    } = options;

    loadInitialHtml(options);

    // Must come after loading initial HTML.
    setNormalHeader();
    setArticleTitle(title);
    setAuthor(author);
    setTopMaxiBoard();
    setHeaderCustomClasses();

    html = html.replace('${ARTICLE_LAYOUT_CLASS}', 'layout--regular');
    html = html.replace('${BODY_CLASS}', 'regular');
    html = html.replace('${LEAD}', lead || '');
    html = html.replace('${CONTENT}', content || '');

    return html;
}

function getLongFormVisualHtml(options = {}) {
    const {
        author,
        title,
        lead,
        content,
    } = options;

    loadInitialHtml(options);

    // Must come after loading initial HTML.
    setLongFormArticleHeader();
    setArticleTitle(title);
    setAuthor(author);

    setTopMaxiBoard('');
    setHeaderCustomClasses('header__stay-on-top--visual');

    html = html.replace('${BODY_CLASS}', 'longformvisual');
    html = html.replace('${ARTICLE_LAYOUT_CLASS}', 'layout--longformvisual');
    html = html.replace('${LEAD}', lead || '');
    html = html.replace('${CONTENT}', content || '');

    return html;
}

module.exports = {
    getHtml,
    getLongFormVisualHtml,
};


function loadInitialHtml(options = {}) {
    html = fs.readFileSync(path.resolve(__dirname, 'nzz.ch.html'), 'utf8');

    replaceNzzCSS();
    replaceExternalCustomCssLinks(options);
    replaceExternalCustomRawCss(options);
}

function replaceExternalCustomRawCss(options = {}) {
    html = html.replace('${EXTERNAL_CUSTOM_RAW_CSS}', options.customCssRaw || '');
}

function replaceExternalCustomCssLinks(options = {}) {
    html = html.replace('${EXTERNAL_CUSTOM_CSS_LINKS}', options.customCssLinks || '');
}

function replaceNzzCSS() {
    const nzzFonts = fs.readFileSync(path.resolve(__dirname, 'nzz.ch-fonts.css'), 'utf8');
    const customCSS = fs.readFileSync(path.resolve(__dirname, 'nzz.ch-custom.css'), 'utf8');
    let nzzCSS = fs.readFileSync(path.resolve(__dirname, 'nzz.ch.css'), 'utf8');

    // Set the fonts in the css file.
    nzzCSS = nzzCSS.replace('${NZZ_FONTS}', nzzFonts);

    // Set the css in the HTML.
    html = html.replace('${NZZ_CSS}', nzzCSS);
    html = html.replace('${CUSTOM_CSS}', customCSS);
}

function setNormalHeader() {
    const header = fs.readFileSync(path.resolve(__dirname, 'normal-headline.html'), 'utf8');
    html = html.replace('${ARTICLE_HEADER}', header);
}

function setLongFormArticleHeader() {
    const header = fs.readFileSync(path.resolve(__dirname, 'longform-header.html'), 'utf8');
    html = html.replace('${ARTICLE_HEADER}', header);
}

function setArticleTitle(title) {
    if (title) {
        html = html.replaceAll('${TITLE}', title);
    }
}

function setAuthor(author) {
    if (author) {
        html = html.replaceAll('${AUTHOR}', author);
    }
}

function setTopMaxiBoard(custom) {
    let maxiBoardHtml = '';

    if (typeof custom === 'string') {
        maxiBoardHtml = custom;
    } else {
        maxiBoardHtml = fs.readFileSync(path.resolve(__dirname, 'top-maxiboard.html'), 'utf8');
    }

    html = html.replaceAll('${TOP_MAXIBOARD}', maxiBoardHtml);
}

function setHeaderCustomClasses(classes = '') {
    html = html.replaceAll('${HEADER_CUSTOM_CLASSES}', classes);
}



