const fs = require('fs');
const path = require('path');

function getHtml(options = {}) {
    const {
        title,
        lead,
        content,
        customCSS,
    } = options;

    // Read out the website html.
    let html = fs.readFileSync(path.resolve(__dirname, 'nzz.ch.html'), 'utf8');
    const nzzFonts = fs.readFileSync(path.resolve(__dirname, 'nzz.ch-fonts.css'), 'utf8');
    let nzzCSS = fs.readFileSync(path.resolve(__dirname, 'nzz.ch.css'), 'utf8');

    // Set the fonts in the css file.
    nzzCSS = nzzCSS.replace('${NZZ_FONTS}', nzzFonts);

    // Set the css in the HTML.
    html = html.replace('${NZZ_CSS}', nzzCSS);

    html = html.replace('${CUSTOM_CSS}', customCSS);
    if (title) {
        console.log("Replacing title", title);
        html = html.replaceAll('${TITLE}', title);
    }

    if (lead) {
        html = html.replace('${LEAD}', lead);
    }

    if (content) {
        html = html.replace('${CONTENT}', content);
    }

    return html;
}

module.exports = {
    getHtml
};
