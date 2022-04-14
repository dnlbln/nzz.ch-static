const fs = require('fs');
const path = require('path');

let html = '';

function getHtml(options = {}) {
    const {
        author,
        title,
        lead,
        content,
        customCSS,
    } = options;

    html = loadInitialHtml();

    replaceNzzCSS();

    html = html.replace('${CUSTOM_CSS}', customCSS);

    setNormalHeader();
    setArticleTitle(title);
    setTopMaxiBoard();
    setHeaderCustomClasses();
    if (lead) {
        html = html.replace('${LEAD}', lead);
    }

    if (content) {
        html = html.replace('${CONTENT}', content);
    }

    return html;
}


function getLongFormVisualHtml(options = {}) {
    const {
        author,
        title,
        lead,
        content,
        customCSS,
    } = options;

    // Read out the website html.
    html = loadInitialHtml();
    replaceNzzCSS();

    html = html.replace('${CUSTOM_CSS}', customCSS);

    setLongFormArticleHeader();
    setArticleTitle(title);
    setAuthor(author);

    setTopMaxiBoard('');
    setHeaderCustomClasses('header__stay-on-top--visual');

    if (lead) {
        html = html.replace('${LEAD}', lead);
    }

    if (content) {
        html = html.replace('${CONTENT}', content);
    }

    return html;
}

module.exports = {
    getHtml,
    getLongFormVisualHtml,
};


function loadInitialHtml() {
    return fs.readFileSync(path.resolve(__dirname, 'nzz.ch.html'), 'utf8');
}

function replaceNzzCSS() {
    const nzzFonts = fs.readFileSync(path.resolve(__dirname, 'nzz.ch-fonts.css'), 'utf8');
    const cssOverrides = fs.readFileSync(path.resolve(__dirname, 'nzz.ch-overrides.css'), 'utf8');
    let nzzCSS = fs.readFileSync(path.resolve(__dirname, 'nzz.ch.css'), 'utf8');

    // Set the fonts in the css file.
    nzzCSS = nzzCSS.replace('${NZZ_FONTS}', nzzFonts);
    nzzCSS = nzzCSS.replace('${OVERRIDES}', cssOverrides);

    // Set the css in the HTML.
    html = html.replace('${NZZ_CSS}', nzzCSS);
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



