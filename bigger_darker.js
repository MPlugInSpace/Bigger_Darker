(function() {
    // Make style element
    var style = document.createElement('style');
    // Make it text/css
    style.type = 'text/css';
    // Rules to add to css
    var css = "* {font-size: 103% !important;} .tblData {color: black !important;} th {color: black !important;}"

    // Cross browser add css to style element
    if (style.styleSheet) {
        // IE
        style.styleSheet.cssText = css;
    } else {
        // Other browsers
        style.innerHTML = css;
    }

    document.getElementsByTagName("head")[0].appendChild(style);
})();
