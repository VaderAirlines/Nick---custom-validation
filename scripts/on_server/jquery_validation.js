// jQuery mockup
var jQueryMockup = {
    validator: {
        setDefaults: function (options) {
            alert(options.getOptionValue());
        }
    }
};

// jQuery mockup set default options to custom options
jQueryMockup.validator.setDefaults(customOptions);