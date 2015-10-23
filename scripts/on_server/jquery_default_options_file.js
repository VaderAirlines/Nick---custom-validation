//default functions
function jQueryDefaultOptions () {};

jQueryDefaultOptions.prototype.getOptionValue = function() {
    return "ik ben default";
};

// default function instance -> can be overridden in jquery_custom_options.js
var customOptions = new jQueryDefaultOptions();