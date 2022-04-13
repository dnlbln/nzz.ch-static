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

    const ld_json = fs.readFileSync(path.resolve(__dirname, 'ld.1338084.json'), 'utf8');



    const script_test = fs.readFileSync(path.resolve(__dirname, 'test.js'), 'utf8');


    const script_nzz_c1_actions = fs.readFileSync(path.resolve(__dirname, 'nzz-c1-actions.js'), 'utf8');


    const script_6fb875f = fs.readFileSync(path.resolve(__dirname, '6fb875f.js'), 'utf8');

    const script_206a3b5 = fs.readFileSync(path.resolve(__dirname, '206a3b5.js'), 'utf8');
    const script_4659875 = fs.readFileSync(path.resolve(__dirname, '4659875.js'), 'utf8');

    const script_015f035 = fs.readFileSync(path.resolve(__dirname, '015f035.js'), 'utf8');
    const script_0a8c009 = fs.readFileSync(path.resolve(__dirname, '0a8c009.js'), 'utf8');

    const script_ca04e0f = fs.readFileSync(path.resolve(__dirname, 'ca04e0f.js'), 'utf8');

    const script_cb255c7 = fs.readFileSync(path.resolve(__dirname, 'cb255c7.js'), 'utf8');
    const script_e59fb72 = fs.readFileSync(path.resolve(__dirname, 'e59fb72.js'), 'utf8');
    const script_173335a = fs.readFileSync(path.resolve(__dirname, '173335a.js'), 'utf8');
    const script_132c346 = fs.readFileSync(path.resolve(__dirname, '132c346.js'), 'utf8');
    const script_48c8d47 = fs.readFileSync(path.resolve(__dirname, '48c8d47.js'), 'utf8');

    const script_725692d = fs.readFileSync(path.resolve(__dirname, '725692d.js'), 'utf8');


    const scripts = script_test +
        script_6fb875f +
        script_206a3b5 +
        script_4659875 +
        script_015f035 +
        script_0a8c009 +
        script_ca04e0f +
        script_cb255c7 +
        script_e59fb72 +
        script_173335a +
        script_132c346 +
        script_48c8d47 +
        script_725692d;

    // Set the fonts in the css file.
    nzzCSS = nzzCSS.replace('${NZZ_FONTS}', nzzFonts);


    // Set the css in the HTML.
    html = html.replace('${NZZ_CSS}', nzzCSS);

    html = html.replace('${LD_JSON}', ld_json);

    html = html.replace('${NZZ_C1_ACTIONS}', script_nzz_c1_actions);

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

    html = html.replace('{SCRIPTS}', scripts);

    return html;
}

module.exports = {
    getHtml
};
